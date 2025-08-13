const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting UNLOCK website deployment build...\n');

try {
  // Step 1: Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully!\n');

  // Step 2: Build for production
  console.log('🔨 Building for production...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');

  // Step 3: Copy .htaccess to dist
  console.log('📋 Copying .htaccess...');
  if (fs.existsSync('public/.htaccess')) {
    fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
    console.log('✅ .htaccess copied successfully!\n');
  } else {
    console.log('⚠️  .htaccess not found in public folder\n');
  }

  // Step 4: Copy simple .htaccess alternative
  console.log('📋 Copying simple .htaccess alternative...');
  if (fs.existsSync('public/.htaccess-simple')) {
    fs.copyFileSync('public/.htaccess-simple', 'dist/.htaccess-simple');
    console.log('✅ .htaccess-simple copied successfully!\n');
  } else {
    console.log('⚠️  .htaccess-simple not found in public folder\n');
  }

  // Step 5: Copy minimal .htaccess alternative
  console.log('📋 Copying minimal .htaccess alternative...');
  if (fs.existsSync('public/.htaccess-minimal')) {
    fs.copyFileSync('public/.htaccess-minimal', 'dist/.htaccess-minimal');
    console.log('✅ .htaccess-minimal copied successfully!\n');
  } else {
    console.log('⚠️  .htaccess-minimal not found in public folder\n');
  }

  // Step 6: Copy coming soon page
  console.log('📄 Copying coming soon page...');
  if (fs.existsSync('public/comingsoonunlock')) {
    execSync('cp -r public/comingsoonunlock dist/', { stdio: 'inherit' });
    console.log('✅ Coming soon page copied successfully!\n');
  } else {
    console.log('⚠️  comingsoonunlock folder not found in public folder\n');
  }

  // Copy additional assets
  if (fs.existsSync('public/university-logos')) {
    execSync('cp -r public/university-logos dist/', { stdio: 'inherit' });
    console.log('✅ university-logos folder copied to dist/');
  } else {
    console.log('⚠️  university-logos folder not found in public folder\n');
  }

  // Step 7: Check dist folder contents
  console.log('📁 Checking dist folder contents...');
  if (fs.existsSync('dist')) {
    const distContents = fs.readdirSync('dist');
    console.log('📋 Files in dist folder:');
    distContents.forEach(file => {
      const stats = fs.statSync(path.join('dist', file));
      const type = stats.isDirectory() ? '📁' : '📄';
      console.log(`  ${type} ${file}`);
    });
    console.log('');
  }

  console.log('🎉 Build complete! Your project is ready for deployment.\n');
  console.log('📤 Next steps:');
  console.log('  1. Upload the entire contents of the "dist" folder to your cPanel public_html directory');
  console.log('  2. Ensure .htaccess is uploaded (it should be in the dist folder)');
  console.log('  3. If routing doesn\'t work, try using .htaccess-simple instead');
  console.log('  4. Test your live site\n');
  
  console.log('🌐 Available URLs after deployment:');
  console.log('  - Main site: yourdomain.com');
  console.log('  - Coming soon: yourdomain.com/coming-soon');
  console.log('  - Apply form: yourdomain.com/apply');
  console.log('  - Admin panel: yourdomain.com/unlockadmform\n');
  
  console.log('🔐 Admin credentials:');
  console.log('  - Username: admin');
  console.log('  - Password: admin123\n');

  console.log('🔧 If you encounter 404 errors:');
  console.log('  1. Check that .htaccess file is uploaded');
  console.log('  2. Try using .htaccess-simple instead of .htaccess');
  console.log('  3. Ensure mod_rewrite is enabled in cPanel');
  console.log('  4. Check file permissions (644 for files, 755 for directories)\n');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.log('\n🔧 Troubleshooting:');
  console.log('  1. Make sure Node.js is installed');
  console.log('  2. Check that all dependencies are installed');
  console.log('  3. Ensure you have write permissions in the project directory');
  console.log('  4. Try running: npm install && npm run build');
  process.exit(1);
} 