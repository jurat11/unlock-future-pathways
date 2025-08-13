-- Add other_curriculum column to applications table
-- Execute this in Supabase SQL Editor

-- Add the new other_curriculum column
ALTER TABLE applications 
ADD COLUMN IF NOT EXISTS other_curriculum TEXT;

-- Add documentation
COMMENT ON COLUMN applications.other_curriculum IS 'Custom curriculum type when "Other" is selected in school_curriculum';

-- Verify the change
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'applications' 
AND table_schema = 'public'
AND column_name = 'other_curriculum';