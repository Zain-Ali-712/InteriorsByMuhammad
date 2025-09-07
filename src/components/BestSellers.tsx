"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BestSellers: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});

  const products = [
    {
      id: 1,
      title: "Celeste Classique",
      basePrice: 70500,
      sizes: [
        { name: "Single - 78*42", price: 66975 },
        { name: "Queen - 78*66", price: 85900 },
        { name: "King - 78*72", price: 95900 }
      ],
      rating: 4.9,
      reviewCount: 287,
      features: ["Memory Foam", "Cooling Gel", "10-Year Warranty"],
      colors: ["#8B0000", "#2D2D2D", "#D4AF37"],
      images: {
        primary: "/bed4-1.jpg",
        hover: "/bed4-2.jpg"
      },
      badge: "BEST SELLER"
    },
    {
      id: 2,
      title: "Premium Orthopedic",
      basePrice: 82500,
      sizes: [
        { name: "Single - 78*42", price: 78475 },
        { name: "Queen - 78*66", price: 98900 },
        { name: "King - 78*72", price: 112500 }
      ],
      rating: 4.8,
      reviewCount: 194,
      features: ["Pocket Springs", "Natural Latex", "Hypoallergenic"],
      colors: ["#2D2D2D", "#8B4513", "#FFFFFF"],
      images: {
        primary: "/bed3-1.jpg",
        hover: "/bed3-2.jpg"
      },
      badge: "PREMIUM"
    },
    {
      id: 3,
      title: "Luxury Pillow Top",
      basePrice: 68900,
      sizes: [
        { name: "Single - 78*42", price: 65455 },
        { name: "Queen - 78*66", price: 82900 },
        { name: "King - 78*72", price: 92900 }
      ],
      rating: 4.7,
      reviewCount: 156,
      features: ["Euro Top", "Motion Isolation", "Breathable"],
      colors: ["#8B0000", "#2D2D2D", "#1E90FF"],
      images: {
        primary: "/bed2-2.jpg",
        hover: "/bed2-2.jpg"
      },
      badge: "LUXURY"
    },
    {
      id: 4,
      title: "Adjustable Smart Bed",
      basePrice: 125000,
      sizes: [
        { name: "Queen - 78*66", price: 125000 },
        { name: "King - 78*72", price: 145000 }
      ],
      rating: 4.9,
      reviewCount: 132,
      features: ["Remote Control", "Zero Gravity", "Massage Function"],
      colors: ["#2D2D2D", "#8B0000", "#696969"],
      images: {
        primary: "/bed6-2.jpg",
        hover: "/bed6-1.jpg"
      },
      badge: "INNOVATIVE"
    }
  ];

  const handleSizeSelect = (productId: number, sizeName: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: sizeName
    }));
  };

  const getCurrentPrice = (product: any) => {
    const selectedSize = selectedSizes[product.id];
    if (selectedSize) {
      const size = product.sizes.find((s: any) => s.name === selectedSize);
      return size ? size.price : product.basePrice;
    }
    return product.basePrice;
  };

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
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Background decorative elements */}
        <div className="absolute top-0 -right-40 w-80 h-80 bg-[#ad2617] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ae3225] rounded-full opacity-20 blur-3xl"></div>
        
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-[#8B0000]/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></span>
            <span className="text-[#8B0000] font-medium uppercase tracking-wide text-sm">
              BEST SELLERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            PREMIUM
            <span className="block text-[#9F2420] font-normal mt-2">SLEEP SOLUTIONS</span>

          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled comfort with our most popular mattress collections
          </p>
        </motion.div>

        {/* Products Grid - 2 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1  md:grid-cols-2 gap-8"
        >
          {products.map((product) => {
            const currentPrice = getCurrentPrice(product);
            const originalPrice = product.basePrice;
            const hasDiscount = currentPrice < originalPrice;
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut"
                  }
                }}
                className="relative group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => {
                  setHoveredProduct(null);
                  setHoveredImage(null);
                }}
              >
                <motion.div
                  initial={{ y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px -10px rgba(139, 0, 0, 0.2)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white rounded-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className="flex flex-col lg:flex-row h-full p-1 bg-gradient-to-r from-[#7b2619]/90 via-[#f6eae9] to-white rounded-2xl">
                    {/* Image Container - Left Side */}
                    <div 
                      className="lg:w-1/2 relative overflow-hidden rounded-2xl"
                      onMouseEnter={() => setHoveredImage(product.id)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <div className="h-64 lg:h-full">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={hoveredImage === product.id ? 'hover' : 'primary'}
                            src={hoveredImage === product.id ? product.images.hover : product.images.primary}
                            alt={product.title}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />
                        </AnimatePresence>
                      </div>
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-bold">
                          {product.badge}
                        </div>
                      )}
                      
                      {/* Quick View Button - Appears on image hover */}
                      <AnimatePresence>
                        {hoveredImage === product.id && (
                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 bottom-3 transform -translate-x-1/2 bg-white text-[#8B0000] px-3 py-1.5 rounded-full text-xs font-medium shadow-sm border border-[#8B0000]/20"
                          >
                            Quick View
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Content - Right Side */}
                    <div className="lg:w-1/2 p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.title}
                        </h3>
                        
                        {/* Price Display */}
                        <div className="mb-3">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-[#8B0000]">
                              Rs{currentPrice.toLocaleString()}
                            </span>
                            {hasDiscount && (
                              <span className="text-sm text-gray-500 line-through">
                                Rs{originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          {hasDiscount && (
                            <span className="text-xs text-green-600 font-medium">
                              Save Rs{(originalPrice - currentPrice).toLocaleString()}
                            </span>
                          )}
                        </div>

                        {/* Size Selection */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Select Size:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size: any, index: number) => (
                              <button
                                key={index}
                                onClick={() => handleSizeSelect(product.id, size.name)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                                  selectedSizes[product.id] === size.name
                                    ? 'bg-[#8B0000] text-white'
                                    : 'bg-[#8B0000]/10 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {size.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                          <h4 className="text-base font-medium text-gray-900 mb-1">Features:</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <div className="w-4 h-4 bg-[#8B0000]/10 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          ({product.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cart Button - Appears on card hover */}
                  <AnimatePresence>
                    {hoveredProduct === product.id && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: '#6A0D0D'
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute -bottom-3 -right-3 bg-[#8B0000] text-white p-3 rounded-full shadow-lg z-10"
                        title="Add to Cart"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#6A0D0D',
              boxShadow: '0 15px 30px -5px rgba(139, 0, 0, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8B0000] text-white px-8 py-3 rounded-xl font-medium text-lg tracking-wide transition-all duration-300"
          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellers;