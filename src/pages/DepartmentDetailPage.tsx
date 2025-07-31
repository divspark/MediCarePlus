import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Award, 
  Calendar,
  Users,
  Stethoscope,
  Building
} from 'lucide-react';
import { departments, doctors } from '../data/mockData';

const DepartmentDetailPage = () => {
  const { id } = useParams();
  const department = departments.find(d => d.id === parseInt(id || '0'));

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Not Found</h2>
          <Link to="/departments" className="text-blue-600 hover:text-blue-800">
            Back to Departments
          </Link>
        </div>
      </div>
    );
  }

  const departmentDoctors = doctors.filter(doctor => 
    department.doctors.includes(doctor.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
        >
          <div className="relative h-64 md:h-80">
            <img
              src={department.image}
              alt={department.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{department.name}</h1>
                  <p className="text-xl text-gray-200 max-w-3xl">{department.description}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Stethoscope className="mr-3 text-blue-600" size={24} />
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {department.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-3 bg-blue-50 rounded-lg"
                  >
                    <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Building className="mr-3 text-green-600" size={24} />
                Advanced Facilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {department.facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-3 bg-green-50 rounded-lg"
                  >
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{facility}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Doctors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="mr-3 text-purple-600" size={24} />
                Our Expert Doctors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {departmentDoctors.map((doctor, index) => (
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
                        <div className="flex items-center mt-1">
                          <Award className="text-yellow-500 mr-1" size={14} />
                          <span className="text-sm text-gray-600">{doctor.experience} years</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Star className="text-yellow-400 fill-current mr-1" size={14} />
                          <span className="text-sm text-gray-600">{doctor.rating}</span>
                        </div>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Department Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Services Offered</span>
                  <span className="font-semibold text-gray-800">{department.services.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Expert Doctors</span>
                  <span className="font-semibold text-gray-800">{departmentDoctors.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Advanced Facilities</span>
                  <span className="font-semibold text-gray-800">{department.facilities.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-semibold text-green-600">24/7</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Department</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>Department Reception: +91 98765 43210</p>
                <p>Emergency Line: +91 98765 43211</p>
                <p>Email: {department.name.toLowerCase()}@aarogyahospital.in</p>
              </div>
            </motion.div>

            {/* Book Appointment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-3">Book an Appointment</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Schedule a consultation with our {department.name.toLowerCase()} specialists.
              </p>
              <Link
                to="/appointment"
                className="block w-full bg-yellow-400 text-blue-900 text-center py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Emergency Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-red-50 border border-red-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-red-800 mb-3">Emergency Care</h3>
              <p className="text-red-700 text-sm mb-3">
                For emergency situations related to {department.name.toLowerCase()}, 
                please call our emergency hotline immediately.
              </p>
              <div className="bg-red-600 text-white text-center py-2 rounded-lg font-semibold">
                Emergency: +91 98765 43211
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gray-100 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Explore Other Departments
          </h2>
          <p className="text-gray-600 mb-6">
            Discover our comprehensive range of medical specialties and services.
          </p>
          <Link
            to="/departments"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View All Departments
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentDetailPage;