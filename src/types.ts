export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
  learnMoreUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Integration {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  textColor: string;
  iconType: 'asana' | 'ai' | 'notion' | 'gmail' | 'linear' | 'outlook' | 'google' | 'slack' | 'sfdc' | 'spotify' | 'hubspot' | 'stripe' | 'calendar' | 'cash';
  badgeText?: string;
}

export interface VoiceBriefingItem {
  id: string;
  name: string;
  role: string;
  actionText: string;
  actionType: 'call' | 'sms';
  initials: string;
  initialsBg: string;
}

export interface TimelineTask {
  id: string;
  title: string;
  subtitle: string;
  status: 'In progress' | 'Done';
}
