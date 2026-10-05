import React, { useState } from 'react';
import { MembershipPlan } from '../types/gym';
import { X, Check, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

interface MembershipCheckoutModalProps {
  plan: MembershipPlan | null;
  billingCycle: 'monthly' | 'annual';
  onClose: () => void;
  onEnrollSuccess: (plan: MembershipPlan, memberName: string, memberId: string) => void;
}

export const MembershipCheckoutModal: React.FC<MembershipCheckoutModalProps> = ({
  plan,
  billingCycle,
  onClose,
  onEnrollSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');

  // Add-ons
  const [addonLocker, setAddonLocker] = useState(false);
  const [addonTowel, setAddonTowel] = useState(false);
  const [addonScan, setAddonScan] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);
  const [memberId, setMemberId] = useState('');

  if (!plan) return null;

  const basePrice = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
  let addOnsTotal = 0;
  if (addonLocker) addOnsTotal += 25;
  if (addonTowel) addOnsTotal += 15;
  if (addonScan) addOnsTotal += 20;

  const totalMonthlyEquivalent = basePrice + addOnsTotal;

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const newId = `KNT-MBR-${Math.floor(10000 + Math.random() * 90000)}`;
    setMemberId(newId);
    setIsSuccess(true);
    onEnrollSuccess(plan, name, newId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl border border-white/20 bg-[#0e1219] p-8 shadow-2xl text-white max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
              Club Enrollment & Checkout
            </div>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
              JOIN {plan.name.toUpperCase()}.
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              {billingCycle === 'annual' ? 'Annual Commitment (Billed Annually at 20% discount)' : 'Flexible Monthly Access'}
            </p>

            <form onSubmit={handleEnroll} className="mt-6 space-y-6">
              {/* Plan Summary */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white">{plan.name}</div>
                  <div className="text-xs text-slate-400">{plan.tagline}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-bold text-[#ccff00] tabular-nums">
                    ${basePrice}
                  </div>
                  <div className="text-[10px] text-slate-400">per month</div>
                </div>
              </div>

              {/* Add-ons Configuration */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Optional Athletic Add-Ons
                </div>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addonLocker}
                        onChange={(e) => setAddonLocker(e.target.checked)}
                        className="rounded border-white/20 text-[#ccff00] focus:ring-0"
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">Dedicated Personal Locker & Laundry</div>
                        <div className="text-[11px] text-slate-400">Clean training gear folded in your locker daily</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white tabular-nums">+$25/mo</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addonTowel}
                        onChange={(e) => setAddonTowel(e.target.checked)}
                        className="rounded border-white/20 text-[#ccff00] focus:ring-0"
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">Unlimited Eucalyptus Towel Service</div>
                        <div className="text-[11px] text-slate-400">Fresh cold-chilled workout towels on demand</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white tabular-nums">+$15/mo</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addonScan}
                        onChange={(e) => setAddonScan(e.target.checked)}
                        className="rounded border-white/20 text-[#ccff00] focus:ring-0"
                      />
                      <div>
                        <div className="text-xs font-semibold text-white">Monthly InBody 770 Clinical 3D Scan</div>
                        <div className="text-[11px] text-slate-400">Medical-grade segmental muscle & visceral tracking</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white tabular-nums">+$20/mo</span>
                  </label>
                </div>
              </div>

              {/* Member Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jordan Hayes"
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
                    placeholder="jordan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ccff00]"
                    required
                  />
                </div>
              </div>

              {/* Payment Details */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="h-4 w-4 text-[#ccff00]" />
                    <span>Card Information</span>
                  </span>
                  <span className="text-[11px] text-slate-500">256-bit TLS Encrypted</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-mono text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-mono text-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Dues Calculation */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Total Due Today</span>
                  <span className="text-[11px] text-slate-500">$0 Initiation Fee Applied</span>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-extrabold text-[#ccff00] tabular-nums">
                    ${totalMonthlyEquivalent}
                  </span>
                  <span className="text-xs text-slate-400">/ mo</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#ccff00] py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-98 shadow-[0_0_25px_rgba(204,255,0,0.25)]"
              >
                Complete Enrollment & Activate Biometrics
              </button>
            </form>
          </div>
        ) : (
          /* Enrollment Success State */
          <div className="py-6 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ccff00]/20 text-[#ccff00]">
              <Sparkles className="h-8 w-8 stroke-[2.5]" />
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ccff00]">
                Welcome To The Club
              </div>
              <h3 className="mt-1 font-display text-3xl font-extrabold text-white">
                MEMBERSHIP ACTIVATED.
              </h3>
              <p className="mt-2 text-xs text-slate-300 max-w-sm mx-auto">
                Congratulations, <span className="text-white font-bold">{name}</span>. Your tier <span className="text-[#ccff00] font-semibold">{plan.name}</span> is officially live.
              </p>
            </div>

            {/* Member Card Preview */}
            <div className="max-w-md mx-auto rounded-xl border-2 border-[#ccff00] bg-gradient-to-br from-[#121620] to-[#090b0e] p-6 text-left shadow-2xl">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="font-display font-extrabold tracking-wider text-white">KINETIC CLUB</span>
                <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold">ACTIVE ATHLETE</span>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">MEMBER NAME</div>
                  <div className="font-bold text-white text-base">{name}</div>
                  <div className="text-xs text-[#ccff00] mt-1">{plan.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-mono">MEMBER ID</div>
                  <div className="font-mono text-xs font-bold text-white tabular-nums">{memberId}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="rounded-lg bg-[#ccff00] px-8 py-2.5 text-xs font-bold uppercase tracking-wider text-black"
              >
                Access Member Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
