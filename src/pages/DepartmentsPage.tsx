import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Stethoscope } from 'lucide-react';
import { departments, doctors } from '../data/mockData';

const DepartmentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Departments</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive healthcare services across multiple specialties with state-of-the-art facilities
            and expert medical professionals dedicated to your well-being.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => {
            const departmentDoctors = doctors.filter(doctor => 
              department.doctors.includes(doctor.id)
            );

            return (
              <motion.div
                key={department.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{department.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{department.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Stethoscope className="mr-2 text-blue-600" size={16} />
                      <span>{department.services.length} Services Available</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="mr-2 text-green-600" size={16} />
                      <span>{departmentDoctors.length} Expert Doctor{departmentDoctors.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {department.services.slice(0, 3).map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                      {department.services.length > 3 && (
                        <li className="text-blue-600 font-medium">
                          +{department.services.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>

                  <Link
                    to={`/departments/${department.id}`}
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing a Department?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our patient coordinators are here to help you find the right department and specialist 
            for your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/appointment"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentsPage;