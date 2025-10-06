# Cloudflare Pages Deployment Guide

## Quick Deploy Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial Astro setup for WordPress migration"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to **Pages** in the sidebar

2. **Create New Project**
   - Click **"Create a project"**
   - Select **"Connect to Git"**
   - Authorize GitHub access
   - Select your repository

3. **Configure Build Settings**
   ```
   Framework preset: Astro
   Build command: pnpm build
   Build output directory: dist
   Root directory: /
   ```

4. **Environment Variables** (if needed)
   - Node version: 22

5. **Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will build and deploy your site

### 3. Custom Domain Setup

1. **Add Custom Domain**
   - In your Cloudflare Pages project
   - Go to **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter your domain name

2. **DNS Configuration**
   - If your domain is on Cloudflare:
     - DNS records are auto-configured
   - If external:
     - Add CNAME record pointing to your `.pages.dev` URL

### 4. Automatic Deployments

Every push to your main branch will trigger a new deployment automatically.

## Build Commands Reference

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local dev server (http://localhost:4321) |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |

## Post-Deployment Checklist

- [ ] Update `astro.config.mjs` with your actual domain
- [ ] Test all pages load correctly
- [ ] Verify images display properly
- [ ] Check sitemap.xml generation
- [ ] Test RSS feed (if applicable)
- [ ] Configure redirects (if migrating URLs)
- [ ] Set up analytics (Cloudflare Analytics is built-in)

## URL Redirects (if needed)

If your WordPress URLs were different, create `public/_redirects`:

```
/old-url  /new-url  301
/blog/:slug  /blog/:slug  200
```

## Performance Tips

- Cloudflare Pages includes free CDN
- Images are auto-optimized via Sharp
- Enable Cloudflare's "Auto Minify" in dashboard
- Use Cloudflare Analytics for insights
