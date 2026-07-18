import { 
  Building2, 
  Store, 
  User, 
  Users, 
  LineChart, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Shield,
  Target,
  Globe,
  Zap,
  MapPin,
  Briefcase,
  BarChart3
} from 'lucide-react';

export const stakeholdersData = [
  {
    id: 'franchisors',
    label: 'Franchisors',
    icon: Store,
    title: 'Expand Your Brand. Create More Impact.',
    description: 'Showcase your franchise opportunity, educate potential partners through videos and content and expand into new markets.',
    features: [
      { icon: Zap, title: 'Brand Awareness', colorFamily: 'rose' },
      { icon: Target, title: 'Video Explainers', colorFamily: 'purple' },
      { icon: Users, title: 'Investor Enquiries', colorFamily: 'emerald' },
      { icon: Globe, title: 'Market Expansion', colorFamily: 'blue' }
    ],
    buttonText: 'Explore Franchisor Solutions'
  },
  {
    id: 'investors',
    label: 'Buyers,\nInvestors & Tenants',
    icon: Users,
    title: 'Explore. Learn. Decide with Confidence.',
    description: 'Discover commercial properties, franchise opportunities and retail business opportunities while learning through expert videos, market insights and business education before making your next move.',
    features: [
      { icon: Building2, title: 'Commercial Properties', colorFamily: 'emerald' },
      { icon: Store, title: 'Franchise Opportunities', colorFamily: 'rose' },
      { icon: Briefcase, title: 'Retail Business Opportunities', colorFamily: 'cyan' },
      { icon: Target, title: 'Expert Videos & Insights', colorFamily: 'amber' },
      { icon: ShieldCheck, title: 'Verified Opportunities', colorFamily: 'purple' },
      { icon: Zap, title: 'Video-Led Discovery', colorFamily: 'cyan' }
    ],
    buttonText: 'Explore Marketplace'
  },
  {
    id: 'developers',
    label: 'Developers\n& Property Owners',
    icon: Building2,
    title: 'Showcase. Educate. Grow.',
    description: 'Showcase your commercial projects and properties with rich media and expert content that builds trust and attracts the right investors and tenants.',
    features: [
      { icon: Target, title: 'Brand Building', colorFamily: 'rose' },
      { icon: Target, title: 'Video Showcase', colorFamily: 'blue' },
      { icon: Globe, title: 'Commercial Discovery', colorFamily: 'amber' },
      { icon: Users, title: 'Qualified Leads', colorFamily: 'emerald' }
    ],
    buttonText: 'Explore Developer Solutions'
  },
  {
    id: 'consultants',
    label: 'Franchise\nConsultants',
    icon: Briefcase,
    title: 'Be the Growth Catalyst.',
    description: 'Educate brands and investors, showcase your expertise and drive successful expansions together.',
    features: [
      { icon: ShieldCheck, title: 'Expert Positioning', colorFamily: 'emerald' },
      { icon: BarChart3, title: 'Content Publishing', colorFamily: 'blue' },
      { icon: Users, title: 'Brand & Investor Connections', colorFamily: 'cyan' },
      { icon: Briefcase, title: 'Consulting Opportunities', colorFamily: 'amber' }
    ],
    buttonText: 'Explore Consultant Solutions'
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
    label: 'Networks',
    colorFamily: 'emerald'
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users',
    colorFamily: 'purple'
  }
];