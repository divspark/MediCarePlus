import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { 
  Heart, 
  Award, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  Stethoscope,
  Brain,
  Bone,
  Eye,
  Baby,
  Shield,
  Play,
  Quote,
  CheckCircle,
  Phone,
  Calendar,
  Activity,
  TrendingUp,
  Building,
  Zap
} from 'lucide-react';
import { doctors } from '../data/mockData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Award, gradient: 'from-medical-teal to-medical-ocean' },
    { number: '50+', label: 'Expert Doctors', icon: Users, gradient: 'from-success-500 to-success-600' },
    { number: '15K+', label: 'Happy Patients', icon: Heart, gradient: 'from-accent-500 to-accent-600' },
    { number: '24/7', label: 'Emergency Care', icon: Clock, gradient: 'from-primary-500 to-primary-600' },
  ];

  const specialties = [
    { 
      name: 'Cardiology', 
      icon: Heart, 
      description: 'Advanced heart care with cutting-edge technology', 
      gradient: 'from-red-500 to-pink-600',
      patients: '2,500+',
      link: '/departments'
    },
    { 
      name: 'Neurology', 
      icon: Brain, 
      description: 'Comprehensive brain & nervous system treatment', 
      gradient: 'from-purple-500 to-indigo-600',
      patients: '1,800+',
      link: '/departments'
    },
    { 
      name: 'Orthopedics', 
      icon: Bone, 
      description: 'Expert bone & joint care specialists', 
      gradient: 'from-blue-500 to-cyan-600',
      patients: '3,200+',
      link: '/departments'
    },
    { 
      name: 'Ophthalmology', 
      icon: Eye, 
      description: 'Complete eye care & vision solutions', 
      gradient: 'from-green-500 to-emerald-600',
      patients: '1,500+',
      link: '/departments'
    },
    { 
      name: 'Pediatrics', 
      icon: Baby, 
      description: 'Specialized child healthcare experts', 
      gradient: 'from-pink-500 to-rose-600',
      patients: '2,100+',
      link: '/departments'
    },
    { 
      name: 'Emergency', 
      icon: Shield, 
      description: '24/7 critical care & emergency services', 
      gradient: 'from-orange-500 to-red-600',
      patients: '5,000+',
      link: '/departments'
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Exceptional care and world-class facilities. Dr. Rajesh Kumar saved my life with his expertise in cardiology. The staff is incredibly professional and caring.',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      treatment: 'Cardiac Surgery'
    },
    {
      id: 2,
      name: 'Amit Patel',
      location: 'Pune',
      rating: 5,
      text: 'Outstanding orthopedic treatment with minimal recovery time. The surgery was successful and the post-operative care was excellent. Highly recommend MediCare Plus.',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      treatment: 'Joint Replacement'
    },
    {
      id: 3,
      name: 'Sunita Reddy',
      location: 'Bangalore',
      rating: 5,
      text: 'Excellent pediatric care for my daughter. Dr. Sunita Reddy is amazing with children. The child-friendly environment made the experience stress-free.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      treatment: 'Pediatric Care'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Delhi',
      rating: 5,
      text: 'Best eye care in Mumbai. My cataract surgery was perfect with the latest technology. The vision clarity is better than I ever expected.',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      treatment: 'Cataract Surgery'
    },
    {
      id: 5,
      name: 'Meera Joshi',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Wonderful maternity care with personalized attention. The delivery was smooth and the nursing staff was very supportive throughout the process.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      treatment: 'Maternity Care'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'NABH Accredited',
      description: 'Nationally accredited healthcare facility'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency medical care'
    },
    {
      icon: Award,
      title: 'Expert Doctors',
      description: 'Highly qualified medical professionals'
    },
    {
      icon: Activity,
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment'
    }
  ];

  const doctorSliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-secondary-50 via-white to-medical-teal/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-medical-teal/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-medical-ocean/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-gradient-to-r from-medical-teal/10 to-medical-ocean/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-medical-teal/20"
              >
                <Shield className="text-medical-teal mr-3" size={20} />
                <span className="text-sm font-semibold text-secondary-700">Trusted Healthcare Since 1999</span>
                <div className="ml-3 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
              >
                Your Health is Our
                <span className="block bg-gradient-to-r from-medical-teal via-medical-ocean to-medical-mint bg-clip-text text-transparent">
                  Top Priority
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl mb-8 text-secondary-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Experience world-class healthcare with our team of expert doctors and 
                state-of-the-art medical facilities. We combine traditional Indian medical 
                wisdom with cutting-edge modern technology.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link
                  to="/appointment"
                  className="group bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  <Calendar className="mr-3" size={20} />
                  Book Appointment
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <button className="group border-2 border-medical-teal text-medical-teal px-8 py-4 rounded-2xl font-semibold hover:bg-medical-teal hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                  <Play className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  Watch Our Story
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-soft`}>
                      <stat.icon className="text-white" size={20} />
                    </div>
                    <div className="text-2xl md:text-3xl font-display font-bold text-secondary-800">{stat.number}</div>
                    <div className="text-sm text-secondary-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Medical Team"
                  className="rounded-3xl shadow-large w-full max-w-lg mx-auto"
                />
                
                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-large border border-white/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-xl flex items-center justify-center">
                      <Heart className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-secondary-800 font-semibold">24/7 Care</div>
                      <div className="text-secondary-600 text-sm">Emergency Services</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-large border border-white/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-secondary-800 font-semibold">NABH Certified</div>
                      <div className="text-secondary-600 text-sm">Quality Assured</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-ocean/20 rounded-3xl transform rotate-6 scale-105 -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-secondary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  className="flex items-center space-x-3 justify-center sm:justify-start"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={16} />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-secondary-800 text-sm">{feature.title}</div>
                    <div className="text-secondary-600 text-xs">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Hospital"
                className="rounded-3xl shadow-large"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-medical-teal to-medical-ocean text-white p-6 rounded-2xl shadow-large">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center bg-medical-teal/10 rounded-full px-4 py-2 mb-6">
                <Heart className="text-medical-teal mr-2" size={20} />
                <span className="text-medical-teal font-semibold">About MediCare Plus</span>
              </div>
              
              <h2 className="text-4xl font-display font-bold text-secondary-800 mb-6">
                25 Years of Healthcare Excellence
              </h2>
              
              <p className="text-secondary-600 text-lg mb-8 leading-relaxed">
                For over 25 years, MediCare Plus has been Mumbai's trusted healthcare provider, 
                combining traditional Indian medical wisdom with cutting-edge modern technology. 
                Our commitment to excellence and compassionate care has made us a leading healthcare institution.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'ISO 9001:2015 Certified Hospital',
                  'NABH Accredited Healthcare Facility',
                  '24/7 Emergency & Critical Care Services',
                  'Advanced Medical Technology & Equipment'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-full"></div>
                    <span className="text-secondary-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-8 py-4 rounded-2xl hover:shadow-glow transition-all duration-300 font-semibold group"
              >
                Learn More About Us
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-medical-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 mb-6 shadow-soft">
              <Stethoscope className="text-medical-teal mr-3" size={20} />
              <span className="text-medical-teal font-semibold">Our Specialties</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-secondary-800 mb-4">Medical Excellence Across Specialties</h2>
            <p className="text-secondary-600 text-lg max-w-3xl mx-auto">
              Comprehensive healthcare services across multiple specialties with expert doctors and advanced treatment options.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 border border-secondary-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${specialty.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <specialty.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary-800 mb-3">{specialty.name}</h3>
                <p className="text-secondary-600 mb-4">{specialty.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-secondary-500">Patients Treated</span>
                  <span className="font-semibold text-medical-teal">{specialty.patients}</span>
                </div>
                <Link
                  to={specialty.link}
                  className="text-medical-teal hover:text-medical-ocean font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-medical-teal/10 rounded-full px-6 py-3 mb-6">
              <Users className="text-medical-teal mr-3" size={20} />
              <span className="text-medical-teal font-semibold">Meet Our Doctors</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-secondary-800 mb-4">Expert Medical Professionals</h2>
            <p className="text-secondary-600 text-lg max-w-3xl mx-auto">
              Our team of highly qualified and experienced doctors are committed to providing 
              the best possible care for our patients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Slider {...doctorSliderSettings} className="doctor-slider">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="px-3">
                  <div className="bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 border border-secondary-100">
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center space-x-1 shadow-soft">
                        <Star className="text-yellow-400 fill-current" size={14} />
                        <span className="text-sm font-semibold">{doctor.rating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-3 py-1 rounded-full text-sm font-medium">
                        {doctor.experience}+ Years
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold text-secondary-800 mb-2">{doctor.name}</h3>
                      <p className="text-medical-teal font-semibold mb-2">{doctor.specialty}</p>
                      <p className="text-secondary-600 mb-4 text-sm">{doctor.education.split(',')[0]}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-success-600 font-bold text-lg">₹{doctor.consultationFee}</span>
                        <Link
                          to={`/doctors/${doctor.id}`}
                          className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-4 py-2 rounded-xl text-sm hover:shadow-glow transition-all duration-300 font-medium"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/doctors"
              className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-8 py-4 rounded-2xl hover:shadow-glow transition-all duration-300 inline-flex items-center font-semibold group"
            >
              View All Doctors
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-medical-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 mb-6 shadow-soft">
              <Quote className="text-medical-teal mr-3" size={20} />
              <span className="text-medical-teal font-semibold">Patient Stories</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-secondary-800 mb-4">What Our Patients Say</h2>
            <p className="text-secondary-600 text-lg max-w-3xl mx-auto">
              Real experiences from real patients who have trusted us with their healthcare needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Slider {...testimonialSettings} className="testimonial-slider">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-3">
                  <div className="bg-white rounded-3xl shadow-soft p-8 h-full border border-secondary-100">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={18} />
                      ))}
                    </div>
                    <p className="text-secondary-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-secondary-800">{testimonial.name}</h4>
                          <p className="text-secondary-500 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-medical-teal/10 text-medical-teal px-3 py-1 rounded-full text-xs font-medium">
                          {testimonial.treatment}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medical-teal via-medical-ocean to-medical-mint text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Book your appointment today and experience the difference of quality healthcare 
              with our expert medical team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-medical-teal px-8 py-4 rounded-2xl font-semibold hover:bg-secondary-50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-large"
              >
                <Calendar className="mr-3" size={20} />
                Book Your Appointment Now
                <ArrowRight className="ml-3" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-medical-teal transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-3" size={20} />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;