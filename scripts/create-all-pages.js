import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const xmlFile = path.join(projectRoot, '1000xsales.WordPress.2025-10-06.xml');
const pagesDir = path.join(projectRoot, 'src/pages');

console.log('Creating all WordPress pages...\n');

const xml = fs.readFileSync(xmlFile, 'utf-8');

// Extract pages
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
const contentRegex = /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/;
const typeRegex = /<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/;
const statusRegex = /<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/;
const slugRegex = /<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/;
const excerptRegex = /<excerpt:encoded><!\[CDATA\[(.*?)\]\]><\/excerpt:encoded>/;

let pages = [];
let match;

while ((match = itemRegex.exec(xml)) !== null) {
  const item = match[1];
  
  const titleMatch = item.match(titleRegex);
  const contentMatch = item.match(contentRegex);
  const typeMatch = item.match(typeRegex);
  const statusMatch = item.match(statusRegex);
  const slugMatch = item.match(slugRegex);
  const excerptMatch = item.match(excerptRegex);
  
  if (typeMatch && typeMatch[1] === 'page' && statusMatch && statusMatch[1] === 'publish') {
    pages.push({
      title: titleMatch ? titleMatch[1] : 'Untitled',
      slug: slugMatch ? slugMatch[1] : 'untitled',
      content: contentMatch ? contentMatch[1] : '',
      excerpt: excerptMatch ? excerptMatch[1] : ''
    });
  }
}

// Skip pages that already exist or have special handling
const skipSlugs = ['home', 'newsletter', 'program']; // program is book-a-call

// Clean HTML to basic markdown
function cleanContent(html) {
  return html
    .replace(/<p>/g, '\n')
    .replace(/<\/p>/g, '\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<b>(.*?)<\/b>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<i>(.*?)<\/i>/g, '*$1*')
    .replace(/<a href="(.*?)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<h1[^>]*>(.*?)<\/h1>/g, '# $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/g, '## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/g, '### $1\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/g, '#### $1\n')
    .replace(/<ul[^>]*>/g, '\n')
    .replace(/<\/ul>/g, '\n')
    .replace(/<ol[^>]*>/g, '\n')
    .replace(/<\/ol>/g, '\n')
    .replace(/<li[^>]*>(.*?)<\/li>/g, '- $1\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/<[^>]+>/g, '') // Remove remaining HTML tags
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Clean up excess newlines
    .trim();
}

// Create Astro page template
function createPageTemplate(title, content, description = '') {
  const cleanedContent = cleanContent(content);
  const desc = description || `${title} - 1000xSales`;
  
  return `---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE } from '../consts';
---

<!doctype html>
<html lang="en">
	<head>
		<BaseHead title={\`${title} - \${SITE_TITLE}\`} description="${desc}" />
	</head>
	<body>
		<Header />
		<main>
			<article>
				<div class="prose">
					<div class="title">
						<h1>${title}</h1>
						<hr />
					</div>
					<div class="content">
${cleanedContent.split('\n').map(line => '\t\t\t\t\t\t' + line).join('\n')}
					</div>
				</div>
			</article>
		</main>
		<Footer />
	</body>
</html>

<style>
	main {
		width: calc(100% - 2em);
		max-width: 100%;
		margin: 0;
	}
	.prose {
		width: 720px;
		max-width: calc(100% - 2em);
		margin: auto;
		padding: 1em;
		color: rgb(var(--gray-dark));
	}
	.title {
		margin-bottom: 1em;
		padding: 1em 0;
		text-align: center;
		line-height: 1;
	}
	.title h1 {
		margin: 0 0 0.5em 0;
	}
	.content {
		margin-bottom: 2rem;
		line-height: 1.6;
	}
</style>
`;
}

// Create pages
let created = 0;
let skipped = 0;

pages.forEach(page => {
  if (skipSlugs.includes(page.slug)) {
    console.log(`⏭️  Skipped: ${page.title} (already exists)`);
    skipped++;
    return;
  }
  
  const filename = `${page.slug}.astro`;
  const filepath = path.join(pagesDir, filename);
  
  if (fs.existsSync(filepath)) {
    console.log(`⏭️  Skipped: ${page.title} (file exists)`);
    skipped++;
    return;
  }
  
  const pageContent = createPageTemplate(page.title, page.content, page.excerpt);
  fs.writeFileSync(filepath, pageContent);
  
  console.log(`✓ Created: ${filename} (${page.title})`);
  created++;
});

console.log(`\n✅ Complete! Created ${created} pages, skipped ${skipped}`);
console.log(`\nPages location: ${pagesDir}`);
