# WordPress to Astro Migration Guide

## ✅ Completed Setup
- Astro blog template installed
- Cloudflare Pages adapter configured
- Project ready for content migration

## 📋 Next Steps

### 1. Export WordPress Content
1. Log into your WordPress admin panel
2. Go to **Tools → Export**
3. Select **All content** and download the XML file
4. Backup your `wp-content/uploads/` folder (contains all media)

### 2. Convert WordPress Content to Markdown

**Option A: Use wordpress-export-to-markdown**
```bash
npx wordpress-export-to-markdown --post-folders=false --prefix-date=true
```

**Option B: Manual conversion** (for small sites)
- Convert posts to markdown files in `src/content/blog/`
- Each file should have frontmatter with title, date, description

Example:
```markdown
---
title: 'My Blog Post'
description: 'Post description'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Your content here...
```

### 3. Migrate Media Files
- Copy images from `wp-content/uploads/` to `public/` folder
- Update image paths in your markdown files
- Optimize images (Astro uses Sharp for optimization)

### 4. Customize Design
- Edit `src/layouts/BlogPost.astro` for post layout
- Edit `src/components/` for header, footer, etc.
- Modify `src/styles/global.css` for styling
- Update `src/consts.ts` for site title, description

### 5. Update Configuration
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // Change this to your domain
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});
```

### 6. Test Locally
```bash
pnpm dev
```
Visit http://localhost:4321

### 7. Build for Production
```bash
pnpm build
```

### 8. Deploy to Cloudflare Pages

**Method 1: Via Git (Recommended)**
1. Push code to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Build settings:
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Node version: 22

**Method 2: Direct Upload**
```bash
pnpm build
# Upload the dist/ folder to Cloudflare Pages
```

### 9. Configure Domain
1. In Cloudflare Pages project settings
2. Go to "Custom domains"
3. Add your domain
4. Update DNS records as instructed

## 🔍 Project Structure
```
/
├── public/           # Static assets (images, favicon)
├── src/
│   ├── components/   # Reusable components
│   ├── content/
│   │   └── blog/     # Blog posts (Markdown/MDX)
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes
│   └── styles/       # CSS files
├── astro.config.mjs  # Astro configuration
└── package.json
```

## 🛠️ Useful Commands
- `pnpm dev` - Start dev server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## 📚 Resources
- [Astro Docs](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [WordPress to Markdown Converter](https://github.com/lonekorean/wordpress-export-to-markdown)
