import { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenCallSimulator: () => void;
}

export function Navbar({ onOpenDemo, onOpenCallSimulator }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" id="nav-brand-logo">
          <div className="grid grid-cols-2 gap-1 p-1 bg-[#0E1E3D]/5 rounded-xl border border-[#0E1E3D]/10">
            <div className="h-2.5 w-2.5 rounded-full bg-[#0E1E3D] group-hover:scale-110 transition-transform"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-[#0E1E3D] group-hover:scale-110 transition-transform"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-[#0E1E3D] group-hover:scale-110 transition-transform"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-[#F0DFAD] border border-[#DFC88A] group-hover:scale-110 transition-transform"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0E1E3D]">
            LifeAgent<span className="ml-1 text-xs font-black uppercase px-2 py-0.5 rounded-md bg-[#F0DFAD] text-[#0E1E3D] border border-[#DFC88A]/60">.ai</span>
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-[#0E1E3D] transition-colors">Features</a>
          <a href="#workflow" className="hover:text-[#0E1E3D] transition-colors">How It Calls You</a>
          <a href="#integrations" className="hover:text-[#0E1E3D] transition-colors">Integrations</a>
          <a href="#security" className="hover:text-[#0E1E3D] transition-colors">Security</a>
          <a href="#faq" className="hover:text-[#0E1E3D] transition-colors">FAQ</a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenCallSimulator}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0E1E3D]/5 text-[#0E1E3D] border border-[#0E1E3D]/15 hover:bg-[#F0DFAD]/40 hover:border-[#DFC88A] transition-all cursor-pointer"
            title="Experience how the AI agent dials your phone"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#0E1E3D]" />
            <span>Test Call Sim</span>
          </button>

          <button
            onClick={onOpenDemo}
            className="text-sm font-medium text-slate-600 hover:text-[#0E1E3D] transition-colors cursor-pointer"
          >
            Sign in
          </button>
          <button
            onClick={onOpenDemo}
            id="nav-get-demo-btn"
            className="rounded-full bg-[#0E1E3D] px-5 py-2 text-sm font-semibold text-[#F0DFAD] shadow-sm hover:bg-[#162B52] transition-all cursor-pointer border border-[#0E1E3D]"
          >
            Get demo
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-[#0E1E3D] rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[#0E1E3D]"
          >
            Features
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[#0E1E3D]"
          >
            How It Calls You
          </a>
          <a
            href="#integrations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[#0E1E3D]"
          >
            Integrations
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[#0E1E3D]"
          >
            Security
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[#0E1E3D]"
          >
            FAQ
          </a>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallSimulator();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0E1E3D]/5 py-2.5 text-sm font-semibold text-[#0E1E3D] border border-[#0E1E3D]/20 hover:bg-[#F0DFAD]/30"
            >
              <PhoneCall className="w-4 h-4 text-[#0E1E3D]" />
              <span>Simulate Cellular Call</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full rounded-xl bg-[#0E1E3D] py-2.5 text-sm font-semibold text-[#F0DFAD] hover:bg-[#162B52]"
            >
              Get demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
