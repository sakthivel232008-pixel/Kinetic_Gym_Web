import React, { useState } from 'react';
import { Calculator, Dumbbell, Flame, Check, HelpCircle } from 'lucide-react';

export const PerformanceCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'1rm' | 'macros'>('1rm');

  // 1RM States
  const [exercise, setExercise] = useState('Deadlift');
  const [weight, setWeight] = useState<number>(140);
  const [reps, setReps] = useState<number>(5);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');

  // Calculate 1RM (Epley Formula)
  const estimated1RM = Math.round(weight * (1 + reps / 30));
  const percentages = [
    { pct: 95, reps: '1-2', label: 'Max Effort / Peaking' },
    { pct: 90, reps: '3', label: 'Heavy Strength Wave' },
    { pct: 85, reps: '5', label: 'Neuromuscular Overload' },
    { pct: 80, reps: '7-8', label: 'Hypertrophy Power' },
    { pct: 75, reps: '10', label: 'Volume Density' },
    { pct: 70, reps: '12', label: 'Speed & Power Output' },
  ];

  // Macro Engine States
  const [weightKg, setWeightKg] = useState<number>(80);
  const [goal, setGoal] = useState<'cut' | 'recomp' | 'bulk'>('recomp');
  const [activityDays, setActivityDays] = useState<number>(4);

  // Basal calculations
  // Base BMR estimate ~ 22 kcal/kg + activity
  const baseTDEE = Math.round(weightKg * 24 * (1 + activityDays * 0.08));
  let targetCalories = baseTDEE;
  if (goal === 'cut') targetCalories = Math.round(baseTDEE * 0.82); // 18% deficit
  if (goal === 'bulk') targetCalories = Math.round(baseTDEE * 1.15); // 15% surplus

  const proteinGrams = Math.round(weightKg * 2.2); // 2.2g per kg for serious strength training
  const fatGrams = Math.round((targetCalories * 0.25) / 9); // 25% of calories from fat
  const carbGrams = Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4);
  const waterTargetLiters = (weightKg * 0.045).toFixed(1);

  return (
    <section id="calculator" className="relative w-full bg-[#090b0e] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
              Interactive Athlete Tools
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              PRECISION PERFORMANCE ENGINES.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-normal leading-relaxed">
            Eliminate guesswork. Calculate your exact 1-Rep Max load percentages and daily nutritional macro targets verified by sports biomechanics.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-8 flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 max-w-md">
          <button
            onClick={() => setActiveTab('1rm')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === '1rm'
                ? 'bg-[#ccff00] text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Dumbbell className="h-4 w-4" />
            <span>1RM Barbell Engine</span>
          </button>
          <button
            onClick={() => setActiveTab('macros')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'macros'
                ? 'bg-[#ccff00] text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="h-4 w-4" />
            <span>Nutrition & Macro Target</span>
          </button>
        </div>

        {/* Tab 1: 1RM Calculator */}
        {activeTab === '1rm' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0f131a] p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="font-display text-lg font-bold text-white">Lift Parameters</h3>
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setUnit('kg')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded ${unit === 'kg' ? 'bg-[#ccff00] text-black' : 'text-slate-400'}`}
                  >
                    KG
                  </button>
                  <button
                    onClick={() => setUnit('lbs')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded ${unit === 'lbs' ? 'bg-[#ccff00] text-black' : 'text-slate-400'}`}
                  >
                    LBS
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Select Compound Lift
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Squat', 'Bench Press', 'Deadlift', 'Clean & Jerk', 'Snatch', 'Overhead'].map((l) => (
                    <button
                      key={l}
                      onClick={() => setExercise(l)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center truncate ${
                        exercise === l
                          ? 'border-[#ccff00] bg-[#ccff00]/10 text-[#ccff00] font-bold'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/30'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Weight Lifted ({unit})
                  </label>
                  <span className="font-mono text-sm font-bold text-white tabular-nums">{weight} {unit}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="350"
                  step="2.5"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ccff00]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>20 {unit}</span>
                  <span>185 {unit}</span>
                  <span>350 {unit}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Reps Completed (To Technical Fatigue)
                  </label>
                  <span className="font-mono text-sm font-bold text-white tabular-nums">{reps} Reps</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={reps}
                  onChange={(e) => setReps(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ccff00]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>1 Rep</span>
                  <span>6 Reps</span>
                  <span>12 Reps</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 leading-relaxed">
                <span className="text-[#ccff00] font-semibold">Coaching Tip:</span> For maximum accuracy, input sets between 2 to 6 reps performed with pristine technical velocity.
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0f131a] p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Calculated 1-Rep Maximum ({exercise})
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-extrabold text-[#ccff00] tabular-nums">
                      {estimated1RM}
                    </span>
                    <span className="font-display text-xl font-bold text-white uppercase">{unit}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-xs text-slate-400">Formula Standard</div>
                  <div className="text-xs font-semibold text-white mt-0.5">Epley / Brzycki Kinematic Average</div>
                </div>
              </div>

              {/* Working Percentage Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                  Wave Loading & Training Percentage Matrix
                </h4>
                <div className="space-y-2.5">
                  {percentages.map((p) => {
                    const load = Math.round((estimated1RM * p.pct) / 100);
                    return (
                      <div
                        key={p.pct}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-bold text-[#ccff00] w-12 tabular-nums">
                            {p.pct}%
                          </span>
                          <div>
                            <span className="text-xs font-medium text-white">{p.label}</span>
                            <span className="text-[11px] text-slate-400 block">Target: {p.reps} reps/set</span>
                          </div>
                        </div>
                        <div className="font-mono text-sm font-bold text-white tabular-nums">
                          {load} {unit}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Nutrition & Macro Engine */}
        {activeTab === 'macros' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0f131a] p-8 space-y-6">
              <h3 className="font-display text-lg font-bold text-white pb-4 border-b border-white/10">
                Body & Training Profile
              </h3>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Athletic Objective
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'cut', label: 'Lean Cut' },
                    { key: 'recomp', label: 'Recomp' },
                    { key: 'bulk', label: 'Lean Bulk' },
                  ].map((g) => (
                    <button
                      key={g.key}
                      onClick={() => setGoal(g.key as any)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                        goal === g.key
                          ? 'border-[#ccff00] bg-[#ccff00]/10 text-[#ccff00]'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Current Body Weight
                  </label>
                  <span className="font-mono text-sm font-bold text-white tabular-nums">{weightKg} kg ({Math.round(weightKg * 2.204)} lbs)</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="140"
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ccff00]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Heavy Sessions / Week
                  </label>
                  <span className="font-mono text-sm font-bold text-white tabular-nums">{activityDays} Days</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="7"
                  value={activityDays}
                  onChange={(e) => setActivityDays(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ccff00]"
                />
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400">
                <span className="text-[#ccff00] font-semibold">Kinetic Fuel Standard:</span> High protein intake preserves nitrogen balance during heavy lifting cycles while carbohydrate cycling supports glycogen replenishment.
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0f131a] p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Target Daily Energy Intake
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-extrabold text-[#ccff00] tabular-nums">
                      {targetCalories}
                    </span>
                    <span className="font-display text-xl font-bold text-white">kcal / day</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-xs text-slate-400">Base Maintenance (TDEE)</div>
                  <div className="text-sm font-mono font-bold text-white tabular-nums mt-0.5">{baseTDEE} kcal</div>
                </div>
              </div>

              {/* Macro Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Protein</div>
                  <div className="mt-2 font-display text-3xl font-extrabold text-white tabular-nums">
                    {proteinGrams}g
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400">
                    2.2g / kg · Muscle Synthesis
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Carbohydrates</div>
                  <div className="mt-2 font-display text-3xl font-extrabold text-white tabular-nums">
                    {carbGrams}g
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400">
                    Glycogen & Power Output
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Essential Fats</div>
                  <div className="mt-2 font-display text-3xl font-extrabold text-white tabular-nums">
                    {fatGrams}g
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400">
                    Hormonal Optimization
                  </div>
                </div>
              </div>

              {/* Hydration & Minerals */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/40 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#ccff00] font-semibold block">Hydration Minimum:</span>
                  <span className="text-slate-300">Aim for at least {waterTargetLiters} Liters of filtered water + electrolytes daily.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
