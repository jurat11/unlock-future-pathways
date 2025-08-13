# 🗄️ SQLite Backend System Guide

## 🎯 **Problem Solved**

**Previous Issue:** Applications were stored in localStorage, which meant:
- ❌ Applications only visible on the device that submitted them
- ❌ No cross-device access to admin panel
- ❌ Data lost when browser cache is cleared
- ❌ No centralized database

**New Solution:** SQLite Database with Node.js Backend
- ✅ **Unified Database:** All applications stored in one SQLite database
- ✅ **Cross-Device Access:** Admin panel works from any device
- ✅ **Persistent Storage:** Data survives browser cache clearing
- ✅ **Real Database:** Proper database with tables and relationships

## 🏗️ **Architecture**

### **Backend (Node.js + Express + SQLite)**
```
server.js
├── SQLite Database (applications.db)
│   ├── applications table
│   └── admin_credentials table
├── API Endpoints
│   ├── POST /api/applications (submit application)
│   ├── GET /api/applications (get all applications)
│   ├── PUT /api/applications/:id/status (update status)
│   └── POST /api/admin/login (admin authentication)
└── Static File Serving (React app)
```

### **Frontend (React)**
```
src/api/submit-application-sqlite.ts
├── submitApplication() - Submit to SQLite
├── getAllApplications() - Fetch from SQLite
├── updateApplicationStatus() - Update in SQLite
└── adminLogin() - Authenticate admin
```

## 🚀 **How to Run**

### **Development (Local Testing)**
```bash
# Option 1: Run both servers with one command
node start-dev.js

# Option 2: Run separately
# Terminal 1: Backend
node server.js

# Terminal 2: Frontend
npm run dev
```

### **Production (Deployment)**
```bash
# Build for production
node deploy-with-backend.js

# Upload dist/ folder to hosting
# Run on server: npm install && npm start
```

## 📊 **Database Schema**

### **Applications Table**
```sql
CREATE TABLE applications (
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
);
```

### **Admin Credentials Table**
```sql
CREATE TABLE admin_credentials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);
```

## 🔧 **API Endpoints**

### **Submit Application**
```http
POST /api/applications
Content-Type: application/json

{
  "fullName": "Student Name",
  "email": "student@example.com",
  // ... all form fields
}
```

### **Get All Applications (Admin)**
```http
GET /api/applications
```

### **Update Application Status**
```http
PUT /api/applications/:id/status
Content-Type: application/json

{
  "status": "approved"
}
```

### **Admin Login**
```http
POST /api/admin/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

## 🔐 **Security Features**

### **Password Hashing**
- Uses `bcryptjs` for secure password hashing
- Default admin credentials: `admin` / `admin123`
- **Important:** Change password after first deployment

### **CORS Configuration**
- Configured for cross-origin requests
- Secure for production deployment

### **SQL Injection Prevention**
- Uses parameterized queries
- Input validation and sanitization

## 📱 **Testing**

### **Backend Testing**
```bash
# Test backend functionality
node test-backend.js
```

### **Frontend Testing**
```bash
# Start development server
npm run dev

# Test URLs:
# - http://localhost:8080 (coming soon page)
# - http://localhost:8080/apply (application form)
# - http://localhost:8080/unlockadmform (admin panel)
```

## 🚀 **Deployment**

### **Files to Upload**
```
dist/
├── index.html (React app)
├── assets/ (React assets)
├── server.js (Backend server)
├── package.json (Production dependencies)
├── .htaccess (Apache configuration)
└── DEPLOYMENT_INSTRUCTIONS.md
```

### **Server Requirements**
- Node.js 16+ 
- npm or yarn
- Port 3001 available for backend
- Port 80/443 for frontend

### **Environment Variables**
```bash
PORT=3001  # Backend port (optional, defaults to 3001)
```

## 🔄 **Migration from localStorage**

### **Automatic Migration**
- New system works alongside old localStorage
- No data migration needed
- Old localStorage data remains until cleared

### **Manual Migration (if needed)**
```javascript
// Export from localStorage
const oldData = localStorage.getItem('unlock_applications');
const applications = JSON.parse(oldData || '[]');

// Import to new system via admin panel
// Or use API directly
```

## 📈 **Benefits**

### **For Students**
- ✅ Reliable application submission
- ✅ No data loss
- ✅ Works on any device

### **For Administrators**
- ✅ Centralized application management
- ✅ Access from any device
- ✅ Real-time status updates
- ✅ Export functionality
- ✅ Secure admin access

### **For Development**
- ✅ Real database with proper schema
- ✅ API-first architecture
- ✅ Easy to extend and modify
- ✅ Production-ready deployment

## 🛠️ **Troubleshooting**

### **Common Issues**

#### **Backend not starting**
```bash
# Check if port 3001 is available
lsof -i :3001

# Check Node.js version
node --version
```

#### **Database errors**
```bash
# Check database file permissions
ls -la applications.db

# Recreate database (WARNING: loses data)
rm applications.db
node server.js
```

#### **Frontend can't connect to backend**
```bash
# Check if backend is running
curl http://localhost:3001/api/applications

# Check CORS configuration
# Verify API_BASE_URL in submit-application-sqlite.ts
```

#### **Admin login not working**
```bash
# Reset admin password
# Edit server.js and change the default password
# Or delete applications.db to recreate with defaults
```

## 📞 **Support**

### **Development Commands**
```bash
# Start development environment
node start-dev.js

# Test backend only
node test-backend.js

# Build for production
node deploy-with-backend.js

# Check database
sqlite3 applications.db ".tables"
```

### **Logs**
- Backend logs: Check terminal running `node server.js`
- Frontend logs: Check browser console
- Database logs: Check `applications.db` file

---

**🎉 The SQLite backend provides a robust, scalable solution for the UNLOCK Future Pathways application system!** 