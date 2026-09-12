import { Mic, PhoneCall, ShieldCheck } from 'lucide-react';

export function CoreInnovationSection() {
  const cards = [
    {
      id: 'natural-voice',
      icon: Mic,
      title: 'SPEAK IN NATURAL VOICE',
      description: 'Capture complex tasks hands-free while walking, driving, or cooking.',
    },
    {
      id: 'cellular-ring',
      icon: PhoneCall,
      title: 'DIRECT CELLULAR RING',
      description: 'Your phone rings like an executive assistant calling from headquarters.',
    },
    {
      id: 'zero-stress',
      icon: ShieldCheck,
      title: 'ZERO FOLLOW-UP STRESS',
      description: 'The agent updates status, reschedules clashes, and confirms closure.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-[#F0DFAD]/40 px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] tracking-wide mb-4">
            Core Innovation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1E3D]">
            Solve your biggest challenges with real-time calls
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Standard reminder apps give you quiet alerts that get buried under 80+ notifications. Your AI Life Agent takes action by calling your phone directly with a high-fidelity voice briefing.
          </p>
        </div>

        {/* 3 Innovation Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={`card-${card.id}`}
                className="group relative rounded-2xl bg-[#FAF9F6] p-6 lg:p-8 border border-slate-200/80 hover:border-[#0E1E3D]/30 hover:bg-white hover:shadow-xl hover:shadow-[#0E1E3D]/5 transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E1E3D]/5 text-[#0E1E3D] border border-[#0E1E3D]/15 group-hover:scale-110 group-hover:bg-[#0E1E3D] group-hover:text-[#F0DFAD] transition-all duration-300 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#0E1E3D] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
