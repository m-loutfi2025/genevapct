# DNS Configuration for genevapct.com

## GitHub Pages DNS Records
```
Type: CNAME
Name: @
Value: m-loutfi2025.github.io
TTL: 3600

Type: CNAME  
Name: www
Value: m-loutfi2025.github.io
TTL: 3600
```

## Netlify DNS Records (Alternative)
```
Type: CNAME
Name: @
Value: genevapct.netlify.app
TTL: 3600

Type: CNAME
Name: www  
Value: genevapct.netlify.app
TTL: 3600
```

## Verification
After setting up DNS, verify with:
- dig genevapct.com
- nslookup genevapct.com

DNS propagation may take 24-48 hours.
