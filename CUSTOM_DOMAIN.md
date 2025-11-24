# Geneva Printing & Clearing of Transaction - Custom Domain Setup

## 🌐 Custom Domain: genevapct.com

### Current Status
- **GitHub Pages:** https://m-loutfi2025.github.io/genevapct/
- **Target Domain:** https://genevapct.com

### Steps to Setup Custom Domain

#### 1. Purchase Domain
- Go to GoDaddy, Namecheap, or Google Domains
- Search and purchase `genevapct.com`
- Cost: ~$15-20 per year

#### 2. Configure DNS Records

**For GitHub Pages:**
```
Type: CNAME
Name: @
Value: m-loutfi2025.github.io

Type: CNAME
Name: www
Value: m-loutfi2025.github.io
```

**For Netlify (Alternative):**
```
Type: CNAME
Name: @
Value: genevapct.netlify.app

Type: CNAME
Name: www
Value: genevapct.netlify.app
```

#### 3. Update GitHub Pages Settings
1. Go to Repository Settings → Pages
2. Add custom domain: `genevapct.com`
3. Wait for DNS verification
4. Enable HTTPS

#### 4. Update Project Configuration
- Vite config updated for custom domain
- Base path changes automatically based on environment

### Timeline
- **Domain purchase:** 5-10 minutes
- **DNS setup:** 5-10 minutes  
- **DNS propagation:** 24-48 hours
- **SSL certificate:** Automatic after DNS verified

### Cost Breakdown
- **Domain name:** $15-20/year
- **Hosting:** Free (GitHub Pages)
- **SSL certificate:** Free
- **Total:** $15-20/year

### Benefits
- ✅ Professional branded URL
- ✅ Better SEO ranking
- ✅ SSL certificate included
- ✅ Free hosting
- ✅ Custom email addresses (optional)

### Alternative: Netlify
If you prefer easier setup:
1. Push to GitHub
2. Connect Netlify account
3. Add custom domain
4. Netlify handles DNS automatically
