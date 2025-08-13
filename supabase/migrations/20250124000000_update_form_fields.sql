-- Migration to update application form fields
-- Remove full_school_name column and add contact_details column

-- Add the new contact_details column
ALTER TABLE applications 
ADD COLUMN contact_details TEXT;

-- Remove the full_school_name column
ALTER TABLE applications 
DROP COLUMN IF EXISTS full_school_name;

-- Update any existing triggers or functions if needed
-- (The existing RLS policies and other constraints should remain unchanged)

-- Add comment for documentation
COMMENT ON COLUMN applications.contact_details IS 'Contact details (username, phone, or email) based on preferred contact method';