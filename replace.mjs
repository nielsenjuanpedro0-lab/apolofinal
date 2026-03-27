import fs from 'fs';

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

let appCode = fs.readFileSync('src/App.tsx', 'utf8');
let htmlCode = fs.readFileSync('index.html', 'utf8');

for (const url of urls) {
  const filename = url.split('/').pop().replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const localRoute = '/optimized/' + filename;
  
  appCode = appCode.split(url).join(localRoute);
  htmlCode = htmlCode.split(url).join(localRoute);
}

fs.writeFileSync('src/App.tsx', appCode);
fs.writeFileSync('index.html', htmlCode);
console.log('All URLs replaced successfully!');
