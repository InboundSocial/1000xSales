# Tailwind CSS - Quick Start Examples

## ✅ Tailwind is Installed!

You can now use Tailwind utility classes in all your `.astro` files.

## 🎨 Basic Examples

### Buttons

```astro
<!-- Primary Button -->
<a href="/book-a-call" 
   class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
  Book A Call
</a>

<!-- Secondary Button -->
<a href="/newsletter" 
   class="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-200">
  Subscribe
</a>

<!-- Ghost Button -->
<a href="#" 
   class="text-blue-600 hover:text-blue-800 font-semibold underline">
  Learn More
</a>
```

### Cards

```astro
<!-- Blog Post Card -->
<div class="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
  <img src="/image.jpg" alt="Post" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="text-2xl font-bold text-gray-900 mb-2">Post Title</h3>
    <p class="text-gray-600 mb-4">Post description goes here...</p>
    <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">
      Read More →
    </a>
  </div>
</div>
```

### Hero Section

```astro
<!-- Hero with gradient background -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">
      1000x Your Sales
    </h1>
    <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
      Unlimited Automations, AI-Powered Solutions & Mass Outreach
    </p>
    <div class="flex gap-4 justify-center">
      <a href="/book-a-call" 
         class="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition">
        Book A Call
      </a>
      <a href="/newsletter" 
         class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition">
        Newsletter
      </a>
    </div>
  </div>
</section>
```

### Navigation (Header)

```astro
<nav class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <a href="/" class="text-2xl font-bold text-gray-900">1000xSales</a>
      
      <div class="hidden md:flex gap-6">
        <a href="/" class="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
        <a href="/blog" class="text-gray-700 hover:text-blue-600 font-medium transition">Content</a>
        <a href="/newsletter" class="text-gray-700 hover:text-blue-600 font-medium transition">Newsletter</a>
        <a href="/book-a-call" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Book A Call
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <button class="md:hidden text-gray-700">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</nav>
```

### Footer

```astro
<footer class="bg-gray-900 text-gray-300 py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-3 gap-8 mb-8">
      <div>
        <h3 class="text-white text-xl font-bold mb-4">1000xSales</h3>
        <p class="text-gray-400">Unlimited Automations & AI Solutions</p>
      </div>
      
      <div>
        <h4 class="text-white font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="/" class="hover:text-white transition">Home</a></li>
          <li><a href="/blog" class="hover:text-white transition">Content</a></li>
          <li><a href="/newsletter" class="hover:text-white transition">Newsletter</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-white font-semibold mb-4">Legal</h4>
        <ul class="space-y-2">
          <li><a href="/terms-of-use" class="hover:text-white transition">Terms</a></li>
          <li><a href="/privacy-policy" class="hover:text-white transition">Privacy</a></li>
          <li><a href="/dmca" class="hover:text-white transition">DMCA</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
      <p>&copy; 2025 1000xSales. All rights reserved.</p>
    </div>
  </div>
</footer>
```

### Form Elements

```astro
<!-- Newsletter Form -->
<form class="max-w-md mx-auto">
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2" for="email">
      Email Address
    </label>
    <input 
      type="email" 
      id="email"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="you@example.com"
    />
  </div>
  
  <div class="mb-6">
    <label class="block text-gray-700 font-semibold mb-2" for="name">
      Name (Optional)
    </label>
    <input 
      type="text" 
      id="name"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="John Doe"
    />
  </div>
  
  <button 
    type="submit"
    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
    Subscribe Now
  </button>
</form>
```

## 🚀 Quick Updates to Your Pages

### Update Homepage (index.astro)

Add a hero section:

```astro
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
---

<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
	</head>
	<body>
		<Header />
		
		<!-- Hero Section -->
		<section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
			<div class="container mx-auto px-4 text-center">
				<h1 class="text-5xl md:text-6xl font-bold mb-6">1000x Your Sales</h1>
				<p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
					Unlimited Automations, AI-Powered Solutions & Mass Outreach
				</p>
				<div class="flex gap-4 justify-center flex-wrap">
					<a href="/book-a-call" 
					   class="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition">
						Book A Call
					</a>
					<a href="/newsletter" 
					   class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition">
						Newsletter
					</a>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section class="py-20">
			<div class="container mx-auto px-4">
				<h2 class="text-4xl font-bold text-center mb-12">What We Offer</h2>
				<div class="grid md:grid-cols-3 gap-8">
					<div class="text-center p-6">
						<div class="text-5xl mb-4">🤖</div>
						<h3 class="text-2xl font-bold mb-4">Unlimited Automations</h3>
						<p class="text-gray-600">Automate your entire sales process with N8N and custom workflows.</p>
					</div>
					<div class="text-center p-6">
						<div class="text-5xl mb-4">🧠</div>
						<h3 class="text-2xl font-bold mb-4">AI-Powered Solutions</h3>
						<p class="text-gray-600">Custom AI lead magnets and intelligent sales assistants.</p>
					</div>
					<div class="text-center p-6">
						<div class="text-5xl mb-4">📈</div>
						<h3 class="text-2xl font-bold mb-4">Mass Outreach</h3>
						<p class="text-gray-600">Ringless voicemail and multi-channel campaigns that convert.</p>
					</div>
				</div>
			</div>
		</section>

		<Footer />
	</body>
</html>
```

### Update Book A Call Page

```astro
<!-- Replace the placeholder booking section with: -->
<div class="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
	<h3 class="text-3xl font-bold text-center mb-6">Schedule Your Free Consultation</h3>
	
	<!-- Add your Calendly embed here -->
	<div class="calendly-inline-widget" 
	     data-url="https://calendly.com/your-link" 
	     style="min-width:320px;height:700px;">
	</div>
	<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>
```

## 🎨 Tailwind Cheat Sheet

**Common Utility Classes:**

- **Colors:** `bg-blue-600`, `text-white`, `border-gray-300`
- **Spacing:** `p-4` (padding), `m-4` (margin), `gap-4` (gap)
- **Size:** `w-full`, `h-64`, `max-w-4xl`
- **Text:** `text-xl`, `font-bold`, `text-center`
- **Flex:** `flex`, `justify-center`, `items-center`, `gap-4`
- **Grid:** `grid`, `grid-cols-3`, `gap-8`
- **Rounded:** `rounded`, `rounded-lg`, `rounded-full`
- **Shadow:** `shadow`, `shadow-md`, `shadow-xl`
- **Hover:** `hover:bg-blue-700`, `hover:shadow-xl`
- **Responsive:** `md:text-xl`, `lg:grid-cols-4`

## 📚 Resources

- **Official Docs:** https://tailwindcss.com/docs
- **Components:** https://tailwindui.com/components (some free)
- **Flowbite:** https://flowbite.com/ (free components)
- **DaisyUI:** https://daisyui.com/ (component library)

## 🎯 Next Steps

1. Update your homepage with hero section
2. Style the Book A Call page
3. Add Tailwind to Newsletter page
4. Update Header with Tailwind navigation
5. Update Footer with Tailwind grid

Test with: `pnpm dev`
