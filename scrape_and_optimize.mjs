import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const urls = {
  'orfeo': 'https://apoloconstrucciones.com.ar/orfeo-34/',
  'dafne-42': 'https://apoloconstrucciones.com.ar/dafne-42/',
  'viggo-91': 'https://apoloconstrucciones.com.ar/viggo/',
  'delfos-83': 'https://apoloconstrucciones.com.ar/delfos-83/',
  'zeus-543': 'https://apoloconstrucciones.com.ar/zeus/',
  'ares-22': 'https://apoloconstrucciones.com.ar/ares-22/'
};

const outDir = path.join(process.cwd(), 'public', 'optimized');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const projectGalleries = {};

async function processProject(id, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const html = await res.text();
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = [];
    while ((match = regex.exec(html)) !== null) {
      let src = match[1];
      if (src.includes('wp-content/uploads') && !src.includes('LOGO') && !src.includes('logo') && !src.endsWith('.svg') && !src.includes('ICON')) {
        src = src.replace(/-\d+x\d+(?=\.(jpg|jpeg|png)$)/i, '');
        images.push(src);
      }
    }
    
    // There are some repeated images with different queries like ?v=123.
    // Strip queries for uniqueness
    const cleanUrls = images.map(u => u.split('?')[0]);
    const uniqueUrls = [...new Set(cleanUrls)];
    const localGalleries = [];
    
    for (const imgUrl of uniqueUrls) {
      if (!imgUrl.match(/\.(jpg|jpeg|png)$/i)) continue;
      
      const filename = imgUrl.split('/').pop().replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const outPath = path.join(outDir, filename);
      const localUrl = '/optimized/' + filename;
      
      localGalleries.push(localUrl);
      
      if (fs.existsSync(outPath)) {
        continue;
      }

      console.log(`Downloading ${filename}...`);
      try {
        const imgRes = await fetch(imgUrl);
        if (!imgRes.ok) continue;
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        
        await sharp(buffer)
          .resize({ width: 1400, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outPath);
      } catch (e) {
        console.error(`Failed ${imgUrl}`, e.message);
      }
    }
    projectGalleries[id] = localGalleries;
  } catch (e) {
    console.error(`Error ${id}:`, e.message);
  }
}

async function run() {
  for (const [id, url] of Object.entries(urls)) {
    console.log(`Processing ${id}...`);
    await processProject(id, url);
  }
  
  // Ares 6 images based on Ares 22
  projectGalleries['ares-6'] = [
    '/optimized/APOLO-ARES-6-1.webp',
    '/optimized/APOLO-ARES-3-1.webp',
    '/optimized/APOLO-ARES-4-1.webp',
    '/optimized/APOLO-ARES-1-1.webp'
  ];

  fs.writeFileSync('galleries.json', JSON.stringify(projectGalleries, null, 2));
  console.log('Finished everything!');
}
run();
