import React from 'react';
import Lugar from '/public/images/lugar.jpg';

const About = () => {
return (
  <section className="py-12 md:py-16 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 text-center lg:text-left
            after:absolute after:bottom-0 after:left-1/2 lg:after:left-0 after:transform after:-translate-x-1/2 lg:after:translate-x-0
            after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
            after:to-[#006D90] after:rounded-full after:shadow-lg 
            before:absolute before:bottom-0 before:left-1/2 lg:before:left-0 before:transform before:-translate-x-1/2 lg:before:translate-x-0
            before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
            before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
            ¿QUIÉNES SOMOS?
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center lg:text-left mb-6 md:mb-8">
            Somos un consultorio dental comprometido con la salud bucal de nuestras y nuestros pacientes.
El proyecto fue iniciado hace más de 4 años por la Dra. Glendy Tinal, quien con dedicación y pasión por la odontología, ha logrado consolidar una atención cercana, profesional y de confianza.
          </p>
          
         <div className="space-y-3 md:space-y-4">
  <div className="flex items-center space-x-3 md:space-x-4 justify-center lg:justify-start">
    <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#006D90] to-[#00A2CB] rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="text-base md:text-lg text-gray-700">Más de 15 años de experiencia establecida</span>
  </div>

  <div className="flex items-center space-x-3 md:space-x-4 justify-center lg:justify-start">
    <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#006D90] to-[#00A2CB] rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="text-base md:text-lg text-gray-700">Consultorio y laboratorio integrado</span>
  </div>

  <div className="flex items-center space-x-3 md:space-x-4 justify-center lg:justify-start">
    <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#006D90] to-[#00A2CB] rounded-full flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <span className="text-base md:text-lg text-gray-700">Tecnología de vanguardia</span>
  </div>
</div>

        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <img
            src={Lugar}
            alt="Clínica dental"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600 via-transparent to-transparent opacity-10"></div>
        </div>
      </div>
    </div>
  </section>
);
}



export default About;