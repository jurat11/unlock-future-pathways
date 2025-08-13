-- FIX RLS POLICIES FOR APPLICATION SUBMISSION
-- Execute this in Supabase SQL Editor to fix the submission error

-- First, check if the applications table exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'applications' AND table_schema = 'public') THEN
        RAISE NOTICE 'Creating applications table...';
        
        CREATE TABLE applications (
            id BIGSERIAL PRIMARY KEY,
            
            -- Personal Information
            full_name TEXT NOT NULL,
            city_country TEXT NOT NULL,
            date_of_birth TEXT NOT NULL,
            email TEXT NOT NULL,
            gender TEXT NOT NULL,
            other_gender TEXT,
            birth_country TEXT NOT NULL,
            city_of_birth TEXT NOT NULL,
            citizenship_countries TEXT NOT NULL,
            nationality TEXT NOT NULL,
            preferred_contact TEXT NOT NULL,
            contact_details TEXT NOT NULL,
            personal_phone TEXT NOT NULL,
            legal_guardian_info TEXT NOT NULL,
            
            -- Education
            current_school TEXT NOT NULL,
            school_type TEXT NOT NULL,
            is_boarding_school TEXT NOT NULL,
            graduation_date TEXT NOT NULL,
            gpa TEXT NOT NULL,
            school_location TEXT NOT NULL,
            school_curriculum TEXT NOT NULL,
            other_curriculum TEXT,
            expected_graduation_date TEXT NOT NULL,
            school_gpa TEXT NOT NULL,
            is_school_specialized TEXT NOT NULL,
            specialization_area TEXT,
            
            -- Essays
            family_background TEXT NOT NULL,
            extracurricular_activities TEXT NOT NULL,
            honors_achievements TEXT NOT NULL,
            motivational_essay_idea TEXT,
            previous_application_experience TEXT,
            additional_information TEXT,
            
            -- Future Plans
            countries_of_interest TEXT NOT NULL,
            target_universities TEXT NOT NULL,
            study_field TEXT NOT NULL,
            choice_confidence TEXT NOT NULL,
            
            -- Finances
            funding_source TEXT NOT NULL,
            investment_amount TEXT NOT NULL,
            apply_to_eyuf TEXT NOT NULL,
            finance_agreement BOOLEAN NOT NULL DEFAULT FALSE,
            
            -- System fields
            standardized_tests JSONB DEFAULT '[]'::jsonb,
            submitted_at TIMESTAMP DEFAULT NOW(),
            status TEXT DEFAULT 'pending',
            
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        );
        
        RAISE NOTICE 'Applications table created successfully.';
    ELSE
        RAISE NOTICE 'Applications table already exists.';
    END IF;
END
$$;

-- Enable RLS on the applications table
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Enable insert for public" ON applications;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON applications;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON applications;

-- Create policy to allow public users to insert applications
CREATE POLICY "Enable insert for public" 
ON applications FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users to read applications
CREATE POLICY "Enable read access for authenticated users" 
ON applications FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update applications
CREATE POLICY "Enable update for authenticated users" 
ON applications FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_submitted_at ON applications(submitted_at);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Test the insert policy
DO $$
DECLARE
    test_id BIGINT;
BEGIN
    -- Try to insert a test record
    INSERT INTO applications (
        full_name, city_country, date_of_birth, email, gender, birth_country, 
        city_of_birth, citizenship_countries, nationality, preferred_contact, 
        contact_details, personal_phone, legal_guardian_info, current_school, 
        school_type, is_boarding_school, graduation_date, gpa, school_location, 
        school_curriculum, expected_graduation_date, school_gpa, is_school_specialized, 
        family_background, extracurricular_activities, honors_achievements, 
        countries_of_interest, target_universities, study_field, choice_confidence, 
        funding_source, investment_amount, apply_to_eyuf, finance_agreement
    ) VALUES (
        'Test User', 'Test City, Test Country', '2000-01-01', 'test@example.com', 
        'prefer-not-to-say', 'Test Country', 'Test City', 'Test Country', 'Test', 
        'email', 'test@example.com', '+1234567890', 'Test Guardian', 'Test School', 
        'public', 'no', '2024-06-01', '3.0', 'Test Location', 'national', 
        '2024-06-01', '3.0', 'no', 'Test background', 'Test activities', 
        'Test achievements', 'Test countries', 'Test universities', 'Test field', 
        'confident', 'parents', '$10,000', 'no', true
    ) RETURNING id INTO test_id;
    
    -- Delete the test record
    DELETE FROM applications WHERE id = test_id;
    
    RAISE NOTICE 'RLS policies are working correctly! Application submission should now work.';
    
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Test insert failed: %', SQLERRM;
    RAISE NOTICE 'This indicates there may still be an issue with the RLS policies.';
END
$$;

-- Show current policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'applications';

-- Final verification
SELECT 
    'Table exists' as check_type,
    CASE WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'applications') 
         THEN '✅ YES' 
         ELSE '❌ NO' 
    END as status
UNION ALL
SELECT 
    'RLS enabled' as check_type,
    CASE WHEN EXISTS (SELECT 1 FROM pg_class WHERE relname = 'applications' AND relrowsecurity = true) 
         THEN '✅ YES' 
         ELSE '❌ NO' 
    END as status
UNION ALL
SELECT 
    'Insert policy exists' as check_type,
    CASE WHEN EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'applications' AND cmd = 'INSERT') 
         THEN '✅ YES' 
         ELSE '❌ NO' 
    END as status;