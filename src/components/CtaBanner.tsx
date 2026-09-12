import { ArrowRight, PhoneCall } from 'lucide-react';

interface CtaBannerProps {
  onOpenDemo: () => void;
  onOpenCallSimulator: () => void;
}

export function CtaBanner({ onOpenDemo, onOpenCallSimulator }: CtaBannerProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#0E1E3D] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl shadow-[#0E1E3D]/30 border border-[#1E3563]">
          
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-[#F0DFAD]/15 blur-3xl pointer-events-none" />

          {/* 4-dot icon badge */}
          <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="grid grid-cols-2 gap-1 p-1">
              <div className="h-2 w-2 rounded-full bg-[#F0DFAD]"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-[#F0DFAD]"></div>
            </div>
          </div>

          <h2 className="relative z-10 mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Stop managing your life manually. Let your AI agent take the wheel.
          </h2>

          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Join thousands of high performers automating schedules, controlling screen time, and receiving proactive voice briefings.
          </p>

          {/* Buttons */}
          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              id="cta-download-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#F0DFAD] px-7 py-3.5 text-sm font-bold text-[#0E1E3D] shadow-lg shadow-black/20 hover:bg-[#E5D29C] transition-all cursor-pointer border border-[#DFC88A]"
            >
              <span>Download the AI Agent</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCallSimulator}
              id="cta-sim-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#F0DFAD]" />
              <span>Simulate Cellular Call</span>
            </button>
          </div>

          <p className="relative z-10 mt-6 text-xs text-slate-400 font-medium">
            No credit card required for 14-day preview • Instant setup in under 90 seconds
          </p>

        </div>

      </div>
    </section>
  );
}
