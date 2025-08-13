#!/usr/bin/env node

/**
 * Quick Test Setup for UNLOCK Application
 * 
 * This script helps you set up and test the email system quickly.
 */

import readline from 'readline';
import fs from 'fs';
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 UNLOCK Application - Quick Email Setup');
console.log('==========================================\n');

console.log('Let\'s set up your email system quickly!\n');

const questions = [
  {
    key: 'provider',
    question: 'Which email provider? (gmail/outlook/yahoo/custom): ',
    default: 'gmail'
  },
  {
    key: 'email',
    question: 'Your email address: ',
    validate: (value) => value.includes('@')
  },
  {
    key: 'password',
    question: 'Your password or app password: ',
    validate: (value) => value.length > 0
  },
  {
    key: 'fromName',
    question: 'From name for emails (default: UNLOCK Admissions): ',
    default: 'UNLOCK Admissions'
  }
];

async function askQuestion(questionObj) {
  return new Promise((resolve) => {
    rl.question(questionObj.question, (answer) => {
      const value = answer.trim() || questionObj.default || '';
      
      if (questionObj.validate && !questionObj.validate(value)) {
        console.log('❌ Invalid input, please try again.');
        askQuestion(questionObj).then(resolve);
      } else {
        resolve(value);
      }
    });
  });
}

async function main() {
  try {
    const answers = {};
    
    // Ask all questions
    for (const question of questions) {
      answers[question.key] = await askQuestion(question);
    }
    
    console.log('\n📝 Configuration Summary:');
    console.log('==========================');
    console.log(`Provider: ${answers.provider}`);
    console.log(`Email: ${answers.email}`);
    console.log(`Password: ${'*'.repeat(answers.password.length)}`);
    console.log(`From Name: ${answers.fromName}`);
    
    // Generate environment variables
    const envContent = `
# Existing Supabase configuration
VITE_SUPABASE_URL=https://qgjlpmrdswaotfrzwzeh.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnamxwbXJkc3dhb3Rmcnp3emVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MzY1ODYsImV4cCI6MjA2ODMxMjU4Nn0.-YPqlLI6ZV_rsBzSaPEniMV3DXazh_EJyrTs33dRqTw

# SMTP Email Configuration
VITE_SMTP_PROVIDER=${answers.provider}
VITE_SMTP_USERNAME=${answers.email}
VITE_SMTP_PASSWORD=${answers.password}
VITE_SMTP_FROM_NAME=${answers.fromName}
VITE_SMTP_FROM_EMAIL=${answers.email}
`;

    // Write to .env file
    fs.writeFileSync('.env', envContent.trim());
    
    console.log('\n✅ Configuration saved to .env file!');
    console.log('\n🚀 Ready to test! Run these commands:');
    console.log('');
    console.log('   # Option 1: Start both servers together');
    console.log('   npm run start-all');
    console.log('');
    console.log('   # Option 2: Start servers separately');
    console.log('   # Terminal 1:');
    console.log('   npm run smtp-server');
    console.log('   # Terminal 2:');
    console.log('   npm run dev');
    console.log('');
    console.log('📧 Then test by submitting an application at http://localhost:5173');
    console.log('');
    
    rl.close();
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();