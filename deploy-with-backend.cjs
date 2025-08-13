const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting deployment preparation...\n');

try {
  // Step 1: Build the React app
  console.log('📦 Building React application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ React build completed\n');

  // Step 2: Copy necessary files to dist
  console.log('📁 Copying backend files to dist...');
  
  // Copy server.js to dist
  fs.copyFileSync('server.js', 'dist/server.js');
  
  // Copy package.json to dist (for production dependencies)
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const productionDeps = {
    name: packageJson.name,
    version: packageJson.version,
    main: 'server.js',
    scripts: {
      start: 'node server.js'
    },
    dependencies: {
      express: packageJson.dependencies.express,
      sqlite3: packageJson.dependencies.sqlite3,
      cors: packageJson.dependencies.cors,
      bcryptjs: packageJson.dependencies.bcryptjs,
      'body-parser': packageJson.dependencies['body-parser']
    }
  };
  
  fs.writeFileSync('dist/package.json', JSON.stringify(productionDeps, null, 2));
  
  // Copy .htaccess to dist
  if (fs.existsSync('public/.htaccess')) {
    fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
  }
  
  console.log('✅ Backend files copied to dist\n');

  // Step 3: Create deployment instructions
  const deploymentInstructions = `
# 🚀 UNLOCK Future Pathways - Deployment Instructions

## 📋 What's Included in dist/ folder:

### Frontend (React App):
- All built React files (index.html, assets, etc.)
- Static files from public/ folder

### Backend (Node.js + SQLite):
- server.js - Express server with SQLite database
- package.json - Production dependencies
- .htaccess - Apache configuration for React Router

## 🌐 Deployment Options:

### Option 1: Shared Hosting (cPanel)
1. Upload ALL contents of dist/ folder to your hosting
2. Set up Node.js in cPanel (if available)
3. Run: npm install && npm start
4. Configure domain to point to the server

### Option 2: VPS/Dedicated Server
1. Upload dist/ folder to server
2. SSH into server
3. Run: npm install
4. Run: npm start
5. Configure nginx/apache to proxy to port 3001

### Option 3: Heroku/Railway/Render
1. Upload dist/ folder contents
2. Platform will automatically run: npm install && npm start

## 🔧 Important Notes:

### Database:
- SQLite database (applications.db) will be created automatically
- Database file is stored locally on the server
- All applications are stored in this database

### Admin Access:
- Default credentials: admin / admin123
- Admin panel: /unlockadmform
- Applications: /unlockadmform/applications

### API Endpoints:
- POST /api/applications - Submit application
- GET /api/applications - Get all applications (admin)
- PUT /api/applications/:id/status - Update status
- POST /api/admin/login - Admin login

## 🛡️ Security:
- Change default admin password after first login
- Database file should be backed up regularly
- Consider using environment variables for sensitive data

## 📞 Support:
- Frontend runs on port 8080 (development) or 80 (production)
- Backend API runs on port 3001
- Make sure both are accessible

## ✅ Testing:
1. Visit your domain - should show coming soon page
2. Click "Apply Now" - should show application form
3. Submit a test application
4. Visit /unlockadmform - should show admin login
5. Login with admin/admin123
6. Check applications in admin panel

## 🔄 Updates:
- To update: rebuild with this script and re-upload dist/ contents
- Database will persist between updates
- Backup applications.db before major updates

---
Generated on: ${new Date().toISOString()}
`;

  fs.writeFileSync('dist/DEPLOYMENT_INSTRUCTIONS.md', deploymentInstructions);
  console.log('✅ Deployment instructions created\n');

  // Step 4: Create a simple start script
  const startScript = `#!/bin/bash
echo "🚀 Starting UNLOCK Future Pathways Server..."
echo "📡 Backend API: http://localhost:3001"
echo "🌐 Frontend: http://localhost:8080 (or your domain)"
echo "🔑 Admin: admin / admin123"
echo ""
npm install
npm start
`;

  fs.writeFileSync('dist/start.sh', startScript);
  fs.chmodSync('dist/start.sh', '755');
  console.log('✅ Start script created\n');

  console.log('🎉 Deployment preparation completed!');
  console.log('\n📁 Your deployment files are ready in the dist/ folder');
  console.log('📋 See dist/DEPLOYMENT_INSTRUCTIONS.md for detailed instructions');
  console.log('\n🚀 To deploy:');
  console.log('   1. Upload dist/ folder contents to your hosting');
  console.log('   2. Run: npm install && npm start');
  console.log('   3. Configure your domain');
  console.log('\n💡 The backend will create a SQLite database automatically');
  console.log('   All applications will be stored in applications.db');

} catch (error) {
  console.error('❌ Deployment preparation failed:', error.message);
  process.exit(1);
} 