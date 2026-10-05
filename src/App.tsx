/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsBento } from './components/ProgramsBento';
import { ScheduleSection } from './components/ScheduleSection';
import { PerformanceCalculator } from './components/PerformanceCalculator';
import { CoachesSection } from './components/CoachesSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { MembershipSection } from './components/MembershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

// Modals & Feedback
import { DayPassModal } from './components/DayPassModal';
import { BookingModal } from './components/BookingModal';
import { CoachBookingModal } from './components/CoachBookingModal';
import { MembershipCheckoutModal } from './components/MembershipCheckoutModal';
import { MemberSignInModal } from './components/MemberSignInModal';
import { Toast } from './components/Toast';

import { ClassSession, Coach, MembershipPlan, DigitalPass } from './types/gym';
import { GYM_SCHEDULE } from './data/gymData';

export default function App() {
  // Modal States
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [bookingSession, setBookingSession] = useState<ClassSession | null>(null);
  const [bookingCoach, setBookingCoach] = useState<Coach | null>(null);
  const [checkoutPlan, setCheckoutPlan] = useState<{ plan: MembershipPlan; cycle: 'monthly' | 'annual' } | null>(null);

  // User & Booking States
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    tier: string;
    memberId: string;
  } | null>({
    name: 'Alex Mercer',
    email: 'alex.mercer@kinetic.club',
    tier: 'Performance Elite',
    memberId: 'KNT-MBR-88421'
  });

  const [bookedSessionIds, setBookedSessionIds] = useState<string[]>(['cls-1']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4500);
  };

  // Handlers
  const handleConfirmClassBooking = (session: ClassSession, athleteName: string, email: string) => {
    setBookedSessionIds((prev) => [...prev, session.id]);
    setBookingSession(null);
    showToast(`Spot reserved for ${session.name} on ${session.time}. Confirmation sent to ${email}.`);
  };

  const handleConfirmCoachBooking = (coach: Coach, dateSlot: string, service: string) => {
    setBookingCoach(null);
    showToast(`1-on-1 session with ${coach.name} scheduled for ${dateSlot}.`);
  };

  const handleEnrollSuccess = (plan: MembershipPlan, memberName: string, memberId: string) => {
    setCurrentUser({
      name: memberName,
      email: `${memberName.toLowerCase().replace(/\s+/g, '.')}@member.kinetic`,
      tier: plan.name,
      memberId: memberId,
    });
    setCheckoutPlan(null);
    showToast(`Welcome to Kinetic, ${memberName}! You are now an active ${plan.name} member.`);
  };

  const handlePassGenerated = (pass: DigitalPass) => {
    showToast(`Digital Day Pass ${pass.passNumber} generated for ${pass.holderName}!`);
  };

  const handleCancelBooking = (sessionId: string) => {
    setBookedSessionIds((prev) => prev.filter((id) => id !== sessionId));
    showToast('Reservation cancelled. Spot released.');
  };

  const userBookedSessions = GYM_SCHEDULE.filter((s) => bookedSessionIds.includes(s.id));

  return (
    <div className="min-h-screen bg-[#090b0e] text-[#f1f5f9] selection:bg-[#ccff00] selection:text-black">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenPassModal={() => setIsPassModalOpen(true)}
        onOpenSignInModal={() => setIsSignInModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenPassModal={() => setIsPassModalOpen(true)} />

        {/* Training Disciplines Bento Grid */}
        <ProgramsBento />

        {/* Live Weekly Class Schedule Timetable */}
        <ScheduleSection
          onSelectClassForBooking={(session) => setBookingSession(session)}
          bookedSessionIds={bookedSessionIds}
        />

        {/* Interactive Performance Calculators (1RM & Macros) */}
        <PerformanceCalculator />

        {/* Certified Coaching Roster */}
        <CoachesSection
          onBookCoach={(coach) => setBookingCoach(coach)}
        />

        {/* Facility Amenities & Equipment Standards */}
        <AmenitiesSection />

        {/* Membership Tiers & Pricing */}
        <MembershipSection
          onSelectPlan={(plan, cycle) => setCheckoutPlan({ plan, cycle })}
        />

        {/* Quantitative Transformations & Attributable Proof */}
        <TestimonialsSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenPassModal={() => setIsPassModalOpen(true)} />

      {/* Modals */}
      <DayPassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
        onPassGenerated={handlePassGenerated}
      />

      <BookingModal
        session={bookingSession}
        onClose={() => setBookingSession(null)}
        onConfirmBooking={handleConfirmClassBooking}
      />

      <CoachBookingModal
        coach={bookingCoach}
        onClose={() => setBookingCoach(null)}
        onConfirm={handleConfirmCoachBooking}
      />

      <MembershipCheckoutModal
        plan={checkoutPlan?.plan || null}
        billingCycle={checkoutPlan?.cycle || 'monthly'}
        onClose={() => setCheckoutPlan(null)}
        onEnrollSuccess={handleEnrollSuccess}
      />

      <MemberSignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        currentUser={currentUser}
        bookedSessions={userBookedSessions}
        onLogin={(name, email) => {
          setCurrentUser({
            name,
            email,
            tier: 'Performance Elite',
            memberId: 'KNT-MBR-92041'
          });
          setIsSignInModalOpen(false);
          showToast(`Welcome back, ${name}.`);
        }}
        onLogout={() => {
          setCurrentUser(null);
          showToast('Signed out of member portal.');
        }}
        onCancelBooking={handleCancelBooking}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
