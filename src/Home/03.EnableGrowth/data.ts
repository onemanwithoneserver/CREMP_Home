import { 
  Handshake, 
  Lightbulb, 
  User, 
  Building2, 
  Users, 
  BarChart4,
  ShieldCheck,
  FileText,
  Briefcase
} from 'lucide-react';

export const brokerData = {
  title: 'Commercial Brokers',
  icon: Handshake,
  subtitle: 'Build Your Brand. Grow Your Network.',
  desc: 'Showcase exclusive inventory, share market insights and connect with serious buyers, tenants and investors.',
  buttonText: 'Explore Broker Solutions →',
  items: [
    { icon: User, label: 'Personal\nBranding' },
    { icon: Building2, label: 'Inventory\nShowcase' },
    { icon: Users, label: 'Buyer\nConnections' },
    { icon: BarChart4, label: 'Lead\nManagement' }
  ]
};

export const consultantData = {
  title: 'Franchise Consultants',
  icon: Lightbulb,
  subtitle: 'Be the Growth Catalyst.',
  desc: 'Educate brands and investors, showcase your expertise and drive successful expansions together.',
  buttonText: 'Explore Consultant Solutions →',
  items: [
    { icon: ShieldCheck, label: 'Expert\nPositioning' },
    { icon: FileText, label: 'Content\nPublishing' },
    { icon: Users, label: 'Brand & Investor\nConnections' },
    { icon: Briefcase, label: 'Consulting\nOpportunities' }
  ]
};