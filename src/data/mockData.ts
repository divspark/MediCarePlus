export const doctors = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    specialty: 'Cardiology',
    department: 'Cardiology',
    experience: 15,
    education: 'MBBS, MD (Cardiology), Fellowship in Interventional Cardiology',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.9,
    consultationFee: 1500,
    languages: ['Hindi', 'English', 'Marathi'],
    awards: ['Best Cardiologist Award 2023', 'Excellence in Healthcare 2022'],
    about: 'Dr. Rajesh Kumar is a leading cardiologist with over 15 years of experience in treating complex heart conditions. He specializes in interventional cardiology and has performed over 2000 successful procedures.',
    availability: {
      monday: ['09:00', '17:00'],
      tuesday: ['09:00', '17:00'],
      wednesday: ['09:00', '17:00'],
      thursday: ['09:00', '17:00'],
      friday: ['09:00', '17:00'],
      saturday: ['09:00', '13:00'],
    }
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Neurology',
    department: 'Neurology',
    experience: 12,
    education: 'MBBS, MD (Neurology), Fellowship in Movement Disorders',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.8,
    consultationFee: 1200,
    languages: ['Hindi', 'English'],
    awards: ['Neurologist of the Year 2023', 'Research Excellence Award 2021'],
    about: 'Dr. Priya Sharma is an expert neurologist specializing in movement disorders, epilepsy, and stroke care. She has published numerous research papers and is actively involved in medical education.',
    availability: {
      monday: ['10:00', '18:00'],
      tuesday: ['10:00', '18:00'],
      wednesday: ['10:00', '18:00'],
      thursday: ['10:00', '18:00'],
      friday: ['10:00', '18:00'],
      saturday: ['10:00', '14:00'],
    }
  },
  {
    id: 3,
    name: 'Dr. Amit Patel',
    specialty: 'Orthopedic Surgery',
    department: 'Orthopedics',
    experience: 18,
    education: 'MBBS, MS (Orthopedics), Fellowship in Joint Replacement',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.9,
    consultationFee: 1800,
    languages: ['Hindi', 'English', 'Gujarati'],
    awards: ['Best Orthopedic Surgeon 2023', 'Innovation in Surgery Award 2022'],
    about: 'Dr. Amit Patel is a renowned orthopedic surgeon with expertise in joint replacement, sports injuries, and spine surgery. He has successfully performed over 3000 surgeries.',
    availability: {
      monday: ['08:00', '16:00'],
      tuesday: ['08:00', '16:00'],
      wednesday: ['08:00', '16:00'],
      thursday: ['08:00', '16:00'],
      friday: ['08:00', '16:00'],
      saturday: ['08:00', '12:00'],
    }
  },
  {
    id: 4,
    name: 'Dr. Sunita Reddy',
    specialty: 'Pediatrics',
    department: 'Pediatrics',
    experience: 10,
    education: 'MBBS, MD (Pediatrics), Fellowship in Pediatric Cardiology',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.7,
    consultationFee: 1000,
    languages: ['Hindi', 'English', 'Telugu'],
    awards: ['Child Care Excellence Award 2023'],
    about: 'Dr. Sunita Reddy is a dedicated pediatrician with special interest in newborn care, child development, and pediatric cardiology. She is known for her gentle approach with children.',
    availability: {
      monday: ['09:00', '17:00'],
      tuesday: ['09:00', '17:00'],
      wednesday: ['09:00', '17:00'],
      thursday: ['09:00', '17:00'],
      friday: ['09:00', '17:00'],
      saturday: ['09:00', '13:00'],
    }
  },
  {
    id: 5,
    name: 'Dr. Vikram Singh',
    specialty: 'Radiology',
    department: 'Radiology',
    experience: 14,
    education: 'MBBS, MD (Radiology), Fellowship in Interventional Radiology',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.8,
    consultationFee: 1300,
    languages: ['Hindi', 'English', 'Punjabi'],
    awards: ['Excellence in Diagnostic Imaging 2022'],
    about: 'Dr. Vikram Singh is an experienced radiologist specializing in diagnostic imaging, interventional procedures, and advanced imaging techniques. He has expertise in all modern imaging modalities.',
    availability: {
      monday: ['09:00', '17:00'],
      tuesday: ['09:00', '17:00'],
      wednesday: ['09:00', '17:00'],
      thursday: ['09:00', '17:00'],
      friday: ['09:00', '17:00'],
      saturday: ['09:00', '13:00'],
    }
  },
  {
    id: 6,
    name: 'Dr. Meera Joshi',
    specialty: 'Gynecology',
    department: 'Gynecology',
    experience: 16,
    education: 'MBBS, MD (Gynecology & Obstetrics), Fellowship in Laparoscopic Surgery',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    rating: 4.9,
    consultationFee: 1400,
    languages: ['Hindi', 'English', 'Marathi'],
    awards: ['Women\'s Health Champion 2023', 'Surgical Excellence Award 2021'],
    about: 'Dr. Meera Joshi is a leading gynecologist with expertise in high-risk pregnancies, minimally invasive surgery, and reproductive health. She has delivered over 2500 babies safely.',
    availability: {
      monday: ['10:00', '18:00'],
      tuesday: ['10:00', '18:00'],
      wednesday: ['10:00', '18:00'],
      thursday: ['10:00', '18:00'],
      friday: ['10:00', '18:00'],
      saturday: ['10:00', '14:00'],
    }
  }
];

