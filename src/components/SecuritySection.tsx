import { Lock, ShieldCheck, Key } from 'lucide-react';

export function SecuritySection() {
  const securityFeatures = [
    {
      id: 'aes',
      icon: Lock,
      iconColor: 'text-[#0E1E3D] bg-[#F0DFAD]/40 border-[#DFC88A]',
      title: 'End-to-End AES-256',
      description: 'Every voice transcription and cellular payload is encrypted both at rest and in transit via TLS 1.3 and military-grade AES-256 protocols.',
    },
    {
      id: 'privacy',
      icon: ShieldCheck,
      iconColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      title: 'Zero Third-Party Training',
      description: 'Your voice samples, conversation history, and calendar metadata are never used to train public language models or sold to advertiser networks.',
    },
    {
      id: 'control',
      icon: Key,
      iconColor: 'text-[#0E1E3D] bg-[#0E1E3D]/5 border-[#0E1E3D]/15',
      title: 'Granular One-Tap Control',
      description: 'Grant or revoke access to calling permissions, bank links, and app locking with single-tap autonomy directly from your device settings.',
    },
  ];

  return (
    <section id="security" className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-[#F0DFAD]/40 px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] tracking-wide mb-4">
            Security & Privacy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1E3D]">
            Built with bank-grade security and absolute privacy
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Your thoughts, financial links, and schedules belong solely to you. No data selling. No public LLM training.
          </p>
        </div>

        {/* 3 Security Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={`security-${feature.id}`}
                className="rounded-3xl bg-[#FAF9F6] p-7 lg:p-8 border border-slate-200/80 hover:bg-white hover:border-[#0E1E3D]/30 hover:shadow-xl hover:shadow-[#0E1E3D]/5 transition-all flex flex-col justify-start group"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.iconColor} border mb-6`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-[#0E1E3D] mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
