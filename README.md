# 1000xSales - Astro Website

WordPress to Astro migration project hosted on Cloudflare Pages.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets (images, robots.txt, etc.)
├── src/
│   ├── assets/         # Optimized images
│   ├── components/     # Reusable Astro components
│   ├── content/
│   │   └── blog/       # Blog posts (Markdown/MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   └── styles/         # Global CSS
├── astro.config.mjs    # Astro configuration
├── MIGRATION_GUIDE.md  # WordPress migration instructions
└── DEPLOYMENT.md       # Cloudflare Pages deployment guide
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local dev server at http://localhost:4321 |
| `pnpm build` | Build for production (output: `dist/`) |
| `pnpm preview` | Preview production build locally |
| `pnpm convert:wordpress` | Helper for WordPress content conversion |

## 🔄 WordPress Migration

See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for detailed instructions on:
1. Exporting WordPress content
2. Converting posts to Markdown
3. Migrating media files
4. Customizing the design

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Cloudflare Pages deployment instructions.

**Quick Deploy:**
1. Push to GitHub
2. Connect repository to Cloudflare Pages
3. Build settings:
   - Build command: `pnpm build`
   - Output directory: `dist`
   - Node version: 22

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) 5.x
- **Content:** Markdown/MDX with Content Collections
- **Styling:** CSS (customize as needed)
- **Deployment:** Cloudflare Pages
- **Image Optimization:** Sharp

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)

## ✅ Next Steps

- [ ] Export WordPress content (Tools → Export)
- [ ] Convert posts to Markdown (use `npx wordpress-export-to-markdown`)
- [ ] Customize design in `src/components/` and `src/layouts/`
- [ ] Update site URL in `astro.config.mjs`
- [ ] Add your content to `src/content/blog/`
- [ ] Migrate images to `public/` folder
- [ ] Test locally with `pnpm dev`
- [ ] Deploy to Cloudflare Pages
- [ ] Configure custom domain
