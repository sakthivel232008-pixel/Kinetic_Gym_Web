import React, { useState } from 'react';
import { ClassSession } from '../types/gym';
import { X, Check, Clock, MapPin, User, Calendar, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  session: ClassSession | null;
  onClose: () => void;
  onConfirmBooking: (session: ClassSession, athleteName: string, email: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ session, onClose, onConfirmBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState('');

  if (!session) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and email address.');
      return;
    }
    setError('');
    onConfirmBooking(session, name, email);
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

        <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
          Class Reservation
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold text-white">
          RESERVE YOUR TRAINING SPOT.
        </h3>

        {/* Selected Session Summary */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-display text-lg font-bold text-white">{session.name}</h4>
            <span className="text-xs font-mono text-[#ccff00] uppercase">{session.intensity}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{session.time} ({session.durationMin}m)</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-slate-400" />
              <span>{session.coach}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              <span>{session.room}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-400">{error}</div>}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Athlete Name
            </label>
            <input
              type="text"
              placeholder="e.g. Jordan Hayes"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              placeholder="jordan@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Phone (SMS Reminders)
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
            />
          </div>

          <label className="flex items-start gap-2.5 pt-2 text-xs text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 rounded border-white/20 bg-white/5 text-[#ccff00] focus:ring-0"
            />
            <span>I acknowledge safety protocol and agree to arrive 10 minutes prior for warmup & mobility check.</span>
          </label>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!agreed}
              className="w-full rounded-lg bg-[#ccff00] py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-98 disabled:opacity-50"
            >
              Confirm Spot Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
