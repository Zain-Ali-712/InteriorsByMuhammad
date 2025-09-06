"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9F2420] to-[#FBEAE8]"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-[#9F2420] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-[#FBEAE8] rounded-full blur-3xl"></div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 relative z-10">
          {/* Brand column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="lg:col-span-1"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="relative h-24 w-48 mb-6">
                <Image 
                  src="/logo.webp" 
                  alt="Company Logo" 
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-[#FBEAE8] mb-6 max-w-xs leading-relaxed">
                Premium products for your little ones. Quality, comfort, and style for every stage of childhood.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex space-x-4">
              {[
                { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", name: "Twitter" },
                { icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", name: "Facebook" },
                { icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z", name: "Pinterest" },
                { icon: "M7.9 7v2.4H5.6c-.6 0-.7.3-.7.6 0 .4.1.6.7.6h2.3V13c0 .6.3.7.6.7.4 0 .6-.1.6-.7V10.6h2.3c.6 0 .7-.2.7-.6 0-.3-.1-.6-.7-.6H9.1V7c0-.3-.2-.7-.6-.7-.3 0-.6.4-.6.7zm4.3 6.9h7.7c.5 0 .9-.4.9-.9V5.9c0-.5-.4-.9-.9-.9H5.9c-.5 0-.9.4-.9.9v7.1c0 .5.4.9.9.9h2.7c.5 0 .9-.4.9-.9v-2.4h1.8v2.4c0 .5.4.9.9.9h2.7zm-6.3-9h9.4v6.2h-9.4V5.9z", name: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    backgroundColor: "#9F2420"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#9F2420] group"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-[#FBEAE8] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Customer Service column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-6 relative inline-block pb-2">
              Customer Service
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#9F2420] to-[#FBEAE8] rounded-full"></span>
            </motion.h3>
            <motion.h4 variants={itemVariants} className="text-[#FBEAE8] font-medium mb-4">Contact Us</motion.h4>
            <ul className="space-y-3">
              {[
                "Help & FAQs",
                "Payment Method",
                "Delivery Information",
                "Track Your Order",
                "Return & Exchanges"
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a 
                    href="#" 
                    className="text-[#d1d1d1] hover:text-white transition-colors duration-300 flex items-center group py-1"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-[#9F2420] to-[#FBEAE8] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-6 relative inline-block pb-2">
              Categories
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#9F2420] to-[#FBEAE8] rounded-full"></span>
            </motion.h3>
            <ul className="space-y-3">
              {[
                "Clothing & Fashion",
                "Toys",
                "School Supplies",
                "Birthday Party Supplies",
                "Baby Diapering"
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a 
                    href="#" 
                    className="text-[#d1d1d1] hover:text-white transition-colors duration-300 flex items-center group py-1"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-[#9F2420] to-[#FBEAE8] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-6 relative inline-block pb-2">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-[#9F2420] to-[#FBEAE8] rounded-full"></span>
            </motion.h3>
            
            <motion.div variants={itemVariants} className="mb-6 space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9F2420] to-[#c53d39] rounded-full flex items-center justify-center flex-shrink-0 mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#FBEAE8]">Phone Number</p>
                  <a href="tel:+923228050875" className="text-[#d1d1d1] hover:text-white transition-colors duration-300">+92 322 8050875</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9F2420] to-[#c53d39] rounded-full flex items-center justify-center flex-shrink-0 mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[#FBEAE8]">Email Address</p>
                  <a href="mailto:interiorsbymuhammad@gmail.com" className="text-[#d1d1d1] hover:text-white transition-colors duration-300 break-all">interiorsbymuhammad@gmail.com</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="font-medium mb-3 text-[#FBEAE8]">Subscribe to Newsletter</h4>
              <div className="flex rounded-lg overflow-hidden shadow-lg">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#9F2420] w-full placeholder-gray-400"
                />
                <motion.button 
                  whileHover={{ backgroundColor: "#7a1d1a" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#9F2420] to-[#c53d39] px-4 py-3 text-white transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom copyright section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center relative z-10"
        >
          <p className="text-[#d1d1d1]">
            © {currentYear} InteriorsByMuhammad. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;