import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Import MotionConfig from framer-motion
if (!content.includes('MotionConfig')) {
  content = content.replace(/import\s*\{\s*motion\s*,\s*AnimatePresence\s*}\s*from\s*'motion\/react';/, "import { motion, AnimatePresence, MotionConfig } from 'motion/react';");
}

// 2. Add useIsMobile hook before the App component
const hookCode = `
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

export default function App() {`;

content = content.replace(/export\s+default\s+function\s+App\(\)\s*\{/g, hookCode);

// 3. Wrap Router inside MotionConfig
content = content.replace(
  /return\s*\(\s*<Router>/,
  'const isMobile = useIsMobile();\n  return (\n    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>\n    <Router>'
);

content = content.replace(
  /<\/Router>\s*\);\s*\};?/g,
  '</Router>\n    </MotionConfig>\n  );\n}'
);

fs.writeFileSync('src/App.tsx', content);
console.log('MotionConfig injected successfully!');
