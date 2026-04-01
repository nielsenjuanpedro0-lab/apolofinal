/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Clock, 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone, 
  TrendingUp, 
  Wallet,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Check,
  Eye,
  Users,
  FileText,
  KeyRound,
  CreditCard,
  ZoomIn,
  Banknote,
  Megaphone,
  Gift,
  Play
} from 'lucide-react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';

// --- Data ---

const PROJECTS = [
  {
    id: 'viggo-91',
    name: 'Viggo 91',
    status: 'En venta',
    category: 'En venta',
    description: 'Viviendas modernas en una ubicación privilegiada. Un procedimiento seguro y confiable.',
    fullDescriptionHtml: `
<p class="mb-4">Venta desde el pozo de dos espectaculares dúplex ubicados sobre la importante Av. 91 entre las calles 42 y 40.</p>
      <p class="mb-4">Un lugar privilegiado a pocas cuadras del mágico parque Miguel Lillo, en Necochea, Prov. de Buenos Aires.</p>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">Detalles</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Ubicación:</strong> Av. 91 N° 1781 e/ 87 y 85.</li>
        <li><strong>Metros cuadrados cubiertos:</strong> 105m² y 95m² respectivamente.</li>
        <li><strong>Metros cuadrados semicubiertos:</strong> 50m² cada uno.</li>
        <li><strong>Dormitorios:</strong> 3 y 2 respectivamente.</li>
        <li><strong>Baños:</strong> 1 principal + 1 de servicio cada uno.</li>
      </ul>
      <p class="font-bold text-[#f27d26] mt-6">Costos de mantenimiento: sin expensas.</p>
    `,
    features: ['3 ambientes con balcón', 'Doble cochera', 'Patio propio', 'Financiación del 70%'],
    financing: ['Descuentos por pago en efectivo', 'Costos de escrituración incluidos', 'Sin comisiones inmobiliarias'],
    image: '/optimized/Copia-de-1.8.webp',
    gallery: [
      '/optimized/Copia-de-1.8.webp',
      '/optimized/52c73f06-1843-44c7-be61-a318be8c1072-1.webp',
      '/optimized/2e5afdf1-5119-4591-bc96-3bd37dc07dae-1.webp',
      '/optimized/2608ad0f-1069-49cf-8368-fcf595ae2613-1.webp',
      '/optimized/6128e319-cc85-42ea-a78c-7b032da48ba0-1.webp',
      '/optimized/8de5d505-9fdd-4e78-9b33-37b657611bde-1.webp',
      '/optimized/4efcdd09-d9a2-4e73-a57a-8a36e30d61f6-1-1.webp',
      '/optimized/f3c351ac-bfc1-4fe9-b6ec-243d7d21c868-1.webp',
      '/optimized/28181947-4341-4094-84de-95157d4d66c6-1.webp'
    ]
  },
  {
    id: 'dafne-42',
    name: 'Dafne 42',
    status: 'Finalizado',
    category: 'Finalizados',
    description: 'Departamentos de 1, 2 y 3 ambientes con patio propio y cocheras disponibles. Entrega inmediata.',
    fullDescriptionHtml: `
<h3 class="text-xl font-bold text-gray-100 mb-3">Departamentos a estrenar</h3>
      <p class="mb-4">Balcón a la avenida. Cerca del parque Miguel Lillo y de la playa.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Tipo:</strong> DEPARTAMENTO</li>
        <li><strong>Ambientes:</strong> 2</li>
        <li><strong>Metros cuadrados cubiertos:</strong> 50m²</li>
      </ul>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">Terminaciones</h3>
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
    `,
    features: ['Departamentos de 1, 2 y 3 ambientes Adaptables', 'Cocheras Disponibles', 'Patio propio', 'Diseño funcional'],
    financing: ['Financiación en hasta 48 cuotas', 'Posesión inmediata'],
    image: '/optimized/DAFNE-ENTREGADO.webp',
    gallery: [
      '/optimized/DAFNE-ENTREGADO.webp',
      '/optimized/IMG_20221106_150650785_HDR.webp',
      '/optimized/IMG-20230303-WA0200.webp',
      '/optimized/IMG_20230705_195352_310.webp',
      '/optimized/IMG_20221105_112328537_MF_PORTRAIT.webp',
      '/optimized/IMG_20221106_150542803_HDR.webp',
      '/optimized/IMG_20221106_151230141_MF_PORTRAIT.webp',
      '/optimized/IMG_20221106_151234977_MF_PORTRAIT.webp',
      '/optimized/IMG_20221106_151147282_MF_PORTRAIT.webp',
      '/optimized/IMG_20221106_151502423_MF_PORTRAIT.webp',
      '/optimized/IMG_20221106_151347052_MF_PORTRAIT.webp',
      '/optimized/IMG_20221106_150904764.webp',
      '/optimized/IMG_20221106_151138243_MF_PORTRAIT.webp'
    ]
  },
  {
    id: 'ares-22',
    name: 'Ares 22',
    status: 'En desarrollo',
    category: 'En desarrollo',
    description: 'Proyecto de vanguardia con unidades funcionales y diseño contemporáneo.',
    fullDescriptionHtml: `
<p class="mb-4">Presentamos <strong>«Ares 22»</strong>, una auténtica joya del sector inmobiliario a 7 cuadras de la playa de NECOCHEA. Este proyecto representa una oportunidad única para inversores con una visión prospectiva.</p>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">Rentabilidad Asegurada</h3>
      <p class="mb-4">«Ares 22» combina excelencia y rentabilidad. Con departamentos de dos ambientes y nueve cocheras disponibles, esta es una oportunidad inmejorable para ingresar al mercado inmobiliario con éxito garantizado.</p>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">FINANCIACIÓN EXCLUSIVA DESDE EL POZO</h3>
      <p class="mb-4">Solo por esta oportunidad, con tan solo una <strong>RESERVA DEL 20%</strong> podés adquirir tu unidad mas una financiación de hasta <strong style="color: #f27d26; font-size: 1.3em;">120 CUOTAS</strong> en <strong>PESOS</strong>.</p>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">Ubicación Estratégica</h3>
      <p class="mb-4">Situado en la calle 22, entre las calles 77 y 79, este proyecto se encuentra a tan solo tres cuadras y media de la vital Avenida 10, que representa el principal corredor peatonal de la ciudad y a 7 cuadras de la playa. Aprovechando el crecimiento dinámico hacia la costa, este desarrollo atrae tanto a turistas como a residentes locales.</p>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">Diseño y Calidad</h3>
      <p class="mb-4">Ofrecemos departamentos de más de 45 m², cada uno con balcones orientados tanto al frente como al contrafrente, además de cocheras y servicios esenciales como agua, cloacas, electricidad y gas. Tu inversión se traduce en comodidad y funcionalidad.</p>
      <p class="font-bold text-[#f27d26] mt-6">Costos de mantenimiento: sin expensas.</p>
    `,
    features: ['Rentabilidad del 30%', 'Ideal alquiler temporario', 'Hasta <strong style="color:#f27d26;font-size:1.1em;">120 CUOTAS</strong> en <strong>PESOS</strong>'],
    financing: ['Financiación hasta <strong style="color:#f27d26;font-size:1.4em;">120 CUOTAS</strong> en <strong>PESOS</strong>', 'Financiación directa sin intermediarios', 'Fideicomiso al costo'],
    videos: {
      primary: 'https://www.youtube.com/embed/44Nh6jyD1BQ',
      secondary: 'https://www.youtube.com/embed/T0ffgscJkFQ'
    },
    image: '/optimized/APOLO-ARES-1-1.webp',
    gallery: [
      '/optimized/APOLO-ARES-1-1.webp',
      '/optimized/APOLO-ARES-2-1.webp',
      '/optimized/APOLO-ARES-3-1.webp',
      '/optimized/APOLO-ARES-4-1.webp',
      '/optimized/APOLO-ARES-5-1.webp',
      '/optimized/APOLO-ARES-6-1.webp'
    ]
  },
  {
    id: 'delfos-83',
    name: 'Delfos 83',
    status: 'En desarrollo',
    category: 'En desarrollo',
    description: 'Exclusividad y confort en una de las mejores zonas de Necochea.',
    fullDescriptionHtml: `
<p class="mb-4">Una joya inmobiliaria en el corazón de NECOCHEA.</p>
      <p class="mb-4">Ubicado estratégicamente en la vibrante ciudad, este proyecto es una oportunidad excepcional para inversores visionarios.</p>
      <p class="mb-4"><strong>«Delfos 83»</strong> ofrece calidad y rentabilidad. Con departamentos de 1, 2 y 3 ambientes con patios propios, balcones al frente y cocheras, esta es tu oportunidad de entrar al mercado inmobiliario con éxito asegurado.</p>
      <p class="mb-4">En plena calle 83 entre calles 24 y 26 se emplaza a solo 3 cuadras y media de la importantísima Av. 10, la cual es el sendero peatonal mas importante de la cuidad. Este proyecto aprovecha el crecimiento dinámico de la ciudad hacia la playa en donde capta justo el publico turístico como el local.</p>
      <p class="font-bold text-[#f27d26] mt-6">Costos de mantenimiento: sin expensas.</p>
    `,
    features: ['Entrega noviembre del 2026', 'Ubicación privilegiada', 'Financiación en 48 cuotas en <strong>PESOS</strong>'],
    financing: ['Financiación en hasta 48 cuotas', 'Venta desde el pozo'],
    image: '/optimized/Copia-de-Nueva-Fachada-1.webp',
    gallery: [
      '/optimized/Copia-de-Nueva-Fachada-1.webp',
      '/optimized/1.webp',
      '/optimized/Copia-de-Nueva-Fachada-3.webp',
      '/optimized/IMG-20210405-WA0009.webp',
      '/optimized/IMG-20201120-WA0031.webp',
      '/optimized/IMG-20210405-WA0013.webp',
      '/optimized/4.webp',
      '/optimized/2.webp',
      '/optimized/3.webp',
      '/optimized/5.webp',
      '/optimized/6.webp',
      '/optimized/86646b10-16cf-4a7a-bcc5-f3165513313d.webp'
    ]
  },
  {
    id: 'orfeo',
    name: 'Orfeo',
    status: 'Finalizado',
    category: 'Finalizados',
    description: 'Unidades pensadas para la vida moderna, con espacios amplios y luminosos.',
    fullDescriptionHtml: `
<h3 class="text-xl font-bold text-gray-100 mb-3">En Venta - Posesión inmediata</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Todos los servicios.</li>
        <li>Unidad a estrenar sin expensas.</li>
        <li>Terreno de 5 por 30 metros de largo, listo para escriturar, subdivisión y reglamento terminados.</li>
        <li>Entrada para dos vehículos chicos o camioneta.</li>
        <li>Patio trasero de 13 metros de largo cerrado.</li>
      </ul>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">Detalles del Inmueble</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Tipo:</strong> DEPARTAMENTO</li>
        <li><strong>Ambientes:</strong> 2</li>
        <li><strong>Metros cubiertos:</strong> 50m²</li>
        <li><strong>Metros semicubiertos:</strong> 45m²</li>
      </ul>
      <h3 class="text-xl font-bold text-gray-100 mt-8 mb-3">Terminaciones</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Pisos de Porcelanatos.</li>
        <li>Cocina con alacena y bajo mesada hecha a medida.</li>
        <li>Mesada de granito gris mara, griferia FV, artefactos Ferrum, mampara con vidrio de seguridad.</li>
        <li>Baño completo con bañera.</li>
        <li>Patio con parrilla.</li>
        <li>Incluye 2 estufas tiro balanceado, gabinete exterior con termotanque.</li>
        <li>Aberturas de aluminio modena, luminarias led.</li>
      </ul>
    `,
    features: ['Espacios verdes', 'Alta luminosidad y ventilación', 'Calidad constructiva premium'],
    financing: ['Financiación flexible', 'Adaptable a ingresos medios'],
    image: '/optimized/FOTOS-1F.webp',
    gallery: [
      '/optimized/FOTOS-1F.webp',
      '/optimized/FOTOS-1D.webp',
      '/optimized/FOTOS-1B.webp',
      '/optimized/FB_IMG_1617231495038.webp',
      '/optimized/FB_IMG_1617231483347.webp',
      '/optimized/6-BLANCO.webp',
      '/optimized/5-BLANCO.webp',
      '/optimized/4-BLANCO.webp',
      '/optimized/3-BLANCO.webp',
      '/optimized/FOTOS-2.webp',
      '/optimized/FOTOS-2A.webp'
    ]
  },
  {
    id: 'zeus-543',
    name: 'Zeus 543',
    status: 'Finalizado',
    category: 'Finalizados',
    description: 'Solidez y diseño en un proyecto ya entregado y consolidado.',
    fullDescriptionHtml: `
<p class="mb-4"><strong>Zeus 543</strong> es el primer emprendimiento que realizamos sobre la calle 543 entre Av. Loberia y 580.</p>
      <p class="mb-4">Se emplazó en un lote de 10×40 un departamento de 2 ambientes y un dúplex de 110 m² cubiertos con entradas dobles vehiculares y patios propios.</p>
      <p class="font-bold text-[#f27d26] mt-6">Obra Finalizada</p>
    `,
    features: ['Entrega inmediata', 'Calidad de marca Apolo', 'Arquitectura funcional'],
    financing: ['Llave en mano', 'Consultar por unidades de reventa'],
    image: '/optimized/Foto-MINIATURA.webp',
    gallery: [
      '/optimized/Foto-MINIATURA.webp',
      '/optimized/Copia-de-FB_IMG_1543263940429.webp',
      '/optimized/Copia-de-FB_IMG_1543263943240.webp',
      '/optimized/Copia-de-IMG_20181114_222343002.webp',
      '/optimized/Copia-de-IMG_20190202_111248995.webp',
      '/optimized/Copia-de-IMG_20190202_111331120.webp',
      '/optimized/Copia-de-IMG_20190202_111441999.webp',
      '/optimized/Copia-de-IMG_20190202_111559907.webp',
      '/optimized/Copia-de-IMG_20190202_111714446.webp',
      '/optimized/Copia-de-IMG_20190202_111737239.webp',
      '/optimized/Copia-de-IMG_20190202_111805252.webp',
      '/optimized/Copia-de-IMG_20190202_111808910.webp',
      '/optimized/Copia-de-IMG_20190202_111814273.webp',
      '/optimized/Copia-de-IMG_20190202_112036924.webp',
      '/optimized/Copia-de-IMG_20190202_112038346.webp',
      '/optimized/Copia-de-IMG_20191111_110334662.webp'
    ]
  }
];

