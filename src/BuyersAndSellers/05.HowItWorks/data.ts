import { 
  UserPlus, 
  SlidersHorizontal, 
  Search, 
  MessageSquare, 
  Handshake,
  ArrowRight
} from 'lucide-react';

export const howItWorksData = {
  tag: 'HOW IT WORKS',
  titleBase: 'How It Works.',
  titleHighlight: 'Simple & Transparent.',
  desc: [
    "From registration to closing your real estate deal, CREMP integrates multiple external data sources to make the journey seamless.",
    "Follow a clear, structured path to buy or sell properties."
  ],
  steps: [
    { icon: UserPlus, step: '01', title: 'Create Profile', desc: 'Register as a buyer or seller with your basic real estate requirements.', color: 'teal' },
    { icon: SlidersHorizontal, step: '02', title: 'Set Preferences', desc: 'Define your budget, target locations, property type, and timeline.', color: 'blue' },
    { icon: Search, step: '03', title: 'Explore Networks', desc: 'Browse integrated listings from Zillow, LoopNet, Realtor.com, and more.', color: 'teal' },
    { icon: MessageSquare, step: '04', title: 'Contact Agents', desc: 'Directly message brokers, schedule property tours, and access full reports.', color: 'blue' },
    { icon: Handshake, step: '05', title: 'Close the Deal', desc: 'Finalize your purchase or sale and secure your new property.', color: 'teal' }
  ],
  connectorIcon: ArrowRight,
  outcome: {
    tag: 'OUTCOME',
    lines: ['Clear process.', 'Trusted networks.', 'Smart real estate.']
  }
};
