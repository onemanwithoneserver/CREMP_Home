import { 
  Building2, 
  Store, 
  Users, 
  ShieldCheck, 
  Lock, 
  Shield,
  Target,
  Globe,
  Zap,
  Briefcase,
  BarChart3
} from 'lucide-react';

export const stakeholdersData = [
  {
    id: 'franchisors',
    label: 'Franchisors',
    icon: Store,
    title: 'Expand Your Brand. Maximize Your Impact.',
    features: [
      { icon: Zap, title: 'Brand Awareness', colorFamily: 'rose' },
      { icon: Target, title: 'Video Explainers', colorFamily: 'purple' },
      { icon: Users, title: 'Investor Inquiries', colorFamily: 'emerald' },
      { icon: Globe, title: 'Market Expansion', colorFamily: 'blue' }
    ],
    buttonText: 'Explore Franchisor Solutions',
    stats: [
      { icon: Building2, value: '2,500+', label: 'Active Franchises' },
      { icon: Users, value: '18,000+', label: 'Investor Connections' },
      { icon: Globe, value: '120+', label: 'Markets Reached' },
      { icon: BarChart3, value: '98%', label: 'Success Rate' }
    ]
  },
  {
    id: 'investors',
    label: 'Buyers,\nInvestors & Tenants',
    icon: Users,
    title: 'Explore. Learn. Invest with Confidence.',
    features: [
      { icon: Building2, title: 'Commercial Properties', colorFamily: 'emerald' },
      { icon: Store, title: 'Franchise Opportunities', colorFamily: 'rose' },
      { icon: Briefcase, title: 'Retail Opportunities', colorFamily: 'cyan' },
      { icon: Target, title: 'Expert Insights', colorFamily: 'amber' },
      { icon: ShieldCheck, title: 'Verified Listings', colorFamily: 'purple' },
      { icon: Zap, title: 'Video-Led Discovery', colorFamily: 'cyan' }
    ],
    buttonText: 'Explore Marketplace',
    stats: [
      { icon: ShieldCheck, value: '15,000+', label: 'Verified Listings' },
      { icon: Store, value: '500+', label: 'Exclusive Brands' },
      { icon: Users, value: '10K+', label: 'Active Investors' },
      { icon: Zap, value: '24/7', label: 'Platform Access' }
    ]
  },
  {
    id: 'developers',
    label: 'Developers\n& Property Owners',
    icon: Building2,
    title: 'Showcase. Engage. Grow.',
    features: [
      { icon: Target, title: 'Brand Building', colorFamily: 'rose' },
      { icon: Target, title: 'Immersive Showcases', colorFamily: 'blue' },
      { icon: Globe, title: 'Project Discovery', colorFamily: 'amber' },
      { icon: Users, title: 'Qualified Leads', colorFamily: 'emerald' }
    ],
    buttonText: 'Explore Developer Solutions',
    stats: [
      { icon: Zap, value: '$2B+', label: 'Asset Value' },
      { icon: Building2, value: '1,200+', label: 'Premium Projects' },
      { icon: Users, value: '8,500+', label: 'Qualified Leads' },
      { icon: BarChart3, value: '95%', label: 'Occupancy Rate' }
    ]
  },
  {
    id: 'consultants',
    label: 'Franchise\nConsultants',
    icon: Briefcase,
    title: 'Be the Catalyst for Growth.',
    features: [
      { icon: ShieldCheck, title: 'Expert Positioning', colorFamily: 'emerald' },
      { icon: BarChart3, title: 'Content Publishing', colorFamily: 'blue' },
      { icon: Users, title: 'Strategic Connections', colorFamily: 'cyan' },
      { icon: Briefcase, title: 'Consulting Opportunities', colorFamily: 'amber' }
    ],
    buttonText: 'Explore Consultant Solutions',
    stats: [
      { icon: Briefcase, value: '500+', label: 'Top Consultants' },
      { icon: Target, value: '3,000+', label: 'Successful Deals' },
      { icon: Globe, value: '50+', label: 'Global Regions' },
      { icon: ShieldCheck, value: '100%', label: 'Verified Network' }
    ]
  }
];

export const statsData = [
  {
    icon: Lock,
    value: '100%',
    label: 'Secure Platform',
    colorFamily: 'blue'
  },
  {
    icon: Shield,
    value: 'Verified',
    label: 'Networks & Listings',
    colorFamily: 'emerald'
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users',
    colorFamily: 'purple'
  }
];