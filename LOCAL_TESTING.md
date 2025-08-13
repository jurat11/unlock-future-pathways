# 🧪 Local Testing Guide

## 🚀 **How to Test Locally**

### **Step 1: Start Development Server**
```bash
# Make sure you're in the project directory
cd /Users/shohruh/unlock-future-pathways

# Start the development server
npm run dev
```

### **Step 2: Open Browser**
The server will start on `http://localhost:8080` (or another port if 8080 is busy)

### **Step 3: Test All Routes**

#### **✅ Test These URLs:**
1. **Main Page**: `http://localhost:8080/`
   - Should redirect to `/coming-soon`
   - Should show coming soon page with "Apply Now" button

2. **Coming Soon**: `http://localhost:8080/coming-soon`
   - Should show coming soon page
   - Should have "Apply Now" button

3. **Apply Form**: `http://localhost:8080/apply`
   - Should show clean form (NO navbar/footer)
   - Should have "Back to Home" button
   - Should be focused form experience

4. **Admin Panel**: `http://localhost:8080/unlockadmform`
   - Should show admin login
   - Should NOT redirect to coming soon

5. **Admin Applications**: `http://localhost:8080/unlockadmform/applications`
   - Should show applications management page

6. **Test Route**: `http://localhost:8080/test`
   - Should show green "Routing Works!" page

## 🔍 **What to Check**

### **✅ Apply Page (`/apply`)**
- [ ] No navbar at the top
- [ ] No footer at the bottom
- [ ] "Back to Home" button visible
- [ ] Clean form layout
- [ ] All form fields working

### **✅ Admin Panel (`/unlockadmform`)**
- [ ] Shows admin login form
- [ ] No redirect to coming soon
- [ ] Login works with: `admin` / `admin123`

### **✅ Coming Soon Page (`/coming-soon`)**
- [ ] Shows "UNLOCK" title
- [ ] Shows "Coming Soon" subtitle
- [ ] "Apply Now" button works
- [ ] Button links to `/apply`

### **✅ Test Route (`/test`)**
- [ ] Shows green background
- [ ] Shows "✅ Routing Works!" message
- [ ] Confirms routing is working

## 🚨 **Common Issues & Solutions**

### **Issue 1: Port Already in Use**
```bash
# If port 8080 is busy, try:
npm run dev -- --port 3000
# Then visit: http://localhost:3000
```

### **Issue 2: Dependencies Missing**
```bash
# If you get module errors:
npm install
npm run dev
```

### **Issue 3: Build Errors**
```bash
# If you get build errors:
rm -rf node_modules
npm install
npm run dev
```

### **Issue 4: Routes Not Working**
- Check browser console for errors (F12)
- Verify all files are saved
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

## 📋 **Testing Checklist**

### **Before Testing:**
- [ ] All files are saved
- [ ] No console errors
- [ ] Development server is running

### **During Testing:**
- [ ] Test each route individually
- [ ] Check browser console for errors
- [ ] Test form submission (if needed)
- [ ] Test admin login

### **After Testing:**
- [ ] All routes work correctly
- [ ] No console errors
- [ ] Forms submit properly
- [ ] Admin panel accessible

## 🎯 **Expected Results**

### **✅ If Everything Works:**
- All routes load correctly
- Apply page is clean (no navbar/footer)
- Admin panel shows login
- Test route shows green page
- No console errors

### **❌ If Issues Found:**
- Fix the issues locally first
- Don't upload to hosting until local testing passes
- Check console for error messages

## 🚀 **Next Steps After Local Testing**

### **If Local Testing Passes:**
1. ✅ Build for production: `npm run build`
2. ✅ Run deployment script: `node deploy-now.js`
3. ✅ Upload to hosting
4. ✅ Test on live site

### **If Local Testing Fails:**
1. ❌ Fix issues locally first
2. ❌ Don't upload until fixed
3. ❌ Check console errors
4. ❌ Verify all files are saved

**Local testing is the best way to catch issues before they go live! 🧪** 