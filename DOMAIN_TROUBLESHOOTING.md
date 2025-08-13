# 🌐 Domain Connection Troubleshooting Guide

## 🚨 "Refused to Connect" Error Solutions

### **1. DNS Configuration Issues**

#### **Problem**: Domain not pointing to correct server
#### **Solutions**:

**Check DNS Settings**:
1. Go to your domain registrar (where you bought the domain)
2. Check DNS settings/nameservers
3. Ensure nameservers point to your hosting provider

**Common Nameserver Settings**:
```
ns1.yourhostingprovider.com
ns2.yourhostingprovider.com
```

**Alternative - Use A Records**:
```
Type: A
Name: @
Value: [Your hosting IP address]
TTL: 3600
```

### **2. Hosting Provider Issues**

#### **Problem**: Hosting not properly configured
#### **Solutions**:

**Check Hosting Status**:
1. Log into your hosting control panel
2. Check if hosting is active/suspended
3. Verify domain is properly assigned to hosting

**Contact Hosting Support**:
- Ask them to verify domain configuration
- Request IP address for A record setup
- Check if domain is properly linked to hosting account

### **3. SSL Certificate Issues**

#### **Problem**: SSL not configured properly
#### **Solutions**:

**Enable SSL in cPanel**:
1. Go to cPanel → SSL/TLS
2. Install SSL certificate for your domain
3. Force HTTPS redirect

**Update .htaccess for SSL**:
```apache
# Uncomment these lines in your .htaccess file:
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### **4. Domain Propagation**

#### **Problem**: DNS changes not propagated yet
#### **Solutions**:

**Wait for Propagation**:
- DNS changes can take 24-48 hours
- Check propagation status: https://www.whatsmydns.net/

**Test with IP Address**:
- Try accessing your site using the hosting IP directly
- If IP works, it's a DNS issue

### **5. Hosting Configuration**

#### **Problem**: Domain not properly configured in hosting
#### **Solutions**:

**Add Domain in cPanel**:
1. Go to cPanel → Domains
2. Add your domain: `unlockadmissions.uz`
3. Set document root to `public_html`

**Check Domain Aliases**:
1. Go to cPanel → Domains
2. Add domain alias if needed
3. Ensure primary domain is set correctly

## 🔍 **Step-by-Step Diagnosis**

### **Step 1: Check Domain Status**
```bash
# Check if domain resolves
nslookup unlockadmissions.uz

# Check DNS propagation
dig unlockadmissions.uz

# Test with different DNS servers
nslookup unlockadmissions.uz 8.8.8.8
```

### **Step 2: Check Hosting Status**
1. **Login to hosting control panel**
2. **Check domain assignment**
3. **Verify hosting is active**
4. **Check for any suspension notices**

### **Step 3: Test Direct Access**
1. **Get hosting IP address** from hosting provider
2. **Try accessing via IP**: `http://[YOUR_IP]/`
3. **If IP works**: DNS issue
4. **If IP doesn't work**: Hosting issue

### **Step 4: Check File Upload**
1. **Verify files are uploaded** to `public_html`
2. **Check file permissions** (644 for files, 755 for directories)
3. **Ensure `.htaccess` is present**

## 🛠️ **Quick Fixes**

### **Fix 1: Update DNS Records**
```
Type: A
Name: @
Value: [Your hosting IP]
TTL: 3600

Type: CNAME
Name: www
Value: unlockadmissions.uz
TTL: 3600
```

### **Fix 2: Contact Hosting Provider**
**Ask them to**:
1. Verify domain is properly configured
2. Provide correct nameservers
3. Check if hosting is active
4. Confirm SSL certificate status

### **Fix 3: Alternative Domain Setup**
If main domain doesn't work:
1. **Use subdomain**: `app.unlockadmissions.uz`
2. **Use hosting subdomain**: `yourdomain.hostingprovider.com`
3. **Temporary solution**: Use hosting IP directly

## 📞 **Information to Provide Hosting Support**

### **Technical Details**:
1. **Domain**: unlockadmissions.uz
2. **Error**: "Refused to connect"
3. **Hosting provider name**
4. **cPanel username**
5. **When the issue started**

### **What to Ask Hosting Support**:
1. **Is my hosting account active?**
2. **Is the domain properly configured?**
3. **What are the correct nameservers?**
4. **What is the hosting IP address?**
5. **Is SSL certificate installed?**

## ✅ **Success Checklist**

- [ ] Domain resolves to hosting IP
- [ ] Hosting account is active
- [ ] Domain is properly configured in hosting
- [ ] Files are uploaded to `public_html`
- [ ] SSL certificate is installed (if using HTTPS)
- [ ] No firewall blocking access
- [ ] DNS propagation is complete

## 🚀 **Alternative Solutions**

### **Option 1: Use Hosting Subdomain**
- Ask hosting provider for subdomain
- Example: `unlockadmissions.hostingprovider.com`
- Upload files to this subdomain

### **Option 2: Use IP Address Temporarily**
- Get hosting IP from provider
- Access site via IP: `http://[IP]/`
- Use this until DNS is fixed

### **Option 3: Change Domain Registrar**
- If current registrar is causing issues
- Transfer domain to hosting provider
- Use their DNS management

## 🔧 **Emergency Contact**

If nothing works:
1. **Contact hosting support immediately**
2. **Provide domain and error details**
3. **Request urgent assistance**
4. **Ask for alternative access methods** 