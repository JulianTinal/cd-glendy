import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 
            after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 
            after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
            after:to-[#006D90] after:rounded-full after:shadow-lg 
            before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
            before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
            before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
            CONTACTO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            
            {/* Phone */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <a href="tel:9999936345" className="w-20 h-20 bg-gradient-to-br from-[#006D90] to-[#00A3CC] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Phone className="w-9 h-9 text-white" />
              </a>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#006D90] mb-1 group-hover:text-[#00A3CC] transition-colors">Teléfono</h3>
                <a href="tel:9999936345" className="text-2xl text-gray-700 hover:text-[#006D90] transition-colors font-medium">
                  9999936345
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <a href="https://wa.me/5219999936345" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-gradient-to-br from-[#006D90] to-[#00A3CC] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-9 h-9 text-white" />
              </a>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#006D90] mb-1 group-hover:text-[#00A3CC] transition-colors">Whatsapp</h3>
                <a href="https://wa.me/5219999936345" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-[#006D90] transition-colors font-medium">
                  9999936345
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-6 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#006D90] to-[#00A3CC] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mt-1">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#006D90] mb-2">Dirección</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  31DPR0656M PRIMARIA MATUTINA EL NIÑO ARTILLERO<br />
                  Por 18 y 16 A, C. 23 87, 97390 Umán, Yuc.
                </p>
                <a 
                  href="https://maps.google.com/?q=31DPR0656M+PRIMARIA+MATUTINA+EL+NIÑO+ARTILLERO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#006D90] hover:text-[#00A3CC] font-semibold transition-colors text-base"
                >
                  <MapPin className="w-4 h-4" />
                  Ver en Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right Side - Google Maps */}
          <div className="h-[500px] lg:h-[550px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.804114251608!2d-89.7461915!3d20.879944300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56126792d57cfd%3A0x29f14422792fe80d!2s31DPR0656M%20PRIMARIA%20MATUTINA%20EL%20NI%C3%91O%20ARTILLERO!5e0!3m2!1ses!2smx!4v1753760495342!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la clínica dental"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;