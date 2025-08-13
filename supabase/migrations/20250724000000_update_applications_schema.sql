-- Update applications table to match current form structure
-- Drop the existing table and recreate it with the new schema

DROP TABLE IF EXISTS public.applications CASCADE;

-- Create applications table with updated schema
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
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
  personal_phone TEXT NOT NULL,
  legal_guardian_info TEXT NOT NULL,

  -- Education
  current_school TEXT NOT NULL,
  school_type TEXT NOT NULL,
  is_boarding_school TEXT NOT NULL,
  graduation_date TEXT NOT NULL,
  gpa TEXT NOT NULL,
  full_school_name TEXT NOT NULL,
  school_location TEXT NOT NULL,
  school_curriculum TEXT NOT NULL,
  expected_graduation_date TEXT NOT NULL,
  school_gpa TEXT NOT NULL,
  is_school_specialized TEXT NOT NULL,
  specialization_area TEXT,

  -- Short Essays
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
  finance_agreement BOOLEAN NOT NULL DEFAULT false,

  -- Standardized Tests (stored as JSONB)
  standardized_tests JSONB DEFAULT '[]',
  
  -- Metadata
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications
CREATE POLICY "Anyone can insert applications"
ON public.applications
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to view applications
CREATE POLICY "Authenticated users can view applications"
ON public.applications
FOR SELECT
TO authenticated
USING (true);

-- Create policy to allow authenticated users to update applications
CREATE POLICY "Authenticated users can update applications"
ON public.applications
FOR UPDATE
TO authenticated
USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_submitted_at ON public.applications(submitted_at);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_full_name ON public.applications(full_name);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_applications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON public.applications
  FOR EACH ROW
  EXECUTE FUNCTION update_applications_updated_at(); 