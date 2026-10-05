import React from 'react';
import { TRANSFORMATIONS } from '../data/gymData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#090b0e] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Verified Proof of Impact
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              MEASURABLE METRIC TRANSFORMATIONS.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-normal leading-relaxed">
            Real athletes, real load progressions, and documented biometrics. We track velocity, body composition, and aerobic milestones.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((story) => (
            <div
              key={story.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f131a] p-8 hover:border-white/30 transition-all"
            >
              <div>
                <Quote className="h-6 w-6 text-[#ccff00] mb-4 opacity-70" />
                
                {/* Quantified Metric Proof Banner */}
                <div className="font-display text-xl font-bold text-[#ccff00] pb-3 border-b border-white/10">
                  {story.highlightMetric}
                </div>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="font-display text-base font-bold text-white">
                  {story.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {story.role}
                </div>
                {/* Clean unboxed metadata */}
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <span>{story.period}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{story.discipline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
