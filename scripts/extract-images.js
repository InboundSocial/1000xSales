import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const blogDir = path.join(projectRoot, 'src/content/blog');
const imagesDir = path.join(projectRoot, 'public/images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log('Extracting base64 images from blog posts...\n');

// Get all markdown files
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let imageCount = 0;

files.forEach(filename => {
  const filepath = path.join(blogDir, filename);
  let content = fs.readFileSync(filepath, 'utf-8');
  
  // Match base64 image data
  const base64Regex = /!\[\]\(data:image\/(png|jpg|jpeg|gif|webp);base64,([^)]+)\)/g;
  
  let match;
  let fileModified = false;
  
  while ((match = base64Regex.exec(content)) !== null) {
    const imageType = match[1];
    const base64Data = match[2];
    
    // Generate unique filename
    imageCount++;
    const imageName = `${path.basename(filename, '.md')}-img-${imageCount}.${imageType}`;
    const imagePath = path.join(imagesDir, imageName);
    
    // Write image file
    try {
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(imagePath, buffer);
      
      // Replace base64 with path
      const newImageRef = `![](/images/${imageName})`;
      content = content.replace(match[0], newImageRef);
      fileModified = true;
      
      console.log(`✓ Extracted: ${imageName} (${Math.round(buffer.length / 1024)}KB)`);
    } catch (err) {
      console.error(`✗ Failed to extract image from ${filename}:`, err.message);
    }
  }
  
  // Write updated content back
  if (fileModified) {
    fs.writeFileSync(filepath, content);
    console.log(`✓ Updated: ${filename}\n`);
  }
});

console.log(`\n✅ Extraction complete! ${imageCount} images extracted.`);
console.log(`Images saved to: ${imagesDir}`);
