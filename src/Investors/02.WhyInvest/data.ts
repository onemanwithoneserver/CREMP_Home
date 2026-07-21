import { 
  DualToneStore, 
  DualToneBuilding, 
  DualToneTag, 
  DualToneMegaphone,
  DualToneUsers,
  DualToneBroker
} from '../../components/DualToneIcons';

export const whyInvestData = {
  tag: 'WHY CREMP FOR INVESTORS',
  titleHighlight: 'Investor Portal.',
  subtitle: "Today's investment journey is fragmented.",
  issues: [
    { icon: DualToneStore, text: 'One platform lists franchise opportunities.' },
    { icon: DualToneTag, text: 'Another shows commercial spaces for lease.' },
    { icon: DualToneMegaphone, text: 'Another helps you compare brands.' }
  ],
  conclusion: 'everything in one place.',
  bannerTextHighlight: 'one integrated ecosystem.',
  flowItems: [
    { icon: DualToneBuilding, text: 'Browse\nBrands' },
    { icon: DualToneUsers, text: 'Define\nCriteria' },
    { icon: DualToneStore, text: 'Discover\nLocations' },
    { icon: DualToneBroker, text: 'Connect\n& Invest' }
  ]
};
