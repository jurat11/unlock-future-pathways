# 🔧 UNLOCK Website Deployment Troubleshooting Guide

## 🚨 Common Issues & Solutions

### **1. 404 Errors on Routes**

#### **Problem**: Links not working, getting 404 errors
#### **Solutions**:

**Option A: Update .htaccess**
```bash
# Replace your current .htaccess with this simpler version:
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Option B: Check cPanel Settings**
1. Go to cPanel → File Manager
2. Navigate to `public_html`
3. Ensure `.htaccess` file exists and has correct permissions (644)
4. Check if `mod_rewrite` is enabled in cPanel

**Option C: Alternative .htaccess**
If the above doesn't work, try this even simpler version:
```apache
RewriteEngine On
RewriteRule ^(.*)$ /index.html [L]
```

### **2. Apply Button Not Showing**

#### **Problem**: Apply button missing from coming soon page
#### **Solution**: 
The coming soon page has been updated with an Apply button. Re-upload the `comingsoonunlock` folder.

### **3. Admin Page Not Accessible**

#### **Problem**: Can't access `/unlockadmform`
#### **Solutions**:

**Check URL**: Make sure you're using the correct URL:
- ✅ `yourdomain.com/unlockadmform`
- ❌ `yourdomain.com/admin`

**Check File Structure**: Ensure these files exist in `public_html`:
```
public_html/
├── index.html
├── .htaccess
├── assets/
└── [other files]
```

### **4. Database Issues**

#### **Problem**: Form submissions not working
#### **Solution**: 
The current implementation uses localStorage (browser storage). No database setup required.

**To check if it's working**:
1. Open browser developer tools (F12)
2. Go to Application → Local Storage
3. Look for `applications` key

### **5. Build Issues**

#### **Problem**: Build fails or dist folder not created
#### **Solutions**:

**Clean Build**:
```bash
rm -rf node_modules
rm -rf dist
npm install
npm run build
```

**Check Node Version**:
```bash
node --version  # Should be 16+ or 18+
npm --version   # Should be 8+
```

### **6. File Upload Issues**

#### **Problem**: Files not uploading correctly
#### **Solutions**:

**Check File Permissions**:
- Files: 644
- Directories: 755
- `.htaccess`: 644

**Upload Method**:
1. Use File Manager in cPanel
2. Upload entire `dist` folder contents
3. Don't upload the `dist` folder itself, just its contents

### **7. SSL/HTTPS Issues**

#### **Problem**: Mixed content or SSL errors
#### **Solution**:
Uncomment this line in `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 🔍 **Debugging Steps**

### **Step 1: Check Server Logs**
1. Go to cPanel → Error Logs
2. Look for recent errors
3. Check for `.htaccess` parsing errors

### **Step 2: Test Basic Routing**
1. Try accessing `yourdomain.com/apply` directly
2. Check if `yourdomain.com/coming-soon` works
3. Test `yourdomain.com/unlockadmform`

### **Step 3: Check File Structure**
```bash
# Your public_html should look like this:
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── comingsoonunlock/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── lovable-uploads/
    └── [university logos]
```

### **Step 4: Browser Testing**
1. Open browser developer tools (F12)
2. Go to Network tab
3. Try accessing the problematic URL
4. Check for failed requests

## 🛠️ **Quick Fixes**

### **Fix 1: Simple .htaccess**
If nothing works, use this minimal `.htaccess`:
```apache
RewriteEngine On
RewriteRule ^(.*)$ /index.html [L]
```

### **Fix 2: Rebuild and Re-upload**
```bash
# Run the deployment script
node deploy-now.js

# Upload everything again
# Make sure to upload ALL contents of dist folder
```

### **Fix 3: Check cPanel Settings**
1. **PHP Version**: 8.0 or higher
2. **mod_rewrite**: Must be enabled
3. **File Permissions**: 644 for files, 755 for directories

## 📞 **Getting Help**

### **Information to Provide**:
1. Your hosting provider
2. cPanel version
3. PHP version
4. Exact error messages
5. URL that's failing
6. Browser console errors

### **Test URLs**:
- `yourdomain.com` → Should show coming soon page
- `yourdomain.com/apply` → Should show application form
- `yourdomain.com/unlockadmform` → Should show admin login

## ✅ **Success Checklist**

- [ ] `.htaccess` file uploaded to `public_html`
- [ ] All `dist` contents uploaded to `public_html`
- [ ] `comingsoonunlock` folder uploaded
- [ ] `lovable-uploads` folder uploaded
- [ ] File permissions set correctly
- [ ] `mod_rewrite` enabled in cPanel
- [ ] No 404 errors on main routes
- [ ] Apply button visible on coming soon page
- [ ] Admin panel accessible at `/unlockadmform`
- [ ] Form submissions working (check localStorage) 