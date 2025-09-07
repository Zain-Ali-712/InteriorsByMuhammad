"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BestSellerSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    rating: 0,
    title: '',
    summary: '',
    review: '',
    name: '',
    email: '',
    consent: false
  });
  
  // Create refs for animation triggers
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const product = {
    name: "MoltySleep Executive Premium",
    category: "BEST SELLER",
    description: "Experience unparalleled luxury with our premium executive mattress featuring advanced 7-zone support system, cooling gel technology, and orthopedic memory foam for perfect spinal alignment and temperature regulation throughout the night.",
    price: "Rs66,500.00",
    originalPrice: "Rs83,000.00",
    features: [
      "7-Zone Support System",
      "Cooling Gel Technology", 
      "Orthopedic Memory Foam",
      "10-Year Warranty",
      "Hypoallergenic Materials"
    ],
    images: [
      "/mattress1.jpg",
      "/mattress2.jpg", 
      "/mattress3.jpg",
      "/mattress4.jpg"
    ],
    badges: ["BEST SELLER", "20% OFF", "FREE DELIVERY"]
  };

  const testimonials = [
    {
      id: 1,
      text: "The most comfortable mattress I've ever owned! Perfect support for my back pain.",
      author: "Sarah A.",
      rating: 5
    },
    {
      id: 2, 
      text: "Worth every penny. Waking up without back pain has changed my life completely.",
      author: "Michael T.",
      rating: 5
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setReviewData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setReviewData(prev => ({ ...prev, rating }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log('Review submitted:', reviewData);
    // Reset form and close
    setReviewData({
      rating: 0,
      title: '',
      summary: '',
      review: '',
      name: '',
      email: '',
      consent: false
    });
    setShowReviewForm(false);
    // Show success message (you can implement a toast notification)
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FBEAE8] to-[#f8d5d1] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9a1c18] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#9F2420] opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#9F2420] rounded-full mr-2"></span>
            <span className="text-[#9F2420] font-medium uppercase tracking-wide text-sm">
              CUSTOMER FAVORITE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2D2D] mb-6">
            Our <span className="text-[#9F2420] font-normal">Best Seller</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            The mattress that thousands of customers trust for their perfect night's sleep
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 cursor-pointer"
            >
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              
              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#9F2420] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    {badge}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-[#9F2420] scale-105' 
                      : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Testimonials Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex w-full mt-8 space-x-4 overflow-x-auto pb-2 overflow-hidden"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-4 rounded-xl shadow-xl mb-4 last:mb-0 border-l-4 border-[#9F2420]"
                >
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#555] italic mb-2">"{testimonial.text}"</p>
                  <p className="text-xs font-medium text-[#9F2420]">- {testimonial.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="text-xs text-[#9F2420] font-medium uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-4">
                {product.name}
              </h1>
              <p className="text-[#555] leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-[#9F2420]">{product.price}</span>
              <span className="text-xl text-[#555] line-through">{product.originalPrice}</span>
              <span className="bg-[#9F2420] text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#2D2D2D]">Key Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-[#9F2420] rounded-full flex items-center justify-center text-white text-sm mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#2D2D2D] font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#7a1d1a',
                  boxShadow: '0 10px 25px -5px rgba(159, 36, 32, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-[#9F2420] text-white py-4 px-6 rounded-xl font-medium text-lg tracking-wide transition-all duration-300 shadow-lg"
              >
                Add to Cart - 20% OFF
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 border-2 border-[#9F2420] text-[#9F2420] py-4 px-6 rounded-xl font-medium text-lg tracking-wide transition-all duration-300"
              >
                View Details
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-10 h-10 bg-[#9F2420] rounded-full flex items-center justify-center text-white mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-5a1 1 0 00-.293-.707l-4-4A1 1 0 0016 4H3z" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#555]">Free Delivery</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-[#9F2420] rounded-full flex items-center justify-center text-white mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#555]">10-Year Warranty</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-[#9F2420] rounded-full flex items-center justify-center text-white mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 01111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#555]">30-Day Returns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Customer Reviews Section - Compact & Attractive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D2D]">
                Share Your Experience
              </h2>
              <p className="text-sm text-[#555] mt-1">
                Help others make the right choice
              </p>
            </div>
            
            {!showReviewForm ? (
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#7a1d1a',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowReviewForm(true)}
                className="bg-[#9F2420] text-white px-6 py-2 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Write a Review
              </motion.button>
            ) : (
              <button
                onClick={() => setShowReviewForm(false)}
                className="text-[#9F2420] font-medium text-sm flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Cancel
              </button>
            )}
          </div>

          {showReviewForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-[#FBEAE8] p-5 rounded-xl border border-[#9F2420]/20"
            >
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-[#555] mb-2">
                    Your rating
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="text-xl focus:outline-none transition-transform hover:scale-110"
                      >
                        {star <= reviewData.rating ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Review Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-[#555] mb-1">
                      Review Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={reviewData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9F2420] focus:border-transparent text-sm"
                      placeholder="Great product!"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#555] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={reviewData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9F2420] focus:border-transparent text-sm"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Review Summary */}
                <div>
                  <label htmlFor="summary" className="block text-sm font-medium text-[#555] mb-1">
                    Quick Summary
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    value={reviewData.summary}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9F2420] focus:border-transparent text-sm"
                    placeholder="Share your experience in a few words"
                  />
                </div>

                {/* Email and Consent */}
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-[#555] mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={reviewData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9F2420] focus:border-transparent text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="flex items-start pt-5">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={reviewData.consent}
                        onChange={handleInputChange}
                        className="focus:ring-[#9F2420] h-4 w-4 text-[#9F2420] border-gray-300 rounded"
                      />
                    </div>
                    <label htmlFor="consent" className="ml-2 block text-xs text-[#555]">
                      This is my genuine opinion
                    </label>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#9F2420] text-white py-2 px-5 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 shadow-lg flex-1 flex items-center justify-center gap-2"
                    disabled={!reviewData.consent || reviewData.rating === 0}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Submit Review
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellerSection;