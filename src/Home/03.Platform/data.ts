import { 
  Building2, 
  Store, 
  Handshake, 
  Lightbulb, 
  Search,
  PlaySquare, 
  Video, 
  UserSearch, 
  Users,
  Megaphone,
  PlayCircle,
  Globe,
  User, 
  BarChart4,
  ShieldCheck,
  FileText,
  Briefcase,
  BadgeCheck,
  Scale,
  UserCheck
} from 'lucide-react';

import devImage from '../images/platform_developers.png';
import franchiseImage from '../images/platform_franchisors.png';
import brokerImage from '../images/platform_brokers.png';
import consultantImage from '../images/platform_consultants.png';
import investorImage from '../images/platform_investors.png';

export const platformTabs = [
  { id: 'developers', label: 'Developers & Owners', icon: Building2 },
  { id: 'franchisors', label: 'Franchisors', icon: Store },
  { id: 'brokers', label: 'Commercial Brokers', icon: Handshake },
  { id: 'consultants', label: 'Consultants', icon: Lightbulb },
  { id: 'investors', label: 'Buyers & Investors', icon: Search }
];

export const platformContent = {
  developers: {
    title: 'Developers & Property Owners',
    subtitle: 'Showcase. Educate. Grow.',
    desc: 'Showcase your commercial projects and properties with rich media and expert content that builds trust and attracts the right investors and tenants.',
    image: devImage,
    tag: 'CREATE OPPORTUNITIES',
    items: [
      { icon: PlaySquare, label: 'Brand Building' },
      { icon: Video, label: 'Video Showcase' },
      { icon: UserSearch, label: 'Commercial Discovery' },
      { icon: Users, label: 'Qualified Leads' }
    ],
    buttonText: 'Explore Developer Solutions'
  },
  franchisors: {
    title: 'Franchise Brands',
    subtitle: 'Expand Your Brand. Create More Impact.',
    desc: 'Showcase your franchise opportunity, educate potential partners through videos and content and expand into new markets seamlessly.',
    image: franchiseImage,
    tag: 'CREATE OPPORTUNITIES',
    items: [
      { icon: Megaphone, label: 'Brand Awareness' },
      { icon: PlayCircle, label: 'Video Explainers' },
      { icon: UserSearch, label: 'Investor Enquiries' },
      { icon: Globe, label: 'Market Expansion' }
    ],
    buttonText: 'Explore Franchisor Solutions'
  },
  brokers: {
    title: 'Commercial Brokers',
    subtitle: 'Build Your Brand. Grow Your Network.',
    desc: 'Showcase exclusive inventory, share market insights and connect with serious buyers, tenants and investors looking for verified properties.',
    image: brokerImage,
    tag: 'ENABLE GROWTH',
    items: [
      { icon: User, label: 'Personal Branding' },
      { icon: Building2, label: 'Inventory Showcase' },
      { icon: Users, label: 'Buyer Connections' },
      { icon: BarChart4, label: 'Lead Management' }
    ],
    buttonText: 'Explore Broker Solutions'
  },
  consultants: {
    title: 'Franchise Consultants',
    subtitle: 'Be the Growth Catalyst.',
    desc: 'Educate brands and investors, showcase your expertise and drive successful expansions by connecting the right people together.',
    image: consultantImage,
    tag: 'ENABLE GROWTH',
    items: [
      { icon: ShieldCheck, label: 'Expert Positioning' },
      { icon: FileText, label: 'Content Publishing' },
      { icon: Users, label: 'Brand Connections' },
      { icon: Briefcase, label: 'Consulting Ops' }
    ],
    buttonText: 'Explore Consultant Solutions'
  },
  investors: {
    title: 'Buyers, Investors & Tenants',
    subtitle: 'Explore. Learn. Decide with Confidence.',
    desc: 'Discover commercial properties and franchise opportunities while learning through expert videos, market insights and business education.',
    image: investorImage,
    tag: 'DISCOVER OPPORTUNITIES',
    items: [
      { icon: BadgeCheck, label: 'Verified Opportunities' },
      { icon: PlaySquare, label: 'Video-Led Discovery' },
      { icon: Scale, label: 'Compare & Shortlist' },
      { icon: UserCheck, label: 'Connect Directly' }
    ],
    buttonText: 'Explore Marketplace'
  }
};
