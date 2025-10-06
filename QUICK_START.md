# Quick Start Guide - WordPress to Astro Migration

## ✅ What's Done

Your Astro site is ready! Here's what's been set up:

- ✅ Astro blog template installed
- ✅ Cloudflare Pages adapter configured
- ✅ Build scripts configured
- ✅ Example blog posts included
- ✅ Sitemap and RSS feed ready
- ✅ Image optimization enabled

## 🎯 What to Do Now

### Option 1: Start Developing Immediately

Test the site locally right now:

```bash
pnpm dev
```

Visit http://localhost:4321 to see your site!

### Option 2: Migrate WordPress Content

**Step 1: Export from WordPress**
- WordPress Admin → Tools → Export
- Select "All content"
- Download the XML file
- Save it as `wordpress-export.xml` in project root

**Step 2: Convert to Markdown**
```bash
npx wordpress-export-to-markdown
```

Follow the prompts:
- Where to export? → `src/content/blog`
- Use year folders? → No
- Prefix with date? → Yes

**Step 3: Migrate Images**
- Copy from WordPress: `wp-content/uploads/`
- Paste to Astro: `public/images/`
- Update image paths in your posts

### Option 3: Deploy to Cloudflare Pages

**Method A: Via GitHub (Recommended)**

```bash
# 1. Create GitHub repo and push
git add .
git commit -m "Initial Astro setup"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 2. Go to Cloudflare Dashboard
# - Pages → Create a project → Connect to Git
# - Select your repository
# - Build command: pnpm build
# - Output directory: dist
# - Deploy!
```

**Method B: Direct Upload**

```bash
# Build the site
pnpm build

# Upload the dist/ folder to Cloudflare Pages via dashboard
```

## 🎨 Customize Your Site

### Update Site Info
Edit `src/consts.ts`:
```typescript
export const SITE_TITLE = 'Your Site Name';
export const SITE_DESCRIPTION = 'Your description';
```

### Update Domain
Edit `astro.config.mjs`:
```javascript
site: 'https://yourdomain.com', // Change this
```

### Customize Design
- **Layout:** `src/layouts/BlogPost.astro`
- **Components:** `src/components/`
- **Styles:** `src/styles/global.css`

## 📂 Key Files

| File | Purpose |
|------|---------|
| `src/content/blog/` | Your blog posts (Markdown/MDX) |
| `public/` | Static files (images, robots.txt) |
| `src/pages/` | Routes (index, about, blog) |
| `astro.config.mjs` | Main configuration |

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Replace example posts with your content
- [ ] Update site title and description
- [ ] Update domain in `astro.config.mjs`
- [ ] Add your images to `public/`
- [ ] Test locally with `pnpm dev`
- [ ] Build successfully with `pnpm build`
- [ ] Push to GitHub
- [ ] Connect Cloudflare Pages
- [ ] Configure custom domain

## 📚 Helpful Resources

- [Full Migration Guide](./MIGRATION_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Astro Docs](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

## 💡 Pro Tips

1. **Keep WordPress running** until migration is complete
2. **Test thoroughly** on Cloudflare's preview URL before switching DNS
3. **Set up redirects** if URLs change (create `public/_redirects`)
4. **Use Cloudflare Analytics** - it's included for free!

## 🆘 Need Help?

Check the guides:
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - WordPress content migration
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Cloudflare Pages deployment
- [README.md](./README.md) - Project overview
