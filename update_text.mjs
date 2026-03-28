import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const newData = {
  'ares-6': {
    fullDescriptionHtml: `
      <p class="mb-4">El proyecto <strong>Apolo Ares 6</strong> está concebido como la opción ideal para quienes buscan una inversión segura o un espacio perfecto para alquiler temporario.</p>
      <p class="mb-4">Combina una arquitectura contemporánea con espacios adaptables a la vida moderna, ofreciendo departamentos de 2 ambientes totalmente funcionales.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Departamentos de 2 ambientes.</li>
        <li>Ideal para alquiler temporario.</li>
        <li>Local en planta baja.</li>
        <li>9 Cocheras Disponibles Cubiertas.</li>
      </ul>
      <p class="font-bold text-[#f27d26] mt-6">Financiación en hasta 24 cuotas. Venta desde el pozo y pre-venta.</p>
    `
  },
  'viggo-91': {
    fullDescriptionHtml: `
      <p class="mb-4">Venta desde el pozo de dos espectaculares dúplex ubicados sobre la importante Av. 91 entre las calles 42 y 40.</p>
      <p class="mb-4">Un lugar privilegiado a pocas cuadras del mágico parque Miguel Lillo, en Necochea, Prov. de Buenos Aires.</p>
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Detalles</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Ubicación:</strong> Av. 91 N° 1781 e/ 87 y 85.</li>
        <li><strong>Metros cuadrados cubiertos:</strong> 105m² y 95m² respectivamente.</li>
        <li><strong>Metros cuadrados semicubiertos:</strong> 50m² cada uno.</li>
        <li><strong>Dormitorios:</strong> 3 y 2 respectivamente.</li>
        <li><strong>Baños:</strong> 1 principal + 1 de servicio cada uno.</li>
      </ul>
      <p class="font-bold text-[#f27d26] mt-6">Costos de mantenimiento: sin expensas.</p>
    `
  },
  'dafne-42': {
    fullDescriptionHtml: `
      <h3 class="text-xl font-bold text-gray-900 mb-3">Departamentos a estrenar</h3>
      <p class="mb-4">Balcón a la avenida. Cerca del parque Miguel Lillo y de la playa.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Tipo:</strong> DEPARTAMENTO</li>
        <li><strong>Ambientes:</strong> 2</li>
        <li><strong>Metros cuadrados cubiertos:</strong> 50m²</li>
      </ul>
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Terminaciones</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Pisos de Porcelanato.</li>
        <li>Cocina con alacena y bajo mesada hecha a medida.</li>
        <li>Mesada de granito gris mara.</li>
        <li>Placares incluidos.</li>
        <li>Puerta principal de madera dura para exteriores.</li>
        <li>Aberturas modena DVH.</li>
        <li>Estufas tiro balanceado y luminarias LED.</li>
        <li>Baño completo.</li>
      </ul>
      <p class="font-bold text-[#f27d26] mt-6">Costos de mantenimiento: sin expensas.</p>
    `
  },
  'ares-22': {
    fullDescriptionHtml: `
      <p class="mb-4">Presentamos <strong>«Ares 22»</strong>, una auténtica joya del sector inmobiliario a 7 cuadras de la playa de NECOCHEA. Este proyecto representa una oportunidad única para inversores con una visión prospectiva.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Rentabilidad Asegurada</h3>
      <p class="mb-4">«Ares 22» combina excelencia y rentabilidad. Con departamentos de dos ambientes y nueve cocheras disponibles, esta es una oportunidad inmejorable para ingresar al mercado inmobiliario con éxito garantizado.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">FINANCIACIÓN EXCLUSIVA DESDE EL POZO</h3>
      <p class="mb-4">Solo por esta oportunidad, con tan solo una <strong>RESERVA DEL 20%</strong> podés adquirir tu unidad mas una financiación de 24 cuotas en PESOS.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Ubicación Estratégica</h3>
      <p class="mb-4">Situado en la calle 22, entre las calles 77 y 79, este proyecto se encuentra a tan solo tres cuadras y media de la vital Avenida 10, que representa el principal corredor peatonal de la ciudad y a 7 cuadras de la playa. Aprovechando el crecimiento dinámico hacia la costa, este desarrollo atrae tanto a turistas como a residentes locales.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Diseño y Calidad</h3>
      <p class="mb-4">Ofrecemos departamentos de más de 45 m², cada uno con balcones orientados tanto al frente como al contrafrente, además de cocheras y servicios esenciales como agua, cloacas, electricidad y gas. Tu inversión se traduce en comodidad y funcionalidad.</p>
      
      <p class="font-bold text-[#f27d26] mt-6">Costos de mantenimiento: sin expensas.</p>
    `
  },
  'delfos-83': {
    fullDescriptionHtml: `
      <p class="mb-4">Una joya inmobiliaria en el corazón de NECOCHEA.</p>
      <p class="mb-4">Ubicado estratégicamente en la vibrante ciudad, este proyecto es una oportunidad excepcional para inversores visionarios.</p>
      <p class="mb-4"><strong>«Delfos 83»</strong> ofrece calidad y rentabilidad. Con departamentos de 1, 2 y 3 ambientes con patios propios, balcones al frente y cocheras, esta es tu oportunidad de entrar al mercado inmobiliario con éxito asegurado.</p>
      <p class="mb-4">En plena calle 83 entre calles 24 y 26 se emplaza a solo 3 cuadras y media de la importantísima Av. 10, la cual es el sendero peatonal mas importante de la cuidad. Este proyecto aprovecha el crecimiento dinámico de la ciudad hacia la playa en donde capta justo el publico turístico como el local.</p>
      <p class="font-bold text-[#f27d26] mt-6">Costos de mantenimiento: sin expensas.</p>
    `
  },
  'orfeo': {
    fullDescriptionHtml: `
      <h3 class="text-xl font-bold text-gray-900 mb-3">En Venta - Posesión inmediata</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Todos los servicios.</li>
        <li>Unidad a estrenar sin expensas.</li>
        <li>Terreno de 5 por 30 metros de largo, listo para escriturar, subdivisión y reglamento terminados.</li>
        <li>Entrada para dos vehículos chicos o camioneta.</li>
        <li>Patio trasero de 13 metros de largo cerrado.</li>
      </ul>
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Detalles del Inmueble</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Tipo:</strong> DEPARTAMENTO</li>
        <li><strong>Ambientes:</strong> 2</li>
        <li><strong>Metros cubiertos:</strong> 50m²</li>
        <li><strong>Metros semicubiertos:</strong> 45m²</li>
      </ul>
      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">Terminaciones</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Pisos de Porcelanatos.</li>
        <li>Cocina con alacena y bajo mesada hecha a medida.</li>
        <li>Mesada de granito gris mara, griferia FV, artefactos Ferrum, mampara con vidrio de seguridad.</li>
        <li>Baño completo con bañera.</li>
        <li>Patio con parrilla.</li>
        <li>Incluye 2 estufas tiro balanceado, gabinete exterior con termotanque.</li>
        <li>Aberturas de aluminio modena, luminarias led.</li>
      </ul>
    `
  },
  'zeus-543': {
    fullDescriptionHtml: `
      <p class="mb-4"><strong>Zeus 543</strong> es el primer emprendimiento que realizamos sobre la calle 543 entre Av. Loberia y 580.</p>
      <p class="mb-4">Se emplazó en un lote de 10×40 un departamento de 2 ambientes y un dúplex de 110 m² cubiertos con entradas dobles vehiculares y patios propios.</p>
      <p class="font-bold text-[#f27d26] mt-6">Obra Finalizada</p>
    `
  }
};

for (const [id, data] of Object.entries(newData)) {
  const regex = new RegExp(`(id:\\s*'${id}'.*?)fullDescription:\\s*'.*?',`, 's');
  content = content.replace(regex, `$1fullDescriptionHtml: \`\n${data.fullDescriptionHtml.trim()}\n    \`,`);
}

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx updated with rich descriptions!');
