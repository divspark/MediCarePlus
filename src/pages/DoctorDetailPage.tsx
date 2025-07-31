import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Calendar, 
  Award, 
  Languages, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  GraduationCap,
  CheckCircle
} from 'lucide-react';
import { doctors } from '../data/mockData';

const DoctorDetailPage = () => {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id || '0'));

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h2>
          <Link to="/doctors" className="text-blue-600 hover:text-blue-800">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  const availabilityDays = Object.entries(doctor.availability).map(([day, hours]) => ({
    day: day.charAt(0).toUpperCase() + day.slice(1),
    time: hours ? `${hours[0]} - ${hours[1]}` : 'Closed'
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-96 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                  <div className="flex items-center mb-2">
                    <Award className="text-yellow-500 mr-2" size={20} />
                    <span className="text-gray-600">{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="text-gray-400 mr-2" size={20} />
                    <span className="text-gray-600">Aarogya Hospital, Mumbai</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-400 fill-current mr-1" size={20} />
                    <span className="text-lg font-semibold">{doctor.rating}</span>
                    <span className="text-gray-600 ml-1">(150+ reviews)</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">₹{doctor.consultationFee}</p>
                  <p className="text-sm text-gray-600">Consultation Fee</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg">
                  <Languages className="text-blue-600 mr-2" size={16} />
                  <span className="text-sm text-blue-800">{doctor.languages.join(', ')}</span>
                </div>
                <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg">
                  <Clock className="text-green-600 mr-2" size={16} />
                  <span className="text-sm text-green-800">Available Today</span>
                </div>
              </div>

              <Link
                to="/appointment"
                state={{ doctorId: doctor.id }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center font-semibold"
              >
                <Calendar className="mr-2" size={20} />
                Book Appointment
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Dr. {doctor.name.split(' ')[1]}</h2>
              <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <GraduationCap className="mr-2 text-blue-600" size={24} />
                Education & Qualifications
              </h2>
              <p className="text-gray-600">{doctor.education}</p>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="mr-2 text-yellow-500" size={24} />
                Awards & Recognition
              </h2>
              <ul className="space-y-2">
                {doctor.awards.map((award, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                    {award}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="mr-2 text-blue-600" size={20} />
                Availability
              </h3>
              <div className="space-y-3">
                {availabilityDays.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">{item.day}</span>
                    <span className="text-gray-800">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-3" size={18} />
                  <span className="text-gray-600">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={18} />
                  <span className="text-gray-600">info@aarogyahospital.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-3" size={18} />
                  <span className="text-gray-600">
                    123 Health Street, Bandra West<br />
                    Mumbai, Maharashtra 400050
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Book Appointment Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
              <p className="mb-4 text-blue-100">
                Schedule your consultation with Dr. {doctor.name.split(' ')[1]} today.
              </p>
              <Link
                to="/appointment"
                state={{ doctorId: doctor.id }}
                className="block w-full bg-yellow-400 text-blue-900 text-center py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Book Appointment Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailPage;