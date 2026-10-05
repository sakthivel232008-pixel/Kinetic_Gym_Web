import React, { useState } from 'react';
import { X, User, Check, Calendar, Dumbbell, Shield } from 'lucide-react';
import { ClassSession } from '../types/gym';

interface MemberSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { name: string; email: string; tier: string; memberId: string } | null;
  bookedSessions: ClassSession[];
  onLogin: (name: string, email: string) => void;
  onLogout: () => void;
  onCancelBooking: (sessionId: string) => void;
}

export const MemberSignInModal: React.FC<MemberSignInModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  bookedSessions,
  onLogin,
  onLogout,
  onCancelBooking,
}) => {
  const [email, setEmail] = useState('athlete@kinetic.club');
  const [password, setPassword] = useState('••••••••');
  const [name, setName] = useState('Alex Mercer');

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(name, email);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-[#0e1219] p-8 shadow-2xl text-white max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!currentUser ? (
          <div>
            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
              Member Access
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              SIGN IN TO KINETIC PORTAL.
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Access your reservation calendar, biometric scan records, and digital barcode.
            </p>

            <form onSubmit={handleSignIn} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Athlete Name
                </label>
                <input
                  type="text"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#ccff00] py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-98 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                >
                  Sign In To Portal
                </button>
              </div>

              <div className="p-3 rounded-lg bg-white/5 text-center text-xs text-slate-400">
                <span>Demo mode: Click "Sign In To Portal" to explore active member capabilities.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Logged In Member Dashboard */
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
                  Athlete Profile
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {currentUser.name}
                </h3>
                <div className="text-xs text-slate-400">{currentUser.email}</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] px-2 py-0.5 rounded">
                  {currentUser.tier}
                </span>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  ID: {currentUser.memberId}
                </div>
              </div>
            </div>

            {/* My Active Reservations */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  My Booked Sessions ({bookedSessions.length})
                </h4>
              </div>

              {bookedSessions.length === 0 ? (
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center text-xs text-slate-400">
                  You have no active class reservations. Browse the weekly timetable to secure spots.
                </div>
              ) : (
                <div className="space-y-2.5 max-h-60 overflow-y-auto">
                  {bookedSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-3.5 rounded-lg border border-white/10 bg-white/5"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{session.name}</div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                          <span>{session.time}</span>
                          <span aria-hidden="true">·</span>
                          <span>{session.coach}</span>
                          <span aria-hidden="true">·</span>
                          <span>{session.room}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onCancelBooking(session.id)}
                        className="text-xs text-rose-400 hover:text-rose-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={onLogout}
                className="text-xs text-slate-400 hover:text-white"
              >
                Log Out
              </button>
              <button
                onClick={onClose}
                className="rounded-lg bg-[#ccff00] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black"
              >
                Close Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
