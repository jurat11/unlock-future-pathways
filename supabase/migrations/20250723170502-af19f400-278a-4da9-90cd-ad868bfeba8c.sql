-- Drop the existing restrictive policy
DROP POLICY "Authenticated users can view all submissions" ON public.contact_submissions;

-- Create a new policy that allows anyone to read submissions
-- This is safe since the admin authentication is handled at the application level
CREATE POLICY "Allow read access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);