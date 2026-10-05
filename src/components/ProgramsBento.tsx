import React, { useState } from 'react';
import { ArrowRight, Dumbbell, Zap, Waves, Flame, Target, X, Check } from 'lucide-react';
import { ASSET_IMAGES } from '../data/gymData';

interface ProgramDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image?: string;
  duration: string;
  frequency: string;
  targetEnergy: string;
  equipment: string[];
  syllabus: string[];
  recommendedFor: string;
}

const PROGRAMS: ProgramDetail[] = [
  {
    id: 'prog-strength',
    number: '01',
    title: 'Olympic Weightlifting & Barbell Mechanics',
    subtitle: 'Kinematic precision, wave loading, and maximal neuromuscular output.',
    image: ASSET_IMAGES.strength,
    duration: '60 - 75 min',
    frequency: '4x / week recommended',
    targetEnergy: 'ATP-CP & High-Threshold Motor Units',
    equipment: ['Eleiko IWF Competition Discs', 'Stainless Steel Needle-Bearing Barbells', 'Oak Inset Weightlifting Decks', 'VBT Linear Encoders'],
    syllabus: [
      'Snatch & Clean & Jerk pull-to-catch kinetic bar paths',
      'Deficit and accommodating band tension deadlift cycles',
      'Front & back squat wave loading (Prilepin table guidelines)',
      'Scapular upward rotation and overhead lockout integrity'
    ],
    recommendedFor: 'Lifters looking to build raw compound power, structural bone density, and technical barbell proficiency.'
  },
  {
    id: 'prog-hyrox',
    number: '02',
    title: 'High-Metabolic Hyrox Conditioning',
    subtitle: 'Endurance capacity, lactate buffering, and relentless pacing strategies.',
    duration: '50 min',
    frequency: '3x - 5x / week',
    targetEnergy: 'Glycolytic & Aerobic Capacity (Zone 4/5)',
    equipment: ['Concept2 SkiErg & Rowers', 'Rogue Dog Sleds & Turf', 'Assault AirBikes', 'Heavy Sandbags & Kettlebells'],
    syllabus: [
      '1,000m running tempo intervals alternating with heavy sled pushes',
      'Burpee broad-jump cadence management & lung economy',
      'Farmers carry grip endurance & anti-flexion trunk stabilization',
      'Lactate threshold testing & pace management algorithms'
    ],
    recommendedFor: 'Athletes training for Hyrox, tactical fitness tests, or seeking extreme cardiovascular endurance.'
  },
  {
    id: 'prog-recovery',
    number: '03',
    title: 'Contrast Hydrotherapy & Decompression',
    subtitle: 'Vascular flush, autonomic balance, and soft tissue longevity.',
    image: ASSET_IMAGES.recovery,
    duration: '45 min circuits',
    frequency: '2x - 4x / week post-training',
    targetEnergy: 'Parasympathetic Down-Regulation',
    equipment: ['3°C Chilled Stainless Plunge Tubs', '90°C Finnish Dry Cedar Saunas', 'Hyperice Normatec 3 Boots', 'Red Light Photobiomodulation'],
    syllabus: [
      '4 rounds of 3-minute cold immersion followed by 12-minute sauna dry heat',
      'Box breathing and physiological sigh CO2 retention protocols',
      'Pneumatic compression lymphatic drainage',
      'Active fascial decompression with heavy resistance bands'
    ],
    recommendedFor: 'Anyone suffering from persistent muscle soreness, neural fatigue, or seeking faster athletic turnaround.'
  },
  {
    id: 'prog-combat',
    number: '04',
    title: 'Combat Striking & Rotational Power',
    subtitle: 'Hip torque, ballistic ground reaction forces, and reactive agility.',
    duration: '55 min',
    frequency: '2x - 3x / week',
    targetEnergy: 'Anaerobic Alactic & Core Rotational',
    equipment: ['120lb Leather Heavy Bags', 'Combat Ring & Padded Floor', 'Aqua Punching Bags', 'Speed Bags & Double-End Balls'],
    syllabus: [
      'Boxing and Muay Thai fundamental striking mechanics and head movement',
      'Medicine ball rotational slam throws against masonry rebound walls',
      'Slip cord drill work and defensive angle transitions',
      'Conditioning rounds targeting anaerobic endurance and hand speed'
    ],
    recommendedFor: 'Lifters wanting explosive rotational torque, combat agility, and high-energy calorie burn.'
  },
  {
    id: 'prog-coaching',
    number: '05',
    title: '1-on-1 Biomechanical Performance Coaching',
    subtitle: 'Individualized velocity-based programming with our senior coaching staff.',
    image: ASSET_IMAGES.headCoach,
    duration: '60 min private sessions',
    frequency: 'Customized schedule',
    targetEnergy: 'Targeted Specific adaptations',
    equipment: ['Full Kinetic Floor Access', 'Kinovea Video Motion Capture', 'InBody 770 Clinical Bio-Impedance', 'Tendo Velocity Units'],
    syllabus: [
      'Full Functional Movement Screen (FMS) and joint range assessment',
      'Custom 12-week progressive overload block design',
      'Nutritional macro-periodization aligned with your training volume',
      'Weekly technique video audits and real-time form corrections'
    ],
    recommendedFor: 'Athletes preparing for competition, recovering from injury, or seeking accelerated results with dedicated accountability.'
  }
];

