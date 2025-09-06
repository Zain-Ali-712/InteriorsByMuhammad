"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Mossa amet, at dolor tellus pellentesque oenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.",
      author: "EMMA HART",
      role: "Satisfied Customer",
      rating: 5,
      image: "/profile1.jpg"
    },
    {
      id: 2,
      text: "Molesuada eu mattis fermentum etiam arcu risus locus velit neque mi integer tincidunt sociis enim gravida in pellentesque cursus sed.",
      author: "DIANNA JOHNSON",
      role: "Happy Parent",
      rating: 5,
      image: "/profile2.jpg"
    },
    {
      id: 3,
      text: "The quality of their products is exceptional. My little one sleeps comfortably through the night thanks to their premium mattresses.",
      author: "MICHAEL CHEN",
      role: "Verified Buyer",
      rating: 5,
      image: "/profile3.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-t from-white to-[#FBEAE8]">
      {/* Maroon Glow Effect at Top */}
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center bg-[#8B0000]/10 px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 bg-[#8B0000] rounded-full mr-2"></span>
            <span className="text-[#8B0000] font-medium uppercase tracking-wide text-xs">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3">
            Why They Love Us
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
                }}              
                className={`relative group cursor-pointer ${
                index === activeTestimonial ? 'scale-106' : 'scale-100'
              } transition-transform duration-300`}
              onClick={() => setActiveTestimonial(index)}
            >
              <motion.div
                initial={{ y: 0, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 12px 30px -5px rgba(139, 0, 0, 0.12)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-xl p-6 h-full flex flex-col transition-all duration-300 border border-gray-100"
              >
                {/* Stars - Moved to top */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#8B0000]' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                
                {/* Quote Icon */}
                <div className="text-[#8B0000] text-2xl mb-4">"</div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-grow">
                  {testimonial.text}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {/* Profile Image */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Image</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">{testimonial.author}</h4>
                    <p className="text-xs text-gray-600 truncate">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-1.5 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-[#8B0000] w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03, 
              backgroundColor: '#6A0D0D'
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#8B0000] text-white px-6 py-3 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            VIEW ALL TESTIMONIALS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;