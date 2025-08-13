/**
 * Simple SMTP Email Server (CommonJS version)
 * 
 * This server handles email sending using your direct SMTP credentials.
 * No external services required - just your email provider.
 */

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('dist'));

/**
 * Email sending endpoint
 */
app.post('/api/send-email', async (req, res) => {
  try {
    const { smtp, to, subject, html, text } = req.body;

    if (!smtp || !to || !subject || (!html && !text)) {
      return res.status(400).json({
        success: false,
        error: 'Missing required email parameters'
      });
    }

    console.log(`📧 Sending email to: ${to}`);
    console.log(`📤 SMTP Host: ${smtp.host}:${smtp.port}`);

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure, // true for 465, false for other ports
      auth: {
        user: smtp.username,
        pass: smtp.password,
      },
      // Additional options for better compatibility
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    // Verify SMTP connection
    console.log('🔄 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Email options
    const mailOptions = {
      from: `"${smtp.fromName || 'UNLOCK Admissions'}" <${smtp.fromEmail || smtp.username}>`,
      to: to,
      subject: subject,
      text: text,
      html: html,
    };

    // Send email
    console.log('📤 Sending email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log('📧 Message ID:', info.messageId);

    res.json({
      success: true,
      messageId: info.messageId,
      response: info.response
    });

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    
    // Provide helpful error messages
    let errorMessage = error.message;
    
    if (error.code === 'EAUTH') {
      errorMessage = 'SMTP Authentication failed. Please check your email and password.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to SMTP server. Please check your host and port.';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Socket error. Please check your internet connection.';
    }

    res.status(500).json({
      success: false,
      error: errorMessage,
      code: error.code
    });
  }
});

/**
 * Test endpoint to verify SMTP configuration
 */
app.post('/api/test-smtp', async (req, res) => {
  try {
    const { smtp } = req.body;

    if (!smtp) {
      return res.status(400).json({
        success: false,
        error: 'SMTP configuration required'
      });
    }

    console.log(`🧪 Testing SMTP connection to: ${smtp.host}:${smtp.port}`);

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.username,
        pass: smtp.password,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    // Test connection
    await transporter.verify();
    
    console.log('✅ SMTP test successful!');

    res.json({
      success: true,
      message: 'SMTP configuration is valid and ready to send emails!'
    });

  } catch (error) {
    console.error('❌ SMTP test failed:', error);
    
    res.status(500).json({
      success: false,
      error: error.message,
      code: error.code,
      suggestions: [
        'Check your email and password',
        'Ensure "Less secure app access" is enabled (Gmail)',
        'Use an App Password instead of your regular password',
        'Verify the SMTP host and port are correct'
      ]
    });
  }
});

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'UNLOCK SMTP Email Server'
  });
});

/**
 * Serve React app for all other routes
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log('🚀 UNLOCK SMTP Email Server started!');
  console.log(`📧 Server running on: http://localhost:${PORT}`);
  console.log(`🔧 API endpoints:`);
  console.log(`   - POST /api/send-email (Send confirmation emails)`);
  console.log(`   - POST /api/test-smtp (Test SMTP configuration)`);
  console.log(`   - GET  /api/health (Health check)`);
  console.log('');
  console.log('📋 Environment variables loaded:');
  console.log(`   SMTP Provider: ${process.env.VITE_SMTP_PROVIDER || 'not set'}`);
  console.log(`   SMTP Username: ${process.env.VITE_SMTP_USERNAME || 'not set'}`);
  console.log(`   SMTP Host: ${process.env.VITE_SMTP_HOST || 'not set'}`);
  console.log('');
});