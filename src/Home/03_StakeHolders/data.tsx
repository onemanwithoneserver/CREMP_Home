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
    id: 'developers',
    label: 'Developers\n& Owners',
    icon: Building2,
    title: 'Showcase. Connect. Grow.',
    features: [
      {
        icon: Building2,
        title: 'Premium Asset Showcasing',
        colorFamily: 'rose'
      },
      {
        icon: Target,
        title: 'Targeted Buyer Matching',
        colorFamily: 'blue'
      },
      {
        icon: Globe,
        title: 'Global Market Reach',
        colorFamily: 'blue'
      },
      {
        icon: Zap,
        title: 'Streamlined Deal Closings',
        colorFamily: 'amber'
      },
      {
        icon: LineChart,
        title: 'Project Finance Tools',
        colorFamily: 'emerald'
      },
      {
        icon: Shield,
        title: 'Pre-Leasing Contracts',
        colorFamily: 'cyan'
      }
    ],
    buttonText: 'Explore Solutions'
  },
  {
    id: 'franchisors',
    label: 'Franchisors',
    icon: Store,
    title: 'Expand Your Brand Seamlessly.',
    features: [
      {
        icon: MapPin,
        title: 'Strategic Site Discovery',
        colorFamily: 'rose'
      },
      {
        icon: Users,
        title: 'Verified Franchisee Matching',
        colorFamily: 'purple'
      },
      {
        icon: LineChart,
        title: 'Rapid Network Expansion',
        colorFamily: 'emerald'
      },
      {
        icon: ShieldCheck,
        title: 'Secure Lease Agreements',
        colorFamily: 'blue'
      },
      {
        icon: BarChart3,
        title: 'Demographic Analytics',
        colorFamily: 'cyan'
      },
      {
        icon: Zap,
        title: 'Franchise Marketing',
        colorFamily: 'amber'
      }
    ],
    buttonText: 'Explore Franchisor Solutions'
  },
  {
    id: 'brokers',
    label: 'Commercial\nBrokers',
    icon: User,
    title: 'Amplify Your Brokerage Reach.',
    features: [
      {
        icon: Briefcase,
        title: 'Exclusive Off-Market Listings',
        colorFamily: 'emerald'
      },
      {
        icon: Users,
        title: 'High-Intent Client Network',
        colorFamily: 'blue'
      },
      {
        icon: BarChart3,
        title: 'Real-Time Market Analytics',
        colorFamily: 'cyan'
      },
      {
        icon: CheckCircle2,
        title: 'End-to-End Deal Tracking',
        colorFamily: 'emerald'
      },
      {
        icon: Zap,
        title: 'Automated Marketing',
        colorFamily: 'amber'
      },
      {
        icon: Lock,
        title: 'Commission Management',
        colorFamily: 'purple'
      }
    ],
    buttonText: 'Explore Broker Solutions'
  },
  {
    id: 'investors',
    label: 'Buyers\n& Investors',
    icon: Users,
    title: 'Discover High-Yield Assets.',
    features: [
      {
        icon: Building2,
        title: 'Curated High-Yield Assets',
        colorFamily: 'emerald'
      },
      {
        icon: Store,
        title: 'Premium Franchise Partnerships',
        colorFamily: 'rose'
      },
      {
        icon: LineChart,
        title: 'Data-Backed Valuations',
        colorFamily: 'cyan'
      },
      {
        icon: ShieldCheck,
        title: 'Secure & Transparent Escrow',
        colorFamily: 'amber'
      },
      {
        icon: Briefcase,
        title: 'Portfolio Diversification',
        colorFamily: 'purple'
      },
      {
        icon: Zap,
        title: 'Market Trend Alerts',
        colorFamily: 'cyan'
      }
    ],
    buttonText: 'Explore Investor Solutions'
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