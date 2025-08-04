import React from 'react';

const Schedule = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 
    after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 
    after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
    after:to-[#006D90] after:rounded-full after:shadow-lg 
    before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
    before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
    before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
    HORARIOS DE ATENCIÓN
  </h2>

  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
    Estamos disponibles para atenderte en los siguientes horarios
  </p>
</div>


        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
  
  {/* Calendar Icon */}
  <div className="flex-shrink-0">
    <div className="bg-gradient-to-br from-[#006D90] to-[#00A2CB] p-12 rounded-2xl shadow-lg">
      <svg 
        className="w-24 h-24 lg:w-32 lg:h-32 text-white" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
      </svg>
    </div>
  </div>

  {/* Schedule Table */}
  <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full border">
    <div className="space-y-6">
      
      {/* Lunes a Viernes */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#00A2CB]">
          LUNES A VIERNES
        </h3>
        <div className="space-y-3 ml-4">
          <div className="flex justify-between items-center py-2">
            <span className="font-medium text-gray-700">Matutino:</span>
            <span className="font-bold text-[#00A2CB]">9:00am - 1:00pm</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium text-gray-700">Vespertino:</span>
            <span className="font-bold text-[#00A2CB]">4:00pm - 8:00pm</span>
          </div>
        </div>
      </div>

      {/* Sábado */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-yellow-500">
          SÁBADO
        </h3>
        <div className="ml-4">
          <div className="flex justify-between items-center py-2">
            <span className="font-medium text-gray-700">Horario:</span>
            <span className="font-bold text-yellow-600">9:00am - 3:00pm</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Schedule;