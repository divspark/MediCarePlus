import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Heart,
  Car,
  Bus,
  Train
} from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact Form Data:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Health Street, Bandra West', 'Mumbai, Maharashtra 400050', 'India']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'General Enquiry: +91 98765 43210',
        'Emergency: +91 98765 43211',
        'Appointments: +91 98765 43212'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@aarogyahospital.in',
        'appointments@aarogyahospital.in',
        'emergency@aarogyahospital.in'
      ]
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [
        'Monday - Friday: 24/7',
        'Saturday: 24/7',
        'Sunday: Emergency Only'
      ]
    }
  ];

  const departments = [
    { name: 'Emergency Department', phone: '+91 98765 43211', ext: 'Available 24/7' },
    { name: 'Cardiology', phone: '+91 98765 43213', ext: 'Mon-Sat: 9AM-6PM' },
    { name: 'Neurology', phone: '+91 98765 43214', ext: 'Mon-Sat: 10AM-6PM' },
    { name: 'Orthopedics', phone: '+91 98765 43215', ext: 'Mon-Sat: 8AM-5PM' },
    { name: 'Pediatrics', phone: '+91 98765 43216', ext: 'Mon-Sat: 9AM-6PM' },
    { name: 'Gynecology', phone: '+91 98765 43217', ext: 'Mon-Sat: 10AM-6PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help. Reach out to us for appointments, inquiries, or emergency care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Inquiry</option>
                    <option value="general">General Information</option>
                    <option value="billing">Billing Question</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                    <option value="emergency">Emergency</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Type your message here..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Department Contact & Map */}
          <div className="space-y-8">
            {/* Department Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Department Direct Lines</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">{dept.name}</h4>
                      <p className="text-sm text-gray-600">{dept.ext}</p>
                    </div>
                    <a
                      href={`tel:${dept.phone}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {dept.phone}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-lg p-8"
            >
              <div className="flex items-center mb-4">
                <Heart className="text-red-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-red-800">Emergency Contact</h3>
              </div>
              <p className="text-red-700 mb-4">
                For life-threatening emergencies, call our 24/7 emergency hotline immediately.
              </p>
              <a
                href="tel:+919876543211"
                className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Emergency: +91 98765 43211
              </a>
            </motion.div>

            {/* Location & Directions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">How to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Car className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">By Car</h4>
                    <p className="text-sm text-gray-600">
                      Ample parking available. Located near Bandra-Worli Sea Link.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Train className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">By Train</h4>
                    <p className="text-sm text-gray-600">
                      Bandra Station (5 mins walk) - Western & Harbor Line
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Bus className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">By Bus</h4>
                    <p className="text-sm text-gray-600">
                      BEST Bus routes: 211, 222, 255 - Bandra West stop
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us on Map</h2>
            <p className="text-gray-600">
              Located in the heart of Bandra West, easily accessible from all parts of Mumbai.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm">123 Health Street, Bandra West, Mumbai</p>
              <p className="text-sm mt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Hospital Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">General Services</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                  <p>Saturday: 6:00 AM - 10:00 PM</p>
                  <p>Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Services</h3>
                <div className="space-y-2 text-gray-600">
                  <p>24 Hours a Day</p>
                  <p>7 Days a Week</p>
                  <p>365 Days a Year</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pharmacy</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Sunday: 7:00 AM - 11:00 PM</p>
                  <p>Emergency Pharmacy: 24/7</p>
                  <p>Home Delivery Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;