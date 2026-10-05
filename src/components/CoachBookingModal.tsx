import React, { useState } from 'react';
import { Coach } from '../types/gym';
import { X, Check, Calendar, Clock, Award, ShieldCheck } from 'lucide-react';

interface CoachBookingModalProps {
  coach: Coach | null;
  onClose: () => void;
  onConfirm: (coach: Coach, date: string, service: string) => void;
}

export const CoachBookingModal: React.FC<CoachBookingModalProps> = ({ coach, onClose, onConfirm }) => {
  const [service, setService] = useState('Biomechanical Movement Screen & FMS (60 min)');
  const [preferredDate, setPreferredDate] = useState('2026-10-08');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [athleteName, setAthleteName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!coach) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!athleteName.trim() || !email.trim()) return;
    setIsSuccess(true);
    onConfirm(coach, `${preferredDate} at ${preferredTime}`, service);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-[#0e1219] p-8 shadow-2xl text-white max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
              Private 1-on-1 Consultation
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              SCHEDULE WITH {coach.name.toUpperCase()}.
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              {coach.title} · {coach.specialty}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Select Consultation Format
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-[#141820] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ccff00]"
                >
                  <option value="Biomechanical Movement Screen & FMS (60 min)">Biomechanical Movement Screen & FMS (60 min)</option>
                  <option value="Olympic Barbell Technique & VBT Velocity Audit (60 min)">Olympic Barbell Technique & VBT Velocity Audit (60 min)</option>
                  <option value="Hyrox Engine & Lactate Pacing Protocol (60 min)">Hyrox Engine & Lactate Pacing Protocol (60 min)</option>
                  <option value="Soft Tissue Decompression & Contrast Strategy (45 min)">Soft Tissue Decompression & Contrast Strategy (45 min)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-[#141820] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ccff00]"
                  >
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Athlete Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={athleteName}
                  onChange={(e) => setAthleteName(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Prior Injuries or Specific Target PR
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Left hamstring tightness during deep squats, targeting a 180kg deadlift..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs text-white focus:outline-none focus:border-[#ccff00]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#ccff00] py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-98"
                >
                  Confirm Coaching Appointment
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ccff00]/20 text-[#ccff00]">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              CONSULTATION SCHEDULED.
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your 1-on-1 private session with <span className="text-[#ccff00] font-semibold">{coach.name}</span> is confirmed for <span className="text-white font-semibold">{preferredDate} at {preferredTime}</span>.
            </p>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-xs text-slate-400">
              A preparation guide and health history questionnaire has been sent to {email}.
            </div>
            <button
              onClick={onClose}
              className="mt-4 rounded-lg bg-[#ccff00] px-8 py-2.5 text-xs font-bold uppercase tracking-wider text-black"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
