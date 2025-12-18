"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SeasonalCollection: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  
  const galleryImages = [
    {
      id: 1,
      src: "/hero.png",
      alt: "Winter Fashion 1",
      category: "Cozy Wear"
    },
    {
      id: 2,
      src: "/2.png",
      alt: "Winter Fashion 2",
      category: "Accessories"
    },
    {
      id: 3,
      src: "/3.png",
      alt: "Winter Fashion 3",
      category: "Pillows"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FBEAE8] relative overflow-hidden">
      {/* Blurred glow effect at the top */}
      <div className='absolute inset-0 top-0 w-full h-24 z-0 bg-[#981a16] blur-3xl rounded-b-full opacity-70'></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center bg-[#fffdfc] px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#9F2420] rounded-full mr-2"></span>
            <span className="text-[#9F2420] font-medium uppercase tracking-wide text-sm">
              SPECIAL OFFERS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2D2D2D] mb-4">
            MASTERFUL RESTORATION
            <span className="block text-[#9F2420] font-normal mt-2">Grab Them Now!</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => {
              setHoveredImage(null);
              setHoveredButton(null);
            }}
          >
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <motion.img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </div>
            
            {/* View Collection Button - Appears on Image Hover */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: hoveredImage === 1 ? 1 : 0,
                y: hoveredImage === 1 ? 0 : 20
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredButton(1)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                border-2 ${hoveredButton === 1 ? 'bg-white text-[#9F2420]' : 'border-white text-white'} 
                px-6 py-2 rounded-full font-medium transition-colors duration-300`}
            >
              View More
            </motion.button>
            
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-lg">
              <span className="text-sm font-medium text-[#2D2D2D]">{galleryImages[0].category}</span>
            </div>
          </motion.div>

          {/* Right Side - Top Images and Content Card */}
          <div className="flex flex-col gap-6">
            {/* Top Row - Two Smaller Images */}
            <div className="grid grid-cols-2 gap-6">
              {galleryImages.slice(1, 3).map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 50, rotate: index === 0 ? 5 : -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => {
                    setHoveredImage(null);
                    setHoveredButton(null);
                  }}
                >
                  <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md">
                    <motion.img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                  
                  {/* View Collection Button - Appears on Image Hover */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredImage === image.id ? 1 : 0,
                      scale: hoveredImage === image.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredButton(image.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      border-2 ${hoveredButton === image.id ? 'bg-white text-[#9F2420]' : 'border-white text-white'} 
                      px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300`}
                  >
                    View More
                  </motion.button>
                  
                  <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded-lg">
                    <span className="text-sm text-[#2D2D2D]">{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Card - Winter Collection Content */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D2D2D] mb-4">
                  MASTERFULL RESTORATION
                </h3>
                <p className="text-[#555] leading-relaxed mb-6">
                  From forgotten relics to center-stage masterpieces. We breathe new life into vintage frames, combining traditional techniques with modern durability to create furniture that tells a story.                </p>
                <div className="space-y-3 mb-6">
                  {['Hand-Picked Vintage Frames', 'Master Artisan Craftsmanship', 'Sustainable Material Sourcing', '2-Year Restoration Warranty'].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-6 h-6 bg-[#FBEAE8] rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-[#9F2420]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[#2D2D2D]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100"
              >
                <div className="text-center sm:text-left">
                  <span className="text-sm text-[#555] block">Special Offer</span>
                  <span className="text-2xl font-bold text-[#9F2420]">UP TO 40% OFF</span>
                </div>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#7a1d1a',
                    boxShadow: '0 10px 25px -5px rgba(159, 36, 32, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#9F2420] text-white px-8 py-4 rounded-xl font-medium text-lg tracking-wide uppercase transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  SHOP NOW
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalCollection;