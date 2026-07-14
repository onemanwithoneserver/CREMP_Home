import { 
  Building2, 
  Store, 
  Handshake,
  UserPlus,
  Eye,
  Users,
  Award,
  Headphones,
  CalendarDays,
  Rocket
} from 'lucide-react';

export const foundingData = {
  tag: 'PRE-LAUNCH • LIMITED FOUNDING PARTNERS',
  title: 'Become a\nFounding\nExpansion Partner',
  desc: 'Join CREMP before public launch and position your brand on India\'s Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform.',
  rocketNodes: [
    { icon: Building2, label: 'Commercial\nReal Estate', pos: 'left-top' },
    { icon: Store, label: 'Retail\nBusinesses', pos: 'left-bottom' },
    { icon: Store, label: 'Franchise\nOpportunities', pos: 'right-top' },
    { icon: Handshake, label: 'Business\nConnections', pos: 'right-bottom' }
  ],
  benefitsTitle: 'Early Access Benefits',
  benefits: [
    { icon: UserPlus, text: 'Priority onboarding' },
    { icon: Eye, text: 'Premium launch visibility' },
    { icon: Users, text: 'Early investor reach' },
    { icon: Award, text: 'Featured partner status' },
    { icon: Headphones, text: 'Dedicated onboarding support' },
    { icon: CalendarDays, text: 'Discovery Call assistance' }
  ],
  buttons: [
    { icon: Rocket, title: 'Join CREMP Now', subtitle: 'Secure your founding partner spot' },
    { icon: CalendarDays, title: 'Schedule\nDiscovery Call' }
  ],
  bottomDisclaimer: 'Limited spots available for founding partners across India.'
};