export const departments = [
  {
    id: 1,
    name: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment facilities',
    image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    services: [
      'ECG & 2D Echo',
      'Cardiac Catheterization',
      'Angioplasty',
      'Pacemaker Implantation',
      'Heart Surgery',
      'Cardiac Rehabilitation'
    ],
    facilities: [
      'State-of-the-art Cath Lab',
      '24/7 Cardiac Emergency',
      'Advanced Monitoring Systems',
      'Cardiac ICU',
      'Non-invasive Cardiology Lab'
    ],
    doctors: [1]
  },
  {
    id: 2,
    name: 'Neurology',
    description: 'Advanced neurological care for brain, spine and nervous system disorders',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    services: [
      'Brain MRI & CT Scan',
      'EEG & EMG',
      'Stroke Treatment',
      'Epilepsy Management',
      'Movement Disorder Treatment',
      'Neurological Rehabilitation'
    ],
    facilities: [
      'Advanced Neuroimaging',
      'Stroke Unit',
      'Neuro ICU',
      'Epilepsy Monitoring Unit',
      'Neurophysiology Lab'
    ],
    doctors: [2]
  },
  {
    id: 3,
    name: 'Orthopedics',
    description: 'Expert care for bones, joints, muscles and spine conditions',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    services: [
      'Joint Replacement Surgery',
      'Arthroscopic Surgery',
      'Spine Surgery',
      'Sports Injury Treatment',
      'Fracture Care',
      'Physical Therapy'
    ],
    facilities: [
      'Modern Operation Theaters',
      'Digital X-ray',
      'Physiotherapy Unit',
      'Sports Medicine Center',
      'Orthopedic ICU'
    ],
    doctors: [3]
  },
  {
    id: 4,
    name: 'Pediatrics',
    description: 'Comprehensive healthcare for infants, children and adolescents',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    services: [
      'Newborn Care',
      'Vaccination Programs',
      'Growth Monitoring',
      'Pediatric Emergency',
      'Child Development Assessment',
      'Adolescent Healthcare'
    ],
    facilities: [
      'NICU',
      'Pediatric ICU',
      'Child-Friendly Environment',
      'Specialized Pediatric Equipment',
      'Play Therapy Room'
    ],
    doctors: [4]
  },
  {
    id: 5,
    name: 'Ophthalmology',
    description: 'Advanced diagnostic imaging & radiology services',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    services: [
      'Digital X-Ray',
      'CT Scan',
      'MRI Imaging',
      'Ultrasound',
      'Mammography',
      'Nuclear Medicine'
    ],
    facilities: [
      'Digital Imaging Systems',
      '3T MRI Machine',
      '128-Slice CT Scanner',
      'Digital Mammography',
      'PACS System'
    ],
    doctors: [5]
  },
  {
    id: 6,
    name: 'Gynecology',
    description: 'Women\'s health services including maternity and reproductive care',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    services: [
      'Prenatal Care',
      'Normal & Cesarean Delivery',
      'Gynecological Surgery',
      'Infertility Treatment',
      'Menopause Management',
      'Cancer Screening'
    ],
    facilities: [
      'Modern Labor Rooms',
      'Neonatal Care Unit',
      'Laparoscopy Center',
      'Ultrasound Facility',
      'Women\'s Wellness Center'
    ],
    doctors: [6]
  }
];

