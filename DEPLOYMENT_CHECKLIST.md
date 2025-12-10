# ✅ Vercel Deployment Checklist

## 🚀 Quick Deployment Steps

### 1. Push Code to Git
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push
```

### 2. Deploy to Vercel

**Option A: Via Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy" (don't add env vars yet)

**Option B: Via CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### 3. Add Environment Variables ⚠️ CRITICAL

Go to: **Project Settings** → **Environment Variables**

Add these **3 variables** for **Production, Preview, and Development**:

#### 1. MongoDB Connection
```
Name: MONGODB_URI
Value: mongodb+srv://harshthummar542_db_user:8WOkIRIK5LtwAoRV@cluster2.6krjhta.mongodb.net/portfolio?retryWrites=true&w=majority
```

#### 2. Admin Password
```
Name: ADMIN_PASSWORD
Value: your_secure_password_here
```

#### 3. API URL (Optional - for production)
```
Name: NEXT_PUBLIC_API_URL
Value: https://harrsh-patell.vercel.app
```

### 4. Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Click **⋯** (three dots) on latest deployment
3. Click **Redeploy**

### 5. Run Data Migration

After deployment, run migration locally:
```bash
# Make sure .env.local has production MONGODB_URI
npm run migrate
```

### 6. Test Your Site

- ✅ Homepage: `https://harrsh-patell.vercel.app`
- ✅ Blog: `https://harrsh-patell.vercel.app/blog`
- ✅ Portfolio: `https://harrsh-patell.vercel.app/portfolio`
- ✅ Contact Form: Submit a test message
- ✅ Admin: `https://harrsh-patell.vercel.app/admin-login`

## 🔧 Important Notes

1. **MongoDB URI must include database name:**
   - ✅ Correct: `...mongodb.net/portfolio?retryWrites=true&w=majority`
   - ❌ Wrong: `...mongodb.net/?appName=Cluster2`

2. **MongoDB Atlas IP Whitelist:**
   - Add `0.0.0.0/0` to allow all IPs (for Vercel)

3. **Environment Variables:**
   - Must be set for **all environments** (Production, Preview, Development)
   - Must **redeploy** after adding variables

4. **Admin Password:**
   - Use a strong password (not `admin123`)
   - This is for `/admin-login` page

## 🐛 Common Issues

### "Database connection failed"
- Check `MONGODB_URI` is correct in Vercel
- Verify database name `/portfolio` is in connection string
- Check MongoDB Atlas IP whitelist

### "API routes return 500"
- Check Vercel function logs
- Verify all environment variables are set
- Redeploy after adding env vars

### "Build fails"
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all dependencies are in `package.json`

## 📞 Need Help?

Check the full guide: `VERCEL_DEPLOYMENT_GUIDE.md`

