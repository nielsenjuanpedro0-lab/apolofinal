$lines = Get-Content -Path "src\App.tsx" -Encoding UTF8

$prefixLineIdx = -1
$suffixLineIdx = -1

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -like "*Ver Detalles*") {
        $prefixLineIdx = $i
    }
    if ($lines[$i] -like "*const Nosotros = () => {*") {
        $suffixLineIdx = $i
    }
}

$prefix = $lines[0..($prefixLineIdx-1)]
$linkLine = "                <Link to={`/proyectos/` + '$' + `{project.id}`} className=""mt-auto w-max px-6 py-3 bg-[#4a4a4a] border border-gray-700 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-100 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg"">"
$detailsLine = "                  Ver Detalles</Link>"
$closingTags = "              </div>","            </motion.div>","          ))}","        </div>","      </div>","    </div>","  );","};",""

$financiacion = @"
const Financiacion = () => {
  return (
    <div className="pt-24 pb-12 bg-[#3b3b3b] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Inversión y Resguardo</p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight tracking-tighter font-bold text-gray-100">
            Opciones de <br /><span className="text-[#f27d26] font-bold">Financiación.</span>
          </h1>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            Facilitamos el camino hacia tu nuevo hogar con opciones flexibles y seguras, diseñadas para el inversor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 md:p-12 bg-[#4a4a4a] rounded-[2.5rem] border border-gray-800 hover:border-[#f27d26]/30 transition-all duration-500 shadow-xl flex flex-col"
          >
            <span className="inline-block px-4 py-1.5 bg-gray-900 border border-gray-700 text-[#f27d26] text-[9px] font-black tracking-widest rounded-full mb-8 w-fit uppercase">
              RENTABILIDAD
            </span>
            <h3 className="text-3xl font-bold text-gray-100 mb-6">Plan Inversor</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium flex-grow">
              Ideal para quienes buscan rentabilidad rápida. Entrega del 50% y saldo en 24 o 36 cuotas fijas o ajustables.
            </p>
            <ul className="space-y-4 mb-10">
              {['Financiación directa', 'Ajuste por CAC o FIJO', 'Posesión inmediata en listos'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-100 font-bold text-base">
                  <div className="w-5 h-5 rounded-full bg-[#f27d26]/20 flex items-center justify-center border border-[#f27d26]/40">
                    <Check className="w-3 h-3 text-[#f27d26]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contacto" className="w-full py-4 bg-gray-900 hover:bg-black text-white font-black rounded-xl transition-all duration-300 text-sm uppercase tracking-widest text-center shadow-xl">
              Consultar Detalles
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-gradient-to-br from-[#423129] to-[#33261f] p-8 md:p-12 rounded-[2.5rem] border-2 border-[#f27d26]/40 flex flex-col shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(242,125,38,0.25)] transition-all duration-700 group h-full"
          >
            <div className="absolute top-4 right-4 px-4 py-1.5 bg-[#f27d26] text-white text-[9px] font-black uppercase tracking-widest rounded-full animate-pulse z-20">
              MÁS ELEGIDO
            </div>
            
            <span className="inline-block px-4 py-1.5 bg-black/40 border border-[#f27d26]/30 text-[#f27d26] text-[9px] font-black tracking-widest rounded-full mb-8 w-fit uppercase">
              120 CUOTAS
            </span>
            <h3 className="text-3xl font-bold text-gray-100 mb-6">Plan 120 <span className="text-[#f27d26]">Cuotas.</span></h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-medium flex-grow">
              La forma más accesible de dolarizar sus ahorros. Pague en mensualidades en <strong>PESOS</strong> mientras capitaliza en dólares.
            </p>
            <ul className="space-y-4 mb-10">
              {['Financiación directa en PESOS', 'Sin requisitos bancarios', 'Ares 22 - Exclusivo'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-100 font-bold text-base">
                  <div className="w-5 h-5 rounded-full bg-[#f27d26]/20 flex items-center justify-center border border-[#f27d26]/40">
                    <Check className="w-3 h-3 text-[#f27d26]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/proyectos/ares-22" className="w-full py-4 bg-[#f27d26] hover:bg-white hover:text-[#f27d26] text-white font-black rounded-xl transition-all duration-300 text-sm uppercase tracking-widest text-center shadow-xl">
              Ver Proyecto Ares 22
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
"@

$suffix = $lines[$suffixLineIdx..($lines.Length-1)]

$newFileContent = $prefix + $linkLine + $detailsLine + $closingTags + $financiacion + $suffix

$newFileContent | Set-Content -Path "src\App.tsx" -Encoding UTF8
