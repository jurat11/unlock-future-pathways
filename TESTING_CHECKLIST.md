# 🧪 UNLOCK Testing Checklist

## 🎯 **Complete System Test Plan**

Let's test everything thoroughly before deployment!

## ✅ **Test Environment Setup**

**Resend API Key:** ✅ Added to `.env`
**Development Server:** Ready to start

---

## 📋 **Phase 1: Coming Soon Page Tests**

### **🏠 Homepage Tests**
- [ ] Visit `http://localhost:5173` → Should redirect or show coming soon
- [ ] Check countdown timer is working (counting down to August 7, 2025)
- [ ] Verify UNLOCK branding and colors are correct
- [ ] Test responsive design on different screen sizes
- [ ] Verify Apply button is visible and styled properly

### **🔄 Redirect Tests**
- [ ] Visit `http://localhost:5173/about` → Should redirect to coming soon
- [ ] Visit `http://localhost:5173/programs` → Should redirect to coming soon
- [ ] Visit `http://localhost:5173/contact` → Should redirect to coming soon
- [ ] Visit any random route → Should redirect to coming soon

---

## 📋 **Phase 2: Application Form Tests**

### **📝 Form Access Tests**
- [ ] Click "Apply Now" button → Should navigate to application form
- [ ] Direct visit `http://localhost:5173/apply` → Should show application form
- [ ] Form should load with all sections visible
- [ ] UNLOCK branding consistent throughout

### **🎨 UI/UX Tests**
- [ ] Check "lock unlocking" animation on submit button hover
- [ ] Test "Boarding School" tooltip (hover over info icon)
- [ ] Test "EYUF" tooltip (hover over info icon)
- [ ] Verify dynamic contact details field appears based on contact method
- [ ] Check "Other Curriculum" field appears when selecting "Other"
- [ ] Test back button → Should return to coming soon page

### **📋 Form Validation Tests**
- [ ] Try submitting empty form → Should show validation errors
- [ ] Fill required fields → Errors should disappear
- [ ] Test email validation → Should reject invalid emails
- [ ] Test phone number format
- [ ] Check all dropdown options work
- [ ] Verify checkboxes and radio buttons function

---

## 📋 **Phase 3: Database Integration Tests**

### **💾 Supabase Tests**
- [ ] Submit complete application → Should save to database
- [ ] Check Supabase dashboard → Application should appear
- [ ] Verify all fields saved correctly (39+ fields)
- [ ] Check data transformation (camelCase to snake_case)
- [ ] Test standardized tests array saving

### **🔒 RLS (Row Level Security) Tests**
- [ ] If submission fails with "RLS policy" error:
  - Run: `ALTER TABLE applications DISABLE ROW LEVEL SECURITY;`
  - Test submission again

---

## 📋 **Phase 4: Email Confirmation Tests**

### **📧 Email System Tests**
- [ ] Submit valid application
- [ ] Check browser console for email logs
- [ ] **Primary Test:** Check your email inbox for confirmation
- [ ] Verify email contains:
  - [ ] Correct applicant name
  - [ ] Application ID number
  - [ ] Submission date/time
  - [ ] UNLOCK branding
  - [ ] Professional layout
  - [ ] Contact information

### **🎨 Email Design Tests**
- [ ] Email displays properly in email client
- [ ] UNLOCK colors and branding present
- [ ] Responsive design on mobile email apps
- [ ] All sections formatted correctly
- [ ] Links (if any) work properly

---

## 📋 **Phase 5: Integration Tests**

### **🔄 Complete User Journey**
1. [ ] **Start:** Visit main domain
2. [ ] **Coming Soon:** See countdown and Apply button
3. [ ] **Apply:** Click Apply Now → Form loads
4. [ ] **Fill:** Complete entire application form
5. [ ] **Submit:** Click submit → See success message
6. [ ] **Email:** Receive confirmation email
7. [ ] **Back:** Click back → Return to coming soon
8. [ ] **Routes:** Try other routes → Always coming soon

### **📱 Mobile Tests**
- [ ] Test entire flow on mobile device
- [ ] Check coming soon page responsive design
- [ ] Verify application form mobile-friendly
- [ ] Test email display on mobile email app

---

## 📋 **Phase 6: Error Handling Tests**

### **🚨 Error Scenarios**
- [ ] Submit with invalid email → Proper error message
- [ ] Submit without required fields → Clear validation
- [ ] Test with extremely long text → Handles gracefully
- [ ] Submit with special characters → No crashes
- [ ] Test multiple rapid submissions → System stable

### **📧 Email Error Tests**
- [ ] Check console for email service errors
- [ ] Verify application still saves if email fails
- [ ] Test with invalid email address
- [ ] Check email service fallback behavior

---

## 📋 **Phase 7: Performance Tests**

### **⚡ Speed Tests**
- [ ] Coming soon page loads quickly
- [ ] Application form loads without delay
- [ ] Form submission response time reasonable
- [ ] Email sending doesn't block form submission
- [ ] No memory leaks during extended use

### **🔄 Stress Tests**
- [ ] Submit multiple applications in succession
- [ ] Test form with maximum character limits
- [ ] Rapid navigation between pages
- [ ] Multiple browser tabs open

---

## 🎯 **Critical Success Criteria**

### **Must Pass:**
✅ **Coming soon countdown works**
✅ **Apply button navigates correctly**
✅ **Application form submits successfully**
✅ **Data saves to Supabase database**
✅ **Confirmation email sends and receives**
✅ **Back button returns to coming soon**
✅ **All routes redirect to coming soon**

### **Should Pass:**
✅ **Responsive design on all devices**
✅ **Email displays beautifully**
✅ **Form validation works properly**
✅ **Animations work smoothly**
✅ **Tooltips provide helpful information**
✅ **No console errors**

---

## 🚀 **Ready to Start Testing!**

**Next Steps:**
1. **Start dev server:** `npm run dev`
2. **Open browser:** `http://localhost:5173`
3. **Follow checklist** systematically
4. **Report any issues** found
5. **Fix issues** and retest
6. **Deploy** when all tests pass

**Your Resend API key is configured and ready for email testing!** 📧✨