# 📤 Complete Upload Guide for cPanel Hosting

## 🎯 **What to Upload**

### **✅ Upload These Files/Folders:**
```
📁 dist/ (contents only)
├── 📄 index.html
├── 📄 .htaccess
├── 📁 assets/
│   ├── 📁 css/
│   ├── 📁 js/
│   └── 📁 images/
├── 📁 comingsoonunlock/
│   ├── 📄 index.html
│   ├── 📄 styles.css
│   └── 📄 script.js
└── 📁 lovable-uploads/
    └── [university logos]
```

### **❌ Do NOT Upload:**
- `dist/` folder itself
- `node_modules/` folder
- `src/` folder
- `public/` folder
- `package.json`
- Any development files

## 🚀 **Step-by-Step Upload Process**

### **Step 1: Build the Project**
```bash
# Run the deployment script
node deploy-now.js
```

### **Step 2: Check the dist Folder**
After running the script, your `dist` folder should contain:
- `index.html`
- `.htaccess`
- `assets/` folder
- `comingsoonunlock/` folder
- `lovable-uploads/` folder

### **Step 3: Upload to cPanel**

#### **Method A: File Manager (Recommended)**
1. **Login to cPanel**
2. **Go to File Manager**
3. **Navigate to `public_html`**
4. **Upload each file/folder from `dist/`**:
   - Upload `index.html`
   - Upload `.htaccess`
   - Upload `assets/` folder
   - Upload `comingsoonunlock/` folder
   - Upload `lovable-uploads/` folder

#### **Method B: FTP (Alternative)**
1. **Use FTP client** (FileZilla, WinSCP)
2. **Connect to your hosting**
3. **Navigate to `public_html`**
4. **Upload contents of `dist/` folder**

### **Step 4: Set File Permissions**
After uploading, set permissions:
- **Files**: 644
- **Directories**: 755
- **`.htaccess`**: 644

## 📁 **Detailed File Structure**

### **What Goes in `public_html`:**
```
public_html/
├── 📄 index.html (main entry point)
├── 📄 .htaccess (routing configuration)
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 📄 [compiled CSS files]
│   ├── 📁 js/
│   │   └── 📄 [compiled JavaScript files]
│   └── 📁 images/
│       └── 📄 [optimized images]
├── 📁 comingsoonunlock/
│   ├── 📄 index.html
│   ├── 📄 styles.css
│   └── 📄 script.js
└── 📁 lovable-uploads/
    ├── 📄 [university logo 1]
    ├── 📄 [university logo 2]
    └── 📄 [university logo 3]
```

## 🔧 **Upload Methods**

### **Method 1: cPanel File Manager**
1. **Login to cPanel**
2. **Click "File Manager"**
3. **Navigate to `public_html`**
4. **Click "Upload"**
5. **Select files from your `dist` folder**
6. **Upload each file/folder individually**

### **Method 2: Drag & Drop**
1. **Open File Manager**
2. **Open your local `dist` folder**
3. **Drag files from `dist` to `public_html`**
4. **Ensure files go directly in `public_html`**

### **Method 3: Extract ZIP**
1. **Zip your `dist` folder contents**
2. **Upload ZIP to `public_html`**
3. **Extract ZIP in `public_html`**
4. **Delete ZIP file**

## ⚠️ **Common Mistakes to Avoid**

### **❌ Don't Upload:**
- The `dist` folder itself
- `node_modules` folder
- Source code files (`src/`)
- Development files
- `package.json` or `package-lock.json`

### **✅ Do Upload:**
- Contents of `dist` folder
- `.htaccess` file
- All assets and images
- Coming soon page files

## 🎯 **Quick Upload Checklist**

### **Before Upload:**
- [ ] Run `node deploy-now.js`
- [ ] Check `dist` folder has all files
- [ ] Verify `.htaccess` is in `dist`

### **During Upload:**
- [ ] Upload to `public_html` (not subfolder)
- [ ] Upload all contents of `dist`
- [ ] Don't create extra folders

### **After Upload:**
- [ ] Set file permissions (644 for files, 755 for folders)
- [ ] Test website loads
- [ ] Check all routes work

## 🚨 **Troubleshooting Upload Issues**

### **Issue 1: Files Not Uploading**
**Solution**: Check file size limits in cPanel

### **Issue 2: Wrong File Structure**
**Solution**: Ensure files are directly in `public_html`, not in subfolders

### **Issue 3: Permissions Issues**
**Solution**: Set correct permissions via File Manager

### **Issue 4: Site Not Loading**
**Solution**: Check that `index.html` is in `public_html` root

## 📋 **Final Verification**

### **Check These URLs Work:**
- ✅ `yourdomain.com` → Coming soon page
- ✅ `yourdomain.com/apply` → Application form
- ✅ `yourdomain.com/unlockadmform` → Admin panel

### **Check File Structure:**
```
public_html/
├── index.html ✅
├── .htaccess ✅
├── assets/ ✅
├── comingsoonunlock/ ✅
└── lovable-uploads/ ✅
```

**The key is to upload the CONTENTS of the `dist` folder to `public_html`, not the `dist` folder itself! 🎯** 