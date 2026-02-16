# 🎯 Pre-Deployment Checklist

## Before You Deploy - Essential Updates

### ⚠️ CRITICAL: Update Personal Information

#### 1. Layout Metadata (app/layout.tsx)
Replace all instances of:
- [ ] Line 16: `'Your Name'` → Your actual name
- [ ] Line 17: `'Your Name'` → Your actual name  
- [ ] Line 18: `'Your Name'` → Your actual name
- [ ] Line 45: `'@yourusername'` → Your Twitter handle
- [ ] Line 56: Leave empty initially, add after Google Search Console setup
- [ ] Line 57: Leave empty initially, add after Yandex verification

#### 2. Structured Data (app/layout.tsx)
Update schema information (lines 68-127):
- [ ] Line 73: `name: 'Your Name'` → Your actual name
- [ ] Line 83-87: Update all social media URLs (GitHub, LinkedIn, Twitter)
- [ ] Line 89: `jobTitle: 'Full Stack Developer'` → Your actual title
- [ ] Line 91-93: `worksFor` → Your company or remove if freelancer

#### 3. Environment Variables
Before deploying to Vercel, prepare:
- [ ] `NEXT_PUBLIC_SITE_URL` → Your production domain
- [ ] `ADMIN_EMAIL` → Your admin email address
- [ ] All Firebase credentials (from your .env.local)

### 📝 Content Preparation

#### Admin Panel Setup (After Deployment)
1. [ ] Access `/admin` and log in with Firebase credentials
2. [ ] Update **Hero Section**:
   - [ ] Add your title
   - [ ] Add your name
   - [ ] Add description
   - [ ] Add social media links
   - [ ] Add email

3. [ ] Update **About Section**:
   - [ ] Add your title
   - [ ] Add description
   - [ ] Upload profile image
   - [ ] Add 4 statistics (years experience, projects, clients, awards)

4. [ ] Add **Skills**:
   - [ ] Add all your technical skills with icons
   - [ ] Set appropriate skill levels (%)
   - [ ] Choose colors for each skill

5. [ ] Add **Experience**:
   - [ ] Add work experience entries
   - [ ] Include company, role, dates, location
   - [ ] Add achievements for each role

6. [ ] Add **Education**:
   - [ ] Add educational qualifications
   - [ ] Include institution, degree, dates, GPA

7. [ ] Add **Projects**:
   - [ ] Add portfolio projects with images
   - [ ] Include title, description, technologies
   - [ ] Add GitHub and live demo links
   - [ ] Set featured projects

8. [ ] Add **Certifications**:
   - [ ] Upload certificate images
   - [ ] Add certificate details (platform, issuer, dates)
   - [ ] Add credential IDs and URLs

9. [ ] Add **Testimonials**:
   - [ ] Add client testimonials
   - [ ] Include names, roles, companies, ratings
   - [ ] Upload client photos (optional)

### 🔐 Security Checklist

- [x] .env.local file is in .gitignore
- [x] No sensitive credentials in code
- [x] Admin routes protected with authentication
- [x] API routes secured
- [x] Firebase Security Rules configured
- [x] Storage Security Rules configured
- [ ] Create admin user in Firebase Authentication (Email/Password)

### 🚀 Firebase Setup

#### Required Before First Use:
1. [ ] **Enable Firestore Database**:
   - Go to Firebase Console → Firestore Database
   - Click "Create database"
   - Select "Production mode"
   - Choose region closest to your users

2. [ ] **Enable Storage**:
   - Go to Firebase Console → Storage
   - Click "Get started"
   - Use default security rules (will update later)

3. [ ] **Apply Security Rules**:
   
   **Firestore Rules** (from firestore.rules):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
       match /messages/{messageId} {
         allow create: if true;
         allow read, update, delete: if request.auth != null;
       }
     }
   }
   ```

   **Storage Rules** (from storage.rules):
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
       match /uploads/{fileName} {
         allow read: if true;
         allow write: if request.auth != null 
                      && request.resource.size < 5 * 1024 * 1024
                      && request.resource.contentType.matches('image/.*');
       }
     }
   }
   ```

4. [ ] **Create Admin User**:
   - Go to Firebase Console → Authentication
   - Click "Get started" if not enabled
   - Enable "Email/Password" sign-in method
   - Click "Add user"
   - Enter email and strong password
   - Save credentials securely

### 📦 Build Test

Before deploying, test locally:

```bash
cd portfolio-nextjs
npm install
npm run build
npm start
```

Check for:
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All pages load correctly
- [ ] Admin panel accessible
- [ ] Forms work properly

### 🌐 Domain Setup (Optional)

If using custom domain:
- [ ] Domain purchased and ready
- [ ] DNS provider access available
- [ ] Ready to add A and CNAME records

### 📊 Analytics Setup (Optional)

- [ ] Google Analytics 4 property created
- [ ] Measurement ID ready to add
- [ ] Tracking code prepared

### 🔍 Search Engine Preparation

- [ ] Google Search Console account ready
- [ ] Bing Webmaster Tools account ready
- [ ] Social media accounts ready for linking

## ✅ Final Pre-Deployment Checks

### Code Quality
- [x] All components working
- [x] Responsive design tested
- [x] Mobile optimized
- [x] SEO metadata configured
- [x] Images optimized

### Functionality
- [ ] Navigation works
- [ ] All sections display correctly
- [ ] Admin panel functional
- [ ] Forms submit successfully
- [ ] Image uploads work
- [ ] Contact form sends to Firestore

### Performance
- [ ] Lighthouse score > 90
- [ ] Images compressed (< 500KB each)
- [ ] No console errors
- [ ] Fast loading times

### Content
- [ ] All placeholder text removed
- [ ] All "Your Name" instances replaced
- [ ] All dummy URLs replaced
- [ ] Real social media links added

## 🎉 Ready to Deploy!

Once all checkboxes are complete:

1. **Push to Git**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**: Follow DEPLOYMENT.md guide

3. **Post-Deployment**: Complete SEO-GUIDE.md checklist

---

## 📞 Need Help?

- **Documentation**: Check README.md, DEPLOYMENT.md, and SEO-GUIDE.md
- **Vercel Support**: https://vercel.com/support
- **Firebase Support**: https://firebase.google.com/support
- **Next.js Docs**: https://nextjs.org/docs

---

**Last Updated**: February 2026
**Estimated Setup Time**: 2-3 hours
**Deployment Time**: 5-10 minutes
