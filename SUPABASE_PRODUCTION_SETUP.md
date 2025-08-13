# Supabase Production Setup Guide

## Overview
This guide helps you configure Supabase for production deployment of the Unlock Uzbekistan website.

## Database Configuration

### 1. Run Required Migrations

Execute these SQL scripts in your Supabase SQL Editor:

#### Comments Table Migration
```sql
-- Run the contents of RUN_COMMENTS_MIGRATION.sql
-- This creates the comments table with proper RLS policies
```

#### Verify Existing Tables
Ensure these tables exist and are properly configured:

```sql
-- Check all required tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('applications', 'admins', 'comments', 'contact_submissions');
```

### 2. Row Level Security (RLS) Policies

#### Applications Table
```sql
-- Allow public to insert applications
CREATE POLICY "Public can insert applications" ON applications
FOR INSERT WITH CHECK (true);

-- Allow admins to read all applications
CREATE POLICY "Admins can read applications" ON applications
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM admins 
    WHERE username = current_setting('request.jwt.claims', true)::json->>'username'
  )
);
```

#### Comments Table
```sql
-- Already configured in RUN_COMMENTS_MIGRATION.sql
-- Verify policies exist:
SELECT policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'comments';
```

#### Admin Authentication
```sql
-- Verify admin user exists
SELECT username, created_at FROM admins;

-- If no admin exists, create one:
INSERT INTO admins (username, password_hash) 
VALUES ('admin', '$2a$10$example_hash_here');
```

### 3. API Configuration

#### Enable Realtime (Optional)
If you want real-time comment updates:

```sql
-- Enable realtime for comments
ALTER PUBLICATION supabase_realtime ADD TABLE comments;
```

#### Database Settings
In your Supabase dashboard:
1. Go to Settings → Database
2. Ensure these settings:
   - **Connection pooling**: Enabled
   - **Connection limit**: 100 (or appropriate for your plan)
   - **Statement timeout**: 30s

## Environment Variables

### Production Environment Setup

Create your production `.env` file:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# App Configuration
VITE_APP_TITLE=Unlock Uzbekistan
VITE_APP_DESCRIPTION=University Admission Consulting Services
VITE_APP_URL=https://beta.unlockadmissions.uz

# Feature Flags
VITE_ENABLE_COMMENTS=true
VITE_ENABLE_ADMIN_PANEL=true
VITE_ENABLE_ANALYTICS=true
```

### Security Configuration

#### API Keys
- **Anon Key**: Safe to expose in frontend
- **Service Role Key**: Keep secret, only for server-side operations

#### CORS Settings
In Supabase Dashboard → Authentication → Settings:
```
Site URL: https://beta.unlockadmissions.uz
Additional URLs: 
  https://dev.unlockadmissions.uz
  https://unlockadmissions.uz
```

## Performance Optimization

### 1. Database Indexes

```sql
-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_comments_page ON comments(page);
CREATE INDEX IF NOT EXISTS idx_comments_status_created ON comments(status, created_at DESC);
```

### 2. Connection Pooling

Configure in Supabase Dashboard → Settings → Database:
- **Pool Mode**: Transaction
- **Pool Size**: 15-25 (based on your plan)
- **Default Pool Size**: 20

### 3. Query Optimization

```sql
-- Create materialized view for analytics (optional)
CREATE MATERIALIZED VIEW application_stats AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as total_applications,
  COUNT(*) FILTER (WHERE status = 'pending') as pending,
  COUNT(*) FILTER (WHERE status = 'approved') as approved,
  COUNT(*) FILTER (WHERE status = 'rejected') as rejected
