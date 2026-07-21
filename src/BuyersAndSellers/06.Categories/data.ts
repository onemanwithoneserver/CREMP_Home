import { 
  Home, 
  Building2, 
  Warehouse, 
  Store,
  Trees,
  Hotel,
  Factory,
  MapPin,
  Building,
  Landmark,
  Briefcase,
  Plus
} from 'lucide-react';

export const categoriesData = {
  tag: 'PROPERTY CATEGORIES',
  title: 'Explore Every Real Estate Category',
  desc: "Whether you're looking to buy a single-family home on Zillow, lease a commercial retail space on LoopNet, or invest in industrial land—CREMP covers every property type from leading networks.",
  categories: [
    { icon: Home, label: 'Single-Family\nHomes' },
    { icon: Building, label: 'Condos &\nApartments' },
    { icon: Building2, label: 'Multi-Family\nUnits' },
    { icon: Store, label: 'Retail\nSpaces' },
    { icon: Briefcase, label: 'Office\nBuildings' },
    { icon: Warehouse, label: 'Industrial\nWarehouses' },
    { icon: Trees, label: 'Land &\nLots' },
    { icon: Factory, label: 'Manufacturing\nFacilities' },
    { icon: Hotel, label: 'Hospitality\nProperties' },
    { icon: Landmark, label: 'Special\nPurpose' },
    { icon: MapPin, label: 'Mixed-Use\nDevelopments' },
    { icon: Plus, label: 'And Many\nMore' }
  ],
  button: {
    text: 'Start Exploring'
  },
  bottomDisclaimer: 'Find the right property that matches your real estate goals with CREMP.'
};
