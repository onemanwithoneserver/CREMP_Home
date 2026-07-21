import { 
  Search, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';

export const heroData = {
  tag: 'FOR INVESTORS • DISCOVER OPPORTUNITIES',
  titleHighlight: 'Investment.',
  desc: "Powered by India's Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform, CREMP helps you discover pre-qualified franchise opportunities, explore commercial spaces, connect with trusted brands and make informed investment decisions—all through one connected ecosystem.",
  buttons: [
    { text: 'Explore Opportunities', icon: Search, variant: 'primary' },
    { text: 'Schedule a Call', icon: Calendar, variant: 'outline' }
  ],
  features: [
    { icon: Building2, text: 'Direct\nBrand Access' },
    { icon: ShieldCheck, text: 'Pre-Qualified\nOpportunities' },
    { icon: MapPin, text: 'Micro Market\nInsights' }
  ]
};
