import React, { useState } from 'react';
import { Menu, X, Ticket, User } from 'lucide-react';

interface NavbarProps {
  onOpenPassModal: () => void;
  onOpenSignInModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPassModal, onOpenSignInModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#090b0e]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Zone 1: Brand Wordmark (Single Text Element in Display Font) */}
        <a 
          href="#" 
          className="group flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight text-white transition-colors"
        >
          <span>KINETIC</span>
          <span className="h-2 w-2 rounded-full bg-[#ccff00] group-hover:scale-125 transition-transform" />
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#programs" className="hover:text-white transition-colors">Programs</a>
          <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
          <a href="#calculator" className="hover:text-white transition-colors">Performance Tools</a>
          <a href="#coaches" className="hover:text-white transition-colors">Coaches</a>
          <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
          <a href="#memberships" className="hover:text-white transition-colors">Memberships</a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenSignInModal}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
          >
            <User className="h-4 w-4 text-slate-400" />
            <span>Sign In</span>
          </button>
          
          <button
            onClick={onOpenPassModal}
            className="flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)] whitespace-nowrap"
          >
            <Ticket className="h-3.5 w-3.5" />
            <span>Claim Free Pass</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0c0f14] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-300">
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              Programs
            </a>
            <a 
              href="#schedule" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              Schedule
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              Performance Tools
            </a>
            <a 
              href="#coaches" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              Coaches
            </a>
            <a 
              href="#amenities" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              Amenities
            </a>
            <a 
              href="#memberships" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#ccff00]"
            >
              Memberships
            </a>
          </nav>
          <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ccff00] py-3 text-center text-xs font-bold uppercase tracking-wider text-black"
            >
              <Ticket className="h-4 w-4" />
              <span>Claim Free 1-Day Pass</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignInModal();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-200"
            >
              <User className="h-4 w-4" />
              <span>Member Sign In</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
