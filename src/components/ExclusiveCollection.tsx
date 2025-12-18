"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExclusiveCollection: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      title: "Before",
      image: "/hero.png",
      discount: "20% OFF",
      buttonText: "SHOP NOW →"
    },
    {
      id: 2,
      title: "In Process",
      image: "/2.png",
      discount: "15% OFF",
      buttonText: "SHOP NOW →"
    },
    {
      id: 3,
      title: "Refurbished",
      image: "/3.png",
      discount: "25% OFF",
      buttonText: "SHOP NOW →"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase text-[#2D2D2D] mb-4">
            SMART CHOICE FOR YOUR
            <span className="block text-[#8B0000] font-normal mt-2">MODERN HOME</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our curated collections of refurbished gems, restored with precision to bring premium comfort and style to your living spaces at a fraction of the cost.          </p>
        </motion.div>

        {/* Categories Grid - 3 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              }}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className={`absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10`}></div>
                  
                  {/* Animated Center Text */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <h3 className="text-4xl font-bold text-[#ffd1d1] drop-shadow-sm">
                      {category.title}
                    </h3>
                  </motion.div>
                  
                  {/* Discount Tag */}
                  <div className="absolute top-4 left-4 bg-[#8B0000] text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {category.discount}
                  </div>

                  {/* SHOP NOW Button - Slides in on hover */}
                  <AnimatePresence>
                    {hoveredCategory === category.id && (
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: '#6A0D0D'
                        }}
                        className="absolute left-1/2 bottom-4 transform -translate-x-1/2 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-1"
                      >
                        <span>{category.buttonText}</span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#6A0D0D',
              boxShadow: '0 15px 30px -5px rgba(139, 0, 0, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8B0000] text-white px-10 py-4 rounded-xl font-medium text-lg tracking-wide transition-all duration-300 shadow-lg"
          >
            EXPLORE ALL COLLECTIONS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveCollection;