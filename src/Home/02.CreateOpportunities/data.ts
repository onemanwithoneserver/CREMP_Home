import { 
  Building2, 
  Store, 
  PlaySquare, 
  Video, 
  UserSearch, 
  Users,
  Megaphone,
  PlayCircle,
  Globe
} from 'lucide-react';

export const developerData = {
  title: 'Developers &\nProperty Owners',
  icon: Building2,
  subtitle: 'Showcase. Educate. Grow.',
  desc: 'Showcase your commercial projects and properties with rich media and expert content that builds trust and attracts the right investors and tenants.',
  buttonText: 'Explore Developer Solutions →',
  items: [
    { icon: PlaySquare, label: 'Brand\nBuilding' },
    { icon: Video, label: 'Video\nShowcase' },
    { icon: UserSearch, label: 'Commercial\nDiscovery' },
    { icon: Users, label: 'Qualified\nLeads' }
  ]
};

export const franchisorData = {
  title: 'Franchisors',
  icon: Store,
  subtitle: 'Expand Your Brand.\nCreate More Impact.',
  desc: 'Showcase your franchise opportunity, educate potential partners through videos and content and expand into new markets.',
  buttonText: 'Explore Franchisor Solutions →',
  items: [
    { icon: Megaphone, label: 'Brand\nAwareness' },
    { icon: PlayCircle, label: 'Video\nExplainers' },
    { icon: UserSearch, label: 'Investor\nEnquiries' },
    { icon: Globe, label: 'Market\nExpansion' }
  ]
};