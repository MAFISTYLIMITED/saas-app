import { useState, type FormEvent } from 'react';
import { X, Check, ArrowRight, Smartphone, Sparkles, ShieldCheck } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string | null;
}

export function DemoModal({ isOpen, onClose, initialPlan }: DemoModalProps) {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPhoneOrEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F0DFAD]/40 px-3 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider">Early Access Preview</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#0E1E3D]">
              {initialPlan ? `Get started with ${initialPlan}` : 'Download LifeAgent.ai'}
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Experience the autonomous life agent. Enter your mobile number or email to receive the direct installation link and your first test cellular voice briefing.
            </p>

            {/* Platform Selection */}
            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Select your mobile OS
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPlatform('ios')}
                  className={`flex items-center justify-center gap-2 rounded-xl p-3 border text-sm font-semibold transition-all cursor-pointer ${
                    platform === 'ios'
                      ? 'border-[#0E1E3D] bg-[#0E1E3D] text-[#F0DFAD] shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-[#0E1E3D]/30'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Apple iOS</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform('android')}
                  className={`flex items-center justify-center gap-2 rounded-xl p-3 border text-sm font-semibold transition-all cursor-pointer ${
                    platform === 'android'
                      ? 'border-[#0E1E3D] bg-[#0E1E3D] text-[#F0DFAD] shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-[#0E1E3D]/30'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Google Android</span>
                </button>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="contact-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Mobile Number or Email
                </label>
                <input
                  id="contact-input"
                  type="text"
                  required
                  placeholder="+1 (555) 019-2834 or amanda@executive.com"
                  value={phoneOrEmail}
                  onChange={(e) => setPhoneOrEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0E1E3D] focus:outline-none focus:ring-2 focus:ring-[#0E1E3D]/20"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-spam guarantee. Data encrypted via AES-256 protocols.</span>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E1E3D] py-3.5 text-sm font-bold text-[#F0DFAD] shadow-md hover:bg-[#162B52] transition-all cursor-pointer border border-[#DFC88A]"
              >
                <span>Send Installation Link</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0DFAD] text-[#0E1E3D] border border-[#DFC88A]">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>

            <h4 className="text-xl font-bold text-[#0E1E3D]">Check your phone!</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              We just dispatched the secure preview invitation for <strong>{platform.toUpperCase()}</strong> to{' '}
              <strong className="text-[#0E1E3D]">{phoneOrEmail}</strong>.
            </p>

            <div className="mt-6 rounded-xl bg-[#FAF9F6] p-4 text-xs text-slate-600 border border-slate-200 text-left space-y-2">
              <div className="font-bold text-[#0E1E3D]">Next Steps:</div>
              <div>1. Open TestFlight / APK link on your device.</div>
              <div>2. Grant mic & screen-time permissions.</div>
              <div>3. Speak your first command: "Brief me before my next call."</div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
