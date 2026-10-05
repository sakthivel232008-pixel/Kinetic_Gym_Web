import React, { useState } from 'react';
import { X, Check, QrCode, Download, Calendar, Sparkles } from 'lucide-react';
import { DigitalPass } from '../types/gym';

interface DayPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPassGenerated?: (pass: DigitalPass) => void;
}

export const DayPassModal: React.FC<DayPassModalProps> = ({ isOpen, onClose, onPassGenerated }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-10-06');
  const [slot, setSlot] = useState('07:00 AM - 11:00 AM (Morning Peak)');
  const [focus, setFocus] = useState('Olympic Lifting & Barbell');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [generatedPass, setGeneratedPass] = useState<DigitalPass | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 8) errs.phone = 'Valid phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const passNum = `KNT-${Math.floor(100000 + Math.random() * 900000)}`;
    const newPass: DigitalPass = {
      passNumber: passNum,
      holderName: fullName,
      email: email,
      validDate: date,
      timeSlot: slot,
      location: 'Metropolitan Flagship (Platform Arena & Thermal Suite)',
      qrPayload: `kinetic://pass/${passNum}/${encodeURIComponent(fullName)}`
    };

    setGeneratedPass(newPass);
    if (onPassGenerated) onPassGenerated(newPass);
  };

  const handleReset = () => {
    setGeneratedPass(null);
    setFullName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-[#0e1219] p-8 shadow-2xl text-white max-h-[95vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!generatedPass ? (
          <div>
            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
              Complimentary Access
            </div>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
              CLAIM YOUR 1-DAY TRIAL PASS.
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Experience our calibrated Eleiko platforms, 40m turf sprint lane, and contrast cold plunge suites with zero commitment.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jordan Hayes"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.fullName ? 'border-rose-500' : 'border-white/15 focus:border-[#ccff00]'
                  }`}
                />
                {errors.fullName && <p className="mt-1 text-[11px] text-rose-400">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jordan@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/15 focus:border-[#ccff00]'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-rose-400">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-white/15 focus:border-[#ccff00]'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-[11px] text-rose-400">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Pass Activation Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Target Time Window
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-[#141820] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ccff00]"
                  >
                    <option value="06:30 AM - 10:30 AM (Morning Peak)">06:30 AM - 10:30 AM</option>
                    <option value="11:30 AM - 03:30 PM (Mid-Day)">11:30 AM - 03:30 PM</option>
                    <option value="05:00 PM - 09:30 PM (Evening Peak)">05:00 PM - 09:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Primary Focus for Today
                </label>
                <select
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-[#141820] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ccff00]"
                >
                  <option value="Olympic Lifting & Barbell">Olympic Lifting & Heavy Barbell</option>
                  <option value="Hyrox Engine & Turf Intervals">Hyrox Conditioning & Turf Intervals</option>
                  <option value="Contrast Cold Plunge & Sauna">Contrast Hydro-Thermal Recovery</option>
                  <option value="General Strength & Machines">General Strength & Hypertrophy</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#ccff00] py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-98 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
                >
                  Issue Digital Pass Instantly
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                1 pass per athlete per calendar year. Valid government photo ID required at check-in desk.
              </div>
            </form>
          </div>
        ) : (
          /* Digital Pass Result Card */
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ccff00]">
              <Check className="h-4 w-4" />
              <span>Pass Confirmed & Registered</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              YOUR DIGITAL DAY PASS IS READY.
            </h3>

            {/* Visual Digital Pass Ticket */}
            <div className="relative rounded-2xl border-2 border-[#ccff00] bg-gradient-to-b from-[#131922] to-[#090b0e] p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <div className="font-display text-xl font-extrabold tracking-tight text-white">
                    KINETIC ATHLETICS
                  </div>
                  <div className="text-[10px] font-mono uppercase text-[#ccff00]">
                    SINGLE-DAY GUEST CREDENTIAL
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-mono">PASS NUMBER</div>
                  <div className="font-mono text-xs font-bold text-white tabular-nums">
                    {generatedPass.passNumber}
                  </div>
                </div>
              </div>

              <div className="py-4 space-y-3">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">ATHLETE</span>
                    <span className="font-bold text-white">{generatedPass.holderName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">VALID DATE</span>
                    <span className="font-bold text-white">{generatedPass.validDate}</span>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-slate-400 block text-[11px]">ACCESS WINDOW</span>
                  <span className="font-semibold text-[#ccff00]">{generatedPass.timeSlot}</span>
                </div>

                <div className="text-xs">
                  <span className="text-slate-400 block text-[11px]">LOCATION</span>
                  <span className="text-slate-300">{generatedPass.location}</span>
                </div>
              </div>

              {/* QR Code Graphic Representation */}
              <div className="mt-4 pt-4 border-t border-dashed border-white/20 flex items-center justify-between">
                <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                  {/* High Contrast Stylized QR SVG */}
                  <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 10h8v8H2v-8zm2 2v4h4v-4H4zm10-14h8v8h-8V2zm2 2v4h4V4h-4zm2 10h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm2 2h2v2h-2v-2zm-6 2h2v2h-2v-2zm4 0h2v2h-2v-2zm2-6h2v2h-2v-2zm-6-2h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                  </svg>
                </div>
                <div className="text-right text-[11px] text-slate-400 max-w-[200px]">
                  Present this QR code or pass number to the reception desk for locker key & biometric enrollment.
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert(`Digital Pass ${generatedPass.passNumber} saved to your device. A confirmation has been logged to ${generatedPass.email}.`);
                  handleReset();
                }}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#ccff00] py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-[#b8e600]"
              >
                <Download className="h-4 w-4" />
                <span>Save Pass to Phone</span>
              </button>
              <button
                onClick={handleReset}
                className="px-5 rounded-lg border border-white/20 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
