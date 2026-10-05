export interface ClassSession {
  id: string;
  name: string;
  category: 'strength' | 'conditioning' | 'recovery' | 'combat';
  day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
  time: string;
  durationMin: number;
  coach: string;
  coachRole: string;
  room: string;
  capacity: number;
  enrolled: number;
  intensity: 'High' | 'Very High' | 'Moderate' | 'Recovery';
  description: string;
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  certifications: string[];
  bio: string;
  image: string;
  achievements: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  excluded?: string[];
}

export interface TransformationStory {
  id: string;
  name: string;
  role: string;
  period: string;
  highlightMetric: string;
  quote: string;
  discipline: string;
}

export interface DigitalPass {
  passNumber: string;
  holderName: string;
  email: string;
  validDate: string;
  timeSlot: string;
  location: string;
  qrPayload: string;
}
