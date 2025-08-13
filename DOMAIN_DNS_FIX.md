# 🔧 Domain & DNS Configuration Fix Guide

## 🚨 **If Hosting is Working - Domain/DNS Issues**

### **1. Check Domain Registrar Settings**

#### **Step 1: Login to Domain Registrar**
1. Go to where you bought `unlockadmissions.uz`
2. Login to your account
3. Find DNS management/nameservers section

#### **Step 2: Check Nameservers**
**Current nameservers should point to your hosting provider:**
```
ns1.yourhostingprovider.com
ns2.yourhostingprovider.com
```

**If they don't match your hosting provider, update them.**

#### **Step 3: Alternative - Use A Records**
If nameservers don't work, use A records:
```
Type: A
Name: @
Value: [Your hosting IP address]
TTL: 3600

Type: CNAME
Name: www
Value: unlockadmissions.uz
TTL: 3600
```

### **2. DNS Propagation Issues**

#### **Problem**: DNS changes take time to propagate
#### **Solutions**:

**Check Propagation Status**:
1. Visit: https://www.whatsmydns.net/
2. Enter: `unlockadmissions.uz`
3. Check if DNS is propagating worldwide

**Wait Time**: DNS changes can take 24-48 hours

**Test from Different Locations**:
- Use mobile data (different network)
- Try from different device
- Use VPN to test from different country

### **3. Domain Status Issues**

#### **Check Domain Status**:
1. **Domain expiration**: Is domain expired?
2. **Domain suspension**: Is domain suspended?
3. **Domain transfer**: Is domain being transferred?

#### **Common Issues**:
- **Expired domain**: Renew immediately
- **Suspended domain**: Contact registrar
- **Transfer in progress**: Wait for completion

### **4. SSL Certificate Issues**

#### **Problem**: SSL certificate not installed
#### **Solutions**:

**Option 1: Disable SSL Temporarily**
1. Try accessing: `http://unlockadmissions.uz` (without https)
2. If HTTP works, SSL is the issue

**Option 2: Install SSL Certificate**
1. Go to cPanel → SSL/TLS
2. Install SSL certificate for your domain
3. Force HTTPS redirect

### **5. Domain Configuration in Hosting**

#### **Check Hosting Domain Settings**:
1. Login to cPanel
2. Go to "Domains" section
3. Verify `unlockadmissions.uz` is listed
4. Check if domain is properly configured

#### **Add Domain if Missing**:
1. Go to cPanel → Domains
2. Add domain: `unlockadmissions.uz`
3. Set document root to `public_html`

## 🔍 **Step-by-Step Diagnosis**

### **Step 1: Check Domain Registrar**
```bash
# Check domain status
whois unlockadmissions.uz

# Check nameservers
nslookup -type=ns unlockadmissions.uz
```

### **Step 2: Check DNS Resolution**
```bash
# Check A record
nslookup unlockadmissions.uz

# Check from different DNS servers
nslookup unlockadmissions.uz 8.8.8.8
nslookup unlockadmissions.uz 1.1.1.1
```

### **Step 3: Test Different URLs**
- `http://unlockadmissions.uz`
- `https://unlockadmissions.uz`
- `www.unlockadmissions.uz`
- `http://www.unlockadmissions.uz`

### **Step 4: Check from Different Networks**
- Mobile data (not WiFi)
- Different WiFi network
- Different device
- Different browser

## 🛠️ **Quick Fixes**

### **Fix 1: Update Nameservers**
At your domain registrar, set nameservers to:
```
ns1.yourhostingprovider.com
ns2.yourhostingprovider.com
```

### **Fix 2: Use A Records Instead**
If nameservers don't work:
```
Type: A
Name: @
Value: [Your hosting IP]
TTL: 3600
```

### **Fix 3: Check Domain Status**
1. Verify domain is not expired
2. Check if domain is suspended
3. Ensure domain is not being transferred

### **Fix 4: Disable SSL Temporarily**
1. Try HTTP instead of HTTPS
2. Access: `http://unlockadmissions.uz`
3. If it works, SSL is the issue

## 📞 **Contact Domain Registrar**

### **What to Ask**:
1. **"Is my domain unlockadmissions.uz active and not suspended?"**
2. **"What are the current nameservers for my domain?"**
3. **"Can you help me update the nameservers to point to my hosting?"**
4. **"Is there any issue with my domain status?"**

### **Information to Provide**:
- Domain: `unlockadmissions.uz`
- Hosting provider name
- Hosting nameservers
- When the issue started

## 🔧 **Alternative Solutions**

### **Option 1: Use Different Domain**
If you have another domain:
1. Point it to the same hosting
2. Use it temporarily
3. Fix the main domain later

### **Option 2: Use Subdomain**
Create a subdomain:
- `app.unlockadmissions.uz`
- `temp.unlockadmissions.uz`
- `www.unlockadmissions.uz`

### **Option 3: Use Hosting Subdomain**
Ask hosting provider for:
- `unlockadmissions.yourhostingprovider.com`
- `yourusername.hostingprovider.com`

## ✅ **Success Checklist**

- [ ] Domain is not expired
- [ ] Domain is not suspended
- [ ] Nameservers point to hosting provider
- [ ] DNS propagation is complete
- [ ] Domain is configured in hosting
- [ ] SSL certificate is installed (if using HTTPS)
- [ ] No firewall blocking access
- [ ] Tested from different networks

## 🚀 **Emergency Workarounds**

### **Workaround 1: Use IP Address**
Get hosting IP and access via:
```
http://[YOUR_HOSTING_IP]/
```

### **Workaround 2: Use Hosting Subdomain**
Ask hosting provider for subdomain access

### **Workaround 3: Free Hosting**
Deploy to free hosting temporarily:
- Netlify
- Vercel
- GitHub Pages

## 📋 **Action Plan**

### **Immediate Actions**:
1. **Check domain registrar settings**
2. **Update nameservers if needed**
3. **Test with HTTP (no SSL)**
4. **Check domain status**
5. **Wait for DNS propagation**

### **If Still Not Working**:
1. **Contact domain registrar**
2. **Ask hosting provider for IP access**
3. **Use alternative domain/subdomain**
4. **Consider free hosting temporarily**

**The issue is likely with domain configuration, not hosting. Check your domain registrar settings first! 🔧** 