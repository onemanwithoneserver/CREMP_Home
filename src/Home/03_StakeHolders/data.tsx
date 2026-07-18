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
        title: 'Premium Asset Showcasing'
      },
      {
        icon: Target,
        title: 'Targeted Buyer Matching'
      },
      {
        icon: Globe,
        title: 'Global Market Reach'
      },
      {
        icon: Zap,
        title: 'Streamlined Deal Closings'
      },
      {
        icon: LineChart,
        title: 'Project Finance Tools'
      },
      {
        icon: Shield,
        title: 'Pre-Leasing Contracts'
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
        title: 'Strategic Site Discovery'
      },
      {
        icon: Users,
        title: 'Verified Franchisee Matching'
      },
      {
        icon: LineChart,
        title: 'Rapid Network Expansion'
      },
      {
        icon: ShieldCheck,
        title: 'Secure Lease Agreements'
      },
      {
        icon: BarChart3,
        title: 'Demographic Analytics'
      },
      {
        icon: Zap,
        title: 'Franchise Marketing'
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
        title: 'Exclusive Off-Market Listings'
      },
      {
        icon: Users,
        title: 'High-Intent Client Network'
      },
      {
        icon: BarChart3,
        title: 'Real-Time Market Analytics'
      },
      {
        icon: CheckCircle2,
        title: 'End-to-End Deal Tracking'
      },
      {
        icon: Zap,
        title: 'Automated Marketing'
      },
      {
        icon: Lock,
        title: 'Commission Management'
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
        title: 'Curated High-Yield Assets'
      },
      {
        icon: Store,
        title: 'Premium Franchise Partnerships'
      },
      {
        icon: LineChart,
        title: 'Data-Backed Valuations'
      },
      {
        icon: ShieldCheck,
        title: 'Secure & Transparent Escrow'
      },
      {
        icon: Briefcase,
        title: 'Portfolio Diversification'
      },
      {
        icon: Zap,
        title: 'Market Trend Alerts'
      }
    ],
    buttonText: 'Explore Investor Solutions'
  }
];

export const statsData = [
  {
    icon: Lock,
    value: '100%',
    label: 'Secure Platform'
  },
  {
    icon: Shield,
    value: 'Verified',
    label: 'Networks'
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users'
  }
];