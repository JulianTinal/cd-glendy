import React from 'react';
import DoctorImage from '/public/images/doctor.jpg';
import Svg from '../Svg';

const Doctor = () => {
  return (
    <section id="acerca" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <Svg
               backgroundColor="black"
        maskUrl="/images/tooth.svg"
        maskSize="400px"
        opacity={0.1}
        customClasses="absolute inset-0 w-full h-full"
            />
      {/* Enhanced decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="text-center mb-12 md:mb-16">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 
    after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 
    after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
    after:to-[#006D90] after:rounded-full after:shadow-lg 
    before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
    before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
    before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
    CONOCE AL DOCTOR
  </h2>
</div>


        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-20">
          {/* Doctor Image */}
          <div className="flex-shrink-0 relative group">
            <div className="relative transform transition-all duration-500 group-hover:scale-105">
              {/* Enhanced glowing background effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
              {/* Premium image container with enhanced styling */}
              <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white p-4 rounded-3xl shadow-2xl border border-blue-100/50">
                <img
                  src={DoctorImage}
                  alt="Dr.a Glendy Tinal"
                  className="w-80 h-[500px] object-contain rounded-2xl bg-gradient-to-b from-blue-50/80 to-white shadow-inner"
                />
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Subtle corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-blue-300 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-blue-300 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-blue-300 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-blue-300 rounded-br-lg"></div>
              </div>
            </div>
          </div>

          {/* Doctor Information */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-8">
              <h3 className="caviar   text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
                CD. Glendy Tinal
              </h3>
              
            </div>
            
            <div className="space-y-4 text-lg text-gray-700 mb-8">
  {[
  "Egresada de la Facultad de Odontología de la Universidad Autónoma de Yucatán",
  "Más de 4 años de experiencia en el campo de la odontología",
  "Diplomado en Implantología y Rehabilitación Bucal",
  "Certificación internacional por Noritake",
  "Curso avanzado en Prótesis Fija y Removible"
].map((text, index) => (
    <div key={index} className="flex items-start space-x-4 group">
      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#006D90] to-[#0088AD] 
        hover:from-[#0088AD] hover:to-[#00A2CB] rounded-full flex items-center justify-center 
        mt-1 group-hover:scale-110 transition-transform hover:shadow-lg hover:shadow-[#006D90]/30">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="group-hover:text-[#0088AD] transition-colors">
        {index === 1 ? <strong>{text}</strong> : text}
      </p>
    </div>
  ))}
</div>

<div className="flex justify-center lg:justify-start">
  <a
    href="#contacto"
    className="group relative inline-flex items-center justify-center 
      bg-gradient-to-r from-[#006D90] to-[#0088AD] 
      hover:from-[#0088AD] hover:to-[#00A2CB] 
      text-white px-10 py-5 rounded-xl text-lg font-semibold 
      transition-all transform hover:scale-105 
      hover:shadow-xl hover:shadow-[#006D90]/30 overflow-hidden shadow-lg"
  >
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    
    <svg className="relative mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>

    <span className="relative">Agenda tu Consulta</span>

    <svg className="relative ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;