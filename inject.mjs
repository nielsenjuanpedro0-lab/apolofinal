import fs from 'fs';

const galleries = JSON.parse(fs.readFileSync('galleries.json', 'utf8'));
let code = fs.readFileSync('src/App.tsx', 'utf8');

for (const [id, imgs] of Object.entries(galleries)) {
  if (!imgs || imgs.length === 0) continue;
  
  const mainImage = imgs[0];
  const galleryStr = '[\n      ' + imgs.map(i => `'${i}'`).join(',\n      ') + '\n    ]';
  
  // Regex to match the block starting with id: '...' down to gallery: [...]
  // We use (?:(?!\\n\\s*id:).)*? to ensure we don't accidentally match across projects
  const regex = new RegExp(`(id:\\s*'${id}'(?:(?!\\n\\s*id:).)*?image:\\s*')[^']+('.*?gallery:\\s*)\\[.*?\\]`, 's');
  
  code = code.replace(regex, `$1${mainImage}$2${galleryStr}`);
}

fs.writeFileSync('src/App.tsx', code);
console.log('Images injected into App.tsx successfully!');
