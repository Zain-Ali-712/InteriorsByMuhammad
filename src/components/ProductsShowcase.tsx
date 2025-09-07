"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  image: string;
  hoverImage?: string;
}

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Mattresses' | 'Accessories'>('Mattresses');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Sample products data
  const products: Product[] = [
    // Mattresses
    {
      id: 1,
      name: "MoltySleep Aim",
      category: "Mattresses",
      description: "Premium comfort with advanced support technology for restful sleep",
      price: "Rs28,025.00",
      originalPrice: "Rs35,000.00",
      badge: "SALE",
      image: "/mattress5.jpg",
      hoverImage: "/mattress6.jpg"
    },
    {
      id: 2,
      name: "MoltySleep Executive",
      category: "Mattresses",
      description: "Luxury executive series with premium materials and advanced comfort layers",
      price: "Rs66,500.00",
      originalPrice: "Rs83,000.00",
      badge: "SALE",
      image: "/mattress1.jpg",
      hoverImage: "/mattress2.jpg"
    },
    {
      id: 3,
      name: "Molty Cool Gel 7 Zone",
      category: "Mattresses",
      description: "Advanced cooling gel technology with 7-zone support for perfect comfort",
      price: "Rs45,750.00",
      originalPrice: "Rs57,000.00",
      badge: "NEW",
      image: "/mattress3.jpg",
      hoverImage: "/mattress4.jpg"
    },
    // Accessories
    {
      id: 4,
      name: "Premium Pillow Set",
      category: "Accessories",
      description: "Orthopedic memory foam pillows for neck support",
      price: "Rs8,500.00",
      originalPrice: "Rs10,000.00",
      badge: "SALE",
      image: "/pillow1.jpg",
      hoverImage: "/pillow2.jpg"
    },
    {
      id: 5,
      name: "Mattress Protector",
      category: "Accessories",
      description: "Waterproof and breathable mattress protection",
      price: "Rs6,200.00",
      badge: "BESTSELLER",
      image: "/matprotecter1.jpg",
      hoverImage: "/matprotecter2.jpg"
    },
    {
      id: 6,
      name: "Bed Frame Premium",
      category: "Accessories",
      description: "Solid wood bed frame with storage options",
      price: "Rs89,000.00",
      originalPrice: "Rs105,000.00",
      badge: "SALE",
      image: "/bedframe1.jpg",
      hoverImage: "/bedframe2.jpg"
    }
  ];

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ad2617] rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
              FEATURED PRODUCTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D2D2D] mb-6">
            Explore Our <span className="text-[#9F2420] font-normal">Collection</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Discover our premium range of mattresses and accessories designed for ultimate comfort
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#FBEAE8] rounded-xl p-1.5 inline-flex">
            {(['Mattresses', 'Accessories'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-[#9F2420] text-white shadow-lg' 
                    : 'text-[#555] hover:text-[#9F2420]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-[#7b2619]/90 via-[#f6eae9] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Sale Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#9F2420] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  {product.badge}
                </div>
              )}
              
              {/* Product Image with Hover Effect */}
              <div className="relative overflow-hidden h-64">
                {/* Main Image */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id && product.hoverImage ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                
                {/* Hover Image */}
                {product.hoverImage && (
                  <img 
                    src={product.hoverImage} 
                    alt={product.name}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-[#9F2420] font-medium uppercase tracking-wide">
                    {product.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">{product.name}</h3>
                <p className="text-[#555] text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-[#9F2420]">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#555] line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>

                {/* Action Button - Only visible on hover */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-[#9F2420] text-white py-3 rounded-lg font-medium hover:bg-[#7a1d1a] transition-colors duration-300"
                >
                  SELECT OPTIONS
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-transparent border-2 border-[#9F2420] text-[#9F2420] px-8 py-3 rounded-xl font-medium hover:bg-[#9F2420] hover:text-white transition-all duration-300">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;