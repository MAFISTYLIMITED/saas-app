import { 
  MessageSquare, 
  Check, 
  Calendar, 
  Flag, 
  Trophy, 
  Wifi, 
  Timer, 
  Lightbulb, 
  Share2 
} from 'lucide-react';

export function AppDockAndFooter() {
  const dockIcons = [
    { id: 'chat', label: 'Voice Notes', icon: MessageSquare, color: 'text-[#0E1E3D] bg-[#F0DFAD]/40 border border-[#DFC88A]' },
    { id: 'num', label: 'Day Count', customText: '20', color: 'text-[#F0DFAD] bg-[#0E1E3D] font-bold text-xs' },
    { id: 'check', label: 'Task Verified', icon: Check, color: 'text-emerald-700 bg-emerald-50 border border-emerald-200' },
    { id: 'calendar', label: 'Calendar Sync', icon: Calendar, color: 'text-[#0E1E3D] bg-slate-100' },
    { id: 'flag', label: 'Milestones', icon: Flag, color: 'text-[#0E1E3D] bg-[#F0DFAD]/30 border border-[#DFC88A]' },
    { id: 'trophy', label: 'Streaks', icon: Trophy, color: 'text-[#0E1E3D] bg-amber-50' },
    { id: 'wifi', label: 'Cellular Bridge', icon: Wifi, color: 'text-[#0E1E3D] bg-sky-50' },
    { id: 'timer', label: 'Focus Lock', icon: Timer, color: 'text-rose-700 bg-rose-50' },
    { id: 'lightbulb', label: 'Insights', icon: Lightbulb, color: 'text-[#0E1E3D] bg-[#F0DFAD]/40 border border-[#DFC88A]' },
    { id: 'share', label: 'Export', icon: Share2, color: 'text-slate-600 bg-slate-100' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Floating App Dock Ribbon */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white p-2 sm:p-2.5 shadow-xl border border-slate-200/90 overflow-x-auto max-w-full">
            {dockIcons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full ${item.color} shadow-xs transition-transform hover:scale-110 cursor-pointer`}
                  title={item.label}
                >
                  {Icon ? <Icon className="w-4 h-4" /> : <span>{item.customText}</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="grid grid-cols-2 gap-1 p-1">
                <div className="h-2.5 w-2.5 rounded-full bg-[#0E1E3D]"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#0E1E3D]"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#0E1E3D]"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#F0DFAD] border border-[#DFC88A]"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0E1E3D]">
                LifeAgent<span className="text-[#0E1E3D]/60 font-semibold">.ai</span>
              </span>
            </a>

            <p className="text-sm font-semibold text-[#0E1E3D]">
              Stay organized and boost your productivity.
            </p>

            <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
              The autonomous executive assistant that places proactive voice briefings directly to your mobile phone before critical meetings and locks distractions.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Cellular Gateways: Operational (99.99%)</span>
            </div>
          </div>

          {/* Links: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1E3D] mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-[#0E1E3D] transition-colors">Features</a></li>
              <li><a href="#workflow" className="hover:text-[#0E1E3D] transition-colors">How It Calls You</a></li>
              <li><a href="#features" className="hover:text-[#0E1E3D] transition-colors">Distraction App Locks</a></li>
              <li><a href="#integrations" className="hover:text-[#0E1E3D] transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-[#0E1E3D] transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1E3D] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">Executive Team</a></li>
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">Careers <span className="text-[10px] text-[#0E1E3D] font-bold bg-[#F0DFAD] px-1.5 py-0.5 rounded-full border border-[#DFC88A]">Hiring</span></a></li>
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">Press & Media</a></li>
              <li><a href="#security" className="hover:text-[#0E1E3D] transition-colors">Security Whitepaper</a></li>
            </ul>
          </div>

          {/* Links: Legal & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E1E3D] mb-4">
              Legal & Docs
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">Telecom Compliance</a></li>
              <li><a href="#faq" className="hover:text-[#0E1E3D] transition-colors">FAQ & Support</a></li>
              <li><a href="#" className="hover:text-[#0E1E3D] transition-colors">API & Webhooks</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 LifeAgent.ai Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#0E1E3D] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0E1E3D] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#0E1E3D] transition-colors">Security</a>
            <a href="#" className="hover:text-[#0E1E3D] transition-colors">Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
