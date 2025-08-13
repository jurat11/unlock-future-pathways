#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if domain is provided
if [ -z "$1" ]; then
    echo -e "${RED}❌ Error: Please provide a domain${NC}"
    echo "Usage: $0 <domain>"
    echo "Example: $0 beta.unlockadmissions.uz"
    exit 1
fi

DOMAIN=$1
SITE_DIR="/var/www/${DOMAIN}"

echo -e "${BLUE}🚀 Setting up server for ${DOMAIN}${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ This script must be run as root (use sudo)${NC}"
    exit 1
fi

# Update system
echo -e "${YELLOW}📦 Updating system packages...${NC}"
apt update && apt upgrade -y

# Install required packages
echo -e "${YELLOW}📦 Installing required packages...${NC}"
apt install -y nginx certbot python3-certbot-nginx zip unzip curl wget

# Create website directory
echo -e "${YELLOW}📁 Creating website directory...${NC}"
mkdir -p "$SITE_DIR"
chown -R www-data:www-data "$SITE_DIR"

# Create deployments directory
echo -e "${YELLOW}📁 Creating deployments directory...${NC}"
mkdir -p ~/deployments
cd ~/deployments

# Create deployment script
echo -e "${YELLOW}📝 Creating deployment script...${NC}"
cat > deploy.sh << 'EOF'
#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if package is provided
if [ -z "$1" ]; then
    echo -e "${RED}❌ Error: Please provide a deployment package${NC}"
    echo "Usage: $0 <package-name>"
    echo "Example: $0 unlock-beta-20250813-151752.zip"
    exit 1
fi

PACKAGE=$1
DOMAIN=$(basename $(pwd) | sed 's/.*\///')

if [ ! -f "$PACKAGE" ]; then
    echo -e "${RED}❌ Package not found: ${PACKAGE}${NC}"
    exit 1
fi

echo -e "${BLUE}🚀 Deploying ${PACKAGE} to ${DOMAIN}${NC}"

# Backup current deployment
if [ -d "/var/www/${DOMAIN}/dist" ]; then
    echo -e "${YELLOW}💾 Creating backup...${NC}"
    cp -r "/var/www/${DOMAIN}/dist" "/var/www/${DOMAIN}/dist.backup.$(date +%Y%m%d-%H%M%S)"
fi

# Extract package
echo -e "${YELLOW}📦 Extracting package...${NC}"
unzip -o "$PACKAGE" -d "/tmp/${DOMAIN}-deploy"

# Move files to website directory
echo -e "${YELLOW}📁 Moving files to website directory...${NC}"
cp -r "/tmp/${DOMAIN}-deploy/dist"/* "/var/www/${DOMAIN}/"
cp "/tmp/${DOMAIN}-deploy/server-setup.sh" "/var/www/${DOMAIN}/"
cp "/tmp/${DOMAIN}-deploy/deploy-subdomain.sh" "/var/www/${DOMAIN}/"
cp "/tmp/${DOMAIN}-deploy/DEPLOYMENT_GUIDE_SUBDOMAIN.md" "/var/www/${DOMAIN}/"
cp "/tmp/${DOMAIN}-deploy/SUPABASE_PRODUCTION_SETUP.md" "/var/www/${DOMAIN}/"
cp "/tmp/${DOMAIN}-deploy/DEPLOYMENT_FINAL_CHECKLIST.md" "/var/www/${DOMAIN}/"
cp "/tmp/${DOMAIN}-deploy/RUN_COMMENTS_MIGRATION.sql" "/var/www/${DOMAIN}/"
cp "/tmp/${DOMAIN}-deploy/env.production.example" "/var/www/${DOMAIN}/"

# Set permissions
echo -e "${YELLOW}🔐 Setting permissions...${NC}"
chown -R www-data:www-data "/var/www/${DOMAIN}"
chmod -R 755 "/var/www/${DOMAIN}"

# Clean up temporary files
echo -e "${YELLOW}🧹 Cleaning up temporary files...${NC}"
rm -rf "/tmp/${DOMAIN}-deploy"

# Test nginx configuration
echo -e "${YELLOW}🔍 Testing nginx configuration...${NC}"
nginx -t

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Nginx configuration is valid${NC}"
    
    # Reload nginx
    echo -e "${YELLOW}🔄 Reloading nginx...${NC}"
    systemctl reload nginx
    
    echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
    echo -e "${BLUE}🌐 Your website is now available at: https://${DOMAIN}${NC}"
    echo -e "${BLUE}🔐 Admin panel: https://${DOMAIN}/unlockadmform${NC}"
else
    echo -e "${RED}❌ Nginx configuration test failed${NC}"
    echo -e "${YELLOW}⚠️  Please check the configuration and try again${NC}"
    exit 1
fi
EOF

# Make deployment script executable
chmod +x deploy.sh

# Create nginx configuration
echo -e "${YELLOW}⚙️  Creating nginx configuration...${NC}"
cat > "/etc/nginx/sites-available/${DOMAIN}" << EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN};
    
    # Redirect HTTP to HTTPS
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ${DOMAIN};

    # SSL Configuration (will be configured by certbot)
    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Root directory
    root /var/www/${DOMAIN};
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing - serve index.html for all routes
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Admin panel with basic auth
    location /unlockadmform {
        auth_basic "Admin Area";
        auth_basic_user_file /etc/nginx/.htpasswd;
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

# Enable the site
echo -e "${YELLOW}🔗 Enabling nginx site...${NC}"
ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/"

# Remove default nginx site
if [ -L "/etc/nginx/sites-enabled/default" ]; then
    rm "/etc/nginx/sites-enabled/default"
fi

# Test nginx configuration
echo -e "${YELLOW}🔍 Testing nginx configuration...${NC}"
nginx -t

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Nginx configuration is valid${NC}"
    
    # Reload nginx
    echo -e "${YELLOW}🔄 Reloading nginx...${NC}"
    systemctl reload nginx
    
    echo -e "${GREEN}✅ Server setup completed successfully!${NC}"
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo -e "1. Upload your deployment package to ~/deployments/"
    echo -e "2. Run: ./deploy.sh <package-name>"
    echo -e "3. Set up SSL certificate: sudo certbot --nginx -d ${DOMAIN}"
    echo -e "4. Create admin user: sudo htpasswd -c /etc/nginx/.htpasswd admin"
    echo -e ""
    echo -e "${GREEN}🎉 Server is ready for deployment!${NC}"
else
    echo -e "${RED}❌ Nginx configuration test failed${NC}"
    echo -e "${YELLOW}⚠️  Please check the configuration and try again${NC}"
    exit 1
fi
