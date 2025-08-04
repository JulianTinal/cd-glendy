import React from 'react';

const Svg = ({ backgroundColor = 'black', maskUrl, maskSize = '150px', opacity = 0.1, customClasses = '' }) => {
  const style = {
    backgroundColor,
    WebkitMaskImage: `url('${maskUrl}')`,
    maskImage: `url('${maskUrl}')`,
    WebkitMaskRepeat: 'repeat',
    maskRepeat: 'repeat',
    WebkitMaskSize: maskSize,
    maskSize: maskSize,
    opacity,
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full ${customClasses}`}
      style={style}
    />
  );
};

export default Svg;