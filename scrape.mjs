import fs from 'fs';

const urls = [
  'https://apoloconstrucciones.com.ar/orfeo-34/',
  'https://apoloconstrucciones.com.ar/dafne-42/',
  'https://apoloconstrucciones.com.ar/viggo/',
  'https://apoloconstrucciones.com.ar/delfos-83/',
  'https://apoloconstrucciones.com.ar/zeus/',
  'https://apoloconstrucciones.com.ar/ares-22/',
  'https://apoloconstrucciones.com.ar/ares-6/'
];

async function scrape() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const html = await res.text();
      const regex = /<img[^>]+src="([^">]+)"/g;
      let match;
      const images = [];
      while ((match = regex.exec(html)) !== null) {
        let src = match[1];
        if (src.includes('wp-content/uploads') && !src.includes('LOGO') && !src.includes('logo') && !src.endsWith('.svg')) {
          // Remove sizes like -300x200 or -1024x680 to get the original high-res image
          src = src.replace(/-\d+x\d+(?=\.(jpg|jpeg|png)$)/i, '');
          images.push(src);
        }
      }
      console.log(`\n### ${url.split('/').filter(Boolean).pop()} ###`);
      // print unique images
      [...new Set(images)].forEach(img => console.log(img));
    } catch (e) {
      console.error(`Error fetching ${url}:`, e.message);
    }
  }
}
scrape();
