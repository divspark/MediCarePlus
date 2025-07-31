import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Award, 
  Users, 
  Building, 
  Target, 
  Eye, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '50+', label: 'Expert Doctors', icon: Users },
    { number: '15,000+', label: 'Happy Patients', icon: Heart },
    { number: '100+', label: 'Staff Members', icon: Building },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their well-being.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in medical care, continuously improving our services.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and medical practices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together as a team to provide comprehensive, coordinated healthcare.'
    }
  ];

  const milestones = [
    { year: '1999', event: 'Aarogya Hospital founded with 50 beds' },
    { year: '2005', event: 'Expanded to 150 beds, added ICU facilities' },
    { year: '2010', event: 'Launched specialized cardiac care center' },
    { year: '2015', event: 'Achieved NABH accreditation' },
    { year: '2020', event: 'Opened advanced neurology department' },
    { year: '2024', event: 'Celebrating 25 years of healthcare excellence' },
  ];

  const leadership = [
    {
      name: 'Dr. Suresh Gupta',
      position: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '30+ years',
      specialty: 'Internal Medicine'
    },
    {
      name: 'Dr. Kavita Sharma',
      position: 'Director of Nursing',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '25+ years',
      specialty: 'Nursing Administration'
    },
    {
      name: 'Mr. Rajesh Patel',
      position: 'Hospital Administrator',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '20+ years',
      specialty: 'Healthcare Management'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About Aarogya Hospital</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              For over 25 years, we have been Mumbai's trusted healthcare partner, 
              delivering exceptional medical care with compassion and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <Target className="text-blue-600 mr-4" size={32} />
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide world-class healthcare services that combine medical excellence 
                  with compassionate care, making quality healthcare accessible to all sections 
                  of society while upholding the highest standards of medical ethics and patient safety.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <Eye className="text-green-600 mr-4" size={32} />
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading healthcare institution in Mumbai, recognized for clinical 
                  excellence, innovative treatments, and exceptional patient experience, 
                  while contributing to the advancement of medical knowledge and community health.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Aarogya Hospital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Healthcare Journey</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From humble beginnings to becoming Mumbai's premier healthcare destination.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-medical-teal to-medical-ocean h-full rounded-full"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-large border border-secondary-100 hover:shadow-xl transition-all duration-300">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-2xl mb-4">
                        <span className="text-white font-bold text-lg">{milestone.year.slice(-2)}</span>
                      </div>
                      <div className="text-3xl font-display font-bold bg-gradient-to-r from-medical-teal to-medical-ocean bg-clip-text text-transparent mb-3">
                        {milestone.year}
                      </div>
                      <p className="text-secondary-700 text-lg leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-full border-4 border-white shadow-large z-10"></div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the experienced professionals who guide our mission of providing 
              exceptional healthcare services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{leader.position}</p>
                  <p className="text-gray-600 text-sm mb-1">{leader.specialty}</p>
                  <p className="text-gray-600 text-sm">{leader.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Accreditations</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our commitment to quality is recognized by leading healthcare organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'NABH Accredited Hospital',
              'ISO 9001:2015 Certified',
              'Quality Council of India Recognition',
              'Green OT Certification',
              'Fire Safety Compliance',
              'Biomedical Waste Management Certified'
            ].map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-white rounded-lg shadow"
              >
                <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{certification}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Community Commitment</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Beyond providing healthcare services, we actively contribute to community health 
              through free health camps, medical education, and awareness programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Free Health Camps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-blue-200">People Screened Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Medical Students Trained</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;