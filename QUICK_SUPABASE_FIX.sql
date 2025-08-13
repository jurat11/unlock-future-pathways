-- Quick Supabase Fix for Testing
-- Run this in Supabase SQL Editor before testing

-- Disable RLS to allow form submissions during testing
ALTER TABLE applications DISABLE ROW LEVEL SECURITY;

-- Verify the fix worked
SELECT 
    'Table exists' as check_type,
    CASE WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'applications') 
         THEN '✅ YES' 
         ELSE '❌ NO' 
    END as status
UNION ALL
SELECT 
    'RLS disabled' as check_type,
    CASE WHEN EXISTS (SELECT 1 FROM pg_class WHERE relname = 'applications' AND relrowsecurity = false) 
         THEN '✅ YES (submissions allowed)' 
         ELSE '❌ NO (submissions blocked)' 
    END as status;

-- Show recent applications (to verify submissions work)
SELECT 
    id,
    full_name,
    email,
    submitted_at,
    'Test if this appears after form submission' as note
FROM applications 
ORDER BY submitted_at DESC 
LIMIT 5;