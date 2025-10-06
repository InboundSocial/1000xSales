# Styling Guide for 1000xSales

## 🎨 How Astro Handles Styling

Astro gives you **3 main styling options**:

### 1. **Global CSS** (Easiest - Start Here)
- File: `src/styles/global.css`
- Affects entire site
- Best for: Brand colors, fonts, overall look

### 2. **Component-Scoped Styles** (Most Flexible)
- Each `.astro` file has a `<style>` section
- Only affects that component
- Best for: Page-specific styling

### 3. **Tailwind CSS** (Most Powerful - Optional)
- Utility-first framework
- Best for: Professional designs quickly

## 🚀 Quick Start: Customize Your Brand

### Step 1: Update Colors (5 minutes)

Edit `src/styles/global.css`:

```css
:root {
	/* Your brand colors */
	--accent: #0066cc;        /* Primary blue - links, buttons */
	--accent-dark: #004499;   /* Darker blue - hover states */
	
	/* Keep these or customize */
	--black: 15, 18, 25;
	--gray: 96, 115, 159;
	--gray-light: 229, 233, 240;
	--gray-dark: 34, 41, 57;
}
```

**Quick brand color suggestions:**
- **Tech/Professional:** `--accent: #0066cc;`
- **Sales/Energy:** `--accent: #ff6b35;`
- **Trust/Corporate:** `--accent: #2c3e50;`
- **Modern/Bold:** `--accent: #8b5cf6;`

### Step 2: Update Typography (Optional)

Add Google Fonts to `src/components/BaseHead.astro`:

```astro
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update `src/styles/global.css`:

```css
body {
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
	/* ... rest stays the same */
}
```

### Step 3: Style Individual Pages

Each `.astro` file has its own `<style>` section at the bottom.

Example - Make Book A Call page stand out:

Edit `src/pages/book-a-call.astro`:

```astro
<style>
	/* Add to existing styles */
	.cta-button {
		background: var(--accent);
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: bold;
		text-decoration: none;
		display: inline-block;
		margin: 2rem 0;
		transition: transform 0.2s;
	}
	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.15);
	}
</style>
```

## 💅 Professional Styling Options

### Option A: Keep It Simple (Default + Tweaks)
**Time:** 30 minutes  
**Best for:** Quick launch

1. Change brand colors in `global.css`
2. Add your logo to header
3. Update fonts if needed
4. Done!

### Option B: Add Tailwind CSS (Recommended)
**Time:** 2 hours  
**Best for:** Professional look without custom CSS

```bash
pnpm astro add tailwind
```

Then use utility classes:
```astro
<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Book A Call
</button>
```

### Option C: Use a Pre-built Theme
**Time:** 1-3 hours  
**Best for:** Complete professional redesign

Check Astro themes:
- https://astro.build/themes/

## 🎯 Quick Wins for Better Design

### 1. Add Hero Section to Homepage

Edit `src/pages/index.astro`:

```astro
<style>
	.hero {
		text-align: center;
		padding: 4rem 2rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border-radius: 12px;
		margin-bottom: 3rem;
	}
	.hero h1 {
		color: white;
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	.hero p {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}
</style>
```

### 2. Style Navigation Better

Edit `src/components/Header.astro` styles:

```css
header {
	background: white;
	box-shadow: 0 2px 10px rgba(0,0,0,0.1);
	position: sticky;
	top: 0;
	z-index: 100;
}

nav a {
	font-weight: 600;
	transition: all 0.2s;
}

nav a:hover {
	color: var(--accent);
	transform: translateY(-2px);
}
```

### 3. Improve Blog Post Cards

Edit `src/pages/blog/index.astro`:

```css
.blog-card {
	border: 1px solid rgb(var(--gray-light));
	border-radius: 12px;
	padding: 1.5rem;
	transition: transform 0.2s, box-shadow 0.2s;
}

.blog-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
```

### 4. Add Call-to-Action Buttons

Create `src/components/Button.astro`:

```astro
---
const { href, text, variant = 'primary' } = Astro.props;
---

<a href={href} class={`btn btn-${variant}`}>{text}</a>

<style>
	.btn {
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s;
	}
	.btn-primary {
		background: var(--accent);
		color: white;
	}
	.btn-primary:hover {
		background: var(--accent-dark);
		transform: translateY(-2px);
	}
	.btn-secondary {
		background: white;
		border: 2px solid var(--accent);
		color: var(--accent);
	}
</style>
```

## 📦 Recommended: Add Tailwind (Step-by-Step)

### Why Tailwind?
- ✅ Professional designs fast
- ✅ Responsive built-in
- ✅ Consistent spacing/colors
- ✅ No custom CSS needed

### Installation:

```bash
pnpm astro add tailwind
```

Answer **Yes** to all prompts.

### Example Usage:

```astro
<!-- Before (custom CSS) -->
<div class="card">
  <h2 class="title">Hello</h2>
</div>

<!-- After (Tailwind) -->
<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
  <h2 class="text-2xl font-bold text-gray-900">Hello</h2>
</div>
```

## 🎨 Design Resources

### Free Tools:
- **Colors:** https://coolors.co/ (generate palettes)
- **Fonts:** https://fonts.google.com/
- **Icons:** https://heroicons.com/
- **Images:** https://unsplash.com/

### Inspiration:
- https://dribbble.com/search/landing-page
- https://land-book.com/
- https://www.awwwards.com/

## 🚦 My Recommendation

**For fast, professional results:**

1. **Install Tailwind** (5 minutes)
   ```bash
   pnpm astro add tailwind
   ```

2. **Update colors in global.css** (5 minutes)
   - Set your brand colors
   - Choose 1-2 fonts

3. **Use Tailwind components** (1-2 hours)
   - Copy from https://tailwindui.com/components (some free)
   - Or https://flowbite.com/docs/getting-started/astro/

4. **Test on mobile** (15 minutes)
   - Browser dev tools → mobile view
   - Adjust as needed

## 📝 Next Steps

Choose your path:

**A. Simple & Fast** (Recommended for launch)
- [ ] Update colors in global.css
- [ ] Add Google Font
- [ ] Style Book A Call button
- [ ] Deploy!

**B. Professional** (Best long-term)
- [ ] Install Tailwind
- [ ] Rebuild pages with Tailwind
- [ ] Add hero sections
- [ ] Deploy!

**C. Custom Design**
- [ ] Hire designer for Figma mockups
- [ ] Implement custom CSS
- [ ] Deploy!

Need help with any of these? Let me know!
