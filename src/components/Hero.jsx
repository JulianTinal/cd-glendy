import React from 'react';
import Desktop from '/public/images/desktop.jpg';
import Mobile from '/public/images/mobile.jpg';

const Hero = () => {
  return (
    <section id="inicio" className=" mt-14 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Ahora más visible */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img
          src="/images/desktop.jpg"
          alt="Clínica Dental"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        {/* Mobile Image */}
        <img src="/images/mobile.jpg" alt="Clínica Dental" className="md:hidden w-full h-full object-cover" />
        {/* Overlay sutil para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/10"></div> {/* Capa oscura general */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>{" "}
        {/* Gradiente para profundidad */}
      </div>

      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 z-5">
        <div className="w-full h-full bg-gradient-to-bl from-orange-400 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 z-5">
        <div className="w-full h-full bg-gradient-to-tr from-[#006D90] to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Contenido principal - Títulos directamente sobre la imagen */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Títulos - Grandes y con impacto visual */}
        <div className="mb-10 md:mb-16">
          <h1 className=" text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-tight tracking-tighter text-white drop-shadow-2xl">
            ATENCIÓN
          </h1>
          <h2 className="  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#48dde4] tracking-widest mt-4 drop-shadow-md">
            ODONTOLÓGICA
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mt-6 drop-shadow-md">
            DE CONFIANZA
          </h3>
        </div>

        {/* Subtítulos - Ahora sin fondo en "pasión" y más integrados */}
        <div className="mb-10 md:mb-16 max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-4 text-white drop-shadow-lg">
            Tu sonrisa es nuestra <span className="text-[#48dde4] font-semibold">pasión</span>{" "}
            {/* ¡Fondo removido aquí! */}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed drop-shadow-lg">
            Cada tratamiento lo hacemos con el corazón y la experiencia que nos caracteriza en Yucatán
          </p>
        </div>

        {/* Botones - Con un diseño que los hace destacar */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#contacto"
            className="bg-gradient-to-r from-[#006D90] to-[#0088AD] hover:from-[#0088AD] hover:to-[#00A2CB] text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#006D90]/30"
          >
            Agenda tu Cita
          </a>
          <a
            href="#servicios"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/60 hover:border-[#006D90] text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero