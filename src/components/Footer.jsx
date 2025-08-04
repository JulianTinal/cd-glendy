import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Logo from '/public/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#006D90] to-[#004A63]"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Logo centered at top */}
        <div className="text-center mb-16">
          <img 
            src={Logo} 
            alt="CD. Glendy Tinal Logo" 
            className="mx-auto h-24 w-auto mb-6 drop-shadow-lg"
          />
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#006D90] to-transparent mx-auto"></div>
        </div>

        {/* Main content in three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center md:justify-start">
              <Phone className="w-6 h-6 text-[#006D90] mr-3" />
              Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">Escuela</p>
                <a href="tel:9999936345" className="text-xl font-bold text-gray-800 hover:text-[#006D90] transition-colors duration-300 block">
                  999 993 63 45
                </a>
              </div>

              <div className="group">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">WhatsApp</p>
                <a 
                  href="https://wa.me/529999936345?text=Hola%20vengo%20desde%20tu%20página%20web" 
                  className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300 flex items-center justify-center md:justify-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                  </svg>
                  +52 1 999 993 63 45
                </a>
              </div>

              <div className="group">
  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-2">Email</p>
  <a 
    href="mailto:glen_tinal@hotmail.com?subject=Consulta desde la página web&body=Hola, vengo desde tu página web..." 
    className="text-base font-medium text-gray-800 hover:text-[#006D90] transition-colors duration-300 break-all flex items-center justify-center md:justify-start"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Mail className="w-5 h-5 text-[#006D90] mr-2" />
    glen_tinal@hotmail.com
  </a>
</div>
            </div>
          </div>

          {/* Location */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#006D90] mr-3" />
              Ubicación
            </h3>
            
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#006D90]">
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong className="text-gray-800">Por 18 y 16 A, C. 23 87</strong><br />
                31DPR0656M PRIMARIA MATUTINA<br />
                EL NIÑO ARTILLERO<br />
                <span className="text-[#006D90] font-semibold">Umán, Yucatán. C.P. 97390</span>
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 font-medium">
                  🦷 ATENCIÓN ODONTOLÓGICA DE CONFIANZA
                </p>
                <p className="text-[#006D90] font-semibold text-lg mt-2">
                  "Tu sonrisa es nuestra pasión"
                </p>
              </div>
            </div>
          </div>

          {/* Social Media & Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 text-[#006D90] mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Síguenos
            </h3>
            
            <div className="space-y-4 mb-10">
              <a 
                href="https://www.instagram.com/cd_glendytinal" 
                className="flex items-center justify-center md:justify-start space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-300 group p-3 rounded-lg hover:bg-pink-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <p className="font-bold text-lg">@cd_glendytinal</p>
                  <p className="text-sm text-gray-500">Instagram</p>
                </div>
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61556000722947" 
                className="flex items-center justify-center md:justify-start space-x-3 text-gray-700 hover:text-blue-600 transition-all duration-300 group p-3 rounded-lg hover:bg-blue-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-left">
                  <p className="font-bold text-lg">CD. Glendy Tinal</p>
                  <p className="text-sm text-gray-500">Facebook</p>
                </div>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">Enlaces</h4>
              <nav className="grid grid-cols-2 gap-2">
                {['Inicio', 'Servicios', 'Contacto', 'Acerca de'].map((link, index) => (
                  <a 
                    key={index}
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-600 hover:text-[#006D90] hover:font-semibold transition-all duration-300 py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t-2 border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-[#006D90] rounded-full mr-2"></span>
                Umán, Yucatán
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-[#006D90] rounded-full mr-2"></span>
                Glendy Tinal
              </span>
            </div>
            <p className="text-gray-600 text-center">
              © 2025 <span className="text-[#006D90] font-bold">CD. Glendy Tinal</span> • Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;