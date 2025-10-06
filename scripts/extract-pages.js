import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const xmlFile = path.join(projectRoot, '1000xsales.WordPress.2025-10-06.xml');

console.log('Extracting WordPress pages...\n');
const xml = fs.readFileSync(xmlFile, 'utf-8');

// Extract pages (not posts)
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
const contentRegex = /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/;
const typeRegex = /<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/;
const statusRegex = /<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/;
const slugRegex = /<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/;

let pages = [];
let match;

while ((match = itemRegex.exec(xml)) !== null) {
  const item = match[1];
  
  const titleMatch = item.match(titleRegex);
  const contentMatch = item.match(contentRegex);
  const typeMatch = item.match(typeRegex);
  const statusMatch = item.match(statusRegex);
  const slugMatch = item.match(slugRegex);
  
  if (typeMatch && typeMatch[1] === 'page' && statusMatch && statusMatch[1] === 'publish') {
    pages.push({
      title: titleMatch ? titleMatch[1] : 'Untitled',
      slug: slugMatch ? slugMatch[1] : 'untitled',
      content: contentMatch ? contentMatch[1] : ''
    });
  }
}

console.log(`Found ${pages.length} published pages:\n`);

pages.forEach(page => {
  console.log(`- ${page.title} (slug: ${page.slug})`);
  console.log(`  Content length: ${page.content.length} chars`);
  console.log();
});

export { pages };
