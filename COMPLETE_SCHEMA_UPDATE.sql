-- COMPLETE SCHEMA UPDATE FOR APPLICATION FORM
-- Execute this in Supabase SQL Editor to ensure all fields are present

-- First, let's check what columns currently exist
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'applications' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Add any missing columns for the complete form structure
-- Personal Information fields
ALTER TABLE applications ADD COLUMN IF NOT EXISTS full_name TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS city_country TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS date_of_birth TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS gender TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS other_gender TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS birth_country TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS city_of_birth TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS citizenship_countries TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS nationality TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS preferred_contact TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS contact_details TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS personal_phone TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS legal_guardian_info TEXT;

-- Education fields
ALTER TABLE applications ADD COLUMN IF NOT EXISTS current_school TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS school_type TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS is_boarding_school TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS graduation_date TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS gpa TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS school_location TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS school_curriculum TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS other_curriculum TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS expected_graduation_date TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS school_gpa TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS is_school_specialized TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS specialization_area TEXT;

-- Essay fields
ALTER TABLE applications ADD COLUMN IF NOT EXISTS family_background TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS extracurricular_activities TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS honors_achievements TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS motivational_essay_idea TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS previous_application_experience TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS additional_information TEXT;

-- Future Plans fields
ALTER TABLE applications ADD COLUMN IF NOT EXISTS countries_of_interest TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS target_universities TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS study_field TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS choice_confidence TEXT;

-- Finance fields
ALTER TABLE applications ADD COLUMN IF NOT EXISTS funding_source TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS investment_amount TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS apply_to_eyuf TEXT;
ALTER TABLE applications ADD COLUMN IF NOT EXISTS finance_agreement BOOLEAN DEFAULT FALSE;

-- Standardized tests (JSONB for array storage)
ALTER TABLE applications ADD COLUMN IF NOT EXISTS standardized_tests JSONB DEFAULT '[]'::jsonb;

-- System fields
ALTER TABLE applications ADD COLUMN IF NOT EXISTS submitted_at TIMESTAMP DEFAULT NOW();
ALTER TABLE applications ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- Add comments for documentation
COMMENT ON COLUMN applications.contact_details IS 'Contact details (username, phone, or email) based on preferred contact method';
COMMENT ON COLUMN applications.other_curriculum IS 'Custom curriculum type when "Other" is selected in school_curriculum';
COMMENT ON COLUMN applications.standardized_tests IS 'Array of standardized test scores in JSON format';

-- Create or update indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_submitted_at ON applications(submitted_at);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Enable RLS if not already enabled
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policies if they don't exist
DO $$
BEGIN
    -- Policy for reading applications (authenticated users)
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'applications' 
        AND policyname = 'Enable read access for authenticated users'
    ) THEN
        CREATE POLICY "Enable read access for authenticated users" 
        ON applications FOR SELECT 
        USING (auth.role() = 'authenticated');
    END IF;

    -- Policy for inserting applications (public)
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'applications' 
        AND policyname = 'Enable insert for public'
    ) THEN
        CREATE POLICY "Enable insert for public" 
        ON applications FOR INSERT 
        WITH CHECK (true);
    END IF;

    -- Policy for updating applications (authenticated users)
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'applications' 
        AND policyname = 'Enable update for authenticated users'
    ) THEN
        CREATE POLICY "Enable update for authenticated users" 
        ON applications FOR UPDATE 
        USING (auth.role() = 'authenticated');
    END IF;
END
$$;

-- Final verification - show all columns
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'applications' 
AND table_schema = 'public'
ORDER BY ordinal_position;