# 🔧 Code & .htaccess Troubleshooting Guide

## 🚨 **"Refused to Connect" - Code Issues**

### **1. .htaccess File Issues**

#### **Problem**: Complex .htaccess causing server errors
#### **Solutions**:

**Option A: Use Simplified .htaccess**
Replace your current `.htaccess` with this simple version:
```apache
# Simple React Router Support for cPanel Hosting
RewriteEngine On

# Basic client-side routing - simple and reliable
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Basic compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>

# Basic caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
</IfModule>
```

**Option B: Use Minimal .htaccess**
If the above doesn't work, try this minimal version:
```apache
# Minimal .htaccess for React Router
RewriteEngine On
RewriteRule ^(.*)$ /index.html [L]
```

**Option C: No .htaccess**
If nothing works, temporarily remove `.htaccess` and test.

### **2. React Router Issues**

#### **Problem**: Routing not working properly
#### **Solutions**:

**Simplified Routing**: The routing has been simplified to remove iframe issues.

**Check Browser Console**: Open developer tools (F12) and check for JavaScript errors.

**Test Direct Routes**: Try accessing these URLs directly:
- `yourdomain.com/apply`
- `yourdomain.com/unlockadmform`

### **3. Build Issues**

#### **Problem**: Build files corrupted or incomplete
#### **Solutions**:

**Clean Rebuild**:
```bash
# Remove old build
rm -rf dist
rm -rf node_modules

# Fresh install and build
npm install
npm run build

# Run deployment script
node deploy-now.js
```

**Check Build Output**: Ensure `dist` folder contains:
- `index.html`
- `assets/` folder with CSS and JS
- `.htaccess` file

### **4. File Permissions**

#### **Problem**: Server can't read files
#### **Solutions**:

**Set Correct Permissions**:
- Files: 644
- Directories: 755
- `.htaccess`: 644

**Check via cPanel**:
1. Go to File Manager
2. Right-click on files
3. Select "Change Permissions"
4. Set files to 644, directories to 755

### **5. Server Configuration**

#### **Problem**: Server not configured for React Router
#### **Solutions**:

**Check Server Logs**:
1. Go to cPanel → Error Logs
2. Look for `.htaccess` parsing errors
3. Check for mod_rewrite errors

**Contact Hosting Provider**:
Ask them to:
1. Enable `mod_rewrite`
2. Allow `.htaccess` files
3. Check server configuration

## 🔍 **Step-by-Step Diagnosis**

### **Step 1: Check .htaccess**
1. **Upload simplified .htaccess**
2. **Test if site loads**
3. **Check for server errors**

### **Step 2: Test Without .htaccess**
1. **Rename .htaccess to .htaccess.bak**
2. **Test if site loads**
3. **If it works, .htaccess is the issue**

### **Step 3: Check Build Files**
1. **Verify index.html exists**
2. **Check assets folder**
3. **Ensure all files uploaded**

### **Step 4: Test Direct Access**
1. **Try accessing index.html directly**
2. **Check browser console for errors**
3. **Test from different browser**

## 🛠️ **Quick Fixes**

### **Fix 1: Replace .htaccess**
Upload the simplified `.htaccess` file.

### **Fix 2: Clean Rebuild**
```bash
rm -rf dist node_modules
npm install
npm run build
node deploy-now.js
```

### **Fix 3: Check File Structure**
Ensure your `public_html` contains:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── css/
│   └── js/
└── [other files]
```

### **Fix 4: Test Minimal Setup**
1. **Remove .htaccess temporarily**
2. **Test if site loads**
3. **Add minimal .htaccess**
4. **Test again**

## 📞 **What to Check**

### **Server Logs**:
1. **cPanel → Error Logs**
2. **Look for .htaccess errors**
3. **Check for mod_rewrite issues**

### **Browser Console**:
1. **Open developer tools (F12)**
2. **Check Console tab for errors**
3. **Check Network tab for failed requests**

### **File Permissions**:
1. **Files: 644**
2. **Directories: 755**
3. **Special files: 644**

## ✅ **Success Checklist**

- [ ] Simplified `.htaccess` uploaded
- [ ] Clean build completed
- [ ] All files uploaded to `public_html`
- [ ] File permissions set correctly
- [ ] No JavaScript errors in console
- [ ] Server logs show no errors
- [ ] Site loads without .htaccess
- [ ] Site loads with .htaccess

## 🚀 **Emergency Solutions**

### **Solution 1: Minimal .htaccess**
Use the minimal `.htaccess` file:
```apache
RewriteEngine On
RewriteRule ^(.*)$ /index.html [L]
```

### **Solution 2: No .htaccess**
Temporarily remove `.htaccess` and test.

### **Solution 3: Static HTML**
Create a simple `index.html` that redirects to `/apply`.

### **Solution 4: Contact Hosting**
Ask hosting provider to:
1. **Check server configuration**
2. **Enable mod_rewrite**
3. **Allow .htaccess files**

## 📋 **Action Plan**

### **Immediate Actions**:
1. **Upload simplified .htaccess**
2. **Clean rebuild the project**
3. **Check file permissions**
4. **Test without .htaccess**
5. **Check server logs**

### **If Still Not Working**:
1. **Contact hosting provider**
2. **Use minimal .htaccess**
3. **Remove .htaccess temporarily**
4. **Check server configuration**

**The issue is likely with the .htaccess file or build process. Try the simplified .htaccess first! 🔧** 