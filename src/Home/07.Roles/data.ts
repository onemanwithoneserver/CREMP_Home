import { Building2, Landmark, Rocket, Coins, Briefcase, UserCog, LineChart, Cpu } from 'lucide-react';

export const roles = [
  {
    id: 'developer',
    title: 'Developers / Owners',
    icon: Building2,
    desc: 'Showcase your premium commercial properties to verified investors and brands.',
    benefits: ['Verified lead generation', 'Rich media property showcase', 'Direct communication with buyers']
  },
  {
    id: 'pe',
    title: 'Private Equity / VC',
    icon: Landmark,
    desc: 'Discover vetted commercial real estate and high-growth franchise opportunities.',
    benefits: ['Access to exclusive off-market deals', 'Comprehensive due diligence data', 'Portfolio diversification']
  },
  {
    id: 'startup',
    title: 'Startups & Brands',
    icon: Rocket,
    desc: 'Find the perfect commercial space or franchise partners to scale your operations.',
    benefits: ['Streamlined location discovery', 'Connect with franchise investors', 'Brand visibility to partners']
  },
  {
    id: 'lenders',
    title: 'Private Lenders',
    icon: Coins,
    desc: 'Connect with developers and franchisees seeking capital for their next project.',
    benefits: ['Access verified funding requests', 'Direct connection to borrowers', 'Secure platform for initial talks']
  },
  {
    id: 'wealth',
    title: 'Wealth Managers',
    icon: Briefcase,
    desc: 'Source high-yield commercial assets and stable franchise investments for clients.',
    benefits: ['Curated high-ticket inventory', 'Detailed ROI projections', 'Client presentation tools']
  },
  {
    id: 'consultants',
    title: 'Consultants',
    icon: UserCog,
    desc: 'Provide expert guidance to brands expanding and investors seeking opportunities.',
    benefits: ['Showcase industry expertise', 'Lead generation for consulting', 'Publish insights to network']
  },
  {
    id: 'angel',
    title: 'Angel Networks',
    icon: LineChart,
    desc: 'Pool resources and invest in high-potential commercial and retail ventures.',
    benefits: ['Syndicate deals easily', 'Access verified startup pitches', 'Collaborate with other investors']
  },
  {
    id: 'proptech',
    title: 'PropTech Firms',
    icon: Cpu,
    desc: 'Integrate your solutions and offer services to the CREMP ecosystem.',
    benefits: ['B2B lead generation', 'Showcase software solutions', 'Partner with large developers']
  }
];
