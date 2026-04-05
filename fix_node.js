const fs = require('fs');
const path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Fix the Link duplication and syntax error
// Use a more literal match since regex might fail with curly braces
const oldPiece = `                <Link to={\`/proyectos/\${project.id}\`} className="mt-auto w-max px-6 py-3 bg-[#4a4a4a] border border-gray-700 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-100 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg">
                <Link to={/proyectos/ + '$' + {project.id}} className="mt-auto w-max px-6 py-3 bg-[#4a4a4a] border border-gray-700 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-100 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg">
                  Ver Detalles</Link>`;

const newPiece = `                <Link to={\`/proyectos/\${project.id}\`} className="mt-auto w-max px-6 py-3 bg-[#4a4a4a] border border-gray-700 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-100 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg">
                  Ver Detalles</Link>`;

if (content.includes(oldPiece)) {
    content = content.replace(oldPiece, newPiece);
} else {
    // Fallback search
    console.log("Literal piece not found, trying fuzzy match");
    content = content.replace(/<Link to={`\/proyectos\/\$\{project\.id\}`}.*\n.*Ver Detalles<\/Link>/g, newPiece);
}

// Fix character encoding corruption everywhere in the file
const fixes = {
    "InversiÃ³n": "Inversión",
    "FinanciaciÃ³n": "Financiación",
    "diseÃ±adas": "diseñadas",
    "rÃ¡pida": "rápida",
    "MÃ S ELEGIDO": "MÁS ELEGIDO",
    "formÃ¡s accesible": "forma más accesible",
    "dÃ³lares": "dólares",
    "PosesiÃ³n": "Posesión",
    "FinanciaciÃ³n": "Financiación"
};

for (const [corrupted, fixed] of Object.entries(fixes)) {
    content = content.split(corrupted).join(fixed);
}

fs.writeFileSync(path, content, 'utf8');
console.log("Fix applied successfully");
