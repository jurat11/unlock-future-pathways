-- SUPABASE FORM UPDATE SQL
-- Execute this in the Supabase SQL Editor to update the applications table
-- This updates the schema to match the current application form

-- Step 1: Add the new contact_details column
ALTER TABLE applications 
ADD COLUMN IF NOT EXISTS contact_details TEXT;

-- Step 2: Remove the full_school_name column
ALTER TABLE applications 
DROP COLUMN IF EXISTS full_school_name;

-- Step 3: Add documentation
COMMENT ON COLUMN applications.contact_details IS 'Contact details (username, phone, or email) based on preferred contact method';

-- Step 4: Verify the changes
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'applications' 
AND table_schema = 'public'
ORDER BY ordinal_position;