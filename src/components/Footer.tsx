import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Shield,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Departments', path: '/departments' },
    { name: 'Health Conditions', path: '/diseases' },
    { name: 'Book Appointment', path: '/appointment' },
    { name: 'About Us', path: '/about' },
  ];

  const services = [
    'Emergency Care',
    'Cardiology',
    'Neurology', 
    'Orthopedics',
    'Pediatrics',
    'Gynecology',
    'Oncology',
    'Radiology',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-medical-teal rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-medical-ocean rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-secondary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Stay Updated with Health Tips</h3>
                <p className="text-secondary-300">
                  Subscribe to our newsletter for the latest health insights, medical updates, and wellness tips.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-medical-teal focus:border-transparent backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-medical-teal to-medical-ocean px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span>Subscribe</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-medical-teal to-medical-ocean rounded-xl flex items-center justify-center shadow-glow">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">MediCare Plus</h3>
                  <p className="text-sm text-secondary-400">Premier Healthcare</p>
                </div>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Leading healthcare provider in Mumbai, offering world-class medical services
                with a commitment to excellence and compassionate care for over 25 years.
              </p>
              
              {/* Certifications */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="text-medical-teal" size={18} />
                  <span className="text-sm text-secondary-300">NABH Accredited</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-medical-teal" size={18} />
                  <span className="text-sm text-secondary-300">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-medical-teal" size={18} />
                  <span className="text-sm text-secondary-300">15,000+ Happy Patients</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-medical-teal transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/departments"
                      className="text-secondary-300 hover:text-medical-teal transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-medical-teal mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-secondary-300 leading-relaxed">
                      123 Health Street, Bandra West<br />
                      Mumbai, Maharashtra 400050<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-medical-teal flex-shrink-0" size={18} />
                  <div>
                    <p className="text-secondary-300">Emergency: +91 98765 43210</p>
                    <p className="text-secondary-400 text-sm">Appointments: +91 98765 43212</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-medical-teal flex-shrink-0" size={18} />
                  <div>
                    <p className="text-secondary-300">info@medicareplus.in</p>
                    <p className="text-secondary-400 text-sm">emergency@medicareplus.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="text-medical-teal flex-shrink-0" size={18} />
                  <div>
                    <p className="text-secondary-300">24/7 Emergency Care</p>
                    <p className="text-secondary-400 text-sm">Mon-Sat: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-secondary-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-secondary-400 text-sm text-center md:text-left">
                <p>&copy; 2024 MediCare Plus. All rights reserved.</p>
                <p className="mt-1">Built with care for your health and wellness.</p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-secondary-400 hover:text-medical-teal transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-secondary-400 hover:text-medical-teal transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-secondary-400 hover:text-medical-teal transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;