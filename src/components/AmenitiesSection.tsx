import React from 'react';
import { AMENITIES, ASSET_IMAGES } from '../data/gymData';
import { ShieldCheck, Sparkles, Droplets, Zap } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="relative w-full bg-[#090b0e] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Facility & Architecture
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              24,000 SQ FT INDUSTRIAL SANCTUARY.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-normal leading-relaxed">
            Constructed with acoustic-dampening flooring, filtered HVAC ventilation, commercial Eleiko steel, and private contrast hydrotherapy suites.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0f131a] p-8 hover:border-white/30 transition-colors"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#ccff00] uppercase tracking-wider mb-2">
                  SPEC {idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <div className="mt-1 text-xs font-medium text-slate-300">
                  {item.spec}
                </div>
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-[#ccff00]" />
                <span>Commercial Grade & Certified Daily</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
