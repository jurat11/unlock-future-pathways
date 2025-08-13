# UNLOCK Application Form Update Guide

## Overview
This guide documents the recent updates to the UNLOCK application form and the corresponding database and admin panel changes.

## Changes Made

### 🗑️ Removed Fields
- **`full_school_name`**: Removed redundant school name field from the form
- **Database**: Dropped `full_school_name` column from applications table

### ➕ Added Fields
- **`contact_details`**: New field that captures username/phone/email based on contact preference
- **Database**: Added `contact_details` column to applications table

### ✏️ Modified Fields
- **Phone Number Label**: Changed from "Personal Phone Number" to "Phone Number/Username"

## Database Schema Updates

### Option 1: SQL Editor (Recommended)
Execute the following SQL in your Supabase SQL Editor:

```sql
-- Add contact_details column
ALTER TABLE applications 
ADD COLUMN IF NOT EXISTS contact_details TEXT;

-- Remove full_school_name column
ALTER TABLE applications 
DROP COLUMN IF EXISTS full_school_name;

-- Add documentation
COMMENT ON COLUMN applications.contact_details IS 'Contact details (username, phone, or email) based on preferred contact method';
```

### Option 2: Migration File
The migration file is available at:
- `supabase/migrations/20250124000000_update_form_fields.sql`

### Option 3: Node.js Script
Run the automated update script:
```bash
node update-supabase-form-schema.js
```
*Note: Requires SUPABASE_SERVICE_ROLE_KEY environment variable*

## Admin Panel Updates

### ✅ Updated Components
- **AdminApplications.tsx**: Updated interface and field mappings
- **AdminAnalytics.tsx**: Updated interface and field mappings
- **API Integration**: Updated data transformation for new fields

### 🎯 New Features
- **Contact Details Display**: Shows contact information with UNLOCK orange highlighting
- **Updated Field Names**: All admin displays now match the actual form structure

## Form Features

### 📱 Dynamic Contact Input
- Select contact method (Telegram/WhatsApp/Email)
- Dynamic input field appears with appropriate:
  - Labels (Telegram Username / WhatsApp Phone Number / Email Address)
  - Placeholders (@username / +1234567890 / example@email.com)
  - Input types (text / email validation)

### 🎨 Professional Design
- **UNLOCK color scheme**: Orange (#E75E24) accents throughout
- **Minimalistic styling**: Clean, professional appearance
- **Responsive layout**: Works on all device sizes

## File Changes Summary

### Modified Files
1. `src/pages/ApplicationForm.tsx`
   - Removed full school name field
   - Added dynamic contact details field
   - Updated form data structure

2. `src/api/submit-application-supabase.ts`
   - Updated ApplicationSubmission interface
   - Updated data transformation logic
   - Handles new contact_details field

3. `src/pages/AdminApplications.tsx`
   - Updated Application interface
   - Fixed field name mappings
   - Added contact details display

4. `src/components/AdminAnalytics.tsx`
   - Updated Application interface
   - Fixed field references

### New Files
1. `supabase/migrations/20250124000000_update_form_fields.sql`
2. `SUPABASE_FORM_UPDATE.sql`
3. `update-supabase-form-schema.js`
4. `FORM_UPDATE_GUIDE.md` (this file)

## Testing Checklist

### ✅ Form Testing
- [ ] Contact method dropdown works
- [ ] Dynamic contact input appears/disappears
- [ ] Appropriate labels and placeholders show
- [ ] Email validation works for email option
- [ ] Form submission includes contact_details

### ✅ Database Testing
- [ ] Applications save with contact_details
- [ ] full_school_name column is removed
- [ ] Data retrieval works correctly

### ✅ Admin Panel Testing
- [ ] Applications list loads without errors
- [ ] Application details show contact_details
- [ ] All field mappings work correctly
- [ ] Export functionality works

## Rollback Instructions

If you need to rollback these changes:

1. **Database Rollback**:
```sql
-- Add back full_school_name column
ALTER TABLE applications 
ADD COLUMN full_school_name TEXT;

-- Remove contact_details column
ALTER TABLE applications 
DROP COLUMN contact_details;
```

2. **Code Rollback**: 
   - Revert the ApplicationSubmission interface
   - Restore the full_school_name field in the form
   - Remove the contact_details field

## Support

If you encounter any issues with these updates:
1. Check the console for JavaScript errors
2. Verify database schema changes were applied
3. Ensure all lint errors are resolved
4. Test form submission end-to-end

## Next Steps

1. **Deploy the updated code** to your hosting platform
2. **Run the database migration** in production
3. **Test the complete flow** from form submission to admin panel viewing
4. **Monitor for any issues** in the first few days after deployment