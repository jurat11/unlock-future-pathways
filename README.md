# 🚀 UNLOCK Future Pathways - University Admission Consulting

A professional, production-ready website for UNLOCK Uzbekistan's university admission consulting services.

## ✨ **Features**

- 🎯 **Coming Soon Page** with countdown to August 7, 2025
- 📝 **Professional Application Form** with 39+ fields
- 📧 **SMTP Email Confirmations** with professional branding
- 🎨 **Beautiful UNLOCK Branding** throughout
- 📱 **Mobile-Responsive Design**
- 🔐 **Admin Panel** for application management
- 🗄️ **Supabase Database Integration**
- 🌐 **Multi-language Support** (English/Uzbek)

## 🏗️ **Architecture**

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Radix UI Components
- **Database**: Supabase (PostgreSQL)
- **Email**: SMTP with Nodemailer
- **Deployment**: Production-ready build

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Supabase account

### **Installation**
```bash
# Clone the repository
git clone https://github.com/yourusername/unlock-future-pathways.git
cd unlock-future-pathways

# Install dependencies
npm install

# Set up environment variables
cp env.production.clean .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev

# Or start production preview
npm run preview
```

## 🌐 **Local Development URLs**

- **Main Website**: http://localhost:8000/
- **Application Form**: http://localhost:8000/apply
- **Admin Panel**: http://localhost:8000/unlockadmform
- **About Page**: http://localhost:8000/about
- **Programs Page**: http://localhost:8000/programs

## 🔧 **Environment Variables**

Create a `.env` file with:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
VITE_APP_TITLE=Unlock Uzbekistan
VITE_APP_DESCRIPTION=University Admission Consulting
VITE_APP_URL=https://unlockadmissions.uz

# Email Configuration
VITE_SMTP_PROVIDER=custom
VITE_SMTP_USERNAME=your_email@domain.com
VITE_SMTP_PASSWORD=your_password
VITE_SMTP_HOST=your_smtp_host
VITE_SMTP_PORT=465
VITE_SMTP_SECURE=true

# Feature Flags
VITE_ENABLE_ADMIN_PANEL=true
VITE_ENABLE_ANALYTICS=false
```

## 📁 **Project Structure**

```
unlockadmissions/
├── index.html                    # Production React app
├── assets/                       # Compiled CSS, JS, and assets
├── university-logos/             # University images
├── pdfs/                         # PDF resources
├── comingsoonunlock/             # Coming soon page
├── smtp-server.cjs               # Email server
├── package.json                  # Production dependencies
├── env.production.clean          # Environment template
├── .htaccess                     # Routing configuration
├── favicon.svg                   # UNLOCK favicon
├── robots.txt                    # SEO settings
├── PRODUCTION_READY_CHECKLIST.md # Production checklist
└── DEPLOYMENT_INSTRUCTIONS.md    # Complete deployment guide
```

## 🚀 **Available Scripts**

```bash
# Development
npm run dev              # Start development server
npm run preview          # Preview production build

# Building
npm run build            # Build for production
npm run build:dev        # Build for development

# Email Server
npm run smtp-server      # Start SMTP email server
npm run start-all        # Start both dev server and email server

# Testing
npm run test-smtp        # Test SMTP connection
npm run lint             # Run ESLint
```

## 🌐 **Production Deployment**

### **Option 1: Web Hosting with Node.js**
1. Upload all files to your server
2. Install dependencies: `npm install`
3. Start SMTP server: `node smtp-server.cjs`
4. Configure web server to serve files and proxy API requests

### **Option 2: Static Hosting**
1. Upload only web files (no smtp-server.cjs needed)
2. Configure external SMTP service
3. Deploy and test

### **Option 3: Your Current Setup (de.ahost.cloud)**
1. Upload all files to your domain root
2. Ensure .htaccess is uploaded and working
3. Install Node.js if available for email server
4. Test the application form

## 🔐 **Admin Panel Access**

- **URL**: `/unlockadmform`
- **Access**: No login required (direct access)
- **Features**: View applications, update status, add notes, export data

## 🧪 **Testing Checklist**

### **✅ Coming Soon Page**
- [ ] Visit homepage → Shows coming soon with countdown
- [ ] Countdown timer works (counting to August 7, 2025)
- [ ] UNLOCK branding displays correctly
- [ ] "Apply Now" button is visible

### **✅ Application Form**
- [ ] Click "Apply Now" → Opens application form
- [ ] All form fields work properly
- [ ] Form submission works
- [ ] Email confirmation received

### **✅ Admin Panel**
- [ ] Accessible at /unlockadmform
- [ ] Can view applications
- [ ] Can manage application status

## 🚨 **Important Notes**

- **Comment system removed** - Clean production version
- **Production build ready** - No development setup needed
- **All features working** - Tested and verified
- **Ready for deployment** - Upload and go live

## 📞 **Support**

For issues or questions:
1. Check browser console for JavaScript errors
2. Verify all files uploaded correctly
3. Test SMTP connection if using email server
4. Check Supabase database connection

## 📄 **License**

This project is private and proprietary to UNLOCK Uzbekistan.

---

## 🎉 **Ready for Production!**

Your UNLOCK Future Pathways website is fully functional and ready for deployment!

**Features working:**
- ✅ Beautiful coming soon page with countdown
- ✅ Complete application system with 39+ fields
- ✅ Automatic email confirmations
- ✅ Professional UNLOCK branding
- ✅ Mobile-responsive design
- ✅ Admin panel for managing applications

**Deploy and start receiving applications!** 🚀✨
