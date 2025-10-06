import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const xmlFile = path.join(projectRoot, '1000xsales.WordPress.2025-10-06.xml');
const outputDir = path.join(projectRoot, 'src/content/blog');

console.log('Reading WordPress export...');
const xml = fs.readFileSync(xmlFile, 'utf-8');

// Simple regex-based extraction
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
const contentRegex = /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/;
const dateRegex = /<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/;
const typeRegex = /<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/;
const statusRegex = /<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/;
const excerptRegex = /<excerpt:encoded><!\[CDATA\[(.*?)\]\]><\/excerpt:encoded>/;

let items = [];
let match;

while ((match = itemRegex.exec(xml)) !== null) {
  const item = match[1];
  
  const titleMatch = item.match(titleRegex);
  const contentMatch = item.match(contentRegex);
  const dateMatch = item.match(dateRegex);
  const typeMatch = item.match(typeRegex);
  const statusMatch = item.match(statusRegex);
  const excerptMatch = item.match(excerptRegex);
  
  if (typeMatch && typeMatch[1] === 'post' && statusMatch && statusMatch[1] === 'publish') {
    items.push({
      title: titleMatch ? titleMatch[1] : 'Untitled',
      content: contentMatch ? contentMatch[1] : '',
      date: dateMatch ? dateMatch[1] : '',
      excerpt: excerptMatch ? excerptMatch[1] : ''
    });
  }
}

console.log(`Found ${items.length} published posts`);

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert HTML to basic markdown (simple version)
function htmlToMarkdown(html) {
  return html
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<b>(.*?)<\/b>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<i>(.*?)<\/i>/g, '*$1*')
    .replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<h1>(.*?)<\/h1>/g, '# $1\n\n')
    .replace(/<h2>(.*?)<\/h2>/g, '## $1\n\n')
    .replace(/<h3>(.*?)<\/h3>/g, '### $1\n\n')
    .replace(/<h4>(.*?)<\/h4>/g, '#### $1\n\n')
    .replace(/<ul>(.*?)<\/ul>/gs, '$1')
    .replace(/<ol>(.*?)<\/ol>/gs, '$1')
    .replace(/<li>(.*?)<\/li>/g, '- $1\n')
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .replace(/<pre>(.*?)<\/pre>/gs, '```\n$1\n```\n')
    .replace(/<img.*?src="(.*?)".*?>/g, '![]($1)')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

// Create slug from title
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Format date for frontmatter
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toISOString().split('T')[0];
}

items.forEach((item, index) => {
  const date = formatDate(item.date);
  const slug = slugify(item.title);
  const filename = `${date}-${slug}.md`;
  const filepath = path.join(outputDir, filename);
  
  const markdown = htmlToMarkdown(item.content);
  const description = item.excerpt ? htmlToMarkdown(item.excerpt) : markdown.substring(0, 150) + '...';
  
  const frontmatter = `---
title: "${item.title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
pubDate: "${date}"
---

${markdown}
`;

  fs.writeFileSync(filepath, frontmatter);
  console.log(`✓ Created: ${filename}`);
});

console.log(`\n✅ Conversion complete! ${items.length} posts converted.`);
