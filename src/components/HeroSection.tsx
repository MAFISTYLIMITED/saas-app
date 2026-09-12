import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  Mic, 
  Phone, 
  Lock, 
  Volume2 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenCallSimulator: () => void;
}

export function HeroSection({ onOpenDemo, onOpenCallSimulator }: HeroSectionProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [audioSeconds, setAudioSeconds] = useState(42);

  // Audio timer effect
  useEffect(() => {
    if (!isPlayingAudio) return;
    const interval = setInterval(() => {
      setAudioSeconds(prev => (prev >= 60 ? 40 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-dot-pattern">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[340px] bg-[#F0DFAD]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Status Pill with 4-Dots Brand Icon */}
        <div className="mx-auto mb-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0E1E3D] border border-slate-200/90 shadow-sm hover:border-[#0E1E3D]/30 transition-all">
            <div className="grid grid-cols-2 gap-1 p-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#0E1E3D]"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-[#0E1E3D]"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-[#0E1E3D]"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-[#F0DFAD] border border-[#DFC88A]"></div>
            </div>
            <span className="font-bold text-[#0E1E3D]">Personal AI Agent</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">Proactive Cellular Voice Sync</span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse ml-0.5"></span>
          </div>
        </div>

        {/* Hero Headlines - Clear, unobstructed with accurate spacing */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0E1E3D] leading-[1.08]">
            Think, plan, and automate
          </h1>

          {/* Pill divider line in Prussian Blue */}
          <div className="mx-auto mt-4 h-1.5 w-14 rounded-full bg-[#0E1E3D]"></div>

          <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-500 leading-[1.12]">
            your AI agent that calls you
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Speak your goals, meetings, and tasks in plain words. Your autonomous Life Agent manages your calendar, locks distractions, tracks finances, and places a live cellular voice call to brief you precisely when it counts.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              id="hero-download-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E1E3D] px-8 py-3.5 text-sm font-bold text-[#F0DFAD] shadow-lg shadow-[#0E1E3D]/25 hover:bg-[#162B52] transition-all cursor-pointer border border-[#DFC88A]"
            >
              <span>Download the AI Agent</span>
              <ArrowRight className="w-4 h-4 text-[#F0DFAD]" />
            </button>

            <button
              onClick={onOpenCallSimulator}
              id="hero-see-calls-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#0E1E3D]/25 bg-white px-8 py-3.5 text-sm font-bold text-[#0E1E3D] shadow-xs hover:border-[#0E1E3D]/40 hover:bg-[#F0DFAD]/20 transition-all cursor-pointer"
            >
              <span>See How It Calls You</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Available on iOS & Android</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#0E1E3D]"></span>
              <span>Zero-Trust Bank-Grade Encryption</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0E1E3D]" />
              <span>Direct Cellular Voice Bridge</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive App Mockup Screen */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl">
          
          {/* Floating '20' badge on left */}
          <div className="hidden sm:flex absolute -left-4 lg:-left-6 top-12 z-20 h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl border border-[#0E1E3D]/20 text-[#0E1E3D] font-bold text-lg">
            20
          </div>

          {/* Floating Green Checkmark on right */}
          <div className="hidden sm:flex absolute -right-4 lg:-right-6 top-24 z-20 h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-200 text-emerald-600">
            <Check className="w-6 h-6 stroke-[2.5]" />
          </div>

          {/* Glowing Frame Container in Prussian & Custard */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0E1E3D]/10 via-[#F0DFAD]/25 to-[#0E1E3D]/5 p-2 sm:p-4 border-2 border-[#0E1E3D]/20 shadow-2xl">
            
            {/* White Screen Content Container */}
            <div className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-slate-200/60">
              
              {/* Screen Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E1E3D] text-[#F0DFAD] font-bold text-xs tracking-wider shadow-xs">
                    AI
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0E1E3D]">Good morning, Amanda</h3>
                    <p className="text-xs text-slate-500 font-medium">Monday, September 11 • Proactive Executive Sync Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0DFAD]/30 px-3 py-1 text-xs font-semibold text-[#0E1E3D] border border-[#DFC88A]">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Cellular Link Ready
                  </span>
                </div>
              </div>

              {/* Two Column Grid */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                
                {/* Column 1: YOU SAID */}
                <div className="flex flex-col justify-between rounded-xl bg-slate-50/70 p-4 sm:p-5 border border-slate-200/70">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-semibold tracking-wider text-slate-400">
                      <span>1. YOU SAID (EARLIER TODAY)</span>
                      <span>09:14 AM</span>
                    </div>

                    <div className="rounded-xl bg-white p-4 shadow-xs border border-slate-200/80 flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0E1E3D]/5 text-[#0E1E3D] border border-[#0E1E3D]/15">
                        <Mic className="w-4 h-4 text-[#0E1E3D]" />
                      </div>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                        “Call me 10 minutes before the pitch meeting with David. Give me his key background, target goals, and lock my TikTok and Instagram.”
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50/80 rounded-lg p-2.5 border border-emerald-200/50">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Processed: Calendar event parsed, pitch dossier compiled, app lock armed.</span>
                  </div>
                </div>

                {/* Column 2: AI CALLS YOUR PHONE */}
                <div className="flex flex-col rounded-xl bg-[#0E1E3D]/[0.03] p-4 sm:p-5 border border-[#0E1E3D]/20 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-wider text-[#0E1E3D]">
                      2. AI CALLS YOUR PHONE (11:50 AM)
                    </span>
                    <span className="rounded-full bg-[#F0DFAD] px-2.5 py-0.5 text-[11px] font-bold text-[#0E1E3D] border border-[#DFC88A]">
                      Incoming Voice Call
                    </span>
                  </div>

                  {/* Incoming Call Card */}
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0E1E3D] text-[#F0DFAD] shadow-xs">
                          <Phone className="w-4 h-4 text-[#F0DFAD]" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#0E1E3D]">Personal AI Agent</div>
                          <div className="text-[11px] font-medium text-slate-500">
                            Live Cellular Audio Briefing (00:{audioSeconds < 10 ? `0${audioSeconds}` : audioSeconds})
                          </div>
                        </div>
                      </div>

                      {/* Waveform graphic */}
                      <button 
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0E1E3D]/5 hover:bg-[#F0DFAD]/40 transition-colors cursor-pointer border border-[#0E1E3D]/10"
                        title={isPlayingAudio ? "Pause live wave simulation" : "Play live wave simulation"}
                      >
                        <div className="flex items-center gap-0.5 h-5">
                          <span className={`w-0.5 rounded-full bg-[#0E1E3D] transition-all ${isPlayingAudio ? 'animate-[bounce_0.8s_infinite]' : 'h-2'}`} style={{ height: isPlayingAudio ? '16px' : '6px' }}></span>
                          <span className={`w-0.5 rounded-full bg-[#0E1E3D] transition-all ${isPlayingAudio ? 'animate-[bounce_0.9s_infinite_0.1s]' : 'h-3'}`} style={{ height: isPlayingAudio ? '20px' : '10px' }}></span>
                          <span className={`w-0.5 rounded-full bg-[#C4A65B] transition-all ${isPlayingAudio ? 'animate-[bounce_0.7s_infinite_0.2s]' : 'h-4'}`} style={{ height: isPlayingAudio ? '14px' : '8px' }}></span>
                          <span className={`w-0.5 rounded-full bg-[#0E1E3D] transition-all ${isPlayingAudio ? 'animate-[bounce_1s_infinite_0.15s]' : 'h-2'}`} style={{ height: isPlayingAudio ? '18px' : '5px' }}></span>
                          <span className={`w-0.5 rounded-full bg-[#0E1E3D] transition-all ${isPlayingAudio ? 'animate-[bounce_0.85s_infinite_0.3s]' : 'h-3'}`} style={{ height: isPlayingAudio ? '12px' : '9px' }}></span>
                        </div>
                        <Volume2 className="w-3.5 h-3.5 text-[#0E1E3D] ml-1" />
                      </button>
                    </div>

                    {/* Agent Voice Transcript Bubble */}
                    <div className="mt-3 rounded-lg bg-[#FAF9F6] p-3 text-xs leading-relaxed text-slate-700 border border-slate-100">
                      “David joined the lobby early. Reminder: David’s team is focused on reducing their churn by 18%. Your slides are queued and social media apps are locked for 60 minutes.”
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Lock className="w-3.5 h-3.5 text-[#0E1E3D]" />
                        <span>Distraction Lock: <strong className="text-[#0E1E3D] font-semibold">Active</strong></span>
                      </div>
                      <button
                        onClick={onOpenCallSimulator}
                        className="text-[#0E1E3D] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Tap to reply hands-free →</span>
                      </button>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
