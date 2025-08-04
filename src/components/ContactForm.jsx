import React, { useState } from 'react';
import Lugar from '/public/images/lugar.jpg';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado exitosamente!');
    
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
      
      {/* Sección de imagen */}
      <div className="relative overflow-hidden order-2 lg:order-1">
        <img 
          src={Lugar}
          alt="Dentista profesional realizando tratamiento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
      </div>

      {/* Sección del formulario */}
      <div className="bg-gradient-to-br from-[#006D90] via-[#0088AD] to-[#001F2A] p-6 lg:p-8 xl:p-10 flex items-center order-1 lg:order-2">
        <div className="w-full max-w-none pl-0 lg:pl-4 xl:pl-6">
          
          {/* Botón de contacto */}
          <div className="mb-6">
            <button className="bg-white/10 backdrop-blur-sm border-2 border-[#00A2CB]/40 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#00A2CB]/20 hover:border-[#00A2CB]/60 transition-all duration-300 shadow-lg">
              Contáctanos
            </button>
          </div>

          {/* Título */}
          <h2 className="caviar text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-7 leading-tight">
            En qué te podemos ayudar
          </h2>

          {/* Formulario */}
          <div className="space-y-5">
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre*"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-lg bg-white/95 backdrop-blur-sm border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 shadow-md"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-lg bg-white/95 backdrop-blur-sm border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 shadow-md"
              />
            </div>

            <div>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono*"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-lg bg-white/95 backdrop-blur-sm border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 shadow-md"
              />
            </div>

            <div>
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-white/95 backdrop-blur-sm border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 shadow-md resize-none"
              ></textarea>
            </div>

            <button
  type="button"
  onClick={handleSubmit}
  className="w-fit px-6 py-3 text-base font-semibold bg-white text-[#006D90] rounded-lg border border-white/40 hover:bg-[#f0f9ff] hover:text-[#0088AD] focus:outline-none focus:ring-2 focus:ring-[#00A2CB]/50 focus:ring-offset-2 focus:ring-offset-[#001F2A] transition-all duration-300 shadow-lg"
>
  Enviar
</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactForm;