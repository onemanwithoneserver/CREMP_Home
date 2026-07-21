import { 
  TrendingUp, 
  Users, 
  Award,
  Headphones,
  CalendarDays,
  Rocket,
  Building2,
  Store,
  Handshake,
  ShieldCheck
} from 'lucide-react';

export const testimonialsData = {
  tag: 'EARLY ACCESS • JOIN BEFORE LAUNCH',
  title: 'Be Among the\nFirst Developers\non CREMP',
  desc: "Join CREMP before public launch and get early access to India's Integrated Commercial Real Estate Platform. List your projects and connect with top brands before anyone else.",
  growthNodes: [
    { icon: Building2, label: 'Anchor\nTenants', pos: 'left-top' },
    { icon: Store, label: 'Retail\nBrands', pos: 'left-bottom' },
    { icon: Handshake, label: 'Institutional\nInvestors', pos: 'right-top' },
    { icon: ShieldCheck, label: 'Verified\nLeads', pos: 'right-bottom' }
  ],
  benefitsTitle: 'Early Access Benefits',
  benefits: [
    { icon: TrendingUp, text: 'Priority visibility for your projects' },
    { icon: Users, text: 'Direct connections with national brands' },
    { icon: Award, text: 'Featured Developer status' },
    { icon: Headphones, text: 'Dedicated leasing support team' },
    { icon: CalendarDays, text: 'Exclusive brand discovery calls' },
    { icon: ShieldCheck, text: 'Pre-launch listing advantage' }
  ],
  buttons: [
    { icon: Rocket, title: 'Join CREMP Now', subtitle: 'Secure your early access spot. Start listing projects.' },
    { icon: CalendarDays, title: 'Schedule\nOnboarding' }
  ],
  bottomDisclaimer: 'Limited early access spots available for developers across India.'
};
