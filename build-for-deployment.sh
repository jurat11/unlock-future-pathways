#!/bin/bash

echo "🚀 Building UNLOCK website for deployment..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build

# Copy .htaccess to dist
echo "📋 Copying .htaccess..."
cp public/.htaccess dist/

# Copy coming soon page
echo "📄 Copying coming soon page..."
cp -r public/comingsoonunlock dist/

# Copy university logos
echo "🎓 Copying university logos..."
cp -r public/lovable-uploads dist/

echo "✅ Build complete! Upload the contents of the 'dist' folder to your cPanel public_html directory."
echo ""
echo "📁 Files to upload:"
echo "  - All contents of dist/ folder"
echo "  - .htaccess file"
echo "  - comingsoonunlock/ folder"
echo "  - lovable-uploads/ folder"
echo ""
echo "🌐 Available URLs after deployment:"
echo "  - Main site: yourdomain.com"
echo "  - Coming soon: yourdomain.com/coming-soon"
echo "  - Apply form: yourdomain.com/apply"
echo "  - Admin panel: yourdomain.com/unlockadmform"
echo ""
echo "🔐 Admin credentials:"
echo "  - Username: admin"
echo "  - Password: admin123" 