# 🔧 Blog Not Showing - Fix Applied

## Problem
Blog posts were not showing on the live Vercel site because:
1. Server components were trying to fetch from API routes using `fetch()`
2. This doesn't work well in server-side rendering
3. Better to query the database directly in server components

## Solution Applied
Updated blog pages to query MongoDB directly instead of using API routes:

### Files Updated:
1. **`app/blog/page.tsx`** - Now queries database directly
2. **`app/blog/[slug]/page.tsx`** - Now queries database directly

### Changes:
- Removed dependency on `fetchBlogPosts()` and `fetchBlogPost()` from `lib/api.ts`
- Added direct database queries using `connectDB()` and `BlogPost.find()`
- Added proper error handling

## Next Steps

### 1. Make Sure Data is Migrated
Run the migration script to populate your MongoDB database:

```bash
npm run migrate
```

### 2. Verify MongoDB Connection on Vercel
Check that your `MONGODB_URI` environment variable is set correctly in Vercel:
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Verify `MONGODB_URI` includes the database name: `/portfolio?retryWrites=true&w=majority`

### 3. Redeploy
After making sure data is migrated and env vars are set:
```bash
git add .
git commit -m "Fix blog pages to query database directly"
git push
```

## Testing

After deployment, check:
1. **Blog List Page:** `https://your-site.vercel.app/blog` - Should show all blog posts
2. **Blog Detail Page:** `https://your-site.vercel.app/blog/[slug]` - Should show individual post
3. **Admin Dashboard:** Check if posts are visible in admin panel

## If Blog Still Doesn't Show

1. **Check Vercel Function Logs:**
   - Go to Vercel Dashboard → Deployments → View Function Logs
   - Look for MongoDB connection errors

2. **Verify Data in MongoDB:**
   - Check MongoDB Atlas to confirm blog posts exist
   - Verify `published: true` field is set

3. **Check Environment Variables:**
   - Ensure `MONGODB_URI` is set for Production environment
   - Verify connection string format is correct

4. **Test Locally:**
   ```bash
   npm run build
   npm run start
   ```
   Visit `http://localhost:3000/blog` to see if it works locally

---

**The blog should now work correctly on Vercel!** 🎉

