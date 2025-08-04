import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from '/public/images/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-xl py-2' 
        : 'bg-white shadow-lg py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 relative group">
            <div className={`transition-all duration-500 ease-out transform ${
              isScrolled 
                ? 'h-14 scale-95' 
                : 'h-20 scale-100 hover:scale-105'
            }`}>
              <img 
                src={Logo}
                alt="Glendy Tinal" 
                className={`h-full w-auto object-contain transition-all duration-500 ease-out ${
                  isScrolled 
                    ? 'max-w-[140px] opacity-95' 
                    : 'max-w-[180px] opacity-100'
                }`}
                style={{
                  filter: isScrolled 
                    ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' 
                    : 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))'
                }}
              />
            </div>
            
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <a 
              href="#inicio" 
              className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-all duration-300 relative group py-2"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a 
              href="#servicios" 
              className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-all duration-300 relative group py-2"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a 
              href="#contacto" 
              className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-all duration-300 relative group py-2"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a 
              href="#acerca" 
              className="text-gray-700 hover:text-blue-600 font-semibold text-lg transition-all duration-300 relative group py-2"
            >
              Acerca de
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://wa.me/5219999936345"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/40 border-2 border-green-400/30 flex items-center space-x-2 overflow-hidden"
            >
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
              </svg>
              <span className="relative z-10">WhatsApp</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </a>

            <a
              href="tel:5219999936345"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/40 border-2 border-blue-400/30 flex items-center space-x-2 overflow-hidden"
            >
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Llamar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      }`}>
        <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 shadow-2xl">
          <div className="px-6 py-6 space-y-2">
            
            <a 
              href="#inicio" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold text-lg py-4 px-4 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 Inicio
            </a>
            <a 
              href="#servicios" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold text-lg py-4 px-4 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ⚙️ Servicios
            </a>
            <a 
              href="#contacto" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold text-lg py-4 px-4 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              📞 Contacto
            </a>
            <a 
              href="#acerca" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold text-lg py-4 px-4 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              👤 Acerca de
            </a>
            
            <div className="pt-6 border-t border-gray-200 space-y-4">
              <a
                href="https://wa.me/529991746477"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:9991746477"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="w-6 h-6" />
                <span>Llamar Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;