"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the subscription logic here
    setIsSubscribed(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FBEAE8] to-[#f8d5d1] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#9F2420] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#9F2420] opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-[#9F2420] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2D2D] mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and be the first to know about exclusive offers, new arrivals, and special promotions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#9F2420] opacity-5 rounded-bl-full"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#9F2420] opacity-5 rounded-tr-full"></div>
          </div>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg 
                  className="w-8 h-8 text-green-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-medium text-[#2D2D2D] mb-2">
                Thank You for Subscribing!
              </h3>
              <p className="text-[#555]">
                You've been added to our newsletter list. Keep an eye on your inbox for our latest updates.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="relative flex-grow max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-gray-50 rounded-xl border text-[#9F2420] border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9F2420] focus:border-transparent transition-all duration-300"
                    required
                  />
                  <svg 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" 
                    />
                  </svg>
                </div>
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#7a1d1a',
                    boxShadow: '0 10px 25px -5px rgba(159, 36, 32, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#9F2420] text-white px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 shadow-lg w-full sm:w-auto whitespace-nowrap"
                >
                  SUBSCRIBE
                </motion.button>
              </div>
            </form>
          )}

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[#777] mt-6"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
        >
          {['Free Shipping', 'Special Discounts', 'Early Access', 'Exclusive Content'].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <div className="w-2 h-2 bg-[#9F2420] rounded-full mr-2"></div>
              <span className="text-sm text-[#2D2D2D]">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;