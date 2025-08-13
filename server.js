const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Database setup
const db = new sqlite3.Database('./applications.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    initDatabase();
  }
});

// Initialize database tables
function initDatabase() {
  // Applications table
  db.run(`CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    cityCountry TEXT NOT NULL,
    dateOfBirth TEXT NOT NULL,
    preferredContact TEXT NOT NULL,
    email TEXT NOT NULL,
    legalGuardian TEXT NOT NULL,
    schoolName TEXT NOT NULL,
    schoolLocation TEXT NOT NULL,
    schoolCurriculum TEXT NOT NULL,
    graduationDate TEXT NOT NULL,
    schoolGPA TEXT NOT NULL,
    plannedField TEXT NOT NULL,
    standardizedTests TEXT,
    whyCompetitiveUniversity TEXT NOT NULL,
    favoriteBook TEXT NOT NULL,
    extracurricularActivities TEXT NOT NULL,
    honorsAchievements TEXT NOT NULL,
    motivationalEssayIdea TEXT,
    previousApplicationExperience TEXT,
    additionalInformation TEXT,
    parentContribution TEXT NOT NULL,
    unlockUzScholarship TEXT NOT NULL,
    agreeToContact INTEGER NOT NULL,
    submittedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending'
  )`, (err) => {
    if (err) {
      console.error('Error creating applications table:', err);
    } else {
      console.log('Applications table ready');
    }
  });

  // Admin credentials table
  db.run(`CREATE TABLE IF NOT EXISTS admin_credentials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.error('Error creating admin_credentials table:', err);
    } else {
      console.log('Admin credentials table ready');
      // Insert default admin credentials if not exists
      const defaultPassword = bcrypt.hashSync('admin123', 10);
      db.run(`INSERT OR IGNORE INTO admin_credentials (username, password_hash) VALUES (?, ?)`, 
        ['admin', defaultPassword], (err) => {
        if (err) {
          console.error('Error inserting default admin credentials:', err);
        } else {
          console.log('Default admin credentials ready (admin/admin123)');
        }
      });
    }
  });
}

// API Routes

// Submit application
app.post('/api/applications', (req, res) => {
  const application = req.body;
  
  const standardizedTestsJson = JSON.stringify(application.standardizedTests || []);
  
  const sql = `INSERT INTO applications (
    fullName, cityCountry, dateOfBirth, preferredContact, email, legalGuardian,
    schoolName, schoolLocation, schoolCurriculum, graduationDate, schoolGPA, plannedField,
    standardizedTests, whyCompetitiveUniversity, favoriteBook, extracurricularActivities,
    honorsAchievements, motivationalEssayIdea, previousApplicationExperience, additionalInformation,
    parentContribution, unlockUzScholarship, agreeToContact
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  const params = [
    application.fullName,
    application.cityCountry,
    application.dateOfBirth,
    application.preferredContact,
    application.email,
    application.legalGuardian,
    application.schoolName,
    application.schoolLocation,
    application.schoolCurriculum,
    application.graduationDate,
    application.schoolGPA,
    application.plannedField,
    standardizedTestsJson,
    application.whyCompetitiveUniversity,
    application.favoriteBook,
    application.extracurricularActivities,
    application.honorsAchievements,
    application.motivationalEssayIdea || '',
    application.previousApplicationExperience || '',
    application.additionalInformation || '',
    application.parentContribution,
    application.unlockUzScholarship,
    application.agreeToContact ? 1 : 0
  ];
  
  db.run(sql, params, function(err) {
    if (err) {
      console.error('Error inserting application:', err);
      res.status(500).json({ error: 'Failed to submit application' });
    } else {
      console.log('Application submitted successfully, ID:', this.lastID);
      res.json({ 
        success: true, 
        id: this.lastID,
        message: 'Application submitted successfully' 
      });
    }
  });
});

// Get all applications (admin only)
app.get('/api/applications', (req, res) => {
  const sql = `SELECT * FROM applications ORDER BY submittedAt DESC`;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching applications:', err);
      res.status(500).json({ error: 'Failed to fetch applications' });
    } else {
      // Parse standardized tests JSON for each application
      const applications = rows.map(row => ({
        ...row,
        standardizedTests: JSON.parse(row.standardizedTests || '[]'),
        agreeToContact: Boolean(row.agreeToContact)
      }));
      res.json(applications);
    }
  });
});

// Update application status
app.put('/api/applications/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const sql = `UPDATE applications SET status = ? WHERE id = ?`;
  
  db.run(sql, [status, id], function(err) {
    if (err) {
      console.error('Error updating application status:', err);
      res.status(500).json({ error: 'Failed to update application status' });
    } else {
      if (this.changes > 0) {
        res.json({ success: true, message: 'Status updated successfully' });
      } else {
        res.status(404).json({ error: 'Application not found' });
      }
    }
  });
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  const sql = `SELECT * FROM admin_credentials WHERE username = ?`;
  
  db.get(sql, [username], (err, row) => {
    if (err) {
      console.error('Error during login:', err);
      res.status(500).json({ error: 'Login failed' });
    } else if (!row) {
      res.status(401).json({ error: 'Invalid username or password' });
    } else {
      const isValidPassword = bcrypt.compareSync(password, row.password_hash);
      if (isValidPassword) {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    }
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Admin credentials: admin / admin123`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed');
    }
    process.exit(0);
  });
}); 