-- 🚨 IMPORTANT: Run this in your Supabase SQL Editor before testing
-- This ensures form submissions work properly

-- Disable RLS to allow form submissions
ALTER TABLE applications DISABLE ROW LEVEL SECURITY;

-- Verify the table exists and is ready
SELECT 
    'Table Status' as check_type,
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'applications') 
        THEN '✅ Table exists and ready'
        ELSE '❌ Table missing - check schema'
    END as status
UNION ALL
SELECT 
    'RLS Status' as check_type,
    CASE 
        WHEN EXISTS (SELECT 1 FROM pg_class WHERE relname = 'applications' AND relrowsecurity = false) 
        THEN '✅ Submissions allowed'
        ELSE '❌ Submissions blocked by RLS'
    END as status;

-- Show table structure to verify all columns exist
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'applications' 
AND table_schema = 'public'
ORDER BY ordinal_position
LIMIT 10; -- Just show first 10 columns for verification