FROM applications 
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- Refresh weekly
CREATE OR REPLACE FUNCTION refresh_application_stats()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW application_stats;
END;
$$ LANGUAGE plpgsql;
```

## Backup Strategy

### 1. Automatic Backups
Supabase provides automatic daily backups. Verify in Dashboard → Settings → Database → Backups.

### 2. Manual Backup
```sql
-- Export important data periodically
COPY (SELECT * FROM applications) TO '/tmp/applications_backup.csv' CSV HEADER;
COPY (SELECT * FROM comments) TO '/tmp/comments_backup.csv' CSV HEADER;
```

### 3. Migration Scripts
Keep all migration scripts in version control:
- `RUN_COMMENTS_MIGRATION.sql`
- `COMPLETE_SCHEMA_UPDATE.sql`
- Any custom migrations

## Monitoring and Alerting

### 1. Supabase Dashboard Monitoring
Monitor these metrics:
- **Database CPU usage**
- **Database memory usage**
- **Connection count**
- **Query performance**
- **Error rates**

### 2. Custom Monitoring
```sql
-- Monitor application submission rate
SELECT 
  DATE_TRUNC('hour', created_at) as hour,
  COUNT(*) as submissions
FROM applications 
WHERE created_at > NOW() - INTERVAL '24 hours'
GROUP BY DATE_TRUNC('hour', created_at)
ORDER BY hour DESC;

-- Monitor comment activity
SELECT 
  status,
  COUNT(*) as count,
  MAX(created_at) as latest
FROM comments 
GROUP BY status;
```

## Security Best Practices

### 1. RLS Policies Review
```sql
-- Audit all RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
```

### 2. API Usage Monitoring
Monitor API calls in Supabase Dashboard → Settings → API.

### 3. Authentication Security
- Enable email confirmation
- Set appropriate password policies
- Monitor failed login attempts

## Testing Production Setup

### 1. Database Connection Test
```javascript
// Test in browser console after deployment
import { supabase } from './src/integrations/supabase/client';

// Test connection
const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('applications').select('count');
    console.log('Database connection:', error ? 'Failed' : 'Success');
    return !error;
  } catch (err) {
    console.error('Connection error:', err);
    return false;
  }
};

testConnection();
```

### 2. Comment System Test
```javascript
// Test comment creation
const testComments = async () => {
  const { data, error } = await supabase
    .from('comments')
    .insert([{
      text: 'Test comment',
      element: 'test-element',
      page: 'test-page',
      coordinates: { x: 100, y: 100 }
    }]);
  
  console.log('Comment test:', error ? 'Failed' : 'Success');
  return !error;
};
```

### 3. Admin Panel Test
1. Navigate to `/unlockadmform`
2. Test admin login
3. Verify all admin functions work
4. Test comment management
5. Test application viewing and export

## Troubleshooting

### Common Issues

#### Connection Errors
```sql
-- Check connection limits
SELECT count(*) FROM pg_stat_activity;

-- Check for long-running queries
SELECT pid, now() - pg_stat_activity.query_start AS duration, query 
FROM pg_stat_activity 
WHERE (now() - pg_stat_activity.query_start) > interval '5 minutes';
```

#### RLS Policy Issues
```sql
-- Test RLS policies
SET ROLE authenticated;
SELECT * FROM comments LIMIT 1;

-- Reset role
RESET ROLE;
```

#### Performance Issues
```sql
-- Check slow queries
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
```

## Maintenance

### Regular Tasks
1. **Weekly**: Review application submissions and comments
2. **Monthly**: Check database performance metrics
3. **Quarterly**: Review and update RLS policies
4. **As needed**: Update Supabase client libraries

### Updates
1. Monitor Supabase changelog for updates
2. Test new features in development first
3. Update client libraries regularly
4. Keep migration scripts updated

---

## Production Checklist

Before going live:
- [ ] All required tables exist
- [ ] RLS policies are configured
- [ ] Environment variables are set
- [ ] CORS settings are configured
- [ ] Backup strategy is in place
- [ ] Monitoring is set up
- [ ] Performance indexes are created
- [ ] Security policies are reviewed
- [ ] Connection limits are appropriate
- [ ] API usage is monitored

Your Supabase production environment is now ready for deployment!
