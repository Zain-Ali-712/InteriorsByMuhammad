"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { id: 0, src: "/7.png", alt: "Living Room" },
    { id: 1, src: "/6.png", alt: "Bedroom" },
    { id: 2, src: "/7.png", alt: "Dining Area" }
  ];

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen w-full relative flex items-center overflow-hidden bg-gradient-to-br from-[#7b2619] via-[#f6eae9] to-[#F9E0DD] pt-32 sm:pt-16 md:pt-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent z-0"></div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-12 mb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content - Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-[#2D2D2D] mb-3 lg:mb-4"
            >
              MODERN
              <span className="text-[var(--accent)] font-light"> DESIGNS.</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#2D2D2D] mb-3 lg:mb-4"
            >
              EFFORTLESS
              <span className="text-[var(--accent)] font-light"> Refurnishing.</span>
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#2D2D2D] mb-4 lg:mb-6"
            >
              LASTING
              <span className="text-[var(--accent)] font-light"> QUALITY.</span>
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0"
            >
              <p className="text-[#5A5A5A] font-light leading-relaxed text-base sm:text-lg tracking-wide">
Elevate your home with premium refurbished furniture. We bridge the gap between expensive new pieces and low-quality secondhand options with guaranteed, stylish, and eco-friendly furniture.              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: 'var(--accent-dark)',
                  boxShadow: '0 10px 20px -5px rgba(159, 36, 32, 0.3)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[var(--accent)] text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-xl font-medium text-sm sm:text-md tracking-wider uppercase transition-all duration-300 shadow-lg relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">Shop Now</span>
                <motion.div 
                  className="absolute inset-0 bg-[var(--accent-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className="border border-[#671212]/30 text-[#671212] px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-xl font-medium text-sm sm:text-md tracking-wider uppercase transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white w-full sm:w-auto"
              >
                USE CODE: SECONDLIFE
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image Gallery */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0 lg:pr-0 w-full">
            {/* Discount label on image section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-10 bg-[var(--accent)] text-white px-3 py-1 lg:px-4 lg:py-2 rounded-lg shadow-lg z-20 flex items-center"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide">FLAT 30% OFF</span>
              <motion.div 
                className="ml-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Main Image Container */}
            <div className="relative w-full lg:max-w-2xl">
              {/* Main Image */}
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full rounded-2xl lg:rounded-l-[40px] overflow-hidden shadow-2xl border-4 border-white"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                    <img 
                      src={images[currentImage].src} 
                      alt={images[currentImage].alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Secondary Images - Mobile/Tablet (overlay at bottom) */}
              <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 w-full justify-center px-4">
                {images.map((image, index) => (
                  <motion.div 
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.15)"
                    }}
                    className={`relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-xl overflow-hidden p-1 shadow-lg cursor-pointer transition-all duration-300 ${
                      currentImage === image.id 
                        ? "ring-2 ring-[var(--accent)] scale-105 bg-white" 
                        : "bg-white/90 backdrop-blur-sm"
                    }`}
                    onClick={() => handleImageClick(image.id)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {currentImage === image.id && (
                      <motion.div 
                        className="absolute inset-0 bg-[var(--accent)]/20 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Secondary Images - Desktop (positioned to the left) */}
              <div className="hidden lg:absolute lg:bottom-8 lg:-left-40 lg:flex space-x-5 z-20">
                {images.map((image, index) => (
                  <motion.div 
                    key={image.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    className={`relative h-24 w-24 rounded-2xl overflow-hidden p-1 shadow-lg cursor-pointer transition-all duration-300 ${
                      currentImage === image.id 
                        ? "ring-2 ring-[var(--accent)] scale-105" 
                        : "bg-white"
                    }`}
                    onClick={() => handleImageClick(image.id)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {currentImage === image.id && (
                      <motion.div 
                        className="absolute inset-0 bg-[var(--accent)]/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;