import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Lugar from '/public/images/lugar.jpg';
import Slide2 from '/public/images/slide2.jpg';
import Slide3 from '/public/images/slide3.jpg';
import Slide4 from '/public/images/slide4.jpg';
import Slide5 from '/public/images/slide5.jpg';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: Lugar,
      alt: "Recepción de la clínica"
    },
    {
      src: Slide2,
      alt: "Consultorio principal"
    },
    {
      src: Slide3,
      alt: "Equipo de última tecnología"
    },
    {
      src: Slide4,
      alt: "Laboratorio dental"
    },
    {
      src: Slide5,
      alt: "Sala de espera"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 
            after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 
            after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
            after:to-[#006D90] after:rounded-full after:shadow-lg 
            before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
            before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
            before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
            CONOCE NUESTRAS INSTALACIONES
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Instalaciones modernas y equipamiento de última tecnología para brindarte el mejor servicio
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative group mb-8">
            <div className="relative h-[400px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 md:p-10">
                <div className="max-w-7xl mx-auto">
                  <p className="text-white text-xl md:text-2xl font-bold mb-2">
                    {images[currentImage].alt}
                  </p>
                  <p className="text-white/80 text-sm md:text-base">
                    Imagen {currentImage + 1} de {images.length}
                  </p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 
                  bg-white hover:bg-gradient-to-r hover:from-[#006D90] hover:to-[#00A3CC] 
                  rounded-full p-3 md:p-4 transition-all duration-300 shadow-2xl 
                  hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800 hover:text-white transition-colors" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 
                  bg-white hover:bg-gradient-to-r hover:from-[#006D90] hover:to-[#00A3CC] 
                  rounded-full p-3 md:p-4 transition-all duration-300 shadow-2xl 
                  hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800 hover:text-white transition-colors" />
              </button>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20 backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-[#006D90] via-[#00A3CC] to-[#006D90] 
                    transition-all duration-500 ease-out shadow-lg shadow-[#00A3CC]/50"
                  style={{ width: `${((currentImage + 1) / images.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Mobile Indicators */}
            <div className="flex md:hidden justify-center space-x-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'w-12 bg-gradient-to-r from-[#006D90] to-[#00A3CC] shadow-lg shadow-[#00A3CC]/30' 
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation (Desktop Only) */}
          <div className="hidden md:grid grid-cols-5 gap-5 lg:gap-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative h-32 lg:h-36 rounded-2xl overflow-hidden transition-all duration-300 group/thumb ${
                  index === currentImage 
                    ? 'ring-4 ring-[#00A3CC] shadow-2xl shadow-[#00A3CC]/40 scale-105' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105 hover:shadow-xl ring-2 ring-gray-200'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-gradient-to-t from-[#006D90]/40 via-transparent to-transparent'
                    : 'bg-black/50 group-hover/thumb:bg-black/20'
                }`} />
                {/* Active indicator */}
                {index === currentImage && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full shadow-xl animate-pulse">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#006D90] to-[#00A3CC] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;