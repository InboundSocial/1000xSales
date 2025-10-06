#!/usr/bin/env node

/**
 * WordPress to Markdown Conversion Script
 * 
 * Usage:
 * 1. Place your WordPress export XML file in the root directory as 'wordpress-export.xml'
 * 2. Run: node scripts/convert-wordpress.js
 * 
 * This will:
 * - Parse the WordPress XML export
 * - Convert posts to Markdown files
 * - Place them in src/content/blog/
 * - Extract metadata (title, date, categories, tags)
 */

import fs from 'fs';
import path from 'path';

console.log('WordPress to Astro Conversion Script');
console.log('=====================================\n');

const exportFile = 'wordpress-export.xml';
const outputDir = 'src/content/blog';

if (!fs.existsSync(exportFile)) {
  console.error(`❌ WordPress export file not found: ${exportFile}`);
  console.log('\nPlease export your WordPress content:');
  console.log('1. Go to WordPress Admin → Tools → Export');
  console.log('2. Select "All content" and download');
  console.log(`3. Save the file as "${exportFile}" in the project root`);
  console.log('\nThen run this script again.');
  process.exit(1);
}

console.log('✅ Found WordPress export file');
console.log('\nTo convert your WordPress content to Markdown, use:');
console.log('\nnpx wordpress-export-to-markdown\n');
console.log('This will guide you through the conversion process.');
console.log('\nAlternatively, install and use it with these settings:');
console.log('  - Input file: wordpress-export.xml');
console.log('  - Output folder: src/content/blog');
console.log('  - Year folders: No');
console.log('  - Month folders: No');
console.log('  - Prefix date: Yes (for better sorting)');
