export function WorkflowSection() {
  const steps = [
    {
      number: '01',
      badgeBg: 'bg-[#0E1E3D] text-[#F0DFAD]',
      title: 'Speak Naturally Anytime',
      description: 'Tap the widget or whisper to your smartwatch: “Schedule pitch review for 3 PM, pull up the client KPI sheet, and mute notifications.”',
    },
    {
      number: '02',
      badgeBg: 'bg-[#F0DFAD] text-[#0E1E3D] border border-[#DFC88A]',
      title: 'Background Execution',
      description: 'The agent coordinates attendees, syncs your linked banking or project boards, and prepares a concise 45-second audio executive brief.',
    },
    {
      number: '03',
      badgeBg: 'bg-[#162B52] text-[#F0DFAD]',
      title: 'Receive Live Voice Call',
      description: 'Right at 2:50 PM, your phone rings. Answer hands-free, hear your mission-critical bullet points, and walk into the meeting totally prepared.',
    },
  ];

  return (
    <section id="workflow" className="py-20 lg:py-28 bg-[#FAF9F6] border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-[#F0DFAD]/40 px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] tracking-wide mb-4">
            Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1E3D]">
            How Personal AI runs your day
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Set up takes less than 90 seconds. Your agent learns your tone, contacts, and preferences instantly.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className="rounded-3xl bg-white p-7 lg:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#0E1E3D]/5 hover:border-[#0E1E3D]/30 transition-all flex flex-col justify-start group"
            >
              <div className={`flex h-9 w-12 items-center justify-center rounded-xl ${step.badgeBg} font-mono font-bold text-xs tracking-wider mb-6 shadow-xs`}>
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-[#0E1E3D] mb-3">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
