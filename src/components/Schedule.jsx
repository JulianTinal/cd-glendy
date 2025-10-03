import React from 'react';
import { Clock, Calendar, Sun, Moon } from 'lucide-react';

const Schedule = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#006D90]/5 to-[#00A3CC]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00A3CC]/5 to-[#006D90]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl caviar font-bold text-black mb-4 md:mb-6 relative pb-3 md:pb-4 
            after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 
            after:w-16 sm:after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#006D90] after:via-[#00A3CC] 
            after:to-[#006D90] after:rounded-full after:shadow-lg 
            before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
            before:w-16 sm:before:w-20 before:h-1 before:bg-gradient-to-r before:from-[#006D90] before:via-[#00A3CC] 
            before:to-[#006D90] before:rounded-full before:blur-sm before:opacity-50">
            HORARIOS DE ATENCIÓN
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos disponibles para atenderte en los siguientes horarios
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Weekdays Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#00A3CC]/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006D90] to-[#00A3CC] rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Lunes a Viernes</h3>
                  <p className="text-sm text-gray-500">Semana laboral</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Morning */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Sun className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-700">Matutino</span>
                  </div>
                  <span className="text-xl font-bold text-[#006D90]">9:00 AM - 1:00 PM</span>
                </div>

                {/* Evening */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-transparent rounded-xl border border-indigo-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Moon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="font-semibold text-gray-700">Vespertino</span>
                  </div>
                  <span className="text-xl font-bold text-[#006D90]">4:00 PM - 8:00 PM</span>
                </div>
              </div>

              {/* Total hours indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Horas disponibles</span>
                  <span className="font-bold text-[#00A3CC]">8 horas diarias</span>
                </div>
              </div>
            </div>

            {/* Saturday Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#00A3CC]/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sábado</h3>
                  <p className="text-sm text-gray-500">Fin de semana</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Saturday hours */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-transparent rounded-xl border border-amber-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="font-semibold text-gray-700">Horario</span>
                  </div>
                  <span className="text-xl font-bold text-amber-600">9:00 AM - 3:00 PM</span>
                </div>

                {/* Info box */}
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Nota:</span> Horario reducido los sábados. 
                    Recomendamos agendar con anticipación.
                  </p>
                </div>
              </div>

              {/* Total hours indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Horas disponibles</span>
                  <span className="font-bold text-amber-600">6 horas</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom info bar */}
          <div className="mt-8 bg-gradient-to-r from-[#006D90] to-[#00A3CC] rounded-2xl p-6 text-white text-center shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <span className="font-semibold">Domingos: Cerrado</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <span className="font-semibold">Atención con cita previa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;