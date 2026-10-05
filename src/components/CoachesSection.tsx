import React from 'react';
import { COACHES } from '../data/gymData';
import { Coach } from '../types/gym';
import { Award, Calendar, ArrowRight } from 'lucide-react';

interface CoachesSectionProps {
  onBookCoach: (coach: Coach) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onBookCoach }) => {
  return (
    <section id="coaches" className="relative w-full bg-[#0c0f14] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Performance Staff
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              WORLD-CLASS COACHING ROSTER.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-normal leading-relaxed">
            Our staff holds collegiate, national, and clinical sports science credentials. No weekend certifications—only verified coaching results.
          </p>
        </div>

        {/* Coaches Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f131a] overflow-hidden transition-all hover:border-[#ccff00]/50"
            >
              <div>
                {/* Photo with clean gradient scrim */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="h-full w-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f131a] via-transparent to-transparent" />
                  
                  {/* Clean unboxed experience tag */}
                  <div className="absolute bottom-4 left-6 text-xs font-mono font-semibold uppercase tracking-wider text-[#ccff00]">
                    {coach.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {coach.name}
                  </h3>
                  <div className="text-xs text-[#ccff00] font-medium mt-1">
                    {coach.title}
                  </div>

                  <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                    {coach.bio}
                  </p>

                  {/* Certifications (Clean unboxed text) */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Credentials
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300">
                      {coach.certifications.map((c, i) => (
                        <React.Fragment key={i}>
                          <span>{c}</span>
                          {i < coach.certifications.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Note */}
                  <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-slate-400">
                    <span className="text-white font-medium">Record: </span>
                    {coach.achievements}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookCoach(coach)}
                  className="w-full flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] active:scale-98"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Book 1-on-1 Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
