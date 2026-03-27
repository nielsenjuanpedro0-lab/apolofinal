import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const urls = [
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2025/06/APOLO-ARES-6-1.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2025/06/APOLO-ARES-3-1.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2025/06/APOLO-ARES-4-1.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2022/05/Copia-de-1.8.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2021/05/FOTOS-1D.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2024/11/IMG-20201120-WA0031.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2024/11/Copia-de-Nueva-Fachada-1.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2025/06/APOLO-ARES-2-1.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2025/06/52c73f06-1843-44c7-be61-a318be8c1072-scaled.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2024/11/IMG-20210405-WA0009.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2021/09/LOGO-APOLO2-768x766-1.png',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2025/06/APOLO-ARES.jpg',
  'https://apoloconstrucciones.com.ar/wp-content/uploads/2024/11/Copia-de-Nueva-Fachada.jpg'
];

const outDir = path.join(process.cwd(), 'public', 'optimized');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function downloadAndOptimize(url) {
  try {
    const filename = url.split('/').pop().replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outPath = path.join(outDir, filename);
    
    if (fs.existsSync(outPath)) {
      console.log(`Skipping ${filename}, already exists.`);
      return;
    }

    console.log(`Downloading ${url}...`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    
    const buffer = Buffer.from(await res.arrayBuffer());
    
    await sharp(buffer)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
      
    console.log(`Saved optimized ${filename}`);
  } catch (err) {
    console.error(`Error on ${url}:`, err.message);
  }
}

async function run() {
  const uniqueUrls = [...new Set(urls)];
  for (const url of uniqueUrls) {
    await downloadAndOptimize(url);
  }
  console.log('All images optimized!');
}
run();
