# Subdomain Deployment Guide - Unlock Uzbekistan

## Overview
This guide will help you deploy the Unlock Uzbekistan website to a subdomain like `beta.unlockadmissions.uz` or `dev.unlockadmissions.uz`.

## Prerequisites

### Server Requirements
- **VPS/Server** with Ubuntu 20.04+ or similar Linux distribution
- **Nginx** web server
- **Node.js** 18+ (for build process only)
- **SSL Certificate** (Let's Encrypt recommended)
- **Domain Access** to create subdomains

### Services Required
- **Supabase** account with configured database
- **Email Service** (optional, for contact forms)

## Quick Deployment

### Step 1: Prepare Environment
```bash
# Copy environment template
cp env.production.example .env

# Edit with your actual values
nano .env
```

### Step 2: Build and Deploy
```bash
# For beta subdomain
npm run deploy:beta

# OR for dev subdomain
npm run deploy:dev
```

### Step 3: Server Setup
Follow the generated deployment instructions in `DEPLOYMENT_SUMMARY_[ENV].md`

## Detailed Setup

### 1. Environment Configuration

Create a `.env` file with your production values:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key

# App Configuration
VITE_APP_TITLE=Unlock Uzbekistan - Beta
VITE_APP_DESCRIPTION=University Admission Consulting - Beta Version
VITE_APP_URL=https://beta.unlockadmissions.uz

# Feature Flags
VITE_ENABLE_COMMENTS=true
VITE_ENABLE_ADMIN_PANEL=true
```

### 2. Build Optimization

The production build includes:
- **Code Splitting**: Separate bundles for vendor, UI, and app code
- **Minification**: Optimized for smaller file sizes
- **Source Maps**: Disabled for production
- **Cache Optimization**: Long-term caching for static assets

### 3. Server Configuration

#### Nginx Setup
```nginx
server {
    listen 443 ssl http2;
    server_name beta.unlockadmissions.uz;

    root /var/www/beta.unlockadmissions.uz;
    index index.html;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Admin panel security
    location /unlockadmform {
        auth_basic "Admin Area";
        auth_basic_user_file /etc/nginx/.htpasswd;
        try_files $uri $uri/ /index.html;
    }
}
```

#### SSL Certificate
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d beta.unlockadmissions.uz
```

### 4. Database Setup

#### Supabase Migration
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the contents of `RUN_COMMENTS_MIGRATION.sql`

#### Verify Tables
Ensure these tables exist:
- `applications` - For application form submissions
- `admins` - For admin authentication
- `comments` - For comment system
- `contact_submissions` - For contact form submissions

### 5. Domain Configuration

#### DNS Setup
Add an A record for your subdomain:
```
Type: A
Name: beta (or dev)
Value: Your server IP address
TTL: 300
```

#### Subdomain Configuration
1. **beta.unlockadmissions.uz** - For beta testing with real users
2. **dev.unlockadmissions.uz** - For development and internal testing

## Features Included

### Core Website
- ✅ **Landing Page** with hero section, services, testimonials
- ✅ **About Us** page with team information
- ✅ **Programs** page detailing services
- ✅ **Free Resources** with downloadable guides
- ✅ **Contact Form** with Supabase integration
- ✅ **Application Form** for student submissions

### Admin Panel
- ✅ **Admin Dashboard** at `/unlockadmform`
- ✅ **Application Management** with filtering and export
- ✅ **Analytics Dashboard** with charts and insights
- ✅ **Comment Management** for user feedback
- ✅ **Secure Authentication** with Supabase

### Interactive Features
- ✅ **Comment System** for user feedback on any page
- ✅ **Multi-language Support** (English/Uzbek/Russian)
- ✅ **Responsive Design** for all device types
- ✅ **SEO Optimized** with proper meta tags

## Security Features

### Frontend Security
- **Content Security Policy** headers
- **XSS Protection** enabled
- **HTTPS Enforcement** with redirects
- **Admin Panel Protection** with basic auth

### Backend Security
- **Row Level Security** in Supabase
- **API Rate Limiting** (configured in Supabase)
- **Input Validation** on all forms
- **SQL Injection Prevention** with parameterized queries

## Performance Optimizations

### Build Optimizations
- **Tree Shaking** to remove unused code
- **Code Splitting** for faster initial loads
- **Asset Optimization** with compression
- **Modern JavaScript** targeting ES2015+

### Runtime Optimizations
- **Lazy Loading** for images and components
- **Virtual Scrolling** for large lists
- **Memoization** for expensive calculations
- **Service Worker** for caching (optional)

## Monitoring and Maintenance

### Health Checks
- **Website Status**: Check main pages load correctly
- **Admin Panel**: Verify admin login and functionality
- **Database**: Monitor Supabase dashboard for activity
- **Comments**: Test comment creation and management

### Log Monitoring
```bash
# Monitor nginx access logs
sudo tail -f /var/log/nginx/access.log

# Monitor nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check system resources
htop
df -h
```

### Backup Strategy
- **Database**: Supabase handles automatic backups
- **Code**: Git repository with version control
- **Assets**: Backup uploaded files (if any)
- **Configuration**: Backup nginx and environment configs

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
npm run clean
npm ci
npm run build:production
```

#### Database Connection Issues
- Verify Supabase URL and keys in `.env`
- Check RLS policies in Supabase dashboard
- Ensure database tables exist

#### SSL Certificate Problems
```bash
# Renew SSL certificate
sudo certbot renew

# Test SSL configuration
sudo nginx -t
```

#### Comment System Not Working
- Check browser console for errors
- Verify Supabase connection
- Ensure comments table exists with proper RLS policies

## Testing Checklist

Before going live, test:
- [ ] All pages load correctly
- [ ] Application form submission works
- [ ] Contact form sends emails
- [ ] Admin panel login functions
- [ ] Comment system creates/displays comments
- [ ] Mobile responsiveness
- [ ] SSL certificate is valid
- [ ] All admin features work
- [ ] Database connections are stable

## Support

### Documentation
- **Main Guide**: This document
- **Supabase Setup**: `SUPABASE_COMMENTS_SETUP.md`
- **Comment System**: `COMMENTING_SYSTEM_GUIDE.md`
- **Admin Dashboard**: `ADMIN_DASHBOARD_GUIDE.md`

### Getting Help
1. Check browser console for errors
2. Review nginx error logs
3. Verify Supabase dashboard for database issues
4. Check environment variable configuration
5. Ensure all required services are running

## Post-Deployment

### Final Steps
1. **Test Everything**: Go through the testing checklist
2. **Set Up Monitoring**: Configure uptime monitoring
3. **Update DNS**: Ensure subdomain resolves correctly
4. **Notify Users**: Share the beta/dev URL with testers
5. **Monitor Performance**: Watch for any issues in the first 24 hours

### Scaling Considerations
- **CDN**: Consider CloudFlare for global performance
- **Database**: Monitor Supabase usage and upgrade if needed
- **Server Resources**: Monitor CPU/RAM usage and scale accordingly
- **Backup Strategy**: Implement regular backup procedures

---

🎉 **Your subdomain deployment is ready!** 

Visit your deployed site at `https://beta.unlockadmissions.uz` or `https://dev.unlockadmissions.uz` and start testing!
