-- Change email column to username and update the data
ALTER TABLE public.admins RENAME COLUMN email TO username;

-- Update the admin username
UPDATE public.admins 
SET username = 'admin' 
WHERE username = 'k.shohruh0242@gmail.com';

-- Update the password hash to correct bcrypt hash for "admin123"
UPDATE public.admins 
SET password_hash = '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WOFpHH6xU6Y6wPsxOmJu6' 
WHERE username = 'admin';