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
    <section className="py-20 bg-white">
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

  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
    Instalaciones modernas y equipamiento de última tecnología para brindarte el mejor servicio
  </p>
</div>


        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] mb-8 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation (Desktop Only) */}
          <div className="hidden md:grid grid-cols-5 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                  index === currentImage 
                    ? 'ring-4 ring-blue-500 transform scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;