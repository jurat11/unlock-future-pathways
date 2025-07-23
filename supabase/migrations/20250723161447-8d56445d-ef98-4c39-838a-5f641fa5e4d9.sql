-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  major_interest TEXT NOT NULL,
  education_status TEXT NOT NULL,
  universities TEXT NOT NULL,
  annual_contribution TEXT NOT NULL,
  additional_comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for the contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users to view all submissions (for admin)
CREATE POLICY "Authenticated users can view all submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (true);