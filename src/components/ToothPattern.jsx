import React, { useState, useEffect } from 'react';

const ToothPattern = ({ color = "#000000", opacity = 0.05, size = 80 }) => { // Aquí puedes cambiar el color del icono
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    // Cargar tu SVG real
    const loadSVG = async () => {
      try {
        const response = await fetch('/images/muela.svg');
        const svgText = await response.text();
        
        // Cambiar el color del SVG
        const coloredSVG = svgText
          .replace(/fill="[^"]*"/g, `fill="${color}"`)
          .replace(/fill='[^']*'/g, `fill="${color}"`)
          .replace(/<path/g, `<path fill="${color}"`)
          .replace(/<circle/g, `<circle fill="${color}"`)
          .replace(/<polygon/g, `<polygon fill="${color}"`)
          .replace(/<rect/g, `<rect fill="${color}"`);
        
        setSvgContent(coloredSVG);
      } catch (error) {
        console.error('No se pudo cargar el SVG:', error);
      }
    };

    loadSVG();
  }, [color]);

  if (!svgContent) {
    return <div>Cargando patrón...</div>;
  }

  const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: opacity,
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundSize: `${size}px ${size}px`,
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0',
      }}
    />
  );
};

export default ToothPattern;