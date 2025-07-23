-- Change email column to username and update the data
ALTER TABLE public.admins RENAME COLUMN email TO username;

-- Update the admin username
UPDATE public.admins 
SET username = 'admin' 
WHERE username = 'k.shohruh0242@gmail.com';

-- Update the password to plain text (NOT RECOMMENDED FOR PRODUCTION)
UPDATE public.admins 
SET password_hash = 'admin123' 
WHERE username = 'admin';