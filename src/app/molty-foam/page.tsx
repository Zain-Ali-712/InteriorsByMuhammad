"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductShowcase from '@/components/ProductsShowcase';
import BestSellerSection from '@/components/BestSellersSection';

const MoltyFoamPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      <Navbar/>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FBEAE8] to-[#f8d5d1] overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[#9F2420] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-64 h-64 bg-[#9F2420] opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full mb-6 shadow-sm"
              >
                <span className="w-2 h-2 bg-[#9F2420] rounded-full mr-2"></span>
                <span className="text-[#9F2420] font-medium uppercase tracking-wide text-sm">
                  PREMIUM QUALITY
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl text-[#9F2420] mb-6"
              >
                MoltyFoam
                <span className=" text-2xl sm:text-3xl block text-[#2D2D2D] font-light mt-2">
                  The only high Pressure Foam in Pakistan
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-[#555] mb-8 max-w-lg leading-relaxed"
              >
                Experience unparalleled comfort with our premium 'Asif' Foam technology. 
                Designed for perfect support and lasting durability for your peaceful sleep.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#7a1d1a',
                    boxShadow: '0 10px 25px -5px rgba(159, 36, 32, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#9F2420] text-white px-8 py-4 rounded-xl font-medium text-lg tracking-wide transition-all duration-300 shadow-lg"
                >
                  Shop Collection
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#9F2420] text-[#9F2420] px-8 py-4 rounded-xl font-medium text-lg tracking-wide transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main Image Container */}
                <motion.div
                  whileHover={{ rotate: -2 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="/moltyfoam.webp" 
                    alt="MoltyFoam Premium Mattress"
                    className="w-full h-[400px] object-cover"
                  />
                  
                  {/* Floating Discount Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                    className="absolute top-6 right-6 bg-[#9F2420] text-white px-4 py-2 rounded-full shadow-lg"
                  >
                    <span className="font-bold">20% OFF</span>
                  </motion.div>
                </motion.div>

                {/* Background Glow */}
                <div className="absolute -inset-10 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-[#9F2420] opacity-20 rounded-full blur-3xl"></div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#9F2420] opacity-10 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-[#9F2420] opacity-10 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose MoltyFoam Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ad2617] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ae3225] rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center bg-[#FBEAE8] px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#9F2420] rounded-full mr-2"></span>
              <span className="text-[#9F2420] font-medium uppercase tracking-wide text-sm">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2D2D] mb-4">
              Why Choose <span className="text-[#9F2420] font-normal">MoltyFoam</span>?
            </h2>
            <p className="text-lg text-[#555] max-w-2xl mx-auto">
              Discover the exceptional qualities that make our foam products stand out from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image with Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px]">
                <img 
                  src="/moltyfoam.webp" 
                  alt="MoltyFoam Quality"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Stats Overlay - Bottom Right */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#9F2420]">95%</div>
                    <div className="text-xs md:text-sm text-[#555] font-medium">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Features Grid for Tablets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                  title: "Advanced Pressure Relief",
                  description: "Evenly distributes weight for restful sleep."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  ),
                  title: "Durable & Long-Lasting",
                  description: "Maintains shape and support for years."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  title: "Breathable Comfort",
                  description: "Optimal air circulation for cool sleep."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Eco-Friendly Materials",
                  description: "Safe, sustainable materials."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col p-5 bg-[#FBEAE8] rounded-xl group hover:bg-[#e8a8a1] transition-all duration-300 border border-[#FBEAE8] hover:border-[#9F2420]/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#9F2420] rounded-full flex items-center justify-center text-xl text-white mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {feature.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-base md:text-lg font-semibold text-[#2D2D2D] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#555] leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
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
                backgroundColor: '#7a1d1a',
                boxShadow: '0 10px 25px -5px rgba(159, 36, 32, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#9F2420] text-white px-6 py-3 rounded-xl font-medium text-base md:text-lg tracking-wide transition-all duration-300 shadow-lg"
            >
              Explore Our Technology
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ProductShowcase/>
      <BestSellerSection/>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FBEAE8] to-[#f8d5d1]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-[#2D2D2D] mb-6">
              Ready to Transform Your Sleep?
            </h2>
            <p className="text-lg text-[#555] mb-10 max-w-2xl mx-auto">
              Experience the difference of premium high-pressure foam. Shop now and enjoy our limited-time discount.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#7a1d1a',
                boxShadow: '0 15px 30px -5px rgba(159, 36, 32, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#9F2420] text-white px-10 py-4 rounded-xl font-medium text-lg tracking-wide transition-all duration-300 shadow-lg"
            >
              Shop Now - 20% OFF
            </motion.button>
            
            <p className="text-sm text-[#777] mt-4">
              Limited time offer. Terms and conditions apply.
            </p>
          </motion.div>
        </div>
      </section>
    
      <Footer />
    </div>
  );
};

export default MoltyFoamPage;