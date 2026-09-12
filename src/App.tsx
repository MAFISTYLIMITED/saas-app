import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoreInnovationSection } from './components/CoreInnovationSection';
import { FeatureGridSection } from './components/FeatureGridSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { SecuritySection } from './components/SecuritySection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { AppDockAndFooter } from './components/AppDockAndFooter';
import { VoiceCallSimulatorModal } from './components/VoiceCallSimulatorModal';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isCallSimulatorOpen, setIsCallSimulatorOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleOpenDemo = () => {
    setSelectedPlan(null);
    setIsDemoModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 flex flex-col antialiased selection:bg-[#0E1E3D] selection:text-[#F0DFAD]">
      {/* Top Navigation */}
      <Navbar 
        onOpenDemo={handleOpenDemo} 
        onOpenCallSimulator={() => setIsCallSimulatorOpen(true)} 
      />

      {/* Main Landing Page Sections */}
      <main className="flex-1">
        {/* Hero Section with interactive call screen mockup & angled notes */}
        <HeroSection 
          onOpenDemo={handleOpenDemo} 
          onOpenCallSimulator={() => setIsCallSimulatorOpen(true)} 
        />

        {/* Core Innovation: Solve your biggest challenges with real-time calls */}
        <CoreInnovationSection />

        {/* Feature Grid: Keep everything in one place (4 detailed interactive cards) */}
        <FeatureGridSection />

        {/* Integrations: Connect integrations you use every day */}
        <IntegrationsSection 
          onOpenDemo={handleOpenDemo}
          onViewPlans={() => {
            const el = document.getElementById('pricing');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Workflow: How Personal AI runs your day */}
        <WorkflowSection />

        {/* Security & Privacy */}
        <SecuritySection />

        {/* Pricing: Simple pricing plans with Monthly/Annual switch */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* FAQ: Frequently asked questions */}
        <FaqSection />

        {/* CTA Banner: Stop managing your life manually */}
        <CtaBanner 
          onOpenDemo={handleOpenDemo} 
          onOpenCallSimulator={() => setIsCallSimulatorOpen(true)} 
        />
      </main>

      {/* Floating App Ribbon Dock & Footer */}
      <AppDockAndFooter />

      {/* Interactive Cellular Voice Call Simulator Modal */}
      <VoiceCallSimulatorModal 
        isOpen={isCallSimulatorOpen}
        onClose={() => setIsCallSimulatorOpen(false)}
      />

      {/* VIP Demo & Installation Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialPlan={selectedPlan}
      />
    </div>
  );
}

