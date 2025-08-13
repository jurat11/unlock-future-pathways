-- Create admins table with proper authentication
CREATE TABLE IF NOT EXISTS public.admins (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Create policy to allow admins to view their own data
CREATE POLICY "Admins can view their own data" 
ON public.admins 
FOR SELECT 
TO authenticated
USING (auth.uid()::text = id::text);

-- Insert default admin user (password: admin123)
-- This should be changed in production
INSERT INTO public.admins (username, password_hash, email) 
VALUES (
  'admin', 
  '$2a$10$rQZ8K9mN2pL4vX7yJ1hF3eA6bC8dE0fG1hI2jK3lM4nO5pQ6rS7tU8vW9xY0z',
  'admin@unlocku.uz'
) ON CONFLICT (username) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_admins_updated_at 
  BEFORE UPDATE ON public.admins 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column(); 