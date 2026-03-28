import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add decoding="async" wherever loading="lazy" is present
content = content.replace(/loading="lazy"\s*(?!decoding="async")/g, 'loading="lazy" decoding="async"');

// 2. Fix the ProjectDetail Gallery zero-height collapse issue
// Search for: className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy"
content = content.replace(
  /className="break-inside-avoid shadow-lg rounded-3xl overflow-hidden border border-gray-100 group bg-white p-2 relative"/g,
  'className="break-inside-avoid shadow-sm rounded-3xl overflow-hidden border border-gray-100 group bg-white p-2 relative min-h-[250px] mb-6"'
);

// Optimize the framer-motion margin for mobile observer
content = content.replace(
  /viewport=\{\{ once: true, margin: "-50px" \}\}/g,
  'viewport={{ once: true, margin: "0px" }}'
);
content = content.replace(
  /viewport=\{\{ once: true, margin: "-100px" \}\}/g,
  'viewport={{ once: true, margin: "0px" }}'
);

// 3. Fix the eager-loaded missing lazy attributes in Home 'Architecture' image & 'Financiacion' image 
// APOLO-ARES-6-1.webp in Home
content = content.replace(
  /src="\/optimized\/APOLO-ARES-6-1\.webp"([^>]+)referrerPolicy="no-referrer"\s*\/\>/g,
  'src="/optimized/APOLO-ARES-6-1.webp"$1referrerPolicy="no-referrer" loading="lazy" decoding="async" />'
);

// APOLO-ARES-5-1.jpg in Home
content = content.replace(
  /src="https:\/\/apoloconstrucciones.com.ar\/wp-content\/uploads\/2025\/06\/APOLO-ARES-5-1.jpg"([^>]+)referrerPolicy="no-referrer"\s*\/\>/g,
  'src="/optimized/APOLO-ARES-5-1.webp"$1referrerPolicy="no-referrer" loading="lazy" decoding="async" />'
);

// 4. Make sure Carousel prefetch logic has decoding async
content = content.replace(
  /fetchPriority=\{currentIndex === 0 \? "high" : "auto"\}\s*\/\>/g,
  'fetchPriority={currentIndex === 0 ? "high" : "auto"} decoding="async" />'
);

// 5. Add decoding async to the project hero detail
content = content.replace(
  /fetchPriority="high"\s*\/\>/g,
  'fetchPriority="high" decoding="async" />'
);

// 6. Reduce framer motion duration values on hover to feel more snappy on mobile
content = content.replace(
  /duration-\[1\.5s\]/g,
  'duration-700'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Mobile Performance Fixes Applied!');