export const ProgramsBento: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null);

  return (
    <section id="programs" className="relative w-full bg-[#090b0e] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Training Disciplines
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              BUILT ON SCIENCE. TESTED UNDER IRON.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-normal leading-relaxed">
            Every discipline is designed around progressive mechanical overload and metabolic capacity—not random fatigue.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          {/* Card 1: Strength (Large Col Span 7) */}
          <div 
            onClick={() => setSelectedProgram(PROGRAMS[0])}
            className="group relative col-span-12 lg:col-span-7 min-h-[420px] rounded-2xl border border-white/10 bg-[#0f131a] overflow-hidden cursor-pointer transition-all hover:border-[#ccff00]/60 flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={PROGRAMS[0].image}
                alt={PROGRAMS[0].title}
                className="h-full w-full object-cover filter brightness-[0.65] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-[#090b0e]/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#ccff00] mb-2">
                <span>{PROGRAMS[0].number}. STRENGTH PROTOCOL</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <span>Explore Syllabus</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {PROGRAMS[0].title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                {PROGRAMS[0].subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>Duration: {PROGRAMS[0].duration}</span>
                <span aria-hidden="true">·</span>
                <span>{PROGRAMS[0].frequency}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Hyrox & Engine (Col Span 5) */}
          <div 
            onClick={() => setSelectedProgram(PROGRAMS[1])}
            className="group relative col-span-12 lg:col-span-5 min-h-[420px] rounded-2xl border border-white/10 bg-[#0f131a] p-8 flex flex-col justify-between cursor-pointer transition-all hover:border-[#ccff00]/60 hover:bg-[#131922]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#ccff00]">
                <span>{PROGRAMS[1].number}. CONDITIONING</span>
                <Zap className="h-4 w-4 text-[#ccff00]" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                {PROGRAMS[1].title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {PROGRAMS[1].subtitle}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-2">Key Equipment:</div>
              <div className="text-xs text-slate-200">Concept2 SkiErgs · Rogue Dog Sleds · Assault Bikes</div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#ccff00] font-semibold">{PROGRAMS[1].targetEnergy}</span>
                <span className="text-xs text-white group-hover:text-[#ccff00] flex items-center gap-1 font-medium transition-colors">
                  Details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Contrast Therapy (Col Span 5) */}
          <div 
            onClick={() => setSelectedProgram(PROGRAMS[2])}
            className="group relative col-span-12 lg:col-span-5 min-h-[380px] rounded-2xl border border-white/10 bg-[#0f131a] overflow-hidden cursor-pointer transition-all hover:border-[#ccff00]/60 flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={PROGRAMS[2].image}
                alt={PROGRAMS[2].title}
                className="h-full w-full object-cover filter brightness-[0.6] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-[#090b0e]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="text-xs font-mono uppercase tracking-widest text-[#ccff00] mb-2">
                {PROGRAMS[2].number}. THERMAL RESTORATION
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {PROGRAMS[2].title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {PROGRAMS[2].subtitle}
              </p>
              <div className="mt-4 text-xs text-slate-400">
                3°C Chilled Stainless Plunge · 90°C Finnish Sauna · Normatec
              </div>
            </div>
          </div>

          {/* Card 4: Combat Striking (Col Span 3.5 or 4) */}
          <div 
            onClick={() => setSelectedProgram(PROGRAMS[3])}
            className="group relative col-span-12 sm:col-span-6 lg:col-span-3 min-h-[380px] rounded-2xl border border-white/10 bg-[#0f131a] p-8 flex flex-col justify-between cursor-pointer transition-all hover:border-[#ccff00]/60 hover:bg-[#131922]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#ccff00]">
                <span>{PROGRAMS[3].number}. COMBAT</span>
                <Flame className="h-4 w-4 text-[#ccff00]" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {PROGRAMS[3].title}
              </h3>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                {PROGRAMS[3].subtitle}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-[#ccff00] font-medium">Kinetic Torque & Agility</div>
              <div className="mt-2 text-xs text-slate-400">{PROGRAMS[3].duration}</div>
            </div>
          </div>

          {/* Card 5: 1-on-1 Coaching (Col Span 4) */}
          <div 
            onClick={() => setSelectedProgram(PROGRAMS[4])}
            className="group relative col-span-12 sm:col-span-6 lg:col-span-4 min-h-[380px] rounded-2xl border border-white/10 bg-[#0f131a] overflow-hidden cursor-pointer transition-all hover:border-[#ccff00]/60 flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={PROGRAMS[4].image}
                alt={PROGRAMS[4].title}
                className="h-full w-full object-cover filter brightness-[0.55] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-[#090b0e]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="text-xs font-mono uppercase tracking-widest text-[#ccff00] mb-2">
                {PROGRAMS[4].number}. PRIVATE ATHLETIC STAFF
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                {PROGRAMS[4].title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                {PROGRAMS[4].subtitle}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-[#ccff00] font-semibold">
                <span>View Methodology</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Syllabus Drawer / Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-[#0e1219] p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
              Program Syllabus · {selectedProgram.number}
            </div>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
              {selectedProgram.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              {selectedProgram.subtitle}
            </p>

            {/* Quick Metrics */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div>
                <span className="text-slate-400 block">Session Duration</span>
                <span className="font-semibold text-white mt-0.5 block">{selectedProgram.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Frequency</span>
                <span className="font-semibold text-white mt-0.5 block">{selectedProgram.frequency}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Energy System</span>
                <span className="font-semibold text-[#ccff00] mt-0.5 block">{selectedProgram.targetEnergy}</span>
              </div>
            </div>

            {/* Syllabus Breakdown */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Training Syllabus & Periodization
              </h4>
              <ul className="mt-3 space-y-2.5">
                {selectedProgram.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="h-4 w-4 text-[#ccff00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Dedicated Club Equipment
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProgram.equipment.map((eq, idx) => (
                  <span key={idx} className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-md px-3 py-1.5">
                    {eq}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended For */}
            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-black/40">
              <span className="text-xs font-bold uppercase text-[#ccff00] block mb-1">Ideal Candidate</span>
              <p className="text-xs text-slate-300 leading-relaxed">{selectedProgram.recommendedFor}</p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedProgram(null)}
                className="rounded-lg bg-[#ccff00] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#b8e600] transition-colors"
              >
                Close Syllabus
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
