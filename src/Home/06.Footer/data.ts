import { Building2, Handshake, Store, Briefcase, ShoppingBag, Users, HeadphonesIcon } from 'lucide-react';

export const roles = [
  { id: 'owner', icon: Building2, title: 'Property Owner\n& Developer', desc: 'List and showcase your commercial properties to the right audience.' },
  { id: 'broker', icon: Handshake, title: 'Commercial\nBroker', desc: 'Connect with serious buyers, tenants and property owners.' },
  { id: 'franchisor', icon: Store, title: 'Franchisor', desc: 'Expand your brand by connecting with the right franchise partners.' },
  { id: 'business', icon: Briefcase, title: 'Business\nOwner', desc: 'Find the perfect space or opportunities to grow your business.' },
  { id: 'retail', icon: ShoppingBag, title: 'Retail\nBrand', desc: 'Discover spaces in prime locations and expand your presence.' },
  { id: 'investor', icon: Users, title: 'Investor', desc: 'Explore high-potential commercial real estate opportunities.' },
  { id: 'consultant', icon: HeadphonesIcon, title: 'Consultant &\nService Provider', desc: 'Offer your expertise and connect with businesses.' },
]