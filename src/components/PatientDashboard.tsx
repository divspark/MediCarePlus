import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Settings,
  Bell,
  Pill,
  FileText,
  Heart,
  Activity,
  Download,
  Eye,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const healthData = [
    { date: 'Jan 1', bloodPressure: 120, heartRate: 72, weight: 68.5 },
    { date: 'Jan 8', bloodPressure: 118, heartRate: 75, weight: 68.2 },
    { date: 'Jan 15', bloodPressure: 122, heartRate: 70, weight: 68.0 },
    { date: 'Jan 22', bloodPressure: 119, heartRate: 73, weight: 67.8 },
    { date: 'Jan 29', bloodPressure: 121, heartRate: 71, weight: 67.5 },
    { date: 'Feb 5', bloodPressure: 120, heartRate: 72, weight: 67.3 },
  ];

  const medicationData = [
    { name: 'Morning', taken: 85, missed: 15 },
    { name: 'Afternoon', taken: 78, missed: 22 },
    { name: 'Evening', taken: 92, missed: 8 },
    { name: 'Night', taken: 88, missed: 12 },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Rajesh Kumar', specialty: 'Cardiology', date: '2024-01-15', time: '10:00 AM', type: 'Follow-up', status: 'confirmed' },
    { id: 2, doctor: 'Dr. Priya Sharma', specialty: 'Neurology', date: '2024-01-18', time: '2:00 PM', type: 'Consultation', status: 'pending' },
    { id: 3, doctor: 'Dr. Amit Patel', specialty: 'Orthopedics', date: '2024-01-22', time: '11:30 AM', type: 'Check-up', status: 'confirmed' },
  ];

  const medications = [
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', time: ['8:00 AM', '8:00 PM'], remaining: 15, adherence: 95 },
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', time: ['9:00 AM'], remaining: 28, adherence: 88 },
    { name: 'Aspirin', dosage: '75mg', frequency: 'Once daily', time: ['9:00 AM'], remaining: 22, adherence: 92 },
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', icon: Heart, trend: 'stable' },
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', icon: Activity, trend: 'stable' },
    { label: 'Weight', value: '67.3', unit: 'kg', status: 'normal', icon: User, trend: 'down' },
    { label: 'Blood Sugar', value: '95', unit: 'mg/dL', status: 'normal', icon: Pill, trend: 'stable' },
  ];

  const recentReports = [
    { id: 1, name: 'Blood Test Report', date: '2024-01-10', doctor: 'Dr. Rajesh Kumar', type: 'Lab Report', status: 'Normal' },
    { id: 2, name: 'ECG Report', date: '2024-01-08', doctor: 'Dr. Rajesh Kumar', type: 'Diagnostic', status: 'Normal' },
    { id: 3, name: 'X-Ray Chest', date: '2024-01-05', doctor: 'Dr. Priya Sharma', type: 'Imaging', status: 'Normal' },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
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
                  Welcome back, Sunita!
                </h1>
                <p className="text-secondary-600 mt-2">Here's your health overview for today</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-100 relative">
                  <Bell size={20} className="text-secondary-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </button>
              </div>
            </div>

            {/* Health Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-xl flex items-center justify-center shadow-soft">
                      <metric.icon className="text-white" size={20} />
                    </div>
                    <div className={`flex items-center space-x-1 ${
                      metric.trend === 'up' ? 'text-success-600' : 
                      metric.trend === 'down' ? 'text-blue-600' : 'text-secondary-500'
                    }`}>
                      <TrendingUp size={16} className={metric.trend === 'down' ? 'rotate-180' : ''} />
                    </div>
                  </div>
                  <div>
                    <p className="text-secondary-600 text-sm font-medium">{metric.label}</p>
                    <p className="text-2xl font-bold text-secondary-800 mt-1">{metric.value}</p>
                    <p className="text-secondary-500 text-sm">{metric.unit}</p>
                  </div>
                  <div className="mt-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-700">
                      {metric.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Health Trends */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Health Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="bloodPressure" 
                      stroke="#14b8a6" 
                      strokeWidth={3}
                      dot={{ fill: '#14b8a6', strokeWidth: 2, r: 4 }}
                      name="Blood Pressure"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="heartRate" 
                      stroke="#0891b2" 
                      strokeWidth={3}
                      dot={{ fill: '#0891b2', strokeWidth: 2, r: 4 }}
                      name="Heart Rate"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Medication Adherence */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">Medication Adherence</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={medicationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Bar dataKey="taken" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                    <Bar dataKey="missed" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                    <span className="text-sm text-secondary-600">Taken</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-secondary-600">Missed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-800 flex items-center">
                    <Calendar className="mr-3 text-medical-teal" size={24} />
                    Upcoming Appointments
                  </h3>
                  <button className="text-medical-teal hover:text-medical-ocean text-sm font-semibold transition-colors">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-secondary-100 rounded-xl p-4 hover:shadow-soft transition-all duration-300 bg-secondary-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-medical-teal to-medical-ocean rounded-xl flex items-center justify-center">
                            <User className="text-white" size={16} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-secondary-800">{appointment.doctor}</h4>
                            <p className="text-medical-teal text-sm font-medium">{appointment.specialty}</p>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-secondary-600">
                              <span className="flex items-center">
                                <Calendar size={12} className="mr-1" />
                                {appointment.date}
                              </span>
                              <span className="flex items-center">
                                <Clock size={12} className="mr-1" />
                                {appointment.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            appointment.status === 'confirmed' 
                              ? 'bg-success-100 text-success-700' 
                              : 'bg-accent-100 text-accent-700'
                          }`}>
                            {appointment.status}
                          </span>
                          <p className="text-secondary-600 text-sm mt-1">{appointment.type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Medications */}
              <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-secondary-800 flex items-center">
                    <Pill className="mr-3 text-success-600" size={24} />
                    Current Medications
                  </h3>
                  <button className="text-medical-teal hover:text-medical-ocean text-sm font-semibold transition-colors">
                    Manage
                  </button>
                </div>
                <div className="space-y-4">
                  {medications.map((med, index) => (
                    <div key={index} className="border border-secondary-100 rounded-xl p-4 bg-secondary-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-secondary-800">{med.name}</h4>
                          <p className="text-secondary-600 text-sm">{med.dosage} - {med.frequency}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-secondary-600 text-sm">Remaining</p>
                          <p className="font-semibold text-secondary-800">{med.remaining} pills</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {med.time.map((time, i) => (
                            <span key={i} className="text-xs bg-medical-teal/10 text-medical-teal px-2 py-1 rounded-lg font-medium">
                              {time}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-secondary-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-success-500 to-success-600 h-2 rounded-full"
                              style={{ width: `${med.adherence}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-semibold text-success-600">{med.adherence}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-2xl shadow-soft p-6 border border-secondary-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-secondary-800 flex items-center">
                  <FileText className="mr-3 text-purple-600" size={24} />
                  Recent Reports
                </h3>
                <button className="text-medical-teal hover:text-medical-ocean text-sm font-semibold transition-colors">
                  View All Reports
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider rounded-l-lg">Report Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Doctor</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider rounded-r-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-100">
                    {recentReports.map((report) => (
                      <tr key={report.id} className="hover:bg-secondary-50 transition-colors">
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="font-semibold text-secondary-800">{report.name}</div>
                          <div className="text-sm text-secondary-600">{report.type}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-secondary-600">{report.date}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-secondary-600">{report.doctor}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-700">
                            {report.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <button className="text-medical-teal hover:text-medical-ocean transition-colors">
                              <Eye size={16} />
                            </button>
                            <button className="text-success-600 hover:text-success-700 transition-colors">
                              <Download size={16} />
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

      case 'profile':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-secondary-800">Profile Settings</h1>
            
            <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                    alt="Sunita Reddy"
                    className="w-24 h-24 rounded-full object-cover border-4 border-secondary-100"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-success-500 to-success-600 rounded-full flex items-center justify-center">
                    <User className="text-white" size={16} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-800">Sunita Reddy</h2>
                  <p className="text-secondary-600 font-medium">Patient ID: PAT001</p>
                  <p className="text-secondary-600">Age: 45 years • Blood Group: O+</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Sunita Reddy"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    defaultValue="1978-05-15"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="sunita.reddy@email.com"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43213"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Blood Group</label>
                  <select className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft">
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Emergency Contact</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43214"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Address</label>
                  <textarea
                    rows={3}
                    defaultValue="123 Health Street, Bandra West, Mumbai, Maharashtra 400050"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-medical-teal focus:border-transparent bg-white shadow-soft"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Medical History</label>
                  <textarea
                    rows={4}
                    defaultValue="Hypertension diagnosed in 2020. Family history of diabetes. No known allergies."
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
            <div className="bg-gradient-to-r from-success-500 to-success-600 p-3 rounded-xl shadow-soft">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h2 className="font-bold text-secondary-800 text-lg">Patient Portal</h2>
              <p className="text-secondary-600 text-sm">MediCare Plus</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-4 text-left hover:bg-success-500/5 transition-all duration-300 border-r-2 ${
                activeTab === item.id 
                  ? 'bg-success-500/10 border-success-500 text-success-600 font-semibold' 
                  : 'border-transparent text-secondary-600 hover:text-success-600'
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

export default PatientDashboard;