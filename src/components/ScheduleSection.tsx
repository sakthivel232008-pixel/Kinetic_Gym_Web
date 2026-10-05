import React, { useState } from 'react';
import { GYM_SCHEDULE } from '../data/gymData';
import { ClassSession } from '../types/gym';
import { Clock, MapPin, User, ChevronRight, Check } from 'lucide-react';

interface ScheduleSectionProps {
  onSelectClassForBooking: (session: ClassSession) => void;
  bookedSessionIds: string[];
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ 
  onSelectClassForBooking,
  bookedSessionIds
}) => {
  const [selectedDay, setSelectedDay] = useState<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>('mon');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'strength' | 'conditioning' | 'recovery' | 'combat'>('all');

  const days: { key: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'; label: string; full: string }[] = [
    { key: 'mon', label: 'Mon', full: 'Monday' },
    { key: 'tue', label: 'Tue', full: 'Tuesday' },
    { key: 'wed', label: 'Wed', full: 'Wednesday' },
    { key: 'thu', label: 'Thu', full: 'Thursday' },
    { key: 'fri', label: 'Fri', full: 'Friday' },
    { key: 'sat', label: 'Sat', full: 'Saturday' },
    { key: 'sun', label: 'Sun', full: 'Sunday' },
  ];

  const filteredSessions = GYM_SCHEDULE.filter((session) => {
    const matchesDay = session.day === selectedDay;
    const matchesCat = categoryFilter === 'all' || session.category === categoryFilter;
    return matchesDay && matchesCat;
  });

  return (
    <section id="schedule" className="relative w-full bg-[#0c0f14] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Weekly Timetable
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              COACH-LED PERFORMANCE SCHEDULE.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-normal leading-relaxed">
            Reserve your platform, sled lane, or contrast suite. Small cohort caps guarantee direct coach attention and zero waiting for bars.
          </p>
        </div>

        {/* Filter Controls: Interactive Functional Segmented Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Day Selector Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            {days.map((day) => {
              const isActive = selectedDay === day.key;
              return (
                <button
                  key={day.key}
                  onClick={() => setSelectedDay(day.key)}
                  className={`flex flex-col items-center justify-center min-w-[64px] py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                    isActive 
                      ? 'bg-[#ccff00] text-black shadow-[0_0_15px_rgba(204,255,0,0.2)] font-bold' 
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  <span>{day.label}</span>
                </button>
              );
            })}
          </div>

          {/* Discipline Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0">
            {(['all', 'strength', 'conditioning', 'recovery', 'combat'] as const).map((cat) => {
              const isActive = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-black font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat === 'all' ? 'All Classes' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timetable Rows */}
        <div className="mt-8 space-y-3">
          {filteredSessions.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-[#0f131a] p-12 text-center text-slate-400">
              <p className="text-sm">No scheduled sessions for this category on {days.find(d => d.key === selectedDay)?.full}.</p>
              <button
                onClick={() => setCategoryFilter('all')}
                className="mt-4 text-xs font-semibold text-[#ccff00] hover:underline"
              >
                View all disciplines for this day
              </button>
            </div>
          ) : (
            filteredSessions.map((session) => {
              const isBooked = bookedSessionIds.includes(session.id);
              const spotsLeft = session.capacity - session.enrolled;
              const isFull = spotsLeft <= 0 && !isBooked;

              return (
                <div
                  key={session.id}
                  className="group relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-xl border border-white/10 bg-[#0f131a] p-6 transition-all hover:border-[#ccff00]/40 hover:bg-[#121720]"
                >
                  {/* Left: Time and Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="min-w-[110px]">
                      <div className="font-display text-lg font-bold text-white tabular-nums">
                        {session.time}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                        <Clock className="h-3 w-3" />
                        <span>{session.durationMin} mins</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-display text-lg font-bold text-white group-hover:text-[#ccff00] transition-colors">
                          {session.name}
                        </h4>
                        {/* Clean metadata without pill capsules */}
                        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                          <span aria-hidden="true">·</span>
                          <span className="capitalize">{session.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>Intensity: {session.intensity}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                        {session.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <User className="h-3.5 w-3.5 text-[#ccff00]" />
                          <span>{session.coach}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-slate-500" />
                          <span>{session.room}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Capacity & Action Button */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t border-white/10 lg:border-t-0">
                    <div className="text-right">
                      <div className="text-xs text-slate-400">Capacity</div>
                      <div className="text-xs font-semibold tabular-nums text-white">
                        {isBooked ? (
                          <span className="text-[#ccff00] flex items-center gap-1 justify-end">
                            <Check className="h-3.5 w-3.5" /> Enrolled
                          </span>
                        ) : isFull ? (
                          <span className="text-amber-400">Full (Waitlist)</span>
                        ) : (
                          <span>{spotsLeft} of {session.capacity} spots left</span>
                        )}
                      </div>
                    </div>

                    {isBooked ? (
                      <button
                        disabled
                        className="rounded-lg border border-[#ccff00]/40 bg-[#ccff00]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#ccff00] cursor-default flex items-center gap-2"
                      >
                        <Check className="h-3.5 w-3.5" />
                        <span>Reserved</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onSelectClassForBooking(session)}
                        className={`rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                          isFull
                            ? 'bg-white/10 text-white hover:bg-white/20'
                            : 'bg-[#ccff00] text-black hover:bg-[#b8e600] active:scale-95 shadow-[0_0_15px_rgba(204,255,0,0.15)]'
                        }`}
                      >
                        {isFull ? 'Join Waitlist' : 'Reserve Spot'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
