import { useState, useEffect } from 'react';
import { Lock, CheckCircle2, Phone, MessageSquare, Clock, ShieldAlert } from 'lucide-react';
import { VoiceBriefingItem, TimelineTask } from '../types';

export function FeatureGridSection() {
  // Live ticking countdown for the App Lock card
  const [secondsRemaining, setSecondsRemaining] = useState(4 * 3600 + 21 * 60 + 58);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => (prev > 0 ? prev - 1 : 4 * 3600 + 21 * 60 + 58));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSecs: number) => {
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    return {
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
    };
  };

  const timerDisplay = formatTime(secondsRemaining);

  const voiceQueueItems: VoiceBriefingItem[] = [
    {
      id: '1',
      name: 'Alex Mercer (Client)',
      role: 'Quarterly review briefing',
      actionText: 'Call at 2:00 PM',
      actionType: 'call',
      initials: 'AM',
      initialsBg: 'bg-[#0E1E3D]',
    },
    {
      id: '2',
      name: 'Sarah Kim (Ops)',
      role: 'Budget review approval',
      actionText: 'Automated SMS',
      actionType: 'sms',
      initials: 'SK',
      initialsBg: 'bg-[#162B52]',
    },
  ];

  const timelineTasks: TimelineTask[] = [
    {
      id: '1',
      title: 'Sprint Strategy Review',
      subtitle: 'Auto-delegated 4 tasks to marketing team',
      status: 'In progress',
    },
    {
      id: '2',
      title: 'Vendor contract sign-off',
      subtitle: 'Verified by Legal agent & signed via DocuSign',
      status: 'Done',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-[#F0DFAD]/40 px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] tracking-wide mb-4">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0E1E3D]">
            Keep everything in one place
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
            Forget complex project management tools. Your agent coordinates communications, calendars, focus windows, and personal wealth.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Seamless Voice Coordination */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            {/* Mock Screen UI */}
            <div className="rounded-2xl bg-[#FAF9F6] p-5 border border-slate-200/70 mb-6">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/60">
                <span className="text-xs font-bold text-[#0E1E3D]">Voice Briefing Queue</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  Ready to dial
                </span>
              </div>

              <div className="space-y-3">
                {voiceQueueItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between bg-white rounded-xl p-3 border border-slate-200/80 shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full ${item.initialsBg} text-[#F0DFAD] text-xs font-bold flex items-center justify-center shadow-xs`}>
                        {item.initials}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0E1E3D]">{item.name}</div>
                        <div className="text-[11px] text-slate-500">{item.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#0E1E3D] bg-[#0E1E3D]/5 px-2.5 py-1 rounded-lg border border-[#0E1E3D]/10">
                      {item.actionType === 'call' ? (
                        <Phone className="w-3 h-3 text-[#0E1E3D]" />
                      ) : (
                        <MessageSquare className="w-3 h-3 text-[#162B52]" />
                      )}
                      <span>{item.actionText}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Copy */}
            <div>
              <h3 className="text-xl font-bold text-[#0E1E3D]">Seamless Voice Coordination</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Work together with your agent effortlessly; manage your agenda, brief partners before meetings, and update project commitments without typing a word.
              </p>
            </div>
          </div>

          {/* Card 2: Time Management & Focus Tools */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            {/* Mock Screen UI */}
            <div className="rounded-2xl bg-[#FAF9F6] p-5 border border-slate-200/70 mb-6">
              <div className="grid grid-cols-2 gap-4">
                
                {/* Focus Hours Bar Chart */}
                <div className="rounded-xl bg-white p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E1E3D]/60">FOCUS HOURS</span>
                  
                  {/* Visual Bar Chart */}
                  <div className="mt-4 flex items-end justify-between gap-1.5 h-16 pt-2">
                    <div className="w-full bg-[#0E1E3D]/20 rounded-t h-[40%]"></div>
                    <div className="w-full bg-[#0E1E3D]/40 rounded-t h-[60%]"></div>
                    <div className="w-full bg-[#0E1E3D]/60 rounded-t h-[50%]"></div>
                    <div className="w-full bg-[#0E1E3D] rounded-t h-[90%]"></div>
                    <div className="w-full bg-[#C4A65B] rounded-t h-[75%]"></div>
                  </div>

                  <div className="mt-3 text-xs font-bold text-[#0E1E3D]">
                    6.5 hrs <span className="font-normal text-slate-500">Today</span>
                  </div>
                </div>

                {/* Deep Work Circular Gauge */}
                <div className="rounded-xl bg-white p-4 border border-slate-200/80 shadow-xs flex flex-col justify-between items-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E1E3D]/60">DEEP WORK GOAL</span>
                  
                  {/* Donut progress ring */}
                  <div className="relative my-2 flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#0E1E3D]"
                        strokeDasharray="78, 100"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-extrabold text-[#0E1E3D]">78%</span>
                  </div>

                  <div className="text-[11px] text-slate-500 font-medium">
                    1.2 hrs remaining
                  </div>
                </div>

              </div>
            </div>

            {/* Card Copy */}
            <div>
              <h3 className="text-xl font-bold text-[#0E1E3D]">Time Management & Focus Tools</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Optimize your time with integrated tools like high-priority timers, proactive voice reminders, and dynamic schedule reorganization.
              </p>
            </div>
          </div>

          {/* Card 3: Advanced Autonomous Task Tracking */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            {/* Mock Screen UI */}
            <div className="rounded-2xl bg-[#FAF9F6] p-5 border border-slate-200/70 mb-6">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/60">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E1E3D]">
                  <span className="h-2 w-2 rounded-full bg-[#C4A65B]"></span>
                  <span>Project Timeline</span>
                </div>
                <span className="text-[11px] font-semibold text-[#0E1E3D] bg-[#0E1E3D]/5 px-2 py-0.5 rounded-full border border-[#0E1E3D]/10">
                  In progress
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0E1E3D]">Sprint Strategy Review</span>
                    <span className="text-[10px] font-bold text-[#0E1E3D] bg-[#F0DFAD] px-2 py-0.5 rounded-full border border-[#DFC88A]">Auto</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Auto-delegated 4 tasks to marketing team</p>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0E1E3D] line-through opacity-60">Vendor contract sign-off</div>
                    <div className="text-[11px] text-slate-400">Completed at 11:30 AM</div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Done</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Card Copy */}
            <div>
              <h3 className="text-xl font-bold text-[#0E1E3D]">Advanced Autonomous Task Tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A bird’s eye view of your entire personal commitments and productivity without ever getting bogged down in manual status tagging.
              </p>
            </div>
          </div>

          {/* Card 4: Customizable Workspaces & App Locks */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            {/* Mock Screen UI */}
            <div className="rounded-2xl bg-[#FAF9F6] p-5 border border-slate-200/70 mb-6 flex flex-col items-center justify-center text-center">
              
              {/* Strict Lock Pill */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F0DFAD] px-3.5 py-1 text-xs font-bold text-[#0E1E3D] border border-[#DFC88A] shadow-xs mb-3">
                <Lock className="w-3 h-3 text-[#0E1E3D]" />
                <span>Strict Distraction Lock</span>
              </div>

              {/* Big Countdown Timer */}
              <div className="my-2 text-3xl sm:text-4xl font-black tracking-widest text-[#0E1E3D] font-mono">
                {timerDisplay.hours} : {timerDisplay.minutes} : {timerDisplay.seconds}
              </div>

              {/* Distraction note */}
              <p className="text-xs text-slate-500 font-medium mt-1">
                Instagram, YouTube, and X locked until goal completion
              </p>
            </div>

            {/* Card Copy */}
            <div>
              <h3 className="text-xl font-bold text-[#0E1E3D]">Customizable Workspaces & App Locks</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Tailor your personal dashboard with smart widgets, automated application locks, and contextual alerts that silence digital chaos.
              </p>
            </div>
          </div>

        </div>

        {/* Small footer text */}
        <div className="mt-12 text-center">
          <p className="text-xs font-medium text-slate-400 italic">
            and a lot more proactive features...
          </p>
        </div>

      </div>
    </section>
  );
}
