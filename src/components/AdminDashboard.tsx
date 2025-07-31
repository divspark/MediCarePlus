import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Building, 
  Bed, 
  Settings,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Shield,
  TrendingUp,
  Activity,
  DollarSign,
  Calendar,
  Award
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const stats = [
    { title: 'Total Departments', value: '12', change: '+2', icon: Building, color: 'from-blue-500 to-blue-600' },
    { title: 'Total Wards', value: '25', change: '+3', icon: Bed, color: 'from-green-500 to-green-600' },
    { title: 'Total Doctors', value: '85', change: '+8', icon: Users, color: 'from-purple-500 to-purple-600' },
    { title: 'Total Patients', value: '1,247', change: '+45', icon: Activity, color: 'from-orange-500 to-orange-600' },
  ];

  const monthlyData = [
    { month: 'Jan', patients: 980, revenue: 2400000, doctors: 78 },
    { month: 'Feb', patients: 1050, revenue: 2650000, doctors: 80 },
    { month: 'Mar', patients: 890, revenue: 2200000, doctors: 82 },
    { month: 'Apr', patients: 1180, revenue: 2950000, doctors: 83 },
    { month: 'May', patients: 1120, revenue: 2800000, doctors: 85 },
    { month: 'Jun', patients: 1247, revenue: 3100000, doctors: 85 },
  ];

  const departmentData = [
    { name: 'Cardiology', patients: 25, color: '#3B82F6' },
    { name: 'Neurology', patients: 18, color: '#10B981' },
    { name: 'Orthopedics', patients: 22, color: '#F59E0B' },
    { name: 'Pediatrics', patients: 15, color: '#EF4444' },
    { name: 'Others', patients: 20, color: '#8B5CF6' },
  ];

  const occupancyData = [
    { ward: 'General', occupied: 85, total: 100 },
    { ward: 'ICU', occupied: 12, total: 15 },
    { ward: 'Pediatric', occupied: 16, total: 20 },
    { ward: 'Maternity', occupied: 18, total: 25 },
    { ward: 'Cardiac', occupied: 14, total: 18 },
  ];

  const departments = [
    { id: 1, name: 'Cardiology', head: 'Dr. Rajesh Kumar', doctors: 8, patients: 156, established: '1999' },
    { id: 2, name: 'Neurology', head: 'Dr. Priya Sharma', doctors: 6, patients: 98, established: '2005' },
    { id: 3, name: 'Orthopedics', head: 'Dr. Amit Patel', doctors: 10, patients: 203, established: '2001' },
    { id: 4, name: 'Pediatrics', head: 'Dr. Sunita Reddy', doctors: 7, patients: 145, established: '2003' },
    { id: 5, name: 'Radiology', head: 'Dr. Vikram Singh', doctors: 5, patients: 87, established: '2008' },
    { id: 6, name: 'Gynecology', head: 'Dr. Meera Joshi', doctors: 8, patients: 134, established: '2002' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Rajesh Kumar', specialty: 'Cardiology', experience: 15, patients: 156, rating: 4.9, status: 'active' },
    { id: 2, name: 'Dr. Priya Sharma', specialty: 'Neurology', experience: 12, patients: 98, rating: 4.8, status: 'active' },
    { id: 3, name: 'Dr. Amit Patel', specialty: 'Orthopedics', experience: 18, patients: 203, rating: 4.9, status: 'active' },
    { id: 4, name: 'Dr. Sunita Reddy', specialty: 'Pediatrics', experience: 10, patients: 145, rating: 4.7, status: 'active' },
    { id: 5, name: 'Dr. Vikram Singh', specialty: 'Radiology', experience: 14, patients: 87, rating: 4.8, status: 'active' },
    { id: 6, name: 'Dr. Meera Joshi', specialty: 'Gynecology', experience: 16, patients: 134, rating: 4.9, status: 'active' },
  ];

  const wards = [
    { id: 1, name: 'General Ward A', type: 'General', beds: 30, occupied: 25, amenities: ['AC', 'TV', 'WiFi'] },
    { id: 2, name: 'ICU Ward', type: 'Critical Care', beds: 15, occupied: 12, amenities: ['Ventilator', 'Monitor', 'AC'] },
    { id: 3, name: 'Pediatric Ward', type: 'Pediatric', beds: 20, occupied: 16, amenities: ['Play Area', 'AC', 'TV'] },
    { id: 4, name: 'Maternity Ward', type: 'Maternity', beds: 25, occupied: 18, amenities: ['Private Bath', 'AC', 'WiFi'] },
    { id: 5, name: 'Cardiac Ward', type: 'Cardiac', beds: 18, occupied: 14, amenities: ['Monitor', 'AC', 'WiFi'] },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Main Dashboard', icon: BarChart3 },
    { id: 'departments', label: 'Departments', icon: Building },
    { id: 'doctors', label: 'Doctors', icon: Users },
    { id: 'wards', label: 'Wards', icon: Bed },
    { id: 'profile', label: 'Admin Profile', icon: Settings },
  ];

  const openAddModal = (type: string) => {
    setModalType(type);
    setShowAddModal(true);
  };

  const renderModal = () => {
    if (!showAddModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-large"
        >
          <h3 className="text-2xl font-bold text-secondary-800 mb-6">
            Add New {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
          </h3>
          
          {modalType === 'department' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Department Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  placeholder="Enter department name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Department Head</label>
                <select className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft">
                  <option value="">Select Doctor</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Description</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  placeholder="Enter department description"
                />
              </div>
            </div>
          )}

          {modalType === 'doctor' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Specialty</label>
                <select className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft">
                  <option value="">Select Specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Experience (Years)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  placeholder="Years of experience"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  placeholder="doctor@email.com"
                />
              </div>
            </div>
          )}

          {modalType === 'ward' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Ward Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  placeholder="Enter ward name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Ward Type</label>
                <select className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft">
                  <option value="">Select Type</option>
                  <option value="general">General</option>
                  <option value="icu">ICU</option>
                  <option value="pediatric">Pediatric</option>
                  <option value="maternity">Maternity</option>
                  <option value="cardiac">Cardiac</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Number of Beds</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  placeholder="Number of beds"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">Amenities</label>
                <div className="grid grid-cols-2 gap-2">
                  {['AC', 'TV', 'WiFi', 'Private Bath', 'Monitor', 'Ventilator'].map(amenity => (
                    <label key={amenity} className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-sm">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={() => setShowAddModal(false)}
              className="px-6 py-3 border border-secondary-200 rounded-xl hover:bg-secondary-50 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowAddModal(false)}
              className="px-6 py-3 bg-gradient-to-r from-medical-teal to-medical-ocean text-white rounded-xl hover:shadow-glow transition-all duration-300 font-semibold"
            >
              Add {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-teal to-medical-ocean bg-clip-text text-transparent">
                  Hospital Administration
                </h1>
                <p className="text-secondary-600 mt-2">Overview of MediCare Plus operations</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-secondary-600 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-secondary-800 mt-1">{stat.value}</p>
                      <p className="text-success-600 text-sm font-medium mt-1">{stat.change} this month</p>
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-soft`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Monthly Performance */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Monthly Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="patients" 
                      stroke="#14b8a6" 
                      fill="url(#colorPatients)" 
                      strokeWidth={3}
                    />
                    <defs>
                      <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Department Distribution */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Department Patient Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="patients"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {departmentData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-secondary-600">{item.name}</span>
                      <span className="text-sm font-semibold text-secondary-800">{item.patients}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue & Ward Occupancy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Monthly Revenue</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
                      }} 
                      formatter={(value) => [`₹${(value / 100000).toFixed(1)}L`, 'Revenue']}
                    />
                    <Bar 
                      dataKey="revenue" 
                      fill="url(#colorRevenue)" 
                      radius={[8, 8, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={1}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Ward Occupancy */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Ward Occupancy</h3>
                <div className="space-y-4">
                  {occupancyData.map((ward, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-secondary-800">{ward.ward} Ward</p>
                        <p className="text-secondary-600 text-sm">{ward.occupied}/{ward.total} beds</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-secondary-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              (ward.occupied / ward.total) > 0.8 ? 'bg-red-500' :
                              (ward.occupied / ward.total) > 0.6 ? 'bg-accent-500' : 'bg-success-500'
                            }`}
                            style={{ width: `${(ward.occupied / ward.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-secondary-800">
                          {Math.round((ward.occupied / ward.total) * 100)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'departments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-secondary-800">Departments</h1>
              <button
                onClick={() => openAddModal('department')}
                className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 flex items-center font-semibold"
              >
                <Plus className="mr-2" size={20} />
                Add Department
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 border border-secondary-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-secondary-800">{dept.name}</h3>
                    <button className="text-secondary-400 hover:text-secondary-600 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-secondary-600 font-medium">Department Head:</span>
                      <span className="font-semibold text-secondary-800">{dept.head}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600 font-medium">Doctors:</span>
                      <span className="font-semibold text-secondary-800">{dept.doctors}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600 font-medium">Patients:</span>
                      <span className="font-semibold text-secondary-800">{dept.patients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600 font-medium">Established:</span>
                      <span className="font-semibold text-secondary-800">{dept.established}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-6">
                    <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center font-medium">
                      <Edit size={16} className="mr-1" />
                      Edit
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center font-medium">
                      <Trash2 size={16} className="mr-1" />
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'doctors':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-secondary-800">Doctors</h1>
              <button
                onClick={() => openAddModal('doctor')}
                className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 flex items-center font-semibold"
              >
                <Plus className="mr-2" size={20} />
                Add Doctor
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-secondary-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Specialty</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Experience</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Patients</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-100">
                    {doctors.map((doctor) => (
                      <tr key={doctor.id} className="hover:bg-secondary-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-secondary-800">{doctor.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-secondary-600">{doctor.specialty}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-secondary-600">{doctor.experience} years</td>
                        <td className="px-6 py-4 whitespace-nowrap text-secondary-600">{doctor.patients}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-secondary-800 font-medium">{doctor.rating}</span>
                            <div className="flex ml-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-3 h-3 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-secondary-300'}`}>
                                  ★
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-700">
                            {doctor.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                              <Edit size={16} />
                            </button>
                            <button className="text-red-600 hover:text-red-800 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'wards':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-secondary-800">Wards</h1>
              <button
                onClick={() => openAddModal('ward')}
                className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 flex items-center font-semibold"
              >
                <Plus className="mr-2" size={20} />
                Add Ward
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wards.map((ward, index) => (
                <motion.div
                  key={ward.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 border border-secondary-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-secondary-800">{ward.name}</h3>
                    <button className="text-secondary-400 hover:text-secondary-600 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-secondary-600 font-medium">Type:</span>
                      <span className="font-semibold text-secondary-800">{ward.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600 font-medium">Occupancy:</span>
                      <span className="font-semibold text-secondary-800">{ward.occupied}/{ward.beds}</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          (ward.occupied / ward.beds) > 0.8 ? 'bg-red-500' :
                          (ward.occupied / ward.beds) > 0.6 ? 'bg-accent-500' : 'bg-success-500'
                        }`}
                        style={{ width: `${(ward.occupied / ward.beds) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-secondary-600 text-sm font-medium mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-1">
                      {ward.amenities.map((amenity, i) => (
                        <span key={i} className="text-xs bg-medical-teal/10 text-medical-teal px-2 py-1 rounded-lg font-medium">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center font-medium">
                      <Edit size={16} className="mr-1" />
                      Edit
                    </button>
                    <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center font-medium">
                      <Trash2 size={16} className="mr-1" />
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-secondary-800">Admin Profile Settings</h1>
            
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-soft">
                    <Shield className="text-white" size={32} />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-full flex items-center justify-center">
                    <Award className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-800">Admin User</h2>
                  <p className="text-purple-600 font-semibold text-lg">Hospital Administrator</p>
                  <p className="text-secondary-600">MediCare Plus Healthcare</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Role</label>
                  <input
                    type="text"
                    defaultValue="Hospital Administrator"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="admin@medicareplus.in"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibarts text-secondary-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43200"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent shadow-soft"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-8 py-3 rounded-xl hover:shadow-glow transition-all duration-300 font-semibold">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-large border-r border-secondary-100">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-xl shadow-soft">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h2 className="font-bold text-secondary-800 text-lg">Admin Portal</h2>
              <p className="text-secondary-600 text-sm">MediCare Plus</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-4 text-left hover:bg-purple-600/5 transition-all duration-300 border-r-2 ${
                activeTab === item.id 
                  ? 'bg-purple-600/10 border-purple-600 text-purple-600 font-semibold' 
                  : 'border-transparent text-secondary-600 hover:text-purple-600'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>

      {/* Modal */}
      {renderModal()}
    </div>
  );
};

export default AdminDashboard;