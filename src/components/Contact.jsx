import React from 'react';
import { User, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12 md:mb-16">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 
    after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 
    after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
    after:to-[#006D90] after:rounded-full after:shadow-lg 
    before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
    before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
    before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
    CONTACTO
  </h2>

  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
    Estamos aquí para atenderte. Contáctanos para agendar tu cita
  </p>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Contact Information */}
  <div className="space-y-8">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#006D90] to-[#00A2CB] rounded-full mb-6">
        <User className="w-8 h-8 text-white" />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Teléfonos</h3>

        <div className="space-y-3 text-lg">
          <div className="flex items-center justify-center space-x-3">
            <span className="font-semibold">Oficina</span>
            <span>➡️</span>
            <a href="tel:+5219999936345" className="text-[#00A2CB] hover:text-[#0088AD] font-medium">
              +52 1 999 993 6345
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <span className="font-semibold">WhatsApp</span>
            <span>➡️</span>
            <a href="https://wa.me/5219999936345" className="text-green-600 hover:text-green-700 font-medium">
              +52 1 999 993 6345
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <span className="font-semibold">Emergencias</span>
            <span>➡️</span>
            <a href="tel:+5219999936345" className="text-red-600 hover:text-red-700 font-medium">
              +52 1 999 993 6345
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6 text-[#00A2CB] mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              Por 18 y 16 A, C. 23 87, 97390 Umán, Yuc.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Google Maps */}
  <div className="h-96 lg:h-full">
    <div className="w-full h-full bg-gray-300 rounded-xl overflow-hidden shadow-lg">
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