# 🔥 Firebase Integration Guide

## ✅ Current Status
I've pre-configured your `.env.local` with the information from your Firebase project:
- ✅ API Key
- ✅ Project ID  
- ✅ Storage Bucket
- ✅ Messaging Sender ID
- ✅ Auth Domain (standard format)

## 🔴 What You Need to Complete

### 1. Get Web App ID (2 minutes)

Your `google-services.json` is for **Android apps**. For the **web portfolio**, you need to add a web app to your Firebase project:

#### Steps:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **marriage-app-71ea3**
3. Click the **Settings gear** ⚙️ > **Project settings**
4. Scroll to **Your apps** section
5. Click the **Web icon** (`</>`) to add a web app
6. Register app with a nickname (e.g., "Portfolio Web")
7. Copy the **App ID** (looks like: `1:157785319634:web:xxxxxxxxxxxxx`)
8. Update `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_APP_ID=1:157785319634:web:xxxxxxxxxxxxx
   ```

### 2. Get Admin SDK Credentials (3 minutes)

For server-side operations (image uploads, admin features):

#### Steps:
1. In Firebase Console > **Project settings**
2. Go to **Service accounts** tab
3. Click **Generate new private key**
4. Save the JSON file
5. Open the JSON file and find:
   - `client_email`: Copy to `FIREBASE_ADMIN_CLIENT_EMAIL`
   - `private_key`: Copy to `FIREBASE_ADMIN_PRIVATE_KEY`
6. Update `.env.local` with these values

**Important:** Keep the private key format with `\n` for line breaks:
```
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_actual_key_here\n-----END PRIVATE KEY-----\n"
```

### 3. Enable Required Services (3 minutes)

Make sure these are enabled in your Firebase project:

#### Authentication:
1. Go to **Authentication** > **Sign-in method**
2. Enable **Email/Password**
3. Click **Users** tab
4. Click **Add user**
5. Create your admin account:
   - Email: `your-admin@email.com`
   - Password: `YourSecurePassword123!`

#### Firestore Database:
1. Go to **Firestore Database**
2. If not created, click **Create database**
3. Start in **Production mode**
4. Choose a location close to you
5. Click **Enable**

#### Storage:
1. Go to **Storage**
2. If not setup, click **Get started**
3. Start in **Production mode**
4. Click **Done**

### 4. Update Security Rules (2 minutes)

#### Firestore Rules:
1. Go to **Firestore Database** > **Rules** tab
2. Replace with:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
3. Click **Publish**

#### Storage Rules:
1. Go to **Storage** > **Rules** tab
2. Replace with:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /portfolio/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```
3. Click **Publish**

## 🚀 After Configuration

Once you've completed the above:

```powershell
# Navigate to project
cd portfolio-nextjs

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Then:
1. Visit: **http://localhost:3000**
2. View your portfolio
3. Go to: **http://localhost:3000/admin**
4. Login with the admin account you created
5. Start adding your content!

## 📋 Quick Checklist

- [ ] Added web app to Firebase project
- [ ] Copied Web App ID to `.env.local`
- [ ] Generated service account key
- [ ] Added admin credentials to `.env.local`
- [ ] Created admin user in Authentication
- [ ] Enabled Firestore Database
- [ ] Enabled Storage
- [ ] Updated Firestore security rules
- [ ] Updated Storage security rules
- [ ] Ran `npm install`
- [ ] Started dev server with `npm run dev`

## ⚠️ Important Notes

1. **Never commit `.env.local`** to version control
2. **Keep service account key secure**
3. The current `.env.local` is pre-filled with your project info
4. You only need to add the **2 missing values** (Web App ID & Admin SDK credentials)

## 🆘 Need Help?

### Can't find Web App ID?
- Make sure you added a **Web app** (not Android/iOS) to your Firebase project
- Look for the `</>` icon when adding an app

### Admin SDK not working?
- Ensure the private key is wrapped in quotes
- Keep the `\n` characters in the key
- Don't add extra spaces

### Authentication errors?
- Make sure Email/Password provider is enabled
- Verify you created an admin user
- Check the email/password you're using to login

## 🎯 What's Next?

After Firebase is configured:
1. ✅ Your portfolio will load data from Firebase
2. ✅ Admin login will work
3. ✅ You can upload images
4. ✅ All sections will be manageable
5. ✅ Contact form will save messages

Ready to customize your premium portfolio! 🚀
