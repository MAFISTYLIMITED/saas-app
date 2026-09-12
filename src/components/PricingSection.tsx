import { useState } from 'react';
import { Check, Zap } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      tagline: 'Best for personal task management and casual daily voice notes.',
      monthlyPrice: 9,
      annualPrice: 7,
      highlighted: false,
      features: [
        '3 proactive daily voice calls',
        'Basic calendar & email sync',
        'Up to 2 distraction app locks',
        'Standard customer support',
      ],
      ctaLabel: 'Choose plan',
      ctaStyle: 'bg-white border border-[#0E1E3D]/25 text-[#0E1E3D] hover:bg-[#F0DFAD]/20 hover:border-[#0E1E3D]/50',
    },
    {
      id: 'pro',
      name: 'Pro',
      tagline: 'For founders, executives, and operators demanding total proactive autonomy.',
      monthlyPrice: 19,
      annualPrice: 15,
      highlighted: true,
      badge: 'MOST POPULAR',
      features: [
        'Unlimited cellular briefings',
        'Full email & bank integrations',
        'Multi-app automated lockouts',
        'Priority live voice routing',
        '24/7 dedicated executive line',
      ],
      ctaLabel: 'Get Started Pro',
      ctaStyle: 'bg-[#F0DFAD] text-[#0E1E3D] hover:bg-[#E5D29C] font-bold shadow-md border border-[#DFC88A]',
    },
    {
      id: 'advanced',
      name: 'Advanced',
      tagline: 'Tailored for heavy enterprise operations and distributed leadership teams.',
      monthlyPrice: 39,
      annualPrice: 31,
      highlighted: false,
      features: [
        'Custom LLM voice cloning',
        'Multi-account team synchronization',
        'Advanced SOC-2 audit logging',
        'Dedicated AI solutions architect',
      ],
      ctaLabel: 'Choose plan',
      ctaStyle: 'bg-white border border-[#0E1E3D]/25 text-[#0E1E3D] hover:bg-[#F0DFAD]/20 hover:border-[#0E1E3D]/50',
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-[#F0DFAD]/40 px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] tracking-wide mb-4">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1E3D]">
            Simple pricing plans
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Transparent subscriptions with no hidden fees. Cancel or pause anytime with one tap.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-[#0E1E3D] font-bold' : 'text-slate-500'}`}>
              Monthly billing
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
              style={{ backgroundColor: isAnnual ? '#0E1E3D' : '#E2E8F0' }}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? 'text-[#0E1E3D] font-bold' : 'text-slate-500'}`}>
                Annual billing
              </span>
              <span className="rounded-full bg-[#F0DFAD] px-2 py-0.5 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A]">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            if (plan.highlighted) {
              return (
                <div
                  key={plan.id}
                  id={`pricing-${plan.id}`}
                  className="relative flex flex-col justify-between rounded-3xl bg-[#0E1E3D] p-8 text-white shadow-2xl shadow-[#0E1E3D]/30 scale-105 z-10 border-2 border-[#1E3563]"
                >
                  <div className="absolute -top-3.5 right-8">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F0DFAD] px-3 py-1 text-xs font-extrabold text-[#0E1E3D] uppercase tracking-wider shadow-sm border border-[#DFC88A]">
                      <Zap className="w-3.5 h-3.5 fill-current text-[#0E1E3D]" />
                      {plan.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed min-h-[40px]">
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className="text-5xl font-black tracking-tight text-[#F0DFAD]">${price}</span>
                      <span className="text-sm font-semibold text-slate-300">/ mo</span>
                    </div>

                    <div className="mt-8 space-y-3 pt-6 border-t border-[#1E3563]">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm font-medium">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#162B52] text-[#F0DFAD] border border-[#234177]">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`mt-10 w-full rounded-xl py-3.5 text-sm font-bold transition-all cursor-pointer ${plan.ctaStyle}`}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            }

            return (
              <div
                key={plan.id}
                id={`pricing-${plan.id}`}
                className="flex flex-col justify-between rounded-3xl bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#0E1E3D]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed min-h-[40px]">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-5xl font-black tracking-tight text-[#0E1E3D]">${price}</span>
                    <span className="text-sm font-semibold text-slate-500">/ mo</span>
                  </div>

                  <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E1E3D]/5 text-[#0E1E3D]">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`mt-10 w-full rounded-xl py-3.5 text-sm font-semibold transition-all cursor-pointer ${plan.ctaStyle}`}
                >
                  {plan.ctaLabel}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