export const diseases = [
  {
    id: 1,
    name: 'Diabetes',
    category: 'Endocrine',
    description: 'A group of metabolic disorders characterized by high blood sugar levels',
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    symptoms: [
      'Increased thirst and urination',
      'Unexplained weight loss',
      'Fatigue and weakness',
      'Blurred vision',
      'Slow healing wounds'
    ],
    treatments: [
      'Blood sugar monitoring',
      'Insulin therapy',
      'Oral medications',
      'Diet modification',
      'Regular exercise',
      'Lifestyle counseling'
    ],
    departments: ['Endocrinology', 'Internal Medicine'],
    specialists: ['Dr. Rajesh Kumar']
  },
  {
    id: 2,
    name: 'Hypertension',
    category: 'Cardiovascular',
    description: 'High blood pressure that can lead to serious health complications',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    symptoms: [
      'Often no symptoms (silent killer)',
      'Headaches',
      'Dizziness',
      'Chest pain',
      'Shortness of breath'
    ],
    treatments: [
      'Blood pressure monitoring',
      'Antihypertensive medications',
      'Low sodium diet',
      'Regular exercise',
      'Stress management',
      'Weight management'
    ],
    departments: ['Cardiology', 'Internal Medicine'],
    specialists: ['Dr. Rajesh Kumar']
  },
  {
    id: 3,
    name: 'Arthritis',
    category: 'Musculoskeletal',
    description: 'Inflammation of joints causing pain, stiffness, and reduced mobility',
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    symptoms: [
      'Joint pain and stiffness',
      'Swelling and inflammation',
      'Reduced range of motion',
      'Morning stiffness',
      'Fatigue'
    ],
    treatments: [
      'Anti-inflammatory medications',
      'Physical therapy',
      'Joint injections',
      'Exercise therapy',
      'Hot/cold therapy',
      'Lifestyle modifications'
    ],
    departments: ['Orthopedics', 'Rheumatology'],
    specialists: ['Dr. Amit Patel']
  },
  {
    id: 4,
    name: 'Migraine',
    category: 'Neurological',
    description: 'Severe headaches often accompanied by nausea and sensitivity to light',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    symptoms: [
      'Severe throbbing headache',
      'Nausea and vomiting',
      'Sensitivity to light and sound',
      'Visual disturbances (aura)',
      'Dizziness'
    ],
    treatments: [
      'Pain relief medications',
      'Preventive medications',
      'Trigger identification',
      'Stress management',
      'Lifestyle modifications',
      'Botox injections'
    ],
    departments: ['Neurology', 'Pain Management'],
    specialists: ['Dr. Priya Sharma']
  },
  {
    id: 5,
    name: 'Asthma',
    category: 'Respiratory',
    description: 'Chronic respiratory condition causing breathing difficulties',
    image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    symptoms: [
      'Shortness of breath',
      'Wheezing',
      'Coughing (especially at night)',
      'Chest tightness',
      'Difficulty sleeping'
    ],
    treatments: [
      'Bronchodilator inhalers',
      'Anti-inflammatory medications',
      'Allergy management',
      'Breathing exercises',
      'Trigger avoidance',
      'Action plan development'
    ],
    departments: ['Pulmonology', 'Allergy & Immunology'],
    specialists: ['Dr. Rajesh Kumar']
  },
  {
    id: 6,
    name: 'Depression',
    category: 'Mental Health',
    description: 'Mental health disorder causing persistent sadness and loss of interest',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    symptoms: [
      'Persistent sadness',
      'Loss of interest in activities',
      'Fatigue and low energy',
      'Sleep disturbances',
      'Difficulty concentrating'
    ],
    treatments: [
      'Psychotherapy (counseling)',
      'Antidepressant medications',
      'Cognitive behavioral therapy',
      'Support groups',
      'Lifestyle changes',
      'Stress management'
    ],
    departments: ['Psychiatry', 'Psychology'],
    specialists: ['Dr. Priya Sharma']
  }
];