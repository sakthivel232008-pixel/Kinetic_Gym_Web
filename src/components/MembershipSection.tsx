import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types/gym';
import { Check, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface MembershipSectionProps {
  onSelectPlan: (plan: MembershipPlan, billingCycle: 'monthly' | 'annual') => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="memberships" className="relative w-full bg-[#0c0f14] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Memberships
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              TRANSPARENT ATHLETIC TIERS.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-normal leading-relaxed">
            No initiation fees. No hidden maintenance clauses. Cancel anytime with a 14-day notice or freeze your access when traveling.
          </p>
        </div>

        {/* Billing Cycle Switcher */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                billingCycle === 'annual'
                  ? 'bg-[#ccff00] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Contract</span>
              <span className="text-[10px] bg-black text-[#ccff00] px-1.5 py-0.5 rounded font-mono font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all ${
                  isPopular
                    ? 'border-2 border-[#ccff00] bg-[#121721] shadow-[0_0_35px_rgba(204,255,0,0.08)]'
                    : 'border border-white/10 bg-[#0f131a] hover:border-white/30'
                }`}
              >
                {/* Popular Marker */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-8 rounded bg-[#ccff00] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-black">
                    MOST POPULAR // ATHLETE CHOICE
                  </div>
                )}

                <div>
                  <div className="font-display text-2xl font-bold text-white">
                    {plan.name}
                  </div>
                  <p className="mt-2 text-xs text-slate-400 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1 pb-6 border-b border-white/10">
                    <span className="font-display text-5xl font-extrabold text-white tabular-nums">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-400">/ month</span>
                    {billingCycle === 'annual' && (
                      <span className="text-[11px] text-[#ccff00] ml-2 font-mono">
                        (Billed annually)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Included Privileges
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="h-4 w-4 text-[#ccff00] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.excluded && plan.excluded.length > 0 && (
                      <div className="pt-3 border-t border-white/5 space-y-2">
                        {plan.excluded.map((exc, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500">
                            <X className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
                            <span>{exc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => onSelectPlan(plan, billingCycle)}
                    className={`w-full flex items-center justify-center gap-2 rounded-lg py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
                      isPopular
                        ? 'bg-[#ccff00] text-black hover:bg-[#b8e600] active:scale-98 shadow-[0_0_20px_rgba(204,255,0,0.2)]'
                        : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Enroll In {plan.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Includes 14-day full satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
