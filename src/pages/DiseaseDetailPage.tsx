import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Shield, Users, Calendar, CheckCircle, Heart, Brain, Bone, Eye, Settings as Lungs } from 'lucide-react';
import { diseases, doctors } from '../data/mockData';

const DiseaseDetailPage = () => {
  const { id } = useParams();
  const disease = diseases.find(d => d.id === parseInt(id || '0'));

  if (!disease) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Condition Not Found</h2>
          <Link to="/diseases" className="text-blue-600 hover:text-blue-800">
            Back to Health Conditions
          </Link>
        </div>
      </div>
    );
  }

  const categoryIcons: { [key: string]: any } = {
    'Cardiovascular': Heart,
    'Neurological': Brain,
    'Musculoskeletal': Bone,
    'Respiratory': Lungs,
    'Mental Health': Brain,
    'Endocrine': Users,
  };

  const Icon = categoryIcons[disease.category] || Users;

  const availableSpecialists = doctors.filter(doctor => 
    disease.specialists.includes(doctor.name)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/diseases"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Health Conditions
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
        >
          <div className="relative h-64 md:h-80">
            <img
              src={disease.image}
              alt={disease.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                      <Icon className="text-white" size={20} />
                      <span className="text-white font-medium">{disease.category}</span>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{disease.name}</h1>
                  <p className="text-xl text-gray-200 max-w-3xl">{disease.description}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Symptoms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <AlertTriangle className="mr-3 text-red-500" size={24} />
                Symptoms & Warning Signs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {disease.symptoms.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-3 bg-red-50 rounded-lg border border-red-100"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Important:</strong> If you experience any of these symptoms, especially if they're severe 
                  or persistent, please consult with a healthcare professional promptly.
                </p>
              </div>
            </motion.div>

            {/* Treatments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Shield className="mr-3 text-green-600" size={24} />
                Treatment Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {disease.treatments.map((treatment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-3 bg-green-50 rounded-lg border border-green-100"
                  >
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-700">{treatment}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Treatment plans are individualized based on your specific condition, 
                  medical history, and other factors. Always consult with our specialists for personalized care.
                </p>
              </div>
            </motion.div>

            {/* Available Specialists */}
            {availableSpecialists.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="mr-3 text-purple-600" size={24} />
                  Our Specialists
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableSpecialists.map((doctor, index) => (
                    <motion.div
                      key={doctor.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                          <p className="text-blue-600 text-sm">{doctor.specialty}</p>
                          <p className="text-gray-600 text-sm">{doctor.experience} years experience</p>
                          <p className="text-gray-600 text-sm">₹{doctor.consultationFee} consultation</p>
                          <div className="flex space-x-2 mt-3">
                            <Link
                              to={`/doctors/${doctor.id}`}
                              className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                            >
                              View Profile
                            </Link>
                            <Link
                              to="/appointment"
                              state={{ doctorId: doctor.id }}
                              className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                            >
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-gray-800 flex items-center">
                    <Icon className="mr-1" size={16} />
                    {disease.category}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Departments</span>
                  <span className="font-semibold text-gray-800">{disease.departments.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Specialists Available</span>
                  <span className="font-semibold text-gray-800">{availableSpecialists.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Emergency Care</span>
                  <span className="font-semibold text-green-600">Available 24/7</span>
                </div>
              </div>
            </motion.div>

            {/* Related Departments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Departments</h3>
              <div className="space-y-2">
                {disease.departments.map((department, index) => (
                  <Link
                    key={index}
                    to="/departments"
                    className="block p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                  >
                    {department}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-red-50 border border-red-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-red-800 mb-3">Emergency Care</h3>
              <p className="text-red-700 text-sm mb-4">
                If you're experiencing severe symptoms or a medical emergency, 
                call our emergency hotline immediately.
              </p>
              <a
                href="tel:+919876543211"
                className="block w-full bg-red-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Emergency: +91 98765 43211
              </a>
            </motion.div>

            {/* Book Appointment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-3">Schedule a Consultation</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get expert medical advice and personalized treatment plans from our specialists.
              </p>
              <Link
                to="/appointment"
                className="block w-full bg-yellow-400 text-blue-900 text-center py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
              >
                <Calendar className="mr-2" size={16} />
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetailPage;