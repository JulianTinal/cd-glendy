import React from 'react';
import Ortodoncia from '/public/images/ortodoncia.jpg';
import Caries from '/public/images/caries.jpg';
import Dental from '/public/images/dental.jpg';
import OdontoPediatra from '/public/images/odontopediatra.jpg';
import Endodoncia from '/public/images/endodoncia.jpg';
import Periodoncia from '/public/images/periodoncia.jpg';

const Services = () => {
  const services = [
    {
      title: "Ortodoncia (Brackets)",
      image: Ortodoncia,
      category: "Estética Dental",
      duration: "12-24 meses"
    },
    {
      title: "Endodoncia",
      image: Endodoncia,
      category: "Tratamiento",
      duration: "2-3 sesiones"
    },
    {
      title: "Resinas (Eliminación de Caries)",
      image: Caries,
      category: "Restauración",
      duration: "1 sesión"
    },
    {
      title: "Limpieza Dental",
      image: Dental,
      category: "Prevención",
      duration: "45 minutos"
    },
    {
      title: "Odontopediatría (Atención a niños)",
      image: OdontoPediatra,
      category: "Especializada",
      duration: "30-60 min"
    },
    {
      title: "Periodoncia",
      image: Periodoncia,
      category: "Especializada",
      duration: "1-2 sesiones"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Estética Dental': 'from-purple-500 to-pink-500',
      'Tratamiento': 'from-blue-500 to-cyan-500',
      'Restauración': 'from-green-500 to-teal-500',
      'Prevención': 'from-orange-500 to-yellow-500',
      'Especializada': 'from-indigo-500 to-purple-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 
    after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 
    after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
    after:to-[#006D90] after:rounded-full after:shadow-lg 
    before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
    before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
    before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
    NUESTROS SERVICIOS
  </h2>
  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
    Ofrecemos una amplia gama de servicios odontológicos especializados para cuidar tu salud bucal
  </p>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Header con gradiente turquesa */}
      <div className="h-2 bg-gradient-to-r from-[#006D90] to-[#0088AD]"></div>

      <div className="flex flex-col sm:flex-row">
        {/* Imagen con overlay */}
        <div className="sm:w-2/5 relative overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 sm:h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Contenido */}
        <div className="flex-1 p-6 relative">
          {/* Decoración */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00A2CB] to-[#da6ed0]"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00A2CB] transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
            </div>

            {/* Footer de la card */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Consulta disponible
                </span>
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-[#AEECEF] rounded-full group-hover:bg-[#00A2CB] transition-colors duration-300"></div>
                  <div className="w-1 h-4 bg-[#7ED6E3] rounded-full group-hover:bg-[#0088AD] transition-colors duration-300 delay-75"></div>
                  <div className="w-1 h-4 bg-[#5CC3D6] rounded-full group-hover:bg-[#006D90] transition-colors duration-300 delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de hover en el borde */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00A2CB]/30 transition-colors duration-300 pointer-events-none"></div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;