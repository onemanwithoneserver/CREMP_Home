import { 
  Store, 
  Building2, 
  Tag, 
  Megaphone,
  ShoppingBag,
  Users,
  Briefcase
} from 'lucide-react';

export const ecosystemData = {
  tag: 'WHY IT MATTERS',
  titleHighlight: 'Franchise Portal.',
  subtitle: "Today's franchise expansion journey is fragmented.",
  issues: [
    { icon: Store, text: 'One platform helps you list your franchise.' },
    { icon: Building2, text: 'Another helps you search commercial properties.' },
    { icon: Tag, text: 'Another showcases businesses for sale.' },
    { icon: Megaphone, text: 'Another helps you market your brand.' }
  ],
  conclusion: 'everything together.',
  bannerTextHighlight: 'one integrated ecosystem.',
  flowItems: [
    { icon: Building2, text: 'Commercial\nReal Estate' },
    { icon: Store, text: 'Franchise\nOpportunities' },
    { icon: ShoppingBag, text: 'Retail Business\nOpportunities' },
    { icon: Users, text: 'Investors' },
    { icon: Briefcase, text: 'Commercial\nBrokers' }
  ]
};
