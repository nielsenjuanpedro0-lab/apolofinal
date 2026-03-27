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
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data ---

const PROJECTS = [
  {
    id: 'ares-6',
    name: 'Ares 6',
    status: 'En construcción',
    category: 'En desarrollo',
    description: 'Departamentos de 2 ambientes ideales para alquiler temporario. Incluye local en planta baja y 9 cocheras cubiertas.',
    fullDescription: 'El proyecto Apolo Ares 6 está concebido como la opción ideal para quienes buscan una inversión segura o un espacio perfecto para alquiler temporario. Combina una arquitectura contemporánea con espacios adaptables a la vida moderna.',
    features: ['Departamentos de 2 ambientes Adaptables', 'Local en planta baja', '9 Cocheras Disponibles Cubiertas', 'Ideal para alquiler temporario'],
    financing: ['Financiación en hasta 24 cuotas', 'Venta desde el pozo y pre-venta', 'Fideicomiso al costo'],
    image: '/optimized/APOLO-ARES-6-1.webp',
    gallery: [
      '/optimized/APOLO-ARES-6-1.webp',
      '/optimized/APOLO-ARES-3-1.webp',
      '/optimized/APOLO-ARES-4-1.webp'
    ]
  },
  {
    id: 'viggo-91',
    name: 'Viggo 91',
    status: 'Próximo lanzamiento',
    category: 'En desarrollo',
    description: 'Viviendas modernas con la posibilidad única de pago con granos a futuro. Un procedimiento seguro y confiable.',
    fullDescription: 'Viggo 91 redefine la forma de invertir en la ciudad. Este desarrollo moderno facilita el acceso a la vivienda mediante la posibilidad única de pago con granos a futuro. Es un procedimiento 100% seguro, ágil y libre de expensas.',
    features: ['Pagá con granos a futuro', 'Servicios completos', 'Procedimiento seguro y confiable', 'Sin expensas'],
    financing: ['Contacto directo sin intermediarios', 'PAGÁ CON GRANOS A FUTURO', 'Resguardo de valor en ladrillos'],
    image: '/optimized/Copia-de-1.8.webp',
    gallery: [
      '/optimized/Copia-de-1.8.webp',
      '/optimized/FOTOS-1D.webp'
    ]
  },
  {
    id: 'dafne-42',
    name: 'Dafne 42',
    status: 'Obra finalizada',
    category: 'Finalizados',
    description: 'Departamentos de 1, 2 y 3 ambientes con patio propio y cocheras disponibles. Entrega inmediata.',
    fullDescription: 'Desarrollo pensado para el confort familiar y la alta demanda, ofreciendo departamentos adaptables de 1, 2 y 3 ambientes. Se complementa de manera perfecta con patios propios y la disponibilidad exclusiva de cocheras.',
    features: ['Departamentos de 1, 2 y 3 ambientes Adaptables', 'Cocheras Disponibles', 'Patio propio', 'Diseño funcional'],
    financing: ['Financiación en hasta 24 cuotas', 'Posesión inmediata'],
    image: '/optimized/IMG-20201120-WA0031.webp',
    gallery: [
      '/optimized/IMG-20201120-WA0031.webp',
      '/optimized/Copia-de-Nueva-Fachada-1.webp'
    ]
  },
  {
    id: 'ares-22',
    name: 'Ares 22',
    status: 'En desarrollo',
    category: 'En desarrollo',
    description: 'Proyecto de vanguardia con unidades funcionales y diseño contemporáneo.',
    fullDescription: 'Ares 22 es un hermoso emprendimiento de diseño contemporáneo que ofrece la máxima rentabilidad. Proveé unidades funcionales pensadas milimétricamente para optimizar los espacios diarios y la luz natural.',
    features: ['Diseño moderno', 'Alta rentabilidad esperada', 'Unidades luminosas'],
    financing: ['Financiación directa', 'Fideicomiso'],
    image: '/optimized/APOLO-ARES-2-1.webp',
    gallery: [
      '/optimized/APOLO-ARES-2-1.webp',
      '/optimized/52c73f06-1843-44c7-be61-a318be8c1072-scaled.webp'
    ]
  },
  {
    id: 'delfos-83',
    name: 'Delfos 83',
    status: 'En desarrollo',
    category: 'En desarrollo',
    description: 'Exclusividad y confort en una de las mejores zonas de Necochea.',
    fullDescription: 'Delfos 83 representa la combinación de confort absoluto y exclusividad. Ubicado en una zona privilegiada, ofrece terminaciones únicas de lujo y la seguridad que demandan los estándares modernos.',
    features: ['Terminaciones de lujo', 'Ubicación privilegiada', 'Seguridad garantizada'],
    financing: ['Financiación en hasta 24 cuotas', 'Venta desde el pozo'],
    image: '/optimized/Copia-de-Nueva-Fachada-1.webp',
    gallery: [
      '/optimized/Copia-de-Nueva-Fachada-1.webp'
    ]
  },
  {
    id: 'orfeo',
    name: 'Orfeo',
    status: 'En desarrollo',
    category: 'En desarrollo',
    description: 'Unidades pensadas para la vida moderna, con espacios amplios y luminosos.',
    fullDescription: 'Unidades residenciales espaciosas pensadas para la vida moderna. Orfeo es sinónimo de calidad constructiva, donde la iluminación natural y los espacios verdes toman completo protagonismo.',
    features: ['Espacios verdes', 'Alta luminosidad y ventilación', 'Calidad constructiva premium'],
    financing: ['Financiación flexible', 'Adaptable a ingresos medios'],
    image: '/optimized/52c73f06-1843-44c7-be61-a318be8c1072-scaled.webp',
    gallery: [
      '/optimized/52c73f06-1843-44c7-be61-a318be8c1072-scaled.webp'
    ]
  },
  {
    id: 'zeus-543',
    name: 'Zeus 543',
    status: 'Obra finalizada',
    category: 'Finalizados',
    description: 'Solidez y diseño en un proyecto ya entregado y consolidado.',
    fullDescription: 'Un proyecto arquitectónico totalmente consolidado que refleja la confianza Apolo. Zeus 543 es la muestra ideal de nuestro compromiso inquebrantable con las líneas funcionales y la presteza en los plazos.',
    features: ['Entrega inmediata', 'Calidad de marca Apolo', 'Arquitectura funcional'],
    financing: ['Llave en mano', 'Consultar por unidades de reventa'],
    image: '/optimized/IMG-20210405-WA0009.webp',
    gallery: [
      '/optimized/IMG-20210405-WA0009.webp'
    ]
  }
];

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
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Proceso', path: '/servicios' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100 text-gray-900' : `bg-transparent py-6 ${isHomePage ? 'text-white' : 'text-gray-900'}`}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/optimized/LOGO-APOLO2-768x766-1.webp" 
              alt="Apolo Logo" 
              className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
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
                      : (scrolled || !isHomePage ? 'text-gray-600' : 'text-white/80')
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
                    : (scrolled || !isHomePage ? 'text-gray-600' : 'text-white/80')
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
                className={`h-px transition-all duration-300 ${scrolled || isMenuOpen || !isHomePage ? 'bg-gray-900' : 'bg-white'}`}
              />
              <motion.div 
                animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: 16 }}
                className={`h-px transition-all duration-300 ${scrolled || isMenuOpen || !isHomePage ? 'bg-gray-900' : 'bg-white'}`}
              />
              <motion.div 
                animate={isMenuOpen ? { rotate: -45, y: -8, width: 24 } : { rotate: 0, y: 0, width: 24 }}
                className={`h-px transition-all duration-300 ${scrolled || isMenuOpen || !isHomePage ? 'bg-gray-900' : 'bg-white'}`}
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col md:hidden pt-32 pb-12"
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
                      location.pathname === link.path ? 'text-[#f27d26]' : 'text-gray-900 hover:text-[#f27d26]'
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

      <footer className="bg-white text-gray-900 pt-32 pb-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <Link to="/" className="inline-block mb-10">
                <img 
                  src="/optimized/LOGO-APOLO2-768x766-1.webp" 
                  alt="Apolo Logo" 
                  className="w-16 h-16 object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </Link>
              <p className="text-gray-600 max-w-sm text-lg font-medium leading-relaxed mb-10">
                Desarrollamos el futuro de Necochea con una visión arquitectónica que prioriza la calidad y el diseño.
              </p>
              <div className="flex gap-6">
                <a href="https://www.facebook.com/apoloconstructora" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#f27d26] hover:text-white hover:border-[#f27d26] transition-all text-gray-500">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/apolo.construcciones/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#f27d26] hover:text-white hover:border-[#f27d26] transition-all text-gray-500">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">Navegación</p>
              <ul className="space-y-4 font-medium text-gray-600">
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
                  <p className="text-xl font-bold text-gray-900">Calle 62 N° 3124, Necochea</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Llamanos</p>
                    <p className="text-xl font-bold text-gray-900">+54 9 2262 506588</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Email</p>
                    <p className="text-xl font-bold text-gray-900">info@apoloconstrucciones.com.ar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
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
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-100">
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
    <div className="bg-apolo-dark">
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
              fetchPriority={currentIndex === 0 ? "high" : "auto"}
            />
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
              Descubrí tu Casa Propia.
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
                index === currentIndex ? 'w-8 bg-[#f27d26]' : 'w-2 bg-white/50 group-hover:bg-white/80'
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

      <section className="py-24 bg-[#fafafa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="/optimized/APOLO-ARES-6-1.webp" 
                  alt="Architecture" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-80 bg-white shadow-2xl border border-gray-100 p-12 flex flex-col justify-end hidden md:flex rounded-3xl">
                <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Trayectoria</p>
                <h4 className="text-gray-900 text-4xl font-bold">+15</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Años de Excelencia</p>
              </div>
            </div>
            <div>
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Sobre Nosotros</p>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight text-gray-900 font-bold tracking-tight">
                Construimos <br /><span className="text-[#f27d26]">Legados.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                En Apolo Construcciones, no solo edificamos estructuras; creamos hogares y oportunidades de inversión que perduran. Nuestra filosofía se basa en la honestidad, la calidad constructiva y el respeto por el entorno.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                Cada proyecto es una pieza única de arquitectura contemporánea, diseñada para maximizar el confort y la rentabilidad de nuestros clientes en Necochea.
              </p>
              <Link to="/nosotros" className="group flex items-center gap-4 text-gray-900 uppercase text-[10px] tracking-[0.3em] font-bold">
                Nuestra Historia
                <div className="w-12 h-px bg-[#f27d26] group-hover:w-20 transition-all duration-500"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Nuestros Emprendimientos
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.filter(p => ['ares-22', 'delfos-83', 'viggo-91'].includes(p.id)).map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#fafafa] rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(242,125,38,0.15)] transition-all duration-500 group"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-white p-2">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl transition-transform duration-[1.5s] ease-out group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                </div>
                <div className="p-8 flex flex-col flex-grow z-10 relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white text-[#f27d26] rounded-full text-xs font-bold border border-[#f27d26]/20 shadow-sm">{project.status}</span>
                    <span className="px-3 py-1 bg-white text-gray-500 rounded-full text-xs font-bold border border-gray-200 shadow-sm">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase group-hover:text-[#f27d26] transition-colors duration-300">{project.name}</h3>
                  <div className="flex flex-col gap-3 mb-8">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                        <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={`/proyectos/${project.id}`} className="mt-auto w-max px-6 py-3 bg-white border border-gray-200 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-900 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg">
                    Ver Detalles
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/proyectos" className="inline-flex items-center gap-4 text-gray-900 uppercase text-[10px] tracking-[0.3em] font-bold group">
              Ver Todos Los Proyectos
              <div className="w-12 h-px bg-[#f27d26] group-hover:w-20 transition-all duration-500"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fafafa] overflow-hidden relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Financiación Exclusiva</p>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight text-gray-900 font-bold tracking-tight">
                Pagá con <br /><span className="text-[#f27d26]">Granos a Futuro.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                Un procedimiento seguro y confiable pensado para el sector agropecuario. Asegurá tu propiedad hoy y cancelá con tu producción futura.
              </p>
              <div className="grid grid-cols-1 gap-5 mb-10">
                <div className="flex items-center gap-4 text-gray-700 font-medium bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                  Procedimiento seguro y transparente
                </div>
                <div className="flex items-center gap-4 text-gray-700 font-medium bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                  Sin intermediarios bancarios
                </div>
                <div className="flex items-center gap-4 text-gray-700 font-medium bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                  Capitalización inmediata en M2
                </div>
              </div>
              <Link to="/financiacion" className="px-8 py-4 bg-[#22c55e] text-white hover:bg-[#16a34a] uppercase text-[10px] tracking-[0.3em] font-bold rounded-lg transition-all inline-block shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Más sobre financiación
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-xl bg-white p-2">
                <img src="https://apoloconstrucciones.com.ar/wp-content/uploads/2025/06/APOLO-ARES-5-1.jpg" alt="Agro" className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Proyectos = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'En desarrollo', 'Finalizados'];
  
  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-[#fcfcfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 md:mb-6">Nuestros Desarrollos</p>
            <h1 className="text-5xl md:text-8xl mb-8 leading-tight tracking-tighter font-bold font-sans text-gray-900">
              Proyectos <br /><span className="text-[#f27d26] font-bold">Inmobiliarios.</span>
            </h1>
          </div>
          <div className="flex gap-6 md:gap-8 border-b border-gray-200 pb-4 w-full md:w-auto overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`uppercase text-[10px] tracking-[0.3em] font-bold transition-all whitespace-nowrap ${filter === cat ? 'text-[#f27d26]' : 'text-gray-400 hover:text-gray-600'}`}
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
              className="bg-white rounded-3xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(242,125,38,0.15)] transition-all duration-500 group"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-white p-2">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl transition-transform duration-[1.5s] ease-out group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="p-8 flex flex-col flex-grow z-10 relative">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white text-[#f27d26] rounded-full text-xs font-bold border border-[#f27d26]/20 shadow-sm">{project.status}</span>
                  <span className="px-3 py-1 bg-white text-gray-500 rounded-full text-xs font-bold border border-gray-200 shadow-sm">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase group-hover:text-[#f27d26] transition-colors duration-300">{project.name}</h3>
                <div className="flex flex-col gap-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/proyectos/${project.id}`} className="mt-auto w-max px-6 py-3 bg-white border border-gray-200 hover:border-[#f27d26] hover:bg-[#f27d26] text-gray-900 hover:text-white font-bold rounded-lg transition-colors text-sm group-hover:shadow-lg">
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
    <div className="pt-32 pb-24 bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Inversión y Resguardo</p>
          <h1 className="text-6xl md:text-8xl mb-8 leading-tight tracking-tighter font-bold font-sans text-gray-900">
            Opciones de <br /><span className="text-[#f27d26] font-bold">Financiación.</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Facilitamos el camino hacia tu nuevo hogar con opciones flexibles y seguras, diseñadas para el inversor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-8 md:p-16 rounded-3xl border border-gray-100 flex flex-col h-full hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(242,125,38,0.15)] transition-all duration-500 group"
          >
            <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">Plan Tradicional</p>
            <h2 className="text-3xl md:text-4xl mb-8 font-bold font-sans text-gray-900">Hasta 24 Cuotas</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed font-medium">
              Financiación directa con Apolo Construcciones. Planes adaptados a tu medida para que puedas invertir con tranquilidad y previsibilidad.
            </p>
            <div className="space-y-6 mb-16 flex-grow">
              <div className="flex items-start gap-4 font-medium text-gray-700 bg-gray-50/50 p-3 rounded-lg">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Cuotas fijas en pesos o dólares</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-700 bg-gray-50/50 p-3 rounded-lg">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Sin requisitos bancarios complejos</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-700 bg-gray-50/50 p-3 rounded-lg">
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[#f8faf8] to-white p-8 md:p-16 rounded-3xl border border-gray-100 flex flex-col h-full shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] transition-all duration-500 group"
          >
            <p className="text-[#22c55e] text-[10px] uppercase tracking-[0.2em] font-semibold mb-8">Plan Agro</p>
            <h2 className="text-3xl md:text-4xl mb-8 font-bold font-sans text-gray-900">Canje de Granos</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed font-medium">
              Utilizá tu producción agropecuaria como moneda de cambio. Un sistema ágil y seguro para el productor de hoy, optimizando su capitalización.
            </p>
            <div className="space-y-6 mb-16 flex-grow">
              <div className="flex items-start gap-4 font-medium text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100/50">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Canje directo por granos a futuro</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100/50">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Importantes beneficios impositivos</span>
              </div>
              <div className="flex items-start gap-4 font-medium text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100/50">
                <Check className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Resguardo de valor en ladrillos</span>
              </div>
            </div>
            <a href="https://www.agrocanje.com.ar/" target="_blank" rel="noreferrer" className="w-max px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(34,197,94,0.6)] active:scale-95 text-white font-bold rounded-lg transition-all duration-300 text-sm uppercase tracking-wider items-center flex gap-2">
              Ver Agrocanje <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Nosotros = () => {
  return (
    <div className="pt-32 pb-24 bg-[#fcfcfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Nuestra Historia</p>
            <h1 className="text-6xl md:text-8xl mb-10 leading-tight tracking-tighter font-bold font-sans text-gray-900">
              Sobre <br /><span className="text-[#f27d26] font-bold">Nosotros.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              En Apolo Construcciones, no solo levantamos paredes; creamos espacios donde las familias construyen su futuro. Con más de 15 años en el mercado de Necochea, nos hemos consolidado como referentes en calidad y cumplimiento.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-5xl font-bold text-[#f27d26] mb-2">+15</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold">Años de trayectoria</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#f27d26] mb-2">+500</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold">Hogares entregados</div>
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl bg-white p-2 border border-gray-100">
            <img src="/optimized/FOTOS-1D.webp" alt="Nosotros" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Servicios = () => {
  return (
    <div className="pt-32 pb-24 bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Nuestra Propuesta</p>
          <h1 className="text-6xl md:text-8xl mb-10 leading-tight tracking-tighter font-bold font-sans text-gray-900">
            Nuestros <br /><span className="text-[#f27d26] font-bold">Servicios.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#f27d26]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <p className="text-gray-200 text-[10px] uppercase tracking-[0.2em] font-bold mb-12 group-hover:text-[#f27d26]/40 transition-colors">0{i + 1}</p>
              <h3 className="text-2xl mb-6 font-bold font-sans text-gray-900">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contacto = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Estamos a su disposición</p>
          <h1 className="text-6xl md:text-8xl mb-10 leading-tight tracking-tighter font-bold font-sans text-gray-900">
            Hablemos de su <br /><span className="text-[#f27d26] font-bold">Próximo Proyecto.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 md:space-y-16"
          >
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Teléfono</p>
              <p className="text-xl md:text-2xl font-bold font-sans text-gray-900">+54 9 2262 506588</p>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Email</p>
              <p className="text-xl md:text-2xl font-bold font-sans text-gray-900">info@apoloconstrucciones.com.ar</p>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Ubicación</p>
              <p className="text-xl md:text-2xl font-bold font-sans text-gray-900">Calle 62 N° 3124, Necochea</p>
            </div>
            <div className="pt-4 md:pt-8 flex gap-6">
              <a href="https://www.instagram.com/apolo.construcciones/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-[#f27d26] hover:border-[#f27d26]/30 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/apoloconstructora" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500 hover:text-[#f27d26] hover:border-[#f27d26]/30 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <form className="grid gap-8 md:gap-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative">
                  <input type="text" placeholder="Nombre" className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#f27d26] transition-all font-medium text-gray-900 placeholder:text-gray-400" />
                </div>
                <div className="relative">
                  <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#f27d26] transition-all font-medium text-gray-900 placeholder:text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="Asunto" className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#f27d26] transition-all font-medium text-gray-900 placeholder:text-gray-400" />
              </div>
              <div className="relative">
                <textarea rows={4} placeholder="Mensaje" className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#f27d26] transition-all font-medium resize-none text-gray-900 placeholder:text-gray-400"></textarea>
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

  if (!project) return <div className="pt-32 text-center text-gray-900 h-screen flex items-center justify-center text-2xl font-sans">Proyecto no encontrado</div>;

  return (
    <div className="bg-[#fafafa] min-h-screen pt-32 pb-24 font-sans text-gray-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/proyectos" className="group inline-flex items-center gap-3 text-gray-400 uppercase text-[10px] tracking-[0.3em] font-bold mb-10 hover:text-[#f27d26] transition-colors">
          <div className="w-8 h-px bg-gray-300 group-hover:bg-[#f27d26] group-hover:w-12 transition-all duration-300"></div>
          Volver a Proyectos
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-200 pb-12 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 border border-[#f27d26] text-[#f27d26] rounded-full text-xs font-bold bg-[#f27d26]/5 uppercase tracking-widest">{project.status}</span>
              <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest">{project.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-6 font-sans text-gray-900">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
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
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                {project.fullDescription || project.description}
              </p>
            </section>

            {/* Features Info */}
            <section className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-gray-900 text-2xl font-bold mb-8 flex items-center gap-3">
                <Building2 className="text-[#f27d26]" /> Características Destacadas
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Financing Block */}
            {project.financing && project.financing.length > 0 && (
              <section className="relative overflow-hidden bg-gradient-to-br from-[#fff6f0] to-[#fffdfc] p-8 md:p-12 rounded-3xl border border-[#f27d26]/10 shadow-lg">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[#f27d26]">
                  <Wallet size={160} />
                </div>
                <h2 className="text-[#f27d26] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Inversión</h2>
                <h3 className="text-gray-900 text-3xl font-bold mb-8 relative z-10">Opciones de Adquisición</h3>
                <ul className="space-y-5 relative z-10">
                  {project.financing.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-gray-800 font-medium bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f27d26] shadow-[0_0_10px_rgba(242,125,38,0.5)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Media Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl border border-gray-100 group bg-white p-2"
            >
              <img src={project.gallery?.[0] || project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" fetchPriority="high" />
            </motion.div>
          </div>
          
        </div>

        {/* Full Gallery Section */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="mt-32 border-t border-gray-200 pt-24">
            <div className="flex flex-col items-center text-center mb-16">
              <p className="text-[#f27d26] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Registro Visual</p>
              <h2 className="text-4xl md:text-5xl font-black font-sans text-gray-900 mb-6">Galería del Proyecto</h2>
              <p className="text-gray-500 max-w-2xl text-lg font-medium">Explorá cada detalle arquitectónico y los espacios diseñados para tu confort en esta galería completa.</p>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {project.gallery.slice(1).map((img: string, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="break-inside-avoid shadow-lg rounded-3xl overflow-hidden border border-gray-100 group bg-white p-2 relative"
                >
                  <img src={img} alt={`Gallery Detail ${i + 1}`} className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 rounded-3xl m-2 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
          
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<ProjectDetail />} />
          <Route path="/financiacion" element={<Financiacion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}
