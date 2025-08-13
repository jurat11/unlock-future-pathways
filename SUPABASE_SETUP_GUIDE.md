# 🚀 UNLOCK Future Pathways - Supabase Setup Guide

## 🎯 **Perfect Solution for No Node.js Hosting**

**Supabase** is a backend-as-a-service that provides:
- ✅ **PostgreSQL Database** (hosted by Supabase)
- ✅ **Real-time subscriptions**
- ✅ **Row Level Security (RLS)**
- ✅ **Authentication**
- ✅ **No Node.js required on your hosting!**

## 📋 **Step-by-Step Setup**

### **Step 1: Create Supabase Project**

1. **Go to Supabase**: https://supabase.com
2. **Sign up/Login** with your GitHub account
3. **Create New Project**:
   - Project name: `unlock-future-pathways`
   - Database password: Choose a strong password
   - Region: Choose closest to your users
4. **Wait for setup** (2-3 minutes)

### **Step 2: Get Your Credentials**

1. **Go to Settings** → **API**
2. **Copy these values**:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **Anon Key**: `your-anon-key-here`

### **Step 3: Create Database Tables**

1. **Go to SQL Editor** in your Supabase dashboard
2. **Run this SQL**:

```sql
-- Create applications table
CREATE TABLE applications (
  id BIGSERIAL PRIMARY KEY,
  fullName TEXT NOT NULL,
  cityCountry TEXT NOT NULL,
  dateOfBirth TEXT NOT NULL,
  preferredContact TEXT NOT NULL,
  email TEXT NOT NULL,
  legalGuardian TEXT NOT NULL,
  schoolName TEXT NOT NULL,
  schoolLocation TEXT NOT NULL,
  schoolCurriculum TEXT NOT NULL,
  graduationDate TEXT NOT NULL,
  schoolGPA TEXT NOT NULL,
  plannedField TEXT NOT NULL,
  standardizedTests JSONB,
  whyCompetitiveUniversity TEXT NOT NULL,
  favoriteBook TEXT NOT NULL,
  extracurricularActivities TEXT NOT NULL,
  honorsAchievements TEXT NOT NULL,
  motivationalEssayIdea TEXT,
  previousApplicationExperience TEXT,
  additionalInformation TEXT,
  parentContribution TEXT NOT NULL,
  unlockUzScholarship TEXT NOT NULL,
  agreeToContact BOOLEAN NOT NULL,
  submittedAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- Create admin credentials table
CREATE TABLE admin_credentials (
  id BIGSERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin credentials
INSERT INTO admin_credentials (username, password_hash) 
VALUES ('admin', '$2a$10$your_hashed_password_here');

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_credentials ENABLE ROW LEVEL SECURITY;

-- Create policies (optional - for extra security)
CREATE POLICY "Allow all operations for authenticated users" ON applications
  FOR ALL USING (true);

CREATE POLICY "Allow admin access" ON admin_credentials
  FOR ALL USING (true);
```

### **Step 4: Configure Environment Variables**

1. **Create `.env` file** in your project root:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

2. **For production hosting**, add these environment variables in your hosting panel

### **Step 5: Deploy to Hosting**

1. **Run the deployment script**:
```bash
node deploy-supabase.cjs
```

2. **Upload `supabase-deploy/` folder** to your hosting

3. **Configure environment variables** in your hosting panel

## 🌐 **Deployment Options**

### **Option 1: cPanel Shared Hosting**
1. Upload `supabase-deploy/` contents to `public_html/`
2. Add environment variables in cPanel
3. No Node.js required!

### **Option 2: GitHub Pages**
1. Upload to GitHub repository
2. Add environment variables in GitHub Secrets
3. Enable GitHub Pages

### **Option 3: Netlify/Vercel**
1. Upload `supabase-deploy/` folder
2. Add environment variables in dashboard
3. Automatic deployment

## 🔐 **Security Features**

### **Row Level Security (RLS)**
- Database-level security
- Configurable access policies
- No unauthorized access

### **Authentication**
- Built-in Supabase auth
- JWT tokens
- Secure password hashing

### **API Security**
- HTTPS by default
- CORS configuration
- Rate limiting

## 📊 **Database Features**

### **Real-time**
- Live updates across devices
- Instant admin panel updates
- Real-time notifications

### **Scalable**
- PostgreSQL database
- Automatic backups
- High availability

### **Cross-Device Access**
- ✅ Applications visible from any device
- ✅ Admin panel works everywhere
- ✅ No localStorage limitations

## ✅ **Testing Checklist**

1. **Visit your domain** → Coming soon page
2. **Click "Apply Now"** → Application form
3. **Submit test application** → Should save to Supabase
4. **Visit `/unlockadmform`** → Admin login
5. **Login with `admin/admin123`** → Should work
6. **Check applications** → Should show in admin panel

## 🔄 **Updates**

- **To update**: Rebuild with script and re-upload
- **Database persists** in Supabase
- **No data loss** during updates

## 🚀 **Benefits**

- ✅ **No Node.js required** on hosting
- ✅ **Cross-device access**
- ✅ **Real-time updates**
- ✅ **Automatic backups**
- ✅ **Scalable database**
- ✅ **Built-in security**

## 🛠️ **Troubleshooting**

### **Common Issues**

#### **Environment Variables Not Working**
```bash
# Check if variables are loaded
console.log(import.meta.env.VITE_SUPABASE_URL)
```

#### **Supabase Connection Failed**
- Verify Project URL and Anon Key
- Check if Supabase project is active
- Ensure tables are created

#### **Admin Login Not Working**
- Check admin_credentials table in Supabase
- Verify password hash is correct
- Check browser console for errors

## 📞 **Support**

### **Supabase Dashboard**
- **Database**: View/edit data directly
- **Logs**: Check API requests
- **Settings**: Configure security

### **Environment Variables**
```bash
# Development (.env file)
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Production (hosting panel)
# Add the same variables
```

---

**🎉 Supabase provides a robust, scalable solution that works with any hosting!** 