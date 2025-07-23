-- Update admin email from admin@example.com to admin@unlocku.uz
UPDATE public.admins 
SET email = 'admin@unlocku.uz' 
WHERE email = 'admin@example.com';