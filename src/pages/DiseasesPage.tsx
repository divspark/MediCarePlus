import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Heart, Brain, Bone, Eye, Settings as Lungs, Users } from 'lucide-react';
import { diseases } from '../data/mockData';

const DiseasesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(diseases.map(disease => disease.category)));

  const categoryIcons: { [key: string]: any } = {
    'Cardiovascular': Heart,
    'Neurological': Brain,
    'Musculoskeletal': Bone,
    'Respiratory': Lungs,
    'Mental Health': Brain,
    'Endocrine': Users,
  };

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || disease.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Health Conditions & Diseases</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive information about various health conditions, their symptoms, and treatment options 
            available at our medical center.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search diseases or conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {categories.map((category, index) => {
            const Icon = categoryIcons[category] || Users;
            const categoryCount = diseases.filter(d => d.category === category).length;
            
            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <Icon className="mx-auto mb-2" size={24} />
                <h3 className="font-semibold text-sm">{category}</h3>
                <p className="text-xs text-gray-600">{categoryCount} condition{categoryCount !== 1 ? 's' : ''}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDiseases.length} condition{filteredDiseases.length !== 1 ? 's' : ''}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Diseases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDiseases.map((disease, index) => {
            const Icon = categoryIcons[disease.category] || Users;
            
            return (
              <motion.div
                key={disease.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={disease.image}
                    alt={disease.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Icon className="text-blue-600" size={16} />
                    <span className="text-sm font-medium text-gray-700">{disease.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{disease.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{disease.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">Key Symptoms:</h4>
                      <ul className="text-sm text-gray-600">
                        {disease.symptoms.slice(0, 2).map((symptom, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {symptom}
                          </li>
                        ))}
                        {disease.symptoms.length > 2 && (
                          <li className="text-blue-600 font-medium text-sm">
                            +{disease.symptoms.length - 2} more symptoms
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">Available Specialists:</h4>
                      <div className="flex flex-wrap gap-1">
                        {disease.departments.slice(0, 2).map((dept, i) => (
                          <span key={i} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            {dept}
                          </span>
                        ))}
                        {disease.departments.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{disease.departments.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/diseases/${disease.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredDiseases.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No conditions found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter</p>
          </motion.div>
        )}

        {/* Emergency Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-red-50 border border-red-200 rounded-lg p-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Medical Emergency?</h2>
            <p className="text-red-700 mb-6">
              If you're experiencing a medical emergency, don't search for information online. 
              Call our emergency hotline immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543211"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Emergency: +91 98765 43211
              </a>
              <Link
                to="/contact"
                className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Contact Hospital
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiseasesPage;