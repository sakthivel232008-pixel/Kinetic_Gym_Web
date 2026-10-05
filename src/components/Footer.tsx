import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenPassModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPassModal }) => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#07080b] text-slate-400">
      {/* Pre-footer Call to Action */}
      <div className="border-b border-white/10 bg-[#0a0d12]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Ready to Upgrade Your Output?
            </div>
            <h3 className="mt-2 font-display text-2xl sm:text-4xl font-extrabold text-white">
              STEP ONTO THE PLATFORM TODAY.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
              Claim your complimentary 1-day pass. Test our calibrated Eleiko steel, sprint the turf, and recover in the thermal suites.
            </p>
          </div>

          <button
            onClick={onOpenPassModal}
            className="flex items-center gap-2 rounded-lg bg-[#ccff00] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-98 whitespace-nowrap shadow-[0_0_25px_rgba(204,255,0,0.2)]"
          >
            <span>Claim 1-Day Trial Pass</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-display text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>KINETIC</span>
              <span className="h-2 w-2 rounded-full bg-[#ccff00]" />
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Metropolitan high-performance strength facility and recovery club. Built on biomechanics, velocity-based training, and athletic longevity.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#ccff00]" />
                <span>480 Ironworks Ave, Metropolitan District</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-[#ccff00]" />
                <span>Open 24/7 for Enrolled Athletes (Staffed 05:00 - 23:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#ccff00]" />
                <span>concierge@kinetic.club</span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#programs" className="hover:text-white transition-colors">Olympic Barbell & Strength</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Hyrox & Engine Capacity</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Contrast Cold Plunge & Sauna</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Combat & Rotational Power</a></li>
              <li><a href="#coaches" className="hover:text-white transition-colors">1-on-1 Biomechanics Staff</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Club Access
            </div>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#schedule" className="hover:text-white transition-colors">Live Weekly Timetable</a></li>
              <li><a href="#memberships" className="hover:text-white transition-colors">Membership Tiers</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">1RM Load Calculator</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Nutritional Macro Engine</a></li>
              <li><button onClick={onOpenPassModal} className="hover:text-[#ccff00] transition-colors text-left">Request Free Day Pass</button></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Facility Standards
            </div>
            <ul className="space-y-2.5 text-xs">
              <li><span>Eleiko Certified IWF Arena</span></li>
              <li><span>Medical-Grade UV Contrast Tubs</span></li>
              <li><span>HEPA Air Purification Filtration</span></li>
              <li><span>Complimentary Biometric Scanning</span></li>
              <li><span>Secure Locker Rooms & Saunas</span></li>
            </ul>
          </div>
        </div>

        {/* Quiet Legal Row */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} KINETIC Athletic Club Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-slate-400">Safety Waiver</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
