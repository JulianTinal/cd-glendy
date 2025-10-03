import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'motion/react';
import Lugar from '/public/images/lugar.jpg';
import Slide2 from '/public/images/slide2.jpg';
import Slide3 from '/public/images/slide3.jpg';
import Slide4 from '/public/images/slide4.jpg';
import Slide5 from '/public/images/slide5.jpg';

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const defaultImages = [Lugar, Slide2, Slide3, Slide4, Slide5];
  const galleryImages = images.length > 0 ? images : defaultImages;
  
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  const [isScreenSizeMd, setIsScreenSizeMd] = useState(window.innerWidth <= 1024);

  const cylinderWidth = isScreenSizeSm ? 900 : isScreenSizeMd ? 1400 : 2000;
  const faceCount = galleryImages.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
    });
  };

  const transform = useTransform(rotation, value => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: 'linear' }
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
      setIsScreenSizeMd(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: 'linear' }
      });
      rotation.set(rotation.get() - 360 / faceCount);

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: 'linear' }
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);
    }
  };

  return (
    <div style={styles.galleryContainer}>
      <div style={{...styles.galleryGradient, ...styles.galleryGradientLeft}}></div>
      <div style={{...styles.galleryGradient, ...styles.galleryGradientRight}}></div>
      <div style={styles.galleryContent}>
        <motion.div
          drag="x"
          style={{
            ...styles.galleryTrack,
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}>
          {galleryImages.map((url, i) => (
            <div
              key={i}
              style={{
                ...styles.galleryItem,
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`
              }}>
              <img src={url} alt="gallery" style={styles.galleryImg} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  galleryContainer: {
    position: 'relative',
    height: '700px',
    width: '100%',
    overflow: 'hidden'
  },
  galleryGradient: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100px',
    zIndex: 10
  },
  galleryGradientLeft: {
    left: 0,
    background: 'linear-gradient(to left, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 0.95) 70%, rgb(249, 250, 251) 100%)'
  },
  galleryGradientRight: {
    right: 0,
    background: 'linear-gradient(to right, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 0.95) 70%, rgb(249, 250, 251) 100%)'
  },
  galleryContent: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1400px',
    transformStyle: 'preserve-3d'
  },
  galleryTrack: {
    display: 'flex',
    height: 'auto',
    minHeight: '400px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'grab',
    transformStyle: 'preserve-3d',
    width: '100%'
  },
  galleryItem: {
    position: 'absolute',
    display: 'flex',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    padding: window.innerWidth <= 640 ? '4%' : '5%',
    backfaceVisibility: 'hidden'
  },
  galleryImg: {
    pointerEvents: 'none',
    height: window.innerWidth <= 640 ? '200px' : window.innerWidth <= 1024 ? '280px' : '380px',
    width: window.innerWidth <= 640 ? '300px' : window.innerWidth <= 1024 ? '420px' : '560px',
    borderRadius: window.innerWidth <= 640 ? '16px' : '24px',
    border: window.innerWidth <= 640 ? '3px solid #006D90' : '5px solid #006D90',
    objectFit: 'cover',
    transition: 'all 0.4s ease',
    boxShadow: window.innerWidth <= 640 
      ? '0 15px 40px rgba(0, 109, 144, 0.3), 0 5px 12px rgba(0, 163, 204, 0.2)'
      : '0 25px 70px rgba(0, 109, 144, 0.35), 0 10px 20px rgba(0, 163, 204, 0.25)',
    imageRendering: '-webkit-optimize-contrast'
  }
};

export default RollingGallery;