import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  DollarSign, 
  Clock, 
  User, 
  Settings,
  Bell,
  Search,
  Filter,
  MoreVertical,
  TrendingUp,
  Activity,
  Stethoscope,
  Heart,
  Award,
  Target
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Total Patients', value: '1,247', change: '+12%', icon: Users, color: 'from-blue-500 to-blue-600' },
    { title: 'Today\'s Appointments', value: '18', change: '+5%', icon: Calendar, color: 'from-green-500 to-green-600' },
    { title: 'Monthly Earnings', value: '₹2,45,000', change: '+18%', icon: DollarSign, color: 'from-purple-500 to-purple-600' },
    { title: 'Success Rate', value: '98.5%', change: '+2%', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
  ];

  const monthlyData = [
    { month: 'Jan', patients: 85, earnings: 180000 },
    { month: 'Feb', patients: 92, earnings: 195000 },
    { month: 'Mar', patients: 78, earnings: 165000 },
    { month: 'Apr', patients: 105, earnings: 225000 },
    { month: 'May', patients: 98, earnings: 210000 },
    { month: 'Jun', patients: 112, earnings: 245000 },
  ];

  const patientTypeData = [
    { name: 'New Patients', value: 35, color: '#3B82F6' },
    { name: 'Follow-ups', value: 45, color: '#10B981' },
    { name: 'Emergency', value: 15, color: '#F59E0B' },
    { name: 'Surgery', value: 5, color: '#EF4444' },
  ];

  const weeklyAppointments = [
    { day: 'Mon', appointments: 12 },
    { day: 'Tue', appointments: 15 },
    { day: 'Wed', appointments: 10 },
    { day: 'Thu', appointments: 14 },
    { day: 'Fri', appointments: 11 },
    { day: 'Sat', appointments: 8 },
    { day: 'Sun', appointments: 3 },
  ];

  const upcomingSurgeries = [
    { id: 1, patient: 'Rajesh Sharma', procedure: 'Cardiac Bypass', date: '2024-01-15', time: '09:00 AM', status: 'confirmed' },
    { id: 2, patient: 'Priya Patel', procedure: 'Angioplasty', date: '2024-01-16', time: '11:30 AM', status: 'confirmed' },
    { id: 3, patient: 'Amit Kumar', procedure: 'Valve Replacement', date: '2024-01-18', time: '02:00 PM', status: 'pending' },
  ];

  const patients = [
    { id: 1, name: 'Sunita Reddy', age: 45, disease: 'Hypertension', nextAppointment: '2024-01-15', status: 'stable', avatar: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 2, name: 'Vikram Singh', age: 52, disease: 'Diabetes', nextAppointment: '2024-01-16', status: 'critical', avatar: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 3, name: 'Meera Joshi', age: 38, disease: 'Cardiac Arrhythmia', nextAppointment: '2024-01-17', status: 'improving', avatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 4, name: 'Arjun Nair', age: 29, disease: 'Chest Pain', nextAppointment: '2024-01-18', status: 'stable', avatar: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  ];

  const timeTable = [
    { day: 'Monday', slots: ['09:00-12:00', '14:00-17:00'], patients: 12 },
    { day: 'Tuesday', slots: ['09:00-12:00', '14:00-17:00'], patients: 15 },
    { day: 'Wednesday', slots: ['09:00-12:00', '14:00-17:00'], patients: 10 },
    { day: 'Thursday', slots: ['09:00-12:00', '14:00-17:00'], patients: 14 },
    { day: 'Friday', slots: ['09:00-12:00', '14:00-17:00'], patients: 11 },
    { day: 'Saturday', slots: ['09:00-13:00'], patients: 8 },
    { day: 'Sunday', slots: ['Emergency Only'], patients: 3 },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'surgeries', label: 'Upcoming Surgeries', icon: Activity },
    { id: 'patients', label: 'My Patients', icon: Users },
    { id: 'timetable', label: 'Timetable', icon: Clock },
    { id: 'profile', label: 'Profile Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-medical-teal to-medical-ocean bg-clip-text text-transparent">
                  Hello, Dr. Rajesh Kumar
                </h1>
                <p className="text-secondary-600 mt-2">Welcome back to your dashboard</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-100">
                  <Bell size={20} className="text-secondary-600" />
                </button>
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
                      <p className="text-success-600 text-sm font-medium mt-1">{stat.change} from last month</p>
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-800">Monthly Performance</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-medical-teal rounded-full"></div>
                    <span className="text-sm text-secondary-600">Patients</span>
                  </div>
                </div>
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

              {/* Patient Distribution */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Patient Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={patientTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {patientTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {patientTypeData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-secondary-600">{item.name}</span>
                      <span className="text-sm font-semibold text-secondary-800">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Appointments & Today's Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Weekly Appointments Chart */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Weekly Appointments</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weeklyAppointments}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Bar 
                      dataKey="appointments" 
                      fill="url(#colorBar)" 
                      radius={[8, 8, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0891b2" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={1}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Today's Schedule */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Today's Schedule</h3>
                <div className="space-y-4">
                  {[
                    { time: '09:00 AM', patient: 'Sunita Reddy', type: 'Consultation', status: 'confirmed' },
                    { time: '10:30 AM', patient: 'Vikram Singh', type: 'Follow-up', status: 'confirmed' },
                    { time: '02:00 PM', patient: 'Meera Joshi', type: 'Surgery', status: 'pending' },
                    { time: '04:00 PM', patient: 'Arjun Nair', type: 'Consultation', status: 'confirmed' },
                  ].map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-xl flex items-center justify-center">
                          <Clock className="text-white" size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-secondary-800">{appointment.patient}</p>
                          <p className="text-secondary-600 text-sm">{appointment.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-medical-teal font-semibold">{appointment.time}</span>
                        <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                          appointment.status === 'confirmed' 
                            ? 'bg-success-100 text-success-700' 
                            : 'bg-accent-100 text-accent-700'
                        }`}>
                          {appointment.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'surgeries':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-secondary-800">Upcoming Surgeries</h1>
              <button className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 font-semibold">
                Schedule Surgery
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-secondary-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Procedure</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-100">
                    {upcomingSurgeries.map((surgery) => (
                      <tr key={surgery.id} className="hover:bg-secondary-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-secondary-800">{surgery.patient}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-secondary-600">{surgery.procedure}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-secondary-600">{surgery.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-secondary-600">{surgery.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            surgery.status === 'confirmed' 
                              ? 'bg-success-100 text-success-700' 
                              : 'bg-accent-100 text-accent-700'
                          }`}>
                            {surgery.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-secondary-400 hover:text-secondary-600 transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'patients':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-secondary-800">My Patients</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search patients..."
                    className="pl-10 pr-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <button className="p-3 border border-secondary-200 rounded-xl hover:bg-secondary-50 transition-colors shadow-soft">
                  <Filter size={20} className="text-secondary-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patients.map((patient, index) => (
                <motion.div
                  key={patient.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 border border-secondary-100"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-secondary-100"
                    />
                    <div>
                      <h3 className="font-bold text-secondary-800 text-lg">{patient.name}</h3>
                      <p className="text-secondary-600">Age: {patient.age}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600 font-medium">Condition:</span>
                      <span className="font-semibold text-secondary-800">{patient.disease}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600 font-medium">Next Visit:</span>
                      <span className="font-semibold text-secondary-800">{patient.nextAppointment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600 font-medium">Status:</span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        patient.status === 'stable' ? 'bg-success-100 text-success-700' :
                        patient.status === 'critical' ? 'bg-red-100 text-red-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {patient.status}
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-gradient-to-r from-medical-teal to-medical-ocean text-white py-3 rounded-xl hover:shadow-glow transition-all duration-300 font-semibold">
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'timetable':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-secondary-800">Weekly Timetable</h1>
              <button className="bg-gradient-to-r from-medical-teal to-medical-ocean text-white px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 font-semibold">
                Edit Schedule
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-secondary-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Day</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Time Slots</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Patients</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-100">
                    {timeTable.map((day, index) => (
                      <tr key={index} className="hover:bg-secondary-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-secondary-800">{day.day}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-1">
                            {day.slots.map((slot, i) => (
                              <span key={i} className="block text-secondary-600 bg-secondary-50 px-2 py-1 rounded text-sm">
                                {slot}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-secondary-800 font-semibold text-lg">{day.patients}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            day.patients > 12 ? 'bg-red-100 text-red-700' :
                            day.patients > 8 ? 'bg-accent-100 text-accent-700' :
                            'bg-success-100 text-success-700'
                          }`}>
                            {day.patients > 12 ? 'Busy' : day.patients > 8 ? 'Moderate' : 'Light'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-secondary-800">Profile Settings</h1>
            
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                    alt="Dr. Rajesh Kumar"
                    className="w-24 h-24 rounded-full object-cover border-4 border-secondary-100"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-800">Dr. Rajesh Kumar</h2>
                  <p className="text-medical-teal font-semibold text-lg">Senior Cardiologist</p>
                  <p className="text-secondary-600">15 years experience • MBBS, MD</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Dr. Rajesh Kumar"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Specialty</label>
                  <input
                    type="text"
                    defaultValue="Cardiology"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="rajesh.kumar@medicareplus.in"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Professional Bio</label>
                  <textarea
                    rows={4}
                    defaultValue="Dr. Rajesh Kumar is a leading cardiologist with over 15 years of experience in treating complex heart conditions. He specializes in interventional cardiology and has performed over 2000 successful procedures."
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
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
            <div className="bg-gradient-to-r from-medical-teal to-medical-ocean p-3 rounded-xl shadow-soft">
              <Stethoscope className="text-white" size={24} />
            </div>
            <div>
              <h2 className="font-bold text-secondary-800 text-lg">Doctor Portal</h2>
              <p className="text-secondary-600 text-sm">MediCare Plus</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-4 text-left hover:bg-medical-teal/5 transition-all duration-300 border-r-2 ${
                activeTab === item.id 
                  ? 'bg-medical-teal/10 border-medical-teal text-medical-teal font-semibold' 
                  : 'border-transparent text-secondary-600 hover:text-medical-teal'
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
    </div>
  );
};

export default DoctorDashboard;