const fs = require('fs');
const path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Targeted fix for the very last corrupted string
content = content.split('MÃ S ELEGIDO').join('MÁS ELEGIDO');

fs.writeFileSync(path, content, 'utf8');
console.log("Final fix applied");
