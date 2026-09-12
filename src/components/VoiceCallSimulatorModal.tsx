import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Phone, 
  PhoneOff, 
  Mic, 
  Volume2, 
  Shield, 
  Lock, 
  Sparkles, 
  Check 
} from 'lucide-react';

interface VoiceCallSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceCallSimulatorModal({ isOpen, onClose }: VoiceCallSimulatorModalProps) {
  const [callState, setCallState] = useState<'incoming' | 'connected' | 'ended'>('incoming');
  const [seconds, setSeconds] = useState(0);
  const [activeReply, setActiveReply] = useState<string | null>(null);
  const [agentSpeechIndex, setAgentSpeechIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const dialogScripts = [
    {
      text: "“Amanda, David joined the lobby early. Reminder: his team is focused on reducing customer churn by 18%. Your slides are queued, and social media apps are locked for the next 60 minutes.”",
      replies: ["“Got it, I am ready.”", "“Push meeting by 5 minutes.”", "“Remind me of his budget.”"],
    },
    {
      text: "“Understood. I will signal David’s assistant and keep your focus lock armed. Walking into the conference room now.”",
      replies: ["“End briefing.”", "“Mute my notifications.”"],
    },
  ];

  useEffect(() => {
    if (isOpen) {
      setCallState('incoming');
      setSeconds(0);
      setActiveReply(null);
      setAgentSpeechIndex(0);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isOpen]);

  useEffect(() => {
    if (callState === 'connected') {
      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);

  if (!isOpen) return null;

  const handleAccept = () => {
    setCallState('connected');
    // Synthesize simple audio beep if supported
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // AudioContext unavailable or restricted
    }
  };

  const handleDecline = () => {
    setCallState('ended');
    setTimeout(() => {
      onClose();
    }, 800);
  };

  const handleUserReply = (reply: string) => {
    setActiveReply(reply);
    setTimeout(() => {
      if (agentSpeechIndex < dialogScripts.length - 1) {
        setAgentSpeechIndex((idx) => idx + 1);
        setActiveReply(null);
      } else {
        handleDecline();
      }
    }, 1200);
  };

  const formatCallTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Cellular Status Bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-slate-900 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            CELLULAR 5G LINK
          </span>
          <span>HD VOICE PROTOCOL</span>
        </div>

        {/* Call Content */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          
          {/* Agent Avatar */}
          <div className="relative my-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#162B52] border-2 border-[#DFC88A] text-[#F0DFAD] text-2xl font-black shadow-lg shadow-black/40">
              AI
            </div>
            {callState === 'connected' && (
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#F0DFAD] text-[#0E1E3D] border-2 border-slate-950">
                <Sparkles className="w-3 h-3" />
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white">Personal AI Agent</h3>
          <p className="text-xs text-[#F0DFAD] font-semibold mt-1">
            {callState === 'incoming' && 'Incoming Cellular Call...'}
            {callState === 'connected' && `Call in progress (${formatCallTime(seconds)})`}
            {callState === 'ended' && 'Call ended'}
          </p>

          {/* Active Audio Wave when connected */}
          {callState === 'connected' && (
            <div className="my-5 w-full rounded-2xl bg-slate-900/80 p-4 border border-slate-800/80">
              <div className="flex items-center justify-center gap-1.5 h-8 mb-3">
                {[40, 70, 90, 60, 100, 75, 45, 85, 95, 60, 80, 50, 90, 65, 40].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-[#F0DFAD] animate-pulse"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${(i * 0.08).toFixed(2)}s`,
                    }}
                  />
                ))}
              </div>

              {/* Speech Bubble */}
              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed italic bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                {dialogScripts[agentSpeechIndex].text}
              </div>

              {/* Interactive Speech Reply Options */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 text-left flex items-center gap-1">
                  <Mic className="w-3 h-3 text-[#F0DFAD]" />
                  <span>Choose quick spoken reply:</span>
                </div>

                <div className="flex flex-col gap-2">
                  {dialogScripts[agentSpeechIndex].replies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleUserReply(reply)}
                      disabled={activeReply !== null}
                      className={`text-left text-xs font-semibold px-3 py-2 rounded-xl border transition-all cursor-pointer ${
                        activeReply === reply
                          ? 'bg-[#F0DFAD] border-[#DFC88A] text-[#0E1E3D]'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Incoming Call View Actions */}
          {callState === 'incoming' && (
            <div className="mt-8 w-full space-y-4">
              <div className="rounded-xl bg-slate-900/60 p-3.5 text-xs text-slate-300 border border-slate-800/80">
                Incoming proactive voice briefing for <strong>Strategy Meeting</strong> with David.
              </div>

              <div className="pt-4 flex items-center justify-around gap-6">
                <button
                  onClick={handleDecline}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg shadow-rose-600/30 group-hover:scale-105 transition-transform">
                    <PhoneOff className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-slate-400">Decline</span>
                </button>

                <button
                  onClick={handleAccept}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform animate-bounce">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold">Accept Call</span>
                </button>
              </div>
            </div>
          )}

          {/* Connected Call Hangup Button */}
          {callState === 'connected' && (
            <div className="mt-4">
              <button
                onClick={handleDecline}
                className="flex items-center gap-2 rounded-full bg-rose-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-rose-700 transition-colors cursor-pointer"
              >
                <PhoneOff className="w-4 h-4" />
                <span>End Briefing</span>
              </button>
            </div>
          )}

          {callState === 'ended' && (
            <div className="mt-6 text-sm text-slate-400">
              Briefing completed. Meeting files & distraction locks remain active.
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
