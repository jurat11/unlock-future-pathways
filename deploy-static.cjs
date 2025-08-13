const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Creating static deployment (no Node.js required)...\n');

try {
  // Step 1: Build the React app
  console.log('📦 Building React application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ React build completed\n');

  // Step 2: Create static version with localStorage fallback
  console.log('📁 Creating static version...');
  
  // Copy all dist files to static-deploy folder
  if (!fs.existsSync('static-deploy')) {
    fs.mkdirSync('static-deploy');
  }
  
  // Copy all files from dist to static-deploy
  const copyRecursive = (src, dest) => {
    if (fs.lstatSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach(file => {
        copyRecursive(path.join(src, file), path.join(dest, file));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };
  
  copyRecursive('dist', 'static-deploy');
  
  // Step 3: Update the API to use localStorage
  console.log('🔄 Updating to localStorage backend...');
  
  // Create a localStorage API file
  const localStorageAPI = `
// Static deployment API - uses localStorage
const STORAGE_KEY = 'unlock_applications';

// Get applications from localStorage
const getApplicationsFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

// Save applications to localStorage
const saveApplicationsToStorage = (applications) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    throw error;
  }
};

// Submit application to localStorage
window.submitApplication = async (data) => {
  try {
    console.log('Submitting application to localStorage...', data);
    
    const applications = getApplicationsFromStorage();
    
    const newApplication = {
      ...data,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };
    
    applications.push(newApplication);
    saveApplicationsToStorage(applications);
    
    console.log('Successfully stored application:', newApplication.id);
    return { data: newApplication, error: null };
  } catch (error) {
    console.error('Error submitting application:', error);
    return { data: null, error };
  }
};

// Get all applications from localStorage
window.getAllApplications = async () => {
  try {
    const applications = getApplicationsFromStorage();
    console.log('Retrieved applications from localStorage:', applications);
    return applications;
  } catch (error) {
    console.error('Error fetching applications:', error);
    return [];
  }
};

// Update application status
window.updateApplicationStatus = async (id, status) => {
  try {
    const applications = getApplicationsFromStorage();
    const application = applications.find(app => app.id === id);
    
    if (application) {
      application.status = status;
      saveApplicationsToStorage(applications);
      console.log('Successfully updated application status:', id, status);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error updating application status:', error);
    return false;
  }
};

// Admin login (simple check)
window.adminLogin = async (username, password) => {
  try {
    // Simple admin check for static deployment
    if (username === 'admin' && password === 'admin123') {
      console.log('Admin login successful');
      return { success: true, error: null };
    } else {
      return { success: false, error: { message: 'Invalid credentials' } };
    }
  } catch (error) {
    console.error('Admin login error:', error);
    return { success: false, error };
  }
};

// Export applications as JSON
window.exportApplications = async () => {
  try {
    const applications = getApplicationsFromStorage();
    return JSON.stringify(applications, null, 2);
  } catch (error) {
    console.error('Error exporting applications:', error);
    return '[]';
  }
};

console.log('Static API loaded successfully');
`;

  fs.writeFileSync('static-deploy/static-api.js', localStorageAPI);
  
  // Step 4: Update index.html to include the static API
  const indexPath = 'static-deploy/index.html';
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add the static API script before the closing body tag
  indexContent = indexContent.replace(
    '</body>',
    '<script src="/static-api.js"></script>\n</body>'
  );
  
  fs.writeFileSync(indexPath, indexContent);
  
  // Step 5: Create deployment instructions
  const staticInstructions = `
# 🚀 UNLOCK Future Pathways - Static Deployment (No Node.js Required)

## 📋 What's Included in static-deploy/ folder:

### Frontend (React App):
- All built React files (index.html, assets, etc.)
- Static files from public/ folder
- static-api.js - localStorage-based backend

### Backend (localStorage):
- Applications stored in browser localStorage
- Simple admin authentication
- No server required

## 🌐 Deployment Options:

### Option 1: cPanel Shared Hosting (Recommended)
1. Upload ALL contents of static-deploy/ folder to your hosting
2. No Node.js required!
3. Works with any web hosting

### Option 2: GitHub Pages
1. Upload to GitHub repository
2. Enable GitHub Pages
3. Free hosting with custom domain

### Option 3: Netlify/Vercel
1. Upload static-deploy/ folder
2. Automatic deployment
3. Free hosting with custom domain

## 🔧 Important Notes:

### Database (localStorage):
- Applications stored in browser localStorage
- Each device sees its own applications
- For cross-device access, use the Node.js version

### Admin Access:
- Default credentials: admin / admin123
- Admin panel: /unlockadmform
- Applications: /unlockadmform/applications

### Limitations:
- Applications only visible on the device that submitted them
- No cross-device access to admin panel
- Data lost when browser cache is cleared

## ✅ Testing:
1. Visit your domain - should show coming soon page
2. Click "Apply Now" - should show application form
3. Submit a test application
4. Visit /unlockadmform - should show admin login
5. Login with admin/admin123
6. Check applications in admin panel

## 🔄 Updates:
- To update: rebuild with this script and re-upload static-deploy/ contents
- No database to backup (uses localStorage)

## 🚀 For Production (Cross-Device Access):
If you need cross-device access, you'll need:
1. Node.js hosting (VPS, Railway, Render, etc.)
2. Use the full dist/ folder with server.js
3. Run: npm install && npm start

---
Generated on: ${new Date().toISOString()}
`;

  fs.writeFileSync('static-deploy/STATIC_DEPLOYMENT_INSTRUCTIONS.md', staticInstructions);
  console.log('✅ Static deployment instructions created\n');

  console.log('🎉 Static deployment preparation completed!');
  console.log('\n📁 Your static files are ready in the static-deploy/ folder');
  console.log('📋 See static-deploy/STATIC_DEPLOYMENT_INSTRUCTIONS.md for instructions');
  console.log('\n🚀 To deploy:');
  console.log('   1. Upload static-deploy/ folder contents to your hosting');
  console.log('   2. No Node.js required!');
  console.log('   3. Works with any web hosting');
  console.log('\n⚠️  Note: This version uses localStorage (device-specific)');
  console.log('   For cross-device access, use the Node.js version');

} catch (error) {
  console.error('❌ Static deployment preparation failed:', error.message);
  process.exit(1);
} 