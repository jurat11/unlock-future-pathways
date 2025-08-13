-- Create applications table
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  full_name TEXT NOT NULL,
  city_country TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  preferred_contact TEXT NOT NULL,
  email TEXT NOT NULL,
  legal_guardian TEXT NOT NULL,
  
  -- Academic Information
  school_name TEXT NOT NULL,
  school_curriculum TEXT NOT NULL,
  school_gpa TEXT NOT NULL,
  planned_field TEXT NOT NULL,
  standardized_tests JSONB DEFAULT '[]',
  
  -- Essay Questions
  why_competitive_university TEXT NOT NULL,
  favorite_book TEXT NOT NULL,
  extracurricular_activities TEXT NOT NULL,
  honors_achievements TEXT NOT NULL,
  motivational_essay_idea TEXT,
  previous_application_experience TEXT,
  additional_information TEXT,
  
  -- Financial Information
  parent_contribution TEXT NOT NULL,
  full_support_coop TEXT NOT NULL,
  agree_to_contact BOOLEAN NOT NULL DEFAULT false,
  
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

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_applications_submitted_at ON public.applications(submitted_at);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);

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