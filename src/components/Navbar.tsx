"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, Heart, Star, Plus, Minus, Trash2, Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Sample cart items data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Winter Comfort Pillow",
      price: 49.99,
      quantity: 1,
      image: "/winter3.webp",
      category: "Pillows"
    },
    {
      id: 2,
      name: "Premium Baby Onesie",
      price: 29.99,
      quantity: 2,
      image: "/baby1.jpg",
      category: "Clothing"
    },
    {
      id: 3,
      name: "Educational Toy Set",
      price: 39.99,
      quantity: 1,
      image: "/baby2.jpg",
      category: "Toys"
    }
  ]);

  const toggleSearch = () => {
    // Search functionality is disabled - no action will be taken
    return;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Function to generate proper slugs for navigation
  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log('Login attempted');
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center z-60">
              <div className="flex flex-col">
                <Link href="/">
                  <img src="/logo1.png" alt="Logo" className="h-10 sm:h-24 object-contain cursor-pointer" />
                </Link>
              </div>
            </div>

            {/* Menu Items - Centered (Desktop only) */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-12">
              {['Home', 'Shop', 'Refurnish', 'Modern', 'Design and Decor'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${generateSlug(item)}`}
                  className="text-[var(--accent)] hover:text-[var(--accent-dark)] relative group transition-colors duration-200 text-md uppercase tracking-wider font-medium"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[var(--accent-dark)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 relative">
              {/* Icons */}
              <div className="flex items-center space-x-4 opacity-100">
                <button 
                  onClick={toggleSearch}
                  className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Search"
                >
                  <Search size={22} strokeWidth={2.5} className="fill-current" />
                </button>
                <button 
                  onClick={toggleCart}
                  className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 relative" 
                  aria-label="Shopping cart"
                >
                  <ShoppingCart size={22} strokeWidth={2.5} className="fill-current" />
                  <span className="absolute -top-1 -right-1 bg-[var(--accent-dark)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                </button>
                <button 
                  onClick={toggleLogin}
                  className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors duration-200 p-2 rounded-full hover:bg-gray-100" 
                  aria-label="User account"
                >
                  <User size={22} strokeWidth={2.5} className="fill-current" />
                </button>
              </div>

              {/* Mobile menu button */}
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 ml-2"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} strokeWidth={2.5} />
                ) : (
                  <Menu size={24} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                  onClick={closeMobileMenu}
                />
                
                {/* Mobile Menu Panel */}
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 300 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 lg:hidden"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                      <Link href="/" onClick={closeMobileMenu}>
                        <img src="/logo.webp" alt="Logo" className="h-10 object-contain" />
                      </Link>
                      <button onClick={closeMobileMenu} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                      </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                      <nav className="space-y-2">
                        {['Home', 'Shop', 'Molty Foam', 'Celeste', 'Molty Ortho'].map((item) => (
                          <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${generateSlug(item)}`}
                            className="block py-3 px-4 text-gray-700 hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] rounded-lg transition-colors duration-200 text-lg font-medium"
                            onClick={closeMobileMenu}
                          >
                            {item}
                          </Link>
                        ))}
                      </nav>
                      
                      <div className="pt-8 mt-8 border-t border-gray-100">
                        <div className="flex justify-around">
                          <button className="flex flex-col items-center text-gray-600 p-2">
                            <Star size={20} strokeWidth={2.5} className="fill-current mb-1" />
                            <span className="text-xs font-medium">Featured</span>
                          </button>
                          <button className="flex flex-col items-center text-gray-600 p-2">
                            <Heart size={20} strokeWidth={2.5} className="fill-current mb-1" />
                            <span className="text-xs font-medium">Wishlist</span>
                          </button>
                          <button 
                            onClick={() => { toggleLogin(); closeMobileMenu(); }}
                            className="flex flex-col items-center text-gray-600 p-2"
                          >
                            <User size={20} strokeWidth={2.5} className="fill-current mb-1" />
                            <span className="text-xs font-medium">Account</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Shopping Cart Modal */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 z-[60]"
              onClick={toggleCart}
            />
            
            {/* Cart Panel - Slides from left with rounded borders */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-4 right-4 bottom-4 sm:w-96 w-82  bg-white shadow-2xl z-[70] rounded-xl overflow-hidden flex flex-col"
            >
              {/* Cart Header */}
              <div className="bg-gradient-to-r from-[#9F2420] to-[#c53d39] text-white p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold flex items-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Your Cart ({cartItemCount})
                </h2>
                <button 
                  onClick={toggleCart}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-10">
                    <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg mb-6">No products in the cart.</p>
                    <button 
                      onClick={toggleCart}
                      className="bg-[#9F2420] text-white px-5 py-2.5 rounded-lg hover:bg-[#7a1d1a] transition-colors text-sm"
                    >
                      CONTINUE SHOPPING
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Cart Items - Compact Design */}
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <motion.div 
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                        >
                          <div className="w-14 h-14 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="ml-3 flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 text-sm truncate">{item.name}</h3>
                            <p className="text-xs text-gray-500">{item.category}</p>
                            <p className="text-[#9F2420] font-semibold text-sm">${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center space-x-1.5 ml-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center text-[#9F2420] justify-center bg-[#9F2420]/30  rounded-md hover:bg-[#9F2420]/50 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            
                            <span className="w-6 text-center text-[#9F2420] font-medium text-sm">{item.quantity}</span>
                            
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center text-[#9F2420] justify-center bg-[#9F2420]/30 rounded-md hover:bg-[#9F2420]/50 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="ml-2 text-gray-400 hover:text-[#9F2420] transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </motion.div>
                      ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="mt-5 pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#9F2420]/80 text-sm">Subtotal</span>
                        <span className="text-[#9F2420]/80 font-semibold text-sm">${calculateTotal().toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[#9F2420]/80 text-sm">Shipping</span>
                        <span className="font-semibold text-green-600 text-sm">Free</span>
                      </div>
                      
                      <div className="flex justify-between items-center font-bold mt-3 pt-3 border-t border-gray-200">
                        <span className="text-[#9F2420] text-base">Total</span>
                        <span className="text-[#9F2420] text-base">${calculateTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={toggleCart}
                      className="py-2.5 px-4 border border-[#9F2420] text-[#9F2420] rounded-lg hover:bg-[#9F2420] hover:text-white transition-colors font-medium text-sm"
                    >
                      CONTINUE TO SHOP
                    </button>
                    <button className="py-2.5 px-4 bg-[#9F2420] text-white rounded-lg hover:bg-[#7a1d1a] transition-colors font-medium text-sm shadow-md">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[80] backdrop-blur-sm"
              onClick={toggleLogin}
            />
            
            {/* Login Panel */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 m-auto max-w-md w-full h-fit max-h-[90vh] bg-white shadow-2xl z-[90] rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Decorative Header */}
              <div className="bg-gradient-to-r from-[#9F2420] to-[#c53d39] text-white p-6 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-full"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-white/90">Sign in to your account</p>
                  </div>
                  <button 
                    onClick={toggleLogin}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Login Form */}
              <div className="p-6 sm:p-8">
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Username or Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9F2420] focus:border-[#9F2420] transition-colors duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9F2420] focus:border-[#9F2420] transition-colors duration-200"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="h-4 w-4 text-[#9F2420] focus:ring-[#9F2420] border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-[#9F2420] hover:text-[#7a1d1a] transition-colors">
                        Lost your password?
                      </a>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#9F2420] to-[#c53d39] text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    LOG IN
                  </motion.button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <span>Google</span>
                  </button>
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <span>Facebook</span>
                  </button>
                </div>

                {/* Register Link */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-[#9F2420] hover:text-[#7a1d1a] transition-colors">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>

              {/* Brand Footer */}
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-sm text-gray-500">Powered by</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-[#9F2420]">Celeste</span>
                    <span className="text-gray-400">•</span>
                    <span className="font-semibold text-[#9F2420]">Molty Ortho</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;