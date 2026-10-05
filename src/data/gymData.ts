import { ClassSession, Coach, MembershipPlan, TransformationStory } from '../types/gym';
import heroImg from '../assets/images/hero_gym_training_1791181780701.jpg';
import strengthImg from '../assets/images/strength_lifting_area_1791181792973.jpg';
import recoveryImg from '../assets/images/recovery_cold_plunge_1791181805451.jpg';
import trainerImg from '../assets/images/trainer_headshot_1791181815963.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  strength: strengthImg,
  recovery: recoveryImg,
  headCoach: trainerImg,
};

export const GYM_SCHEDULE: ClassSession[] = [
  {
    id: 'cls-1',
    name: 'Barbell Olympic Snatch & Clean',
    category: 'strength',
    day: 'mon',
    time: '06:30 AM',
    durationMin: 60,
    coach: 'Marcus Thorne',
    coachRole: 'Head Olympic Weightlifting Coach',
    room: 'Platform Arena A',
    capacity: 12,
    enrolled: 10,
    intensity: 'High',
    description: 'Master kinematic bar paths, triple extension mechanics, and drop under velocity on calibrated Eleiko bars.'
  },
  {
    id: 'cls-2',
    name: 'Metabolic Hyrox Engine',
    category: 'conditioning',
    day: 'mon',
    time: '08:00 AM',
    durationMin: 50,
    coach: 'Kira Sterling',
    coachRole: 'Hyrox Pro Master Trainer',
    room: 'Turf Sprint Zone',
    capacity: 20,
    enrolled: 17,
    intensity: 'Very High',
    description: 'High-lactate threshold intervals combining ski ergometers, sled pushes, weighted lunges, and assault bikes.'
  },
  {
    id: 'cls-3',
    name: 'Contrast Therapy & Flow Mobility',
    category: 'recovery',
    day: 'mon',
    time: '05:30 PM',
    durationMin: 45,
    coach: 'Dr. Aaron Vance',
    coachRole: 'Biomechanics & Recovery Director',
    room: 'Hydro-Thermal Sanctuary',
    capacity: 10,
    enrolled: 7,
    intensity: 'Recovery',
    description: 'Guided fascial release decompression followed by 4x protocols in 3°C cold plunge and 90°C Finnish sauna.'
  },
  {
    id: 'cls-4',
    name: 'Heavy Compound Squat & Press',
    category: 'strength',
    day: 'tue',
    time: '07:00 AM',
    durationMin: 60,
    coach: 'Marcus Thorne',
    coachRole: 'Head Olympic Weightlifting Coach',
    room: 'Power Rack Grid',
    capacity: 14,
    enrolled: 14,
    intensity: 'Very High',
    description: 'Periodized wave loading targeting high-threshold motor unit recruitment and posterior chain resilience.'
  },
  {
    id: 'cls-5',
    name: 'Combat Striking & Explosive Core',
    category: 'combat',
    day: 'tue',
    time: '06:00 PM',
    durationMin: 55,
    coach: 'Derrick Vance',
    coachRole: 'Combat Performance Specialist',
    room: 'Ring & Bag Pit',
    capacity: 16,
    enrolled: 11,
    intensity: 'High',
    description: 'Kinetic chain rotational power development, heavy bag combinations, slip drills, and anti-rotational core.'
  },
  {
    id: 'cls-6',
    name: 'VO2 Max Aerobic Capacity',
    category: 'conditioning',
    day: 'wed',
    time: '06:30 AM',
    durationMin: 50,
    coach: 'Kira Sterling',
    coachRole: 'Hyrox Pro Master Trainer',
    room: 'Cardio Deck & Turf',
    capacity: 18,
    enrolled: 12,
    intensity: 'Very High',
    description: 'Zone 4/5 cardiac output intervals targeting stroke volume expansion and mitochondrial biogenesis.'
  },
  {
    id: 'cls-7',
    name: 'Posterior Chain & Deadlift Lab',
    category: 'strength',
    day: 'wed',
    time: '05:00 PM',
    durationMin: 60,
    coach: 'Marcus Thorne',
    coachRole: 'Head Olympic Weightlifting Coach',
    room: 'Platform Arena B',
    capacity: 12,
    enrolled: 9,
    intensity: 'Very High',
    description: 'Deficit, pause, and conventional deadlift variations with real-time velocity transducer feedback (VBT).'
  },
  {
    id: 'cls-8',
    name: 'Neuromuscular Recovery & Breathwork',
    category: 'recovery',
    day: 'thu',
    time: '07:30 AM',
    durationMin: 45,
    coach: 'Dr. Aaron Vance',
    coachRole: 'Biomechanics & Recovery Director',
    room: 'Thermal Suite',
    capacity: 10,
    enrolled: 6,
    intensity: 'Recovery',
    description: 'Parasympathetic down-regulation, box breathing, hip capsule mobilizations, and cold plunge immersion.'
  },
  {
    id: 'cls-9',
    name: 'Tactical Conditioning & Sled Drills',
    category: 'conditioning',
    day: 'thu',
    time: '06:00 PM',
    durationMin: 50,
    coach: 'Kira Sterling',
    coachRole: 'Hyrox Pro Master Trainer',
    room: 'Turf Sprint Zone',
    capacity: 16,
    enrolled: 15,
    intensity: 'Very High',
    description: 'Prowler sprint ladders, farmers carries, sandbag ground-to-overheads, and row sprint intervals.'
  },
  {
    id: 'cls-10',
    name: 'Upper Body Hypertrophy & Stability',
    category: 'strength',
    day: 'fri',
    time: '07:00 AM',
    durationMin: 60,
    coach: 'Marcus Thorne',
    coachRole: 'Head Olympic Weightlifting Coach',
    room: 'Dumbbell & Cable Vault',
    capacity: 15,
    enrolled: 13,
    intensity: 'High',
    description: 'Mechanically optimized pressing, scapular protraction work, weighted dips, and unilateral arm development.'
  },
  {
    id: 'cls-11',
    name: 'MMA Ground Work & Grappling Conditioning',
    category: 'combat',
    day: 'fri',
    time: '05:30 PM',
    durationMin: 60,
    coach: 'Derrick Vance',
    coachRole: 'Combat Performance Specialist',
    room: 'Ring & Bag Pit',
    capacity: 14,
    enrolled: 8,
    intensity: 'High',
    description: 'Wrestling takedown entries, grip endurance conditioning, battle ropes, and isometric neck/trap strength.'
  },
  {
    id: 'cls-12',
    name: 'Saturday Team Endurance Hyrox Gauntlet',
    category: 'conditioning',
    day: 'sat',
    time: '09:00 AM',
    durationMin: 75,
    coach: 'Kira Sterling',
    coachRole: 'Hyrox Pro Master Trainer',
    room: 'Full Arena Floor',
    capacity: 25,
    enrolled: 24,
    intensity: 'Very High',
    description: 'Our signature weekend squad gauntlet simulating official Hyrox race conditions with team pacing strategy.'
  },
  {
    id: 'cls-13',
    name: 'Sunday Deep Restoration & Contrast Circuits',
    category: 'recovery',
    day: 'sun',
    time: '10:00 AM',
    durationMin: 60,
    coach: 'Dr. Aaron Vance',
    coachRole: 'Biomechanics & Recovery Director',
    room: 'Hydro-Thermal Sanctuary',
    capacity: 12,
    enrolled: 11,
    intensity: 'Recovery',
    description: 'Full body decompression, passive hanging, lumbar traction, contrast plunge circuits, and mineral electrolytes.'
  }
];

export const COACHES: Coach[] = [
  {
    id: 'coach-1',
    name: 'Marcus Thorne',
    title: 'Head of Strength & Olympic Weightlifting',
    specialty: 'Maximal Strength, Barbell Kinematics, VBT',
    experience: '12 Years Elite Coaching',
    certifications: ['CSCS (NSCA)', 'USAW National Coach', 'FMS Level 2'],
    bio: 'Former collegiate strength coach and national weightlifting medalist. Marcus has programmed barbell cycles for over 600 competitive athletes and lifters.',
    image: trainerImg,
    achievements: 'Coached 14 National Olympic weightlifting competitors and 3 world-record powerlifters.'
  },
  {
    id: 'coach-2',
    name: 'Kira Sterling',
    title: 'Lead Conditioning & Hyrox Master Trainer',
    specialty: 'Aerobic Engine, Lactic Clearance, Sled Dynamics',
    experience: '9 Years High-Performance',
    certifications: ['EXOS Performance Specialist', 'Hyrox Pro Coach', 'CPT - NASM'],
    bio: 'Top-10 global Hyrox Pro finisher and endurance programmer. Specializes in building unmatched cardiovascular work capacity without sacrificing lean muscle mass.',
    image: trainerImg,
    achievements: 'Sub-61min Hyrox Pro record holder and trainer to 40+ international Hyrox finishers.'
  },
  {
    id: 'coach-3',
    name: 'Dr. Aaron Vance',
    title: 'Director of Biomechanics & Contrast Recovery',
    specialty: 'Fascial Decompression, Contrast Protocols, Joint Health',
    experience: '11 Years Clinical & Sports Science',
    certifications: ['DPT (Doctor of Physical Therapy)', 'FRCms (Functional Range Conditioning)', 'PRI Trained'],
    bio: 'Doctor of physical therapy blending advanced orthopedics with cold-water contrast immersion and thermal vasodilation to accelerate athletic turnaround.',
    image: trainerImg,
    achievements: 'Consultant to Olympic track athletes and UFC combatants for soft tissue longevity.'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-club',
    name: 'Club Athlete',
    tagline: 'Full gym access, Olympic platforms, and free weights',
    monthlyPrice: 89,
    annualPrice: 72,
    features: [
      '24/7 Biometric access to all 24,000 sq ft training floors',
      'Eleiko Olympic lifting platforms & calibrated steel plates',
      'Full Hammer Strength selectorized & plate-loaded circuit',
      'Locker rooms, rain showers, and sauna access',
      'Kinetic Club member mobile app & workout logger'
    ],
    excluded: [
      'Unlimited coach-led group performance classes',
      'Private cold plunge & contrast therapy suites',
      'Monthly InBody 770 composition scan & consultation'
    ]
  },
  {
    id: 'plan-performance',
    name: 'Performance Elite',
    tagline: 'The complete athletic experience with unlimited coached classes',
    monthlyPrice: 149,
    annualPrice: 119,
    popular: true,
    features: [
      'All Club Athlete floor access privileges (24/7)',
      'Unlimited coach-led classes (Hyrox, Olympic Lifting, Combat)',
      'Daily contrast hydro-therapy (Cold Plunge + Infrared Sauna)',
      'Priority 7-day advance booking window for prime sessions',
      'Monthly InBody 770 clinical composition tracking',
      'Complimentary premium towel & eucalyptus locker service'
    ]
  },
  {
    id: 'plan-vip',
    name: 'All-Access VIP & Private Recovery',
    tagline: 'Concierge athletic care, 1-on-1 coaching, and private suites',
    monthlyPrice: 229,
    annualPrice: 185,
    features: [
      'All Performance Elite benefits included',
      '2x Monthly 1-on-1 private coaching sessions with lead coaches',
      'Dedicated private executive locker with laundry service',
      'Private booked contrast suite access (solo plunge + red light)',
      'Quarterly biomechanical movement screening (FMS & VBT)',
      '2 Complimentary guest day passes every calendar month',
      'Full post-workout smoothie & electrolyte bar allowance'
    ]
  }
];

export const TRANSFORMATIONS: TransformationStory[] = [
  {
    id: 'trans-1',
    name: 'Alex Mercer',
    role: 'Tech Executive & Master Lifter',
    period: '16 Weeks Program',
    highlightMetric: '+55kg Deadlift PR · -8.4% Body Fat',
    quote: 'The coaching caliber here is unmatched. Instead of random exhaustion, every session has clear mechanical intent. I hit a 240kg deadlift at 41 years old while feeling physically better than in my twenties.',
    discipline: 'Strength & Barbell Wave Periodization'
  },
  {
    id: 'trans-2',
    name: 'Elena Rostova',
    role: 'Competitive Hyrox Athlete',
    period: '20 Weeks Training',
    highlightMetric: 'Sub-62min Hyrox Finish · 4th in Age Group',
    quote: 'The sprint turf, sled lanes, and specialized engine classes gave me the exact aerobic threshold I needed. The contrast cold plunge after Saturday gauntlets slashed my soreness in half.',
    discipline: 'Metabolic Hyrox & Aerobic Capacity'
  },
  {
    id: 'trans-3',
    name: 'Marcus Chen',
    role: 'Former Collegiate Soccer Athlete',
    period: '12 Weeks Protocol',
    highlightMetric: 'ACL Rehab to 32" Vertical Jump',
    quote: 'Dr. Vance and Coach Thorne rebuilt my knee stability from the ground up. The combination of isometric loading and physical therapy protocols got me back to sprinting pain-free.',
    discipline: 'Biomechanics & Explosive Plyometrics'
  }
];

export const AMENITIES = [
  {
    title: 'Olympic Weightlifting Platforms',
    spec: '8 Custom Inset Wood Platforms',
    desc: 'Calibrated Eleiko competition discs, stainless barbells, and magnetic chalk stations designed for Olympic drops.'
  },
  {
    title: '40-Meter Turf Sprint Track',
    spec: 'Dual-Lane High-Traction Surface',
    desc: 'Heavy Rogue prowler sleds, sprint parachutes, hurdles, and medicine ball ballistic throw rebound walls.'
  },
  {
    title: 'Cold Plunge & Contrast Spa',
    spec: '3°C Chilled Stainless Tanks & 90°C Cedar Saunas',
    desc: 'Medical-grade UV filtered contrast immersion units scientifically timed for inflammation reduction and rapid recovery.'
  },
  {
    title: 'Hammer Strength & Custom Plate Loaded',
    spec: 'Over 60 Biomechanical Machines',
    desc: 'Converging and diverging axis machines engineered to isolate musculature across natural anatomical lines of pull.'
  },
  {
    title: 'InBody 770 Clinical Body Composition',
    spec: 'Multi-Frequency Bioelectrical Impedance',
    desc: 'Segmental muscle balance analysis, visceral fat levels, and intracellular hydration tracking verified by sports science.'
  },
  {
    title: 'Fuel & Electrolyte Refuel Bar',
    spec: 'Cold-Pressed Juices, Whey Isolate & Clean Salts',
    desc: 'Clean, macro-balanced nutritional fuel crafted to replenish glycogen and optimize cellular recovery instantly after sessions.'
  }
];
