import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'How does the AI actually call my phone?',
      answer:
        'The agent integrates with global telecom carriers via secure WebRTC and SIP gateways. When a scheduled briefing or critical calendar threshold arrives, our automated dialer places a real cellular phone call to your registered phone number. You can answer on your handset, Apple CarPlay, or Bluetooth headphones and converse in natural dialogue.',
    },
    {
      id: 'faq-2',
      question: 'Can I talk back to the agent during the phone call?',
      answer:
        'Yes! The call is a real-time, ultra-low latency duplex conversation. You can interrupt, ask questions, tell the agent to reschedule meetings, or dictate new tasks. All verbal updates immediately sync across your calendars, linked task boards, and messaging channels.',
    },
    {
      id: 'faq-3',
      question: 'How does the App Lock feature prevent distractions?',
      answer:
        'Using native Screen Time APIs on iOS and Accessibility profiles on Android, the agent locks down selected non-essential apps (like TikTok, Instagram, X, or YouTube) during active focus blocks or countdowns. You can configure emergency override codes or strict mode.',
    },
    {
      id: 'faq-4',
      question: 'Is my financial and personal data safe?',
      answer:
        'Absolutely. All credentials and sensitive data are encrypted with AES-256 and stored in zero-trust enclaves. We use read-only OAuth tokens for calendar and banking integrations, and we never share, sell, or use your private conversations to train public AI models.',
    },
    {
      id: 'faq-5',
      question: "Can I customize the agent's voice and calling schedule?",
      answer:
        "Yes. You can choose from multiple warm, professional voice profiles, specify quiet hours when calls are routed to silent text briefings, and configure custom triggers like 'Call me 10 minutes before any meeting with external clients.'",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-[#F0DFAD]/40 px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] tracking-wide mb-4">
            Support & FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1E3D]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Everything you need to know about proactive voice calls and automated daily rhythm.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#0E1E3D]/30 bg-[#FAF9F6] shadow-xs' : 'border-slate-200/80 bg-white hover:border-[#0E1E3D]/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0E1E3D] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0E1E3D] text-[#F0DFAD]' : 'bg-[#0E1E3D]/5 text-[#0E1E3D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