const orderArr = ['viggo-91', 'ares-22', 'delfos-83', 'zeus-543', 'orfeo', 'dafne-42'];
PROJECTS.sort((a, b) => { const indexA = orderArr.indexOf(a.id); const indexB = orderArr.indexOf(b.id); if (indexA === -1) return 1; if (indexB === -1) return -1; return indexA - indexB; });

// --- Components ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Emprendimientos', path: '/proyectos' },
    { name: 'Financiación', path: '/financiacion' },
    { name: 'Compra en Pozo', path: '/proceso-compra' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Nuestros Servicios', path: '/servicios' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#3b3b3b] font-sans">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#4a4a4a]/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-800 text-gray-100' : `bg-transparent py-6 ${isHomePage ? 'text-white' : 'text-gray-100'}`}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/optimized/LOGO-APOLO2-768x766-1.webp" 
              alt="Apolo Logo" 
              className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              fetchPriority="high" decoding="async" />
            <span className="font-bold text-lg tracking-wide hidden sm:block">APOLO CONSTRUCCIONES</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`relative text-sm font-medium transition-all duration-300 group hover:text-[#f27d26] ${
                    location.pathname === link.path 
                      ? 'text-[#f27d26]' 
                      : (scrolled || !isHomePage ? 'text-gray-400' : 'text-white/80')
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#f27d26] transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              <Link 
                to="/contacto"
                className={`relative text-sm font-medium transition-all duration-300 group hover:text-[#f27d26] ${
                  location.pathname === '/contacto' 
                    ? 'text-[#f27d26]' 
                    : (scrolled || !isHomePage ? 'text-gray-400' : 'text-white/80')
                }`}
              >
                Contacto
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#f27d26] transform origin-left transition-transform duration-300 ${location.pathname === '/contacto' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            </div>
            <Link 
              to="/contacto"
              className="px-6 py-2.5 bg-[#22c55e] hover:bg-[#16a34a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(34,197,94,0.5)] active:scale-95 transition-all duration-300 text-sm font-bold text-white rounded-md shadow-md"
            >
              Contactanos
            </Link>
          </div>

          <button 
            className="md:hidden relative z-50 p-2 group" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <motion.div 
                animate={isMenuOpen ? { rotate: 45, y: 8, width: 24 } : { rotate: 0, y: 0, width: 24 }}
                className={`h-px transition-all duration-300 ${scrolled || isMenuOpen || !isHomePage ? 'bg-gray-900' : 'bg-[#4a4a4a]'}`}
              />
              <motion.div 
                animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: 16 }}
                className={`h-px transition-all duration-300 ${scrolled || isMenuOpen || !isHomePage ? 'bg-gray-900' : 'bg-[#4a4a4a]'}`}
              />
              <motion.div 
                animate={isMenuOpen ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 24 }}
                className={`h-px transition-all duration-300 ${scrolled || isMenuOpen || !isHomePage ? 'bg-gray-900' : 'bg-[#4a4a4a]'}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#4a4a4a]/95 backdrop-blur-xl flex flex-col md:hidden pt-32 pb-12"
          >
            <div className="flex-grow flex flex-col items-center justify-center gap-10 px-8">
              {[...navLinks, { name: 'Contacto', path: '/contacto' }].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-3xl font-bold tracking-wide transition-all duration-300 ${
                      location.pathname === link.path ? 'text-[#f27d26]' : 'text-gray-100 hover:text-[#f27d26]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-8 mt-auto"
            >
              <a href="https://www.instagram.com/apolo.construcciones/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#f27d26] transition-colors">
                <Instagram size={28} />
              </a>
              <a href="https://www.facebook.com/apoloconstructora" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#f27d26] transition-colors">
                <Facebook size={28} />
              </a>
              <a href="https://wa.me/5492262506588" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#f27d26] transition-colors">
                <MessageCircle size={28} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#4a4a4a] text-gray-100 pt-32 pb-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <Link to="/" className="inline-block mb-10">
                <img 
                  src="/optimized/LOGO-APOLO2-768x766-1.webp" 
                  alt="Apolo Logo" 
                  className="w-16 h-16 object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy" decoding="async"/>
              </Link>
              <p className="text-gray-400 max-w-sm text-lg font-medium leading-relaxed mb-10">
                Desarrollamos el futuro de Necochea con una visión arquitectónica que prioriza la calidad, el diseño y la rentabilidad de nuestros inversores.
              </p>
              <div className="flex gap-6">
                <a href="https://www.facebook.com/apoloconstructora" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#f27d26] hover:text-white hover:border-[#f27d26] transition-all text-gray-500">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/apolo.construcciones/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#f27d26] hover:text-white hover:border-[#f27d26] transition-all text-gray-500">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">Navegación</p>
              <ul className="space-y-4 font-medium text-gray-400">
                {navLinks.map(link => (
                  <li key={link.name}><Link to={link.path} className="hover:text-[#f27d26] transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">Contacto</p>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Oficina</p>
                  <p className="text-xl font-bold text-gray-100">Av. 91 1779, Necochea</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Llamanos</p>
                    <p className="text-xl font-bold text-gray-100">+54 9 2262 506588</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Email</p>
                    <p className="text-xl font-bold text-gray-100">info@apoloconstrucciones.com.ar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Apolo Construcciones. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#f27d26] transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-[#f27d26] transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      <a 
        href="https://wa.me/5492262506588" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-[#4a4a4a] text-gray-100 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-800">
          ¿En qué podemos ayudarte?
        </span>
      </a>
    </div>
  );
};

// --- Pages ---

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    {
      name: 'Apolo Ares',
      features: ['Espacios amplios', 'Luminosidad', 'Terminaciones de lujo'],
      image: '/optimized/APOLO-ARES.webp'
    },
    {
      name: 'Nueva Fachada',
      features: ['Diseño minimalista', 'Ubicación premium', 'Vistas panorámicas'],
      image: '/optimized/Copia-de-Nueva-Fachada.webp'
    },
    {
      name: 'Orfeo',
      features: ['Entrega inmediata', 'Calidad Apolo', 'Diseño funcional'],
      image: '/optimized/52c73f06-1843-44c7-be61-a318be8c1072-scaled.webp'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  return (
    <div className="bg-[#4a4a4a]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img 
              key={currentIndex}
              src={carouselItems[currentIndex].image} 
              alt={carouselItems[currentIndex].name} 
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 0.85, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 12, ease: "linear" }
              }}
              className="absolute inset-0 w-full h-full object-cover brightness-75"
              referrerPolicy="no-referrer"
              fetchPriority={currentIndex === 0 ? "high" : "auto"} decoding="async" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-apolo-dark via-apolo-dark/40 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-5 max-w-5xl mx-auto pt-24 md:pt-32">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
            }}
            className="flex flex-col items-center"
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white leading-tight mb-4"
            >
              Tu Proxima Inversión
            </motion.h1>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 font-sans"
            >
              Departamentos y Emprendimientos en Pozo — Necochea
            </motion.p>
            
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}>
              <Link 
                to="/contacto" 
                className="bg-[#22c55e] text-white px-8 py-4 rounded-md text-base font-semibold hover:brightness-110 transition-all mb-6 inline-block"
              >
                Quiero que me contacten
              </Link>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
              className="flex gap-3 flex-wrap justify-center"
            >
              <span className="px-6 py-2 border border-[#f27d26] text-[#f27d26] rounded-full text-sm font-medium bg-black/40 backdrop-blur-sm">
                Venta desde el pozo
              </span>
              <span className="px-6 py-2 border border-[#f27d26] text-[#f27d26] rounded-full text-sm font-medium bg-black/40 backdrop-blur-sm">
                Fideicomiso al costo
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group py-2"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-8 bg-[#f27d26]' : 'w-2 bg-[#4a4a4a]/50 group-hover:bg-[#4a4a4a]/80'
              }`} />
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-4 z-30"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 rotate-90 origin-right translate-y-8">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      

      <section className="py-24 bg-[#4a4a4a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-tight">
              Nuestros Emprendimientos
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {(() => {
              const featured = PROJECTS.filter(p => ['ares-22', 'delfos-83', 'viggo-91'].includes(p.id));
              const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768;
              if (isMobileView) {
                featured.sort((a, b) => {
                  const mobileOrder = ['ares-22', 'viggo-91', 'delfos-83'];
                  return mobileOrder.indexOf(a.id) - mobileOrder.indexOf(b.id);
                });
              }
              return featured.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#3b3b3b] rounded-3xl shadow-md border border-gray-800 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(242,125,38,0.15)] transition-all duration-500 group"
              >
                <Link to={`/proyectos/${project.id}`} className="block aspect-[4/3] overflow-hidden relative bg-[#3b3b3b] p-2 group shadow-inner">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" decoding="async"/>
                </Link>
                <div className="p-8 flex flex-col flex-grow z-10 relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] tracking-wider font-bold shadow-sm ${
                      project.status === 'En venta'
                        ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30'
                        : project.status === 'En desarrollo'
                        ? 'bg-[#f27d26]/10 text-[#f27d26] border border-[#f27d26]/20'
                        : 'bg-[#3b3b3b] text-gray-300 border border-gray-600'
                    }`}>{project.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-6 uppercase group-hover:text-[#f27d26] transition-colors duration-300">{project.name}</h3>
                  <div className="flex flex-col gap-3 mb-8">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-400 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
                        <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                      </div>
                    ))}
                  </div>
                  <Link to={`/proyectos/${project.id}`} className="mt-auto w-max px-6 py-3 bg-[#4a4a4a] border border-gray-700 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-100 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg">
                    Ver Detalles
                  </Link>
                </div>
              </motion.div>
            ));
            })()}
          </div>
          <div className="mt-16 text-center">
            <Link to="/proyectos" className="inline-flex items-center gap-4 text-gray-100 uppercase text-[10px] tracking-[0.3em] font-bold group">
              Ver Todos Los Proyectos
              <div className="w-12 h-px bg-[#f27d26] group-hover:w-20 transition-all duration-500"></div>
            </Link>
          </div>
        </div>
      </section>



      <section className="py-24 bg-[#3b3b3b] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="/optimized/APOLO-ARES-5-1.webp" 
                  alt="Architecture" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-44 h-52 bg-[#4a4a4a] shadow-2xl border border-gray-800 p-8 flex flex-col justify-end hidden md:flex rounded-3xl">
                <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Trayectoria</p>
                <h4 className="text-gray-100 text-4xl font-bold">+15</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Años de Excelencia</p>
              </div>
            </div>
            <div>
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Sobre Nosotros</p>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight text-gray-100 font-bold tracking-tight">
                Construimos <br /><span className="text-[#f27d26]">Legados.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed font-medium">
                En Apolo Construcciones, no solo edificamos estructuras; creamos hogares y oportunidades de inversión que perduran. Nuestra filosofía se basa en la honestidad, la calidad constructiva y el respeto por el entorno.
              </p>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                Cada proyecto es una pieza única de arquitectura contemporánea, diseñada para maximizar el confort y la rentabilidad de nuestros clientes en Necochea.
              </p>
              <Link to="/nosotros" className="group flex items-center gap-4 text-gray-100 uppercase text-[10px] tracking-[0.3em] font-bold">
                Nuestra Historia
                <div className="w-12 h-px bg-[#f27d26] group-hover:w-20 transition-all duration-500"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Proyectos = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'En venta', 'En desarrollo', 'Finalizados'];
  
  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-[#333333] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 md:mb-6">Nuestros Desarrollos</p>
            <h1 className="text-5xl md:text-8xl mb-8 leading-tight tracking-tighter font-bold font-sans text-gray-100">
              Proyectos <br /><span className="text-[#f27d26] font-bold">Inmobiliarios.</span>
            </h1>
          </div>
          <div className="flex gap-6 md:gap-8 border-b border-gray-700 pb-4 w-full md:w-auto overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`uppercase text-[10px] tracking-[0.3em] font-bold transition-all whitespace-nowrap ${filter === cat ? 'text-[#f27d26]' : 'text-gray-400 hover:text-gray-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#4a4a4a] rounded-3xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] border border-gray-800 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(242,125,38,0.15)] transition-all duration-500 group"
            >
              <Link to={`/proyectos/${project.id}`} className="block aspect-[4/3] overflow-hidden relative bg-[#3b3b3b] p-2 group shadow-inner">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" decoding="async"/>
                </Link>
              <div className="p-8 flex flex-col flex-grow z-10 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] tracking-wider font-bold shadow-sm ${
                    project.status === 'En venta'
                      ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30'
                      : project.status === 'En desarrollo'
                      ? 'bg-[#f27d26]/10 text-[#f27d26] border border-[#f27d26]/20'
                      : 'bg-[#3b3b3b] text-gray-300 border border-gray-600'
                  }`}>{project.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-6 uppercase group-hover:text-[#f27d26] transition-colors duration-300">{project.name}</h3>
                <div className="flex flex-col gap-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-400 text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                    </div>
                  ))}
                </div>
                <Link to={`/proyectos/${project.id}`} className="mt-auto w-max px-6 py-3 bg-[#4a4a4a] border border-gray-700 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-100 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg">
                  Ver Detalles
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Financiacion = () => {
  return (
    <div className="pt-32 pb-24 bg-[#3b3b3b] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Inversión y Resguardo</p>
          <h1 className="text-6xl md:text-8xl mb-8 leading-tight tracking-tighter font-bold font-sans text-gray-100">
            Opciones de <br /><span className="text-[#f27d26] font-bold">Financiación.</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed">
            Facilitamos el camino hacia tu nuevo hogar con opciones flexibles y seguras, diseñadas para el inversor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#4a4a4a] p-8 md:p-16 rounded-3xl border border-gray-800 flex flex-col h-full hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(242,125,38,0.15)] transition-all duration-500 group"
          >
            <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">Plan Tradicional</p>
            <h2 className="text-3xl md:text-4xl mb-8 font-bold font-sans text-gray-100">Hasta 48 Cuotas</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
              Financiación directa con Apolo Construcciones. Planes adaptados a tu medida para que puedas invertir con tranquilidad y previsibilidad.
            </p>
            <div className="space-y-6 mb-16 flex-grow">
              <div className="flex items-start gap-4 font-medium text-gray-300 bg-[#2A2A2A]/50 p-3 rounded-lg">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Cuotas fijas en <strong>PESOS</strong> o dólares</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-300 bg-[#2A2A2A]/50 p-3 rounded-lg">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Sin requisitos bancarios complejos</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-300 bg-[#2A2A2A]/50 p-3 rounded-lg">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Posesión inmediata en obras finalizadas</span>
              </div>
            </div>
            <Link to="/contacto" className="w-max px-8 py-4 bg-gray-900 hover:bg-black hover:-translate-y-1 hover:shadow-lg active:scale-95 text-white font-bold rounded-lg transition-all duration-300 text-sm uppercase tracking-wider">
              Consultar Plan
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-gradient-to-br from-[#423129] to-[#33261f] p-8 md:p-16 rounded-3xl border-2 border-[#f27d26]/40 flex flex-col h-full hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(242,125,38,0.3)] transition-all duration-500 group"
          >
            <div className="absolute top-4 right-4 px-4 py-1.5 bg-[#f27d26] text-white text-xs font-black uppercase tracking-wider rounded-full animate-pulse shadow-lg">
              ★ Destacado
            </div>
            <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">Plan Ares 22 — Exclusivo</p>
            <h2 className="text-4xl md:text-6xl mb-4 font-black font-sans text-[#f27d26]">120 CUOTAS</h2>
            <p className="text-2xl text-gray-100 font-bold mb-8">en <strong>PESOS</strong></p>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
              Plan exclusivo para el proyecto Ares 22. Financiación a 10 años en pesos con fideicomiso al costo. La mejor oportunidad de inversión inmobiliaria.
            </p>
            <div className="space-y-6 mb-16 flex-grow">
              <div className="flex items-start gap-4 font-medium text-gray-200 bg-[#f27d26]/10 p-3 rounded-lg border border-[#f27d26]/20">
                <Check className="w-5 h-5 text-[#f27d26] shrink-0 mt-0.5" />
                <span>Fideicomiso al costo</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-200 bg-[#f27d26]/10 p-3 rounded-lg border border-[#f27d26]/20">
                <Check className="w-5 h-5 text-[#f27d26] shrink-0 mt-0.5" />
                <span>Reserva con solo el 20%</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-200 bg-[#f27d26]/10 p-3 rounded-lg border border-[#f27d26]/20">
                <Check className="w-5 h-5 text-[#f27d26] shrink-0 mt-0.5" />
                <span>Sin comisiones inmobiliarias</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-200 bg-[#f27d26]/10 p-3 rounded-lg border border-[#f27d26]/20">
                <Check className="w-5 h-5 text-[#f27d26] shrink-0 mt-0.5" />
                <span>Financiación directa sin intermediarios</span>
              </div>
            </div>
            <Link to="/proyectos/ares-22" className="w-max px-8 py-4 bg-[#f27d26] hover:bg-[#e06d1a] hover:-translate-y-1 hover:shadow-lg active:scale-95 text-white font-black rounded-lg transition-all duration-300 text-sm uppercase tracking-wider">
              Ver Proyecto Ares 22
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const Nosotros = () => {
  return (
    <div className="pt-32 pb-24 bg-[#333333] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero section with Miguel's photo */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Nuestra Historia</p>
            <h1 className="text-6xl md:text-8xl mb-10 leading-tight tracking-tighter font-bold font-sans text-gray-100">
              Sobre <br /><span className="text-[#f27d26] font-bold">Nosotros.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
              En Apolo Construcciones, no solo levantamos paredes; creamos espacios donde las familias construyen su futuro. Con más de 15 años en el mercado de Necochea, nos hemos consolidado como referentes en calidad y cumplimiento.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-[#f27d26] mb-2">+15</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold">Años de trayectoria</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#f27d26] mb-2">+500</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold">Hogares entregados</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#f27d26] mb-2">6</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold">Proyectos realizados</div>
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl bg-[#4a4a4a] p-2 border border-gray-800">
            <img src="/optimized/miguel.webp" alt="Miguel Angel Di Virgilio - Fundador de Apolo Construcciones" className="w-full h-full object-cover object-top rounded-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async"/>
          </div>
        </motion.div>

        {/* Miguel's story section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#4a4a4a] p-8 md:p-16 rounded-3xl border border-gray-800 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#f27d26] to-transparent" />
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">El Origen</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">Apolo, un nombre <span className="text-[#f27d26]">con historia.</span></h2>
              
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
                <p>
                  Mi nombre es <strong className="text-gray-100">Miguel Angel Di Virgilio</strong> y nombré esta empresa por mi hijo. Te cuento por qué.
                </p>
                <p>
                  Hace algunos años, mi esposa y yo nos enteramos que íbamos a ser padres, de un varón. Fue una gran noticia ya que yo en ese momento empezaba un gran proyecto. Ese proyecto consistía en el desarrollo de una empresa que se encargaría de volver sueños realidad, el sueño de la casa propia. De a poco fui armando mi equipo, pidiendo mil presupuestos para poder dar con el proveedor que pueda darme precio y calidad.
                </p>
                <p>
                  El proyecto creció y también el embarazo. Llegó el momento de elegir un nombre para mi primer hijo. Tuvimos muchísimas idas y vueltas, no fue nada sencillo. Pero después de horas de debate elegimos el nombre <strong className="text-[#f27d26] text-xl">Apolo</strong>.
                </p>
                <p>
                  Al momento del nacimiento de mi hijo, decido que qué mejor que bautizar a mi gran proyecto como él. Así nace <strong className="text-gray-100">Apolo Di Virgilio Construcciones</strong>, una idea que creció y hoy nos encuentra realizando varios proyectos simultáneos.
                </p>
                <p className="text-gray-300 italic border-l-4 border-[#f27d26]/30 pl-6 py-2">
                  "Tal vez en un futuro mi familia pueda sumarse a este sueño, ya que prácticamente nacieron juntos."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Nuestra Misión</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8">Necochea en todo <span className="text-[#f27d26]">su esplendor.</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed font-medium mb-6">
                La ciudad de Necochea es nuestro hogar, por eso deseamos poder verla en todo su esplendor.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                Somos una empresa constructora que busca mejorar la calidad de vida de sus habitantes mediante el desarrollo de proyectos inmobiliarios de alta calidad, ofreciendo oportunidades de inversión seguras y rentables en una de las ciudades con mayor potencial turístico de la costa argentina.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl bg-[#4a4a4a] p-2 border border-gray-800">
              <img src="/optimized/FOTOS-1D.webp" alt="Proyecto Apolo" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async"/>
            </div>
          </div>
        </motion.div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Nuestros Valores</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-16">Lo que nos <span className="text-[#f27d26]">define.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Transparencia', desc: 'Contratos claros y condiciones justas. Sin letra chica ni sorpresas.' },
              { icon: <Building2 className="w-8 h-8" />, title: 'Calidad', desc: 'Materiales premium y terminaciones de primera en cada uno de nuestros proyectos.' },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Rentabilidad', desc: 'Proyectos diseñados para maximizar el retorno de inversión de nuestros clientes.' }
            ].map((v, i) => (
              <div key={i} className="bg-[#4a4a4a] p-8 md:p-12 rounded-3xl border border-gray-800 hover:border-[#f27d26]/30 transition-all duration-300 group">
                <div className="text-[#f27d26] mb-8 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">{v.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Servicios = () => {
  return (
    <div className="pt-32 pb-24 bg-[#3b3b3b] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Nuestra Propuesta</p>
          <h1 className="text-6xl md:text-8xl mb-10 leading-tight tracking-tighter font-bold font-sans text-gray-100">
            Nuestros <br /><span className="text-[#f27d26] font-bold">Servicios.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
            Acompañamos a nuestros clientes en cada etapa del proceso, desde la concepción del proyecto hasta la entrega de llaves y el servicio posventa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Desarrollo Inmobiliario",
              desc: "Planificación y ejecución integral de proyectos residenciales y comerciales con los más altos estándares de calidad."
            },
            {
              title: "Servicio Pos-Venta",
              desc: "Garantía y mantenimiento especializado para asegurar que tu propiedad se mantenga impecable a través del tiempo."
            },
            {
              title: "Asesoramiento Legal",
              desc: "Transparencia absoluta en cada contrato y trámite administrativo, brindando seguridad jurídica a tu inversión."
            }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 bg-[#4a4a4a] rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-800 hover:border-[#f27d26]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <p className="text-gray-200 text-[10px] uppercase tracking-[0.2em] font-bold mb-12 group-hover:text-[#f27d26]/40 transition-colors">0{i + 1}</p>
              <h3 className="text-2xl mb-6 font-bold font-sans text-gray-100">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contacto = () => {
  return (
    <div className="pt-32 pb-24 bg-[#4a4a4a] min-h-screen border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Estamos a su disposición</p>
          <h1 className="text-6xl md:text-8xl mb-10 leading-tight tracking-tighter font-bold font-sans text-gray-100">
            Hablemos de su <br /><span className="text-[#f27d26] font-bold">Próximo Proyecto.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 md:space-y-16"
          >
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Teléfono</p>
              <p className="text-xl md:text-2xl font-bold font-sans text-gray-100">+54 9 2262 506588</p>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Email</p>
              <p className="text-xl md:text-2xl font-bold font-sans text-gray-100">info@apoloconstrucciones.com.ar</p>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Ubicación</p>
              <p className="text-xl md:text-2xl font-bold font-sans text-gray-100">Av. 91 1779, Necochea</p>
            </div>
            <div className="pt-4 md:pt-8 flex gap-6">
              <a href="https://www.instagram.com/apolo.construcciones/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#2A2A2A] text-gray-500 hover:text-[#f27d26] hover:border-[#f27d26]/30 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/apoloconstructora" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#2A2A2A] text-gray-500 hover:text-[#f27d26] hover:border-[#f27d26]/30 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <form className="grid gap-8 md:gap-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative">
                  <input type="text" placeholder="Nombre" className="w-full bg-transparent border-b border-gray-700 py-4 outline-none focus:border-[#f27d26] transition-all font-medium text-gray-100 placeholder:text-gray-400" />
                </div>
                <div className="relative">
                  <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-700 py-4 outline-none focus:border-[#f27d26] transition-all font-medium text-gray-100 placeholder:text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="Asunto" className="w-full bg-transparent border-b border-gray-700 py-4 outline-none focus:border-[#f27d26] transition-all font-medium text-gray-100 placeholder:text-gray-400" />
              </div>
              <div className="relative">
                <textarea rows={4} placeholder="Mensaje" className="w-full bg-transparent border-b border-gray-700 py-4 outline-none focus:border-[#f27d26] transition-all font-medium resize-none text-gray-100 placeholder:text-gray-400"></textarea>
              </div>
              <button className="w-max px-8 py-4 bg-gray-900 hover:bg-black text-white hover:-translate-y-1 hover:shadow-lg active:scale-95 font-bold rounded-lg transition-all text-sm uppercase tracking-wider mt-4 md:mt-8">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project: any = PROJECTS.find(p => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const mapQueries: Record<string, string> = {
    'viggo-91': 'Avenida+91+1781+Necochea+Buenos+Aires+Argentina',
    'ares-22': 'Calle+22+e/+77+y+79+Necochea+Buenos+Aires+Argentina',
    'delfos-83': 'Calle+83+e/+24+y+26+Necochea+Buenos+Aires+Argentina',
    'dafne-42': 'Calle+42+Necochea+Buenos+Aires+Argentina',
    'orfeo': 'Necochea+Buenos+Aires+Argentina',
    'zeus-543': 'Calle+543+e/+Avenida+Loberia+y+580+Necochea+Buenos+Aires+Argentina'
  };

  if (!project) return <div className="pt-32 text-center text-gray-100 h-screen flex items-center justify-center text-2xl font-sans">Proyecto no encontrado</div>;

  const openLightbox = (index: number) => { setLightboxIndex(index); setLightboxOpen(true); };

  return (
    <div className="bg-[#3b3b3b] min-h-screen pt-32 pb-24 font-sans text-gray-100">
      <AnimatePresence>
        {lightboxOpen && project.gallery && (
          <Lightbox images={project.gallery} currentIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/proyectos" className="group inline-flex items-center gap-3 text-gray-400 uppercase text-[10px] tracking-[0.3em] font-bold mb-10 hover:text-[#f27d26] transition-colors">
          <div className="w-8 h-px bg-gray-300 group-hover:bg-[#f27d26] group-hover:w-12 transition-all duration-300"></div>
          Volver a Proyectos
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-700 pb-12 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                project.status === 'En venta'
                  ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30'
                  : project.status === 'En desarrollo'
                  ? 'bg-[#f27d26]/10 text-[#f27d26] border border-[#f27d26]/20'
                  : 'bg-[#404040] text-gray-300 border border-gray-700'
              }`}>{project.status}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-6 font-sans text-gray-100">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="shrink-0 flex gap-4 md:flex-col items-start md:items-end">
            <a href="https://wa.me/5492262506588" target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-lg transition-all text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Consultar Proyecto
            </a>
          </div>
        </div>
      </div>

      {/* Media and Details Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-16">
            {/* Description */}
            <section>
              <h2 className="text-[#f27d26] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Sobre el Proyecto</h2>
              <div 
                className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: project.fullDescriptionHtml || `<p>${project.fullDescription || project.description}</p>` }}
              />
            </section>

            {/* Features Info */}
            <section className="bg-[#4a4a4a] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-gray-100 text-2xl font-bold mb-8 flex items-center gap-3">
                <Building2 className="text-[#f27d26]" /> Características Destacadas
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#2A2A2A] transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] shrink-0" />
                    <span className="text-gray-300 font-medium text-lg" dangerouslySetInnerHTML={{ __html: f }}></span>
                  </div>
                ))}
              </div>
            </section>

            {/* Financing Block */}
            {project.financing && project.financing.length > 0 && (
              <section className="relative overflow-hidden bg-gradient-to-br from-[#423129] to-[#33261f] p-8 md:p-12 rounded-3xl border border-[#f27d26]/10 shadow-lg">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[#f27d26]">
                  <Wallet size={160} />
                </div>
                <h2 className="text-[#f27d26] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Inversión</h2>
                <h3 className="text-gray-100 text-3xl font-bold mb-8 relative z-10">Opciones de Adquisición</h3>
                <ul className="space-y-5 relative z-10">
                  {project.financing.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-gray-200 font-medium bg-[#4a4a4a]/60 backdrop-blur-sm p-4 rounded-xl border border-white">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f27d26] shadow-[0_0_10px_rgba(242,125,38,0.5)]" />
                      <span dangerouslySetInnerHTML={{ __html: f }}></span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Videos Section */}
            {project.videos && (
              <section>
                <h2 className="text-[#f27d26] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Video del Proyecto</h2>
                <div className="space-y-6">
                  {project.videos.primary && (
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-800">
                      <iframe
                        src={project.videos.primary}
                        title={`${project.name} - Video Principal`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  {project.videos.secondary && (
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-800">
                      <iframe
                        src={project.videos.secondary}
                        title={`${project.name} - Video Secundario`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Media Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl border border-gray-800 group bg-[#4a4a4a] p-2 cursor-pointer relative"
              onClick={() => openLightbox(0)}
            >
              <img src={project.gallery?.[0] || project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" fetchPriority="high" decoding="async" />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={16} /> Ampliar
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Full Gallery Section */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="mt-32 border-t border-gray-700 pt-24">
            <div className="flex flex-col items-center text-center mb-16">
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Registro Visual</p>
              <h2 className="text-4xl md:text-5xl font-black font-sans text-gray-100 mb-6">Galería del Proyecto</h2>
              <p className="text-gray-500 max-w-2xl text-lg font-medium">Hacé click en cualquier imagen para ampliarla y explorar cada detalle arquitectónico.</p>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {project.gallery.slice(1).map((img: string, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="break-inside-avoid shadow-sm rounded-3xl overflow-hidden border border-gray-800 group bg-[#4a4a4a] p-2 relative min-h-[250px] mb-6 cursor-pointer"
                  onClick={() => openLightbox(i + 1)}
                >
                  <img src={img} alt={`Gallery Detail ${i + 1}`} className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async"/>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 rounded-3xl m-2 pointer-events-none flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" size={32} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Google Maps Section */}
        {id && mapQueries[id] && (
          <div className="mt-32 border-t border-gray-700 pt-24">
            <div className="flex flex-col items-center text-center mb-16">
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Ubicación</p>
              <h2 className="text-4xl md:text-5xl font-black font-sans text-gray-100 mb-6">¿Dónde se encuentra?</h2>
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-xl">
              <iframe
                src={`https://maps.google.com/maps?q=${mapQueries[id]}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${project.name}`}
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// --- Lightbox Component ---
const Lightbox = ({ images, currentIndex, onClose }: { images: string[], currentIndex: number, onClose: () => void }) => {
  const [idx, setIdx] = useState(currentIndex);
  
  useEffect(() => {
    document.body.classList.add('lightbox-open');
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => { document.body.classList.remove('lightbox-open'); window.removeEventListener('keydown', handleKey); };
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2">
        <X size={32} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white z-50 p-2">
        <ChevronLeft size={40} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white z-50 p-2">
        <ChevronRight size={40} />
      </button>
      <motion.img
        key={idx}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={images[idx]}
        alt={`Gallery ${idx + 1}`}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-6 text-white/50 text-sm font-medium">
        {idx + 1} / {images.length}
      </div>
    </motion.div>
  );
};

// --- Proceso de Compra en Pozo ---
const ProcesoCompra = () => {
  const steps = [
    { icon: <Eye className="w-8 h-8" />, title: 'Descubrí el Proyecto', desc: 'Conocé nuestros emprendimientos Ares 22, Viggo 91 o Delfos 83 a través de nuestras redes o sitio web.' },
    { icon: <MessageCircle className="w-8 h-8" />, title: 'Consultá por WhatsApp', desc: 'Escribinos al +54 9 2262 506588 para recibir toda la información del proyecto que te interesa.' },
    { icon: <Users className="w-8 h-8" />, title: 'Reunión Presencial', desc: 'Coordinamos un encuentro para conocernos, visitar la obra y resolver todas tus consultas.' },
    { icon: <Banknote className="w-8 h-8" />, title: 'Seña de Reserva', desc: 'Reservá tu unidad con una seña del 20%. Asegurá tu lugar en el emprendimiento.' },
    { icon: <FileText className="w-8 h-8" />, title: 'Firma de Contrato', desc: 'Formalizamos la operación con un contrato transparente. Sin letra chica ni sorpresas.' },
    { icon: <KeyRound className="w-8 h-8" />, title: 'Entrega del Departamento', desc: 'Recibí las llaves de tu nuevo departamento con todas las terminaciones de calidad Apolo.' },
    { icon: <CreditCard className="w-8 h-8" />, title: 'Pago de Cuotas', desc: 'Continuá abonando las cuotas restantes en PESOS. Planes de hasta 120 cuotas disponibles.' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Rentabilizá tu Inversión', desc: 'Generá ingresos a través del alquiler temporario o permanente, o revendé con ganancia.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#333333] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Paso a paso</p>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight tracking-tighter font-bold font-sans text-gray-100">
            Proceso de Compra <br /><span className="text-[#f27d26] font-bold">en Pozo.</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Invertir en un departamento desde el pozo es más simple de lo que pensás. Te acompañamos en cada etapa del proceso.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f27d26] via-[#f27d26]/50 to-transparent hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#f27d26] via-[#f27d26]/50 to-transparent md:hidden" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Step number circle */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#f27d26] flex items-center justify-center text-white font-black text-sm md:text-lg shadow-lg shadow-[#f27d26]/30 z-10">
                {i + 1}
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-[#4a4a4a] p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-[#f27d26]/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                  <div className="text-[#f27d26] mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3">{step.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-20 bg-gradient-to-br from-[#423129] to-[#33261f] p-12 md:p-16 rounded-3xl border border-[#f27d26]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">¿Listo para invertir?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-medium">Contactanos hoy y empezá a construir tu patrimonio con la seguridad y respaldo de Apolo Construcciones.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5492262506588" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-lg transition-all text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-3">
              <MessageCircle size={20} /> Consultar por WhatsApp
            </a>
            <Link to="/proyectos" className="px-8 py-4 bg-[#4a4a4a] border border-gray-700 hover:border-[#f27d26] text-gray-100 font-bold rounded-lg transition-all text-sm uppercase tracking-wider inline-flex items-center justify-center gap-3">
              Ver Proyectos
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

export default function App() {
  const isMobile = useIsMobile();
  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<ProjectDetail />} />
          <Route path="/financiacion" element={<Financiacion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proceso-compra" element={<ProcesoCompra />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
    </MotionConfig>
  );
}
