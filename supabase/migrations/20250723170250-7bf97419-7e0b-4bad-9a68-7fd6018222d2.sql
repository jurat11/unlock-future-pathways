-- Update the password to plain text for testing
UPDATE public.admins 
SET password_hash = 'admin123' 
WHERE username = 'admin';