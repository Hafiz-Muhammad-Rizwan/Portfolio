# Vercel Deployment Guide

## 🚀 Quick Deployment Steps

### Prerequisites
- [x] Firebase project configured
- [x] Environment variables ready
- [x] GitHub/GitLab/Bitbucket account
- [x] Vercel account (sign up at https://vercel.com)

## Step 1: Push to Git Repository

```bash
cd portfolio-nextjs
git init
git add .
git commit -m "Initial commit: Premium portfolio with Next.js"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

## Step 2: Import to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "Add New Project"**
3. **Import Git Repository**: Select your repository
4. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `portfolio-nextjs`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

## Step 3: Environment Variables

Add all environment variables in Vercel:

### Firebase Client (Public)
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCDwp3QWXKvdoVEq9sKfOqGqRrxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:xxxxxxxxxxxxxxxxxxxxx
```

### Firebase Admin (Private - Server-side only)
```
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----\n"
```

### Google Cloud Storage
```
GCS_BUCKET_NAME=your-project.firebasestorage.app
```

### Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
ADMIN_EMAIL=your@email.com
```

**Important**: For `FIREBASE_ADMIN_PRIVATE_KEY`, wrap the entire key including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` in quotes, and keep the `\n` newline characters.

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (2-5 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## Step 5: Custom Domain (Optional)

### Add Domain in Vercel
1. Go to project settings → Domains
2. Add your custom domain (e.g., `yourdomain.com`)
3. Vercel will provide DNS records

### Update DNS Records
Add these records in your domain provider:

**For Root Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Update Environment Variable
After domain is connected:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Redeploy for the change to take effect.

## Step 6: Post-Deployment

### 1. Test Your Site
- ✅ Homepage loads correctly
- ✅ All sections display (Hero, About, Skills, Experience, Education, Projects, Certifications, Testimonials, Contact)
- ✅ Admin login works at `/admin`
- ✅ Form submissions save to Firebase
- ✅ Image uploads work

### 2. Submit to Search Engines

#### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://yourdomain.com`
3. Verify ownership (meta tag method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

#### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify and submit sitemap

### 3. Test SEO

**Social Media Preview**:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

**Performance**:
- Lighthouse (in Chrome DevTools): Target 90+ score
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

### 4. Set Up Analytics (Optional)

**Google Analytics 4**:
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Next.js (create `app/GoogleAnalytics.tsx`)
4. Import in layout.tsx

## Troubleshooting

### Build Fails

**Error: Environment variables not found**
- Solution: Add all required env vars in Vercel settings

**Error: Module not found**
- Solution: Ensure all dependencies are in package.json
- Run: `npm install` locally and commit package-lock.json

**Error: Firebase initialization failed**
- Solution: Check Firebase config values
- Ensure FIREBASE_ADMIN_PRIVATE_KEY has proper formatting

### Runtime Errors

**500 Error on admin pages**
- Check Firebase Admin SDK configuration
- Verify private key format (must include \n newlines)

**Images not loading**
- Check Firebase Storage rules
- Verify GCS_BUCKET_NAME is correct
- Ensure Storage is enabled in Firebase Console

**Forms not submitting**
- Check Firestore rules
- Verify Firestore Database is enabled
- Check browser console for errors

## Performance Optimization

### Automatic (Already configured)
- ✅ Image optimization with Next.js Image
- ✅ Automatic code splitting
- ✅ Static generation
- ✅ Edge runtime for OG images
- ✅ Gzip compression by Vercel

### Manual Optimizations
1. **Compress images before upload** (< 500KB recommended)
2. **Enable Firebase CDN** for faster image delivery
3. **Use WebP format** for images when possible
4. **Minimize admin dashboard access** (cache-heavy)

## Security Checklist

- [x] `.env.local` in .gitignore
- [x] Admin routes blocked in robots.txt
- [x] Firebase Security Rules configured
- [x] Storage Security Rules configured
- [x] API routes protected
- [x] CORS properly configured
- [x] No sensitive data in client code
- [x] HTTPS enforced (automatic with Vercel)

## Monitoring

### Vercel Dashboard
- **Analytics**: Track page views and performance
- **Logs**: Check function logs for errors
- **Speed Insights**: Monitor Core Web Vitals

### Firebase Console
- **Authentication**: Monitor sign-ins
- **Firestore**: Check database usage
- **Storage**: Monitor file uploads
- **Usage**: Track API calls

## Continuous Deployment

Every push to your `main` branch will automatically:
1. Trigger a new build
2. Run tests (if configured)
3. Deploy to production
4. Update your live site

**Preview Deployments**: Every pull request gets a unique preview URL for testing.

## Costs

### Vercel (Free Tier)
- ✅ Bandwidth: 100GB/month
- ✅ Invocations: 100GB-Hours
- ✅ Custom domains: Unlimited
- ✅ SSL certificates: Automatic
- ✅ DDoS protection: Included

### Firebase (Spark Plan - Free)
- ✅ Firestore: 1GB storage, 50K reads/day
- ✅ Storage: 5GB, 1GB/day downloads
- ✅ Authentication: Unlimited
- ✅ Hosting: 10GB, 360MB/day

**Upgrade to paid plans if you exceed free tier limits.**

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Firebase Docs**: https://firebase.google.com/docs
- **Deployment Help**: https://vercel.com/support

## Quick Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Check for errors
npm run lint

# Update dependencies
npm update

# Clean build
rm -rf .next
npm run build
```

## Update Deployment

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically rebuild and deploy.

---

**Ready to deploy?** Follow the steps above and your portfolio will be live in minutes! 🚀

For questions or issues, check the troubleshooting section or contact Vercel support.
