import { useState, type ReactNode } from 'react';
import { ArrowRight, Sparkles, Check, ExternalLink } from 'lucide-react';

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  actionSummary: string;
  icon: ReactNode;
}

interface IntegrationsSectionProps {
  onOpenDemo?: () => void;
  onViewPlans?: () => void;
}

export function IntegrationsSection({ onOpenDemo, onViewPlans }: IntegrationsSectionProps) {
  const [selectedBrand, setSelectedBrand] = useState<BrandItem | null>(null);

  // ROW 1: Pinterest, Coinbase, Wise, Headspace, Airbnb, Uber, Nike, Slack
  const row1Brands: BrandItem[] = [
    {
      id: 'pinterest',
      name: 'Pinterest',
      category: 'Visual Discovery & Moodboards',
      actionSummary: 'Saves design inspirations, recipes, and home renovation boards directly from spoken voice notes.',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 flex-shrink-0" fill="none">
          <circle cx="16" cy="16" r="15" fill="#E60023" />
          <path
            d="M16 8C11.6 8 8 11.6 8 16C8 19.4 10.1 22.3 13.2 23.4C13.1 22.8 13 21.8 13.2 21.1C13.4 20.4 14.5 15.8 14.5 15.8C14.5 15.8 14.2 15.1 14.2 14.2C14.2 12.8 15 11.7 16.1 11.7C17 11.7 17.4 12.4 17.4 13.1C17.4 14 16.8 15.3 16.5 16.6C16.3 17.7 17.1 18.6 18.2 18.6C20.2 18.6 21.7 16.5 21.7 13.4C21.7 10.7 19.8 8.8 16.9 8.8C13.6 8.8 11.7 11.3 11.7 13.9C11.7 14.9 12.1 16 12.5 16.5C12.6 16.6 12.6 16.7 12.6 16.8C12.5 17.2 12.3 17.9 12.2 18.1C12.1 18.3 12 18.4 11.8 18.3C10.5 17.7 9.8 15.8 9.8 13.8C9.8 10.2 12.5 7 17.2 7C21 7 24 9.7 24 13.3C24 17.1 21.6 20.2 18.3 20.2C17.2 20.2 16.2 19.6 15.8 18.9L15.1 21.5C14.8 22.6 14.1 23.9 13.6 24.7C14.4 24.9 15.2 25 16 25C21 25 25 21 25 16C25 11.6 21 8 16 8Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 'coinbase',
      name: 'Coinbase',
      category: 'Crypto & Assets Tracking',
      actionSummary: 'Real-time portfolio surveillance with instant audio alerts when asset thresholds trigger.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#0052FF] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5c2.32 0 4.26 1.59 4.82 3.75h-2.14c-.45-1.04-1.48-1.75-2.68-1.75-1.66 0-3 1.34-3 3s1.34 3 3 3c1.2 0 2.23-.71 2.68-1.75h2.14C16.26 15.41 14.32 17 12 17z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'wise',
      name: 'Wise',
      category: 'Cross-Border FX & Payments',
      actionSummary: 'Executes currency conversions and notifies you when international exchange rates peak favorably.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#9FE870] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#163300">
            <path d="M4 17L8.5 7H16L11.5 12H17L8 21L9.8 15H4Z" stroke="#163300" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      id: 'headspace',
      name: 'Headspace',
      category: 'Mindfulness & Mental Health',
      actionSummary: 'Schedules 5-minute decompress breathing sessions right after demanding back-to-back executive meetings.',
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#F47D31] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <div className="w-3.5 h-3.5 rounded-full bg-white/30"></div>
        </div>
      ),
    },
    {
      id: 'airbnb',
      name: 'Airbnb',
      category: 'Travel & Accommodation',
      actionSummary: 'Pulls itinerary check-in codes, host contact details, and door pins into your proactive pre-flight briefing.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#FF5A5F] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3C8.5 3 6.5 6 6 9.5c-.7 4.2 1.5 8 6 11.5 4.5-3.5 6.7-7.3 6-11.5C17.5 6 15.5 3 12 3z" />
            <circle cx="12" cy="11" r="2.5" />
          </svg>
        </div>
      ),
    },
    {
      id: 'uber',
      name: 'Uber',
      category: 'Autonomous Mobility',
      actionSummary: 'Calls you when landing at airport terminals to automatically hail a ride straight to your hotel.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center flex-shrink-0 shadow-2xs text-white text-[10px] font-extrabold tracking-tight">
          Uber
        </div>
      ),
    },
    {
      id: 'nike',
      name: 'Nike',
      category: 'Athletic & Training Sync',
      actionSummary: 'Logs workout durations and adapts calorie/sleep recovery goals in your daily executive wellness ledger.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-black fill-current">
            <path d="M21.5 8.2c-3.7 2.1-7.7 4.3-11.2 6.6-1.8 1.2-3.7 2.6-5.4 1.7-1.2-.7-.9-2.2.2-3.3 1.8-1.9 4.7-3.3 7.5-4.5 2.7-1.2 5.7-1.9 8.6-2.2.5 0 .8.7.3 1.7z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'Executive Comms',
      actionSummary: 'Triages urgency across 20+ channels, summarizing high-priority board and engineering pings by phone.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center flex-shrink-0 shadow-2xs">
          <div className="grid grid-cols-2 gap-0.5 p-1">
            <span className="h-2 w-2 rounded-xs bg-rose-500"></span>
            <span className="h-2 w-2 rounded-xs bg-amber-500"></span>
            <span className="h-2 w-2 rounded-xs bg-sky-500"></span>
            <span className="h-2 w-2 rounded-xs bg-emerald-500"></span>
          </div>
        </div>
      ),
    },
  ];

  // ROW 2: Creme, Mailchimp, Twitch, ChatGPT, Shopify, Loom, Linear
  const row2Brands: BrandItem[] = [
    {
      id: 'creme',
      name: 'Creme',
      category: 'Culinary & Lifestyle',
      actionSummary: 'Plans dinner reservations and coordinates gourmet weekly menus tailored to nutritional preferences.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-black flex flex-col items-center justify-center flex-shrink-0 shadow-2xs leading-none">
          <span className="text-[9px] font-black text-white font-serif tracking-tighter">CRÈ</span>
          <span className="text-[9px] font-black text-white font-serif tracking-tighter">ME</span>
        </div>
      ),
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      category: 'Email Campaigns & Audience',
      actionSummary: 'Dispatches newsletter metrics and subscriber growth reports during your Monday 9 AM verbal briefing.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#FFE01B] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
            <path d="M12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 00-9-9zm-1.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-2.5 7.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'twitch',
      name: 'Twitch',
      category: 'Live Broadcasts & Creators',
      actionSummary: 'Notifies when your favorite keynotes or gaming streams go live and buffers transcripts automatically.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#9146FF] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-white">
            <path d="M4 2L2 6v14h5v4l4-4h4l7-7V2H4zm14 10.5l-3 3h-4l-2.5 2.5V15.5H5V4h13v8.5zm-3-5h-2v4h2v-4zm-5 0H8v4h2v-4z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      category: 'LLM & Deep Synthesis',
      actionSummary: 'Cross-analyzes heavy research threads and condenses 50-page PDFs into 2-minute spoken summaries.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
            <path d="M20.5 11.2a4.4 4.4 0 00-.4-3.8 4.6 4.6 0 00-3.6-2.2 4.4 4.4 0 00-3.3-1.4 4.5 4.5 0 00-4.3 3.1 4.5 4.5 0 00-2.8 1.4 4.5 4.5 0 00-.9 3.9 4.4 4.4 0 00.4 3.8 4.6 4.6 0 003.6 2.2 4.4 4.4 0 003.3 1.4 4.5 4.5 0 004.3-3.1 4.5 4.5 0 002.8-1.4 4.5 4.5 0 00.9-3.9zM12 18.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm0-5a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0012 13.5z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'shopify',
      name: 'Shopify',
      category: 'E-Commerce Intelligence',
      actionSummary: 'Tracks store GMV, incoming inventory alerts, and flag high-value chargebacks instantly.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#95BF47] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-white">
            <path d="M19.8 6.4L18 5.7c-.1 0-.1 0-.2.1L16 11.4l-.4-.9c-.1-.2-.3-.4-.6-.4H8.4c-.2 0-.4.1-.5.3L6.2 13H5.5L4 8c-.1-.4-.5-.6-.9-.5L2 7.7 5.1 20.8c.1.3.4.5.7.5h12.4c.3 0 .6-.2.7-.5l2-13.6c.1-.4-.2-.7-.6-.8zM12 15.5c-1.4 0-2.5-.9-2.5-2.1 0-1.6 1.7-2 2.5-2.3.9-.3 1.5-.6 1.5-1.1 0-.6-.6-1-1.4-1-.9 0-1.4.4-1.7.9l-1-.6c.5-.9 1.5-1.4 2.7-1.4 1.5 0 2.6.9 2.6 2.1 0 1.6-1.8 2-2.6 2.3-.9.3-1.4.6-1.4 1.1 0 .6.6 1 1.4 1 .8 0 1.5-.4 1.8-1l1 .6c-.5 1-1.6 1.5-2.9 1.5z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'loom',
      name: 'Loom',
      category: 'Async Video Memos',
      actionSummary: 'Listens to team screen recordings, extracts action items, and populates your calendar tasks.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#625DF5]" fill="currentColor">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.9 4.9l2.8 2.8m8.6 8.6l2.8 2.8M4.9 19.1l2.8-2.8m8.6-8.6l2.8-2.8" stroke="#625DF5" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
    {
      id: 'linear',
      name: 'Linear',
      category: 'Engineering & Sprints',
      actionSummary: 'Converts quick spoken bug reports directly into prioritized Linear tickets with assigned teams.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#0E1E3D] flex items-center justify-center flex-shrink-0 shadow-2xs border border-[#162B52]">
          <div className="grid grid-cols-2 gap-1 p-1">
            <span className="h-1.5 w-1.5 rounded-xs bg-[#F0DFAD]"></span>
            <span className="h-1.5 w-1.5 rounded-xs bg-[#F0DFAD]"></span>
            <span className="h-1.5 w-1.5 rounded-xs bg-[#F0DFAD]"></span>
            <span className="h-1.5 w-1.5 rounded-xs bg-[#F0DFAD]"></span>
          </div>
        </div>
      ),
    },
  ];

  // ROW 3: Dropbox, Spotify, Apple TV, Shop, Cosmos, Retro, Notion, Plaid
  const row3Brands: BrandItem[] = [
    {
      id: 'dropbox',
      name: 'Dropbox',
      category: 'Cloud File Vault',
      actionSummary: 'Auto-organizes scanned invoices and receipts, tagging them for end-of-month CPA auditing.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#0061FF] flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M6 3.5L1 7.2l5 3.7 5-3.7-5-3.7zm12 0l-5 3.7 5 3.7 5-3.7-5-3.7zM1 14.6l5 3.7 5-3.7-5-3.7-5 3.7zm17-3.7l-5 3.7 5 3.7 5-3.7-5-3.7zM6 19.8l6 4.2 6-4.2-6-3.7-6 3.7z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'spotify',
      name: 'Spotify',
      category: 'Soundtracks & Deep Focus',
      actionSummary: 'Queues deep-work binaural beats the moment you initiate the App Lock Focus protocol.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center flex-shrink-0 shadow-2xs">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1DB954]">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.436-5.308-1.76-8.793-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.51 9.722 1.113.294.18.386.562.207.857zm1.226-2.723c-.226.367-.706.482-1.072.257-2.69-1.653-6.79-2.131-9.97-1.165-.413.125-.85-.108-.975-.521-.125-.414.108-.85.52-9.75 3.633-1.102 8.163-.568 11.24 1.324.366.225.481.705.257 1.072zm.106-2.835C14.692 8.95 9.222 8.769 6.07 9.725c-.495.15-1.02-.128-1.17-.623-.15-.494.129-1.02.624-1.17 3.632-1.102 9.67-.893 13.435 1.343.447.265.594.845.328 1.292-.266.447-.846.594-1.293.328z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'appletv',
      name: 'Apple TV',
      category: 'Smart Home & Screen Sync',
      actionSummary: 'Casts day-at-a-glance dashboards or meeting timelines straight to home office Apple TV displays.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center flex-shrink-0 shadow-2xs text-white">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white mr-0.5">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.86c.62-.75 1.04-1.8 0.92-2.86-.9.04-2 .6-2.65 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.05-.48 2.67-1.23z" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight">tv</span>
        </div>
      ),
    },
    {
      id: 'shop',
      name: 'Shop',
      category: 'Package Tracking & Deliveries',
      actionSummary: 'Consolidates parcel tracking across USPS, FedEx, and DHL with doorstep delivery announcements.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#5A31F4] flex items-center justify-center flex-shrink-0 shadow-2xs text-white font-extrabold text-[10px] tracking-tight">
          shop
        </div>
      ),
    },
    {
      id: 'cosmos',
      name: 'Cosmos',
      category: 'Curated Taste & Aesthetics',
      actionSummary: 'Syncs visual bookmark collections, art inspirations, and typography clippings effortlessly.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#EAEAEA] border border-slate-200/90 flex items-center justify-center flex-shrink-0 shadow-2xs text-slate-800">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="18" cy="8.5" r="1.5" />
            <circle cx="18" cy="15.5" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
            <circle cx="6" cy="15.5" r="1.5" />
            <circle cx="6" cy="8.5" r="1.5" />
          </svg>
        </div>
      ),
    },
    {
      id: 'retro',
      name: 'Retro',
      category: 'Private Journals & Memories',
      actionSummary: 'Chronicles memorable weekly photos and voice memos into an encrypted visual family timeline.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#1c1a2f] to-[#0d0c15] p-1 border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1c1a2f]/80"></div>
          </div>
        </div>
      ),
    },
    {
      id: 'notion',
      name: 'Notion',
      category: 'Second Brain & Knowledge Base',
      actionSummary: 'Automatically files meeting transcripts, project wikis, and recurring agendas into targeted Notion databases.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-white border border-slate-300 flex items-center justify-center flex-shrink-0 shadow-2xs font-serif font-black text-slate-900 text-sm">
          N
        </div>
      ),
    },
    {
      id: 'plaid',
      name: 'Plaid',
      category: 'Banking & Liquidity Check',
      actionSummary: 'Syncs cash balances across Chase, Silicon Valley Bank, and Mercury for real-time liquidity briefs.',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center flex-shrink-0 shadow-2xs text-white font-bold text-[9px] tracking-tight">
          PLAID
        </div>
      ),
    },
  ];

  // Helper to repeat items so marquee is seamlessly infinite
  const makeMarqueeRow = (items: BrandItem[]) => [...items, ...items, ...items];

  return (
    <section id="integrations" className="py-20 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-[#F0DFAD]/40 px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] tracking-wide mb-4">
            INTEGRATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1E3D]">
            Connect integrations you use every day
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Seamlessly sync with your existing toolstack. Your AI reads and coordinates your schedule, inbox, and financials with 100% precision.
          </p>
        </div>

        {/* Center Top Action Pill Buttons (matching the screenshot) */}
        <div className="mt-8 mb-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenDemo}
            id="integrations-join-free-btn"
            className="inline-flex items-center justify-center rounded-full bg-[#0E1E3D] px-6 py-2.5 text-sm font-bold text-[#F0DFAD] shadow-md hover:bg-[#162B52] transition-all cursor-pointer border border-[#DFC88A]"
          >
            Join for free
          </button>
          <button
            onClick={onViewPlans}
            id="integrations-see-plans-btn"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 border border-slate-200/90 shadow-xs hover:border-[#0E1E3D]/30 hover:bg-[#F0DFAD]/15 transition-all cursor-pointer"
          >
            <span>See our plans</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
          </button>
        </div>

      </div>

      {/* 3 Full-Width Ticker Rows with Side Gradient Masks */}
      <div className="relative w-full overflow-hidden mt-2 space-y-6 sm:space-y-8">
        
        {/* Left and Right Fade Masks for Smooth Edge Dissolve */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

        {/* Row 1: Pinterest, Coinbase, Wise, Headspace, Airbnb, Uber, Nike, Slack */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="animate-marquee-track flex items-center gap-8 sm:gap-14">
            {makeMarqueeRow(row1Brands).map((brand, idx) => (
              <button
                key={`${brand.id}-${idx}`}
                onClick={() => setSelectedBrand(brand)}
                className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl transition-all hover:bg-slate-100/90 cursor-pointer group shrink-0 border border-transparent hover:border-slate-200"
                title={`Click to view ${brand.name} integration details`}
              >
                {brand.icon}
                <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight whitespace-nowrap group-hover:text-[#0E1E3D]">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Creme, Mailchimp, Twitch, ChatGPT, Shopify, Loom, Linear */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="animate-marquee-track-reverse flex items-center gap-8 sm:gap-14">
            {makeMarqueeRow(row2Brands).map((brand, idx) => (
              <button
                key={`${brand.id}-${idx}`}
                onClick={() => setSelectedBrand(brand)}
                className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl transition-all hover:bg-slate-100/90 cursor-pointer group shrink-0 border border-transparent hover:border-slate-200"
                title={`Click to view ${brand.name} integration details`}
              >
                {brand.icon}
                <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight whitespace-nowrap group-hover:text-[#0E1E3D]">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Dropbox, Spotify, Apple TV, Shop, Cosmos, Retro, Notion, Plaid */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="animate-marquee-track-slow flex items-center gap-8 sm:gap-14">
            {makeMarqueeRow(row3Brands).map((brand, idx) => (
              <button
                key={`${brand.id}-${idx}`}
                onClick={() => setSelectedBrand(brand)}
                className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl transition-all hover:bg-slate-100/90 cursor-pointer group shrink-0 border border-transparent hover:border-slate-200"
                title={`Click to view ${brand.name} integration details`}
              >
                {brand.icon}
                <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight whitespace-nowrap group-hover:text-[#0E1E3D]">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Integration Details Modal on Click */}
      {selectedBrand && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedBrand(null)}
        >
          <div 
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                {selectedBrand.icon}
                <div>
                  <h4 className="text-lg font-bold text-[#0E1E3D]">{selectedBrand.name}</h4>
                  <span className="text-xs font-semibold text-slate-500">{selectedBrand.category}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedBrand(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E1E3D] mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC88A]" />
                <span>Autonomous AI Capability</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed bg-[#FAF9F6] p-3.5 rounded-xl border border-slate-200/80">
                {selectedBrand.actionSummary}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>Zero-knowledge API sync</span>
              </div>
              <span className="font-semibold text-[#0E1E3D]">Active in v2.4</span>
            </div>

            <div className="mt-5 flex gap-2.5">
              <button
                onClick={() => {
                  setSelectedBrand(null);
                  onOpenDemo?.();
                }}
                className="flex-1 rounded-xl bg-[#0E1E3D] py-2.5 text-xs font-bold text-[#F0DFAD] hover:bg-[#162B52] transition-colors border border-[#DFC88A]"
              >
                Connect {selectedBrand.name}
              </button>
              <button
                onClick={() => setSelectedBrand(null)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Subtext */}
      <div className="mt-12 text-center">
        <p className="text-xs text-slate-500 font-medium">
          Have a proprietary enterprise stack? <span className="font-semibold text-[#0E1E3D]">LifeAgent.ai</span> supports custom Webhooks and OAuth2 integrations.
        </p>
      </div>

    </section>
  );
}
