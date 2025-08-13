const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting production deployment...');

try {
  // Build the React app
  console.log('📦 Building React app...');
  execSync('npm run build', { stdio: 'inherit' });

  // Create deployment folder
  const deployDir = 'production-deploy';
  if (fs.existsSync(deployDir)) {
    fs.rmSync(deployDir, { recursive: true });
  }
  fs.mkdirSync(deployDir);

  // Copy dist contents
  console.log('📁 Copying build files...');
  execSync(`cp -r dist/* ${deployDir}/`);

  // Copy .htaccess for cPanel
  console.log('📄 Copying .htaccess...');
  fs.copyFileSync('public/.htaccess', `${deployDir}/.htaccess`);

  // Create environment template
  console.log('📝 Creating environment template...');
  const envTemplate = `# Production Environment Variables
# Replace these with your actual Supabase credentials

VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Admin credentials
VITE_ADMIN_USERNAME=admin
VITE_ADMIN_PASSWORD_HASH=your_hashed_password

# App Configuration
VITE_APP_NAME=Unlock Future Pathways
VITE_APP_VERSION=1.0.0
`;

  fs.writeFileSync(`${deployDir}/.env.example`, envTemplate);

  // Create deployment instructions
  console.log('📋 Creating deployment instructions...');
  const instructions = `# 🚀 UNLOCK Future Pathways - Production Deployment

## 📁 Files to Upload

Upload ALL files from the \`production-deploy\` folder to your hosting:

### For cPanel:
1. Upload all files to \`public_html\` folder
2. Make sure \`.htaccess\` is uploaded
3. Set up environment variables in your hosting panel

### For Other Hosting:
1. Upload all files to your web root
2. Configure environment variables
3. Ensure \`.htaccess\` is present for routing

## 🔧 Environment Variables

You need to set these environment variables in your hosting:

\`\`\`
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_ADMIN_USERNAME=admin
VITE_ADMIN_PASSWORD_HASH=your_hashed_password
\`\`\`

## 🔐 Admin Access

- **URL**: yourdomain.com/unlockadmform
- **Username**: admin
- **Password**: admin123

## 📊 Database Setup

Make sure your Supabase database has the correct tables:

1. \`applications\` table with all required columns
2. \`admin_credentials\` table with admin user
3. Row Level Security enabled

## 🧪 Testing

After deployment:
1. Test the application form: yourdomain.com/apply
2. Test admin panel: yourdomain.com/unlockadmform
3. Verify form submissions appear in admin panel

## 🆘 Troubleshooting

- If you get 404 errors, check \`.htaccess\` file
- If form doesn't submit, check environment variables
- If admin panel doesn't work, verify database tables

Generated on: ${new Date().toISOString()}
`;

  fs.writeFileSync(`${deployDir}/DEPLOYMENT_INSTRUCTIONS.md`, instructions);

  console.log('✅ Production deployment ready!');
  console.log(`📁 Files are in: ${deployDir}/`);
  console.log('📋 See DEPLOYMENT_INSTRUCTIONS.md for next steps');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} 