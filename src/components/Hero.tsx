import React from 'react';
import { ArrowUpRight, Flame, ShieldCheck, Clock } from 'lucide-react';
import { ASSET_IMAGES } from '../data/gymData';

interface HeroProps {
  onOpenPassModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPassModal }) => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#090b0e] flex items-center">
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="Kinetic Training Arena with Olympic Platforms and Turf Track"
          className="h-full w-full object-cover object-center filter brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for Legibility & Contrast (WCAG AA Compliance) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-[#090b0e]/80 to-[#090b0e]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e] via-[#090b0e]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Subtle Clean Metadata / Location Marker without pill badges */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
            <span>Metropolitan Performance Facility</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-white/80">Olympic Platforms & Contrast Recovery</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-white/80">Open 24/7</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]" style={{ textWrap: 'balance' }}>
            ENGINEERED FOR UNCOMPROMISING ATHLETIC PERFORMANCE.
          </h1>

          {/* Concrete Value Proposition (No AI Slop / Buzzwords) */}
          <p className="mt-6 text-lg text-slate-300 sm:text-xl font-normal leading-relaxed max-w-2xl">
            24,000 square feet of calibrated Eleiko barbell platforms, 40-meter turf sprint lanes, 
            doctor-led contrast cold plunge suites, and periodized coaching engineered to build real strength.
          </p>

          {/* Primary Action Row */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenPassModal}
              className="flex items-center gap-3 rounded-lg bg-[#ccff00] px-7 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-98 shadow-[0_0_30px_rgba(204,255,0,0.3)] whitespace-nowrap"
            >
              <span>Claim Free 1-Day Pass</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </button>

            <a
              href="#schedule"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 whitespace-nowrap"
            >
              <span>Explore Live Timetable</span>
            </a>
          </div>

          {/* Claim-to-Proof Adjacency: Concrete Quantitative Rigor */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-extrabold text-white tabular-nums">24,000</div>
              <div className="mt-1 text-xs text-slate-400 font-medium">Sq Ft Training Arena</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-[#ccff00] tabular-nums">8</div>
              <div className="mt-1 text-xs text-slate-400 font-medium">Olympic Eleiko Platforms</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-white tabular-nums">3°C & 90°C</div>
              <div className="mt-1 text-xs text-slate-400 font-medium">Contrast Thermal Therapy</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold text-white tabular-nums">42+</div>
              <div className="mt-1 text-xs text-slate-400 font-medium">Certified Strength Coaches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
