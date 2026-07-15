import { 
  Building2, 
  Store,
  Users,
  TrendingUp,
  User,
  Building,
  Calendar,
  Briefcase,
  DoorOpen,
  PieChart,
  Landmark,
  LayoutGrid,
  Copy,
  Users as CoWorking,
  Truck,
  ShoppingCart
} from 'lucide-react';

export const vendorBenefits = [
  { icon: Building2, label: 'Commercial Properties', desc: 'Discover prime commercial spaces across India.', color: 'text-indigo-400', border: 'border-indigo-500/50', glow: 'shadow-[0_0_15px_rgba(99,102,241,0.3)]' },
  { icon: Store, label: 'Franchise Expansion', desc: 'Expand your brand with verified locations.', color: 'text-emerald-400', border: 'border-emerald-500/50', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.3)]' },
  { icon: Users, label: 'Verified Connections', desc: 'Connect with verified owners, brokers & investors.', color: 'text-orange-400', border: 'border-orange-500/50', glow: 'shadow-[0_0_15px_rgba(249,115,22,0.3)]' },
  { icon: TrendingUp, label: 'Business Growth', desc: 'Scale your business with data-driven real estate solutions.', color: 'text-indigo-300', border: 'border-indigo-400/50', glow: 'shadow-[0_0_15px_rgba(129,140,248,0.3)]' }
];

export const floatingCards = [
  { icon: User, title: 'For Property Owners', desc: 'List your properties, find the right buyers or tenants.', iconBg: 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]', iconColor: 'text-white' },
  { icon: Store, title: 'For Franchisors', desc: 'Expand your brand nationwide with the right locations.', iconBg: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]', iconColor: 'text-white' },
  { icon: User, title: 'For Investors', desc: 'Discover high-potential assets and grow your investment portfolio.', iconBg: 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]', iconColor: 'text-white' },
];

export const searchTabs = [
  { id: 'buy', label: 'Buy', icon: Building },
  { id: 'lease', label: 'Lease', icon: Calendar },
  { id: 'business', label: 'Business Opportunities', icon: Briefcase },
];

export const searchFilters = {
  buy: [
    { id: 'vacant', label: 'Vacant', icon: DoorOpen, color: 'text-orange-500', borderColor: 'border-orange-500' },
    { id: 'fractional', label: 'Fractional', icon: PieChart, color: 'text-purple-500', borderColor: 'border-purple-500' },
    { id: 'pre_leased', label: 'Pre Leased', icon: Landmark, color: 'text-emerald-500', borderColor: 'border-emerald-500' },
    { id: 'all', label: 'All', icon: LayoutGrid, color: 'text-blue-500', borderColor: 'border-blue-500' },
  ],
  lease: [
    { id: 'full_space', label: 'Full Space', icon: LayoutGrid, color: 'text-purple-500', borderColor: 'border-purple-500' },
    { id: 'sub_lease', label: 'Sub Lease', icon: Copy, color: 'text-emerald-500', borderColor: 'border-emerald-500' },
    { id: 'co_working', label: 'Co-Working', icon: CoWorking, color: 'text-orange-500', borderColor: 'border-orange-500' },
  ],
  business: [
    { id: 'new_franchise', label: 'New Franchise', icon: Store, color: 'text-purple-500', borderColor: 'border-purple-500' },
    { id: 'existing_business', label: 'Existing Business', icon: Building2, color: 'text-emerald-500', borderColor: 'border-emerald-500' },
    { id: 'distribution', label: 'Distribution Opportunities', icon: Truck, color: 'text-blue-500', borderColor: 'border-blue-500' },
    { id: 'movable_assets', label: 'Movable Assets', icon: ShoppingCart, color: 'text-orange-500', borderColor: 'border-orange-500' },
  ]
};

export const trustedLogos = [
  'zomato', 'Domino\'s', 'SBI', 'cromā', 'planet fitness', 'TATA', 'lenskart', 'DECATHLON'
];