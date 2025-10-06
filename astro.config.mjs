// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update with your actual domain
  site: 'https://1000xsales.com',

  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),

  // Static site generation for Cloudflare Pages
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});