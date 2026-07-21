import { 
  Store, 
  Building2, 
  Briefcase, 
  TrendingUp,
  Search,
  Handshake
} from 'lucide-react';

export const opportunitiesData = {
  tag: 'EXPLORE OPPORTUNITIES',
  titleBase: 'Your Opportunities.',
  titleHighlight: 'Your Choice.',
  desc: [
    "Whether you're looking for a franchise to invest in, a retail space to launch your brand, or a commercial property to grow your portfolio—CREMP brings them all together.",
    "Browse verified opportunities from trusted brands across India."
  ],
  showcaseMenu: [
    { icon: Store, text: 'Franchise Brands' },
    { icon: Building2, text: 'Commercial Spaces' },
    { icon: Briefcase, text: 'Business Resale' },
    { icon: TrendingUp, text: 'Growth Sectors' },
    { icon: Search, text: 'Micro Market Search' },
    { icon: Handshake, text: 'Direct Connections' }
  ],
  tabletStats: [
    { value: '500+', label: 'Brands' },
    { value: '100+', label: 'Cities' },
    { value: '50K+', label: 'Opportunities' },
    { value: '4.9/5', label: 'Investor Rating' }
  ],
  outcome: {
    tag: 'OUTCOME',
    text: 'Discover the right opportunity before you invest.',
    icon: Handshake
  }
};
