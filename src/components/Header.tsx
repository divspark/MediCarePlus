import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  ShoppingCart, 
  User,
  Calendar,
  Clock,
  Shield
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Departments', path: '/departments' },
    { name: 'Health Conditions', path: '/diseases' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>Emergency: +91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@medicareplus.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>24/7 Emergency Care</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-secondary-100' 
          : 'bg-white shadow-soft'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-medical-teal to-medical-ocean rounded-xl flex items-center justify-center shadow-glow">
                  <Heart className="text-white" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={10} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-secondary-800 to-medical-teal bg-clip-text text-transparent">
                  MediCare Plus
                </h1>
                <p className="text-sm text-secondary-600 font-medium">Premier Healthcare Solutions</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive(item.path)
                      ? 'text-medical-teal bg-medical-teal/10'
                      : 'text-secondary-700 hover:text-medical-teal hover:bg-secondary-50'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-medical-teal rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/appointment"
                className="group bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>
              
              <Link
                to="/cart"
                className="relative p-2.5 text-secondary-600 hover:text-medical-teal hover:bg-secondary-50 rounded-xl transition-all duration-300"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  3
                </span>
              </Link>
              
              <Link
                to="/auth"
                className="p-2.5 text-secondary-600 hover:text-medical-teal hover:bg-secondary-50 rounded-xl transition-all duration-300"
              >
                <User size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-secondary-600 hover:text-medical-teal transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-secondary-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-medical-teal bg-medical-teal/10'
                      : 'text-secondary-700 hover:text-medical-teal hover:bg-secondary-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-secondary-100 space-y-3">
                <Link
                  to="/appointment"
                  className="block bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-4 py-3 rounded-xl text-center font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
                
                <div className="flex items-center justify-center space-x-4">
                  <Link
                    to="/cart"
                    className="flex items-center space-x-2 px-4 py-2 text-secondary-600 hover:text-medical-teal hover:bg-secondary-50 rounded-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingCart size={18} />
                    <span>Cart (3)</span>
                  </Link>
                  
                  <Link
                    to="/auth"
                    className="flex items-center space-x-2 px-4 py-2 text-secondary-600 hover:text-medical-teal hover:bg-secondary-50 rounded-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} />
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;