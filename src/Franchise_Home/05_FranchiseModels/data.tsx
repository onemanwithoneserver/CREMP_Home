import {
  Armchair,
  Building2,
  Coffee,
  Coffee as CoffeeMachine,
  Briefcase,
  Landmark,
  Megaphone,
  ShieldCheck,
  ShoppingBag,
  Store,
  Tag,
  Zap,
  Award,
  Sparkles,
  BarChart3,
  Clock,
  FileCheck,
  Target,
  TrendingUp,
  Wallet,
  Maximize2,
  Users,
  MapPin,
  Info,
  type LucideIcon,
} from "lucide-react";

export interface StaffDetail {
  name: string;
  count: string;
  experience: string;
  type: string;
  remarks: string;
}

export interface CostBreakdownItem {
  label: string;
  amount: string;
  percentage: number;
  color: string;
  icon: LucideIcon;
}

export interface ModelSpecificationItem {
  icon: LucideIcon;
  label: string;
  mobileLabel: string;
  value: string;
  color: string;
  extra?: LucideIcon;
  hasStaffModal?: boolean;
  badge?: string;
}

export interface RevenueCardItem {
  icon: LucideIcon;
  year: string;
  label: string;
  range: string;
  description: string;
  sublabel: string;
  intent: "warning" | "success" | "info" | "primary";
}

export interface FranchiseModel {
  id: string;
  name: string;
  icon: LucideIcon;
  priceRange: string;
  staffCount: string;
  staffDetails: StaffDetail[];
  investment: string;
  area: string;
  location: string;
  avgTotal: string;
  totalAvgLabel: string;
  costBreakdown: CostBreakdownItem[];
}

export const franchiseModelsData = {
  sectionLabel: "INVESTMENT BREAKDOWN",
  title: "Franchise Models",
  subtitle:
    "Explore our flexible investment models designed to suit different capital levels and real estate options.",
  models: [
    {
      id: "kiosk",
      name: "Kiosk",
      icon: Store,
      priceRange: "₹8L - ₹12L",
      staffCount: "1 - 2",
      staffDetails: [
        {
          name: "Barista / Attendant",
          count: "1-2",
          experience: "0-1 Years",
          type: "Full Time",
          remarks: "Handles customer orders and basic coffee prep.",
        },
      ],
      investment: "₹8L - ₹12L",
      area: "80 - 150 sq.ft",
      location: "Malls, Tech Parks",
      avgTotal: "₹10L",
      totalAvgLabel: "₹10 Lakhs",
      costBreakdown: [
        {
          label: "Setup & Interiors",
          amount: "₹3L",
          percentage: 30,
          color: "#F97316",
          icon: Armchair,
        },
        {
          label: "Equipment",
          amount: "₹4L",
          percentage: 40,
          color: "#0EA5E9",
          icon: CoffeeMachine,
        },
        {
          label: "Franchise Fee",
          amount: "₹1.5L",
          percentage: 15,
          color: "#8B5CF6",
          icon: Tag,
        },
        {
          label: "Working Capital",
          amount: "₹1L",
          percentage: 10,
          color: "#10B981",
          icon: Briefcase,
        },
        {
          label: "Marketing & Launch",
          amount: "₹0.5L",
          percentage: 5,
          color: "#D946EF",
          icon: Megaphone,
        },
      ],
    },
    {
      id: "studio",
      name: "Studio",
      icon: Coffee,
      priceRange: "₹22L - ₹32L",
      staffCount: "2 - 3",
      staffDetails: [
        {
          name: "Store Manager",
          count: "1",
          experience: "2+ Years",
          type: "Full Time",
          remarks: "Oversees daily operations and inventory.",
        },
        {
          name: "Barista",
          count: "1-2",
          experience: "1+ Years",
          type: "Full Time",
          remarks: "Expert in specialty coffee making.",
        },
      ],
      investment: "₹22L - ₹32L",
      area: "200 - 300 sq.ft",
      location: "High Streets",
      avgTotal: "₹27L",
      totalAvgLabel: "₹27 Lakhs",
      costBreakdown: [
        {
          label: "Setup & Interiors",
          amount: "₹9L",
          percentage: 33.3,
          color: "#F97316",
          icon: Armchair,
        },
        {
          label: "Equipment",
          amount: "₹8L",
          percentage: 29.6,
          color: "#0EA5E9",
          icon: CoffeeMachine,
        },
        {
          label: "Franchise Fee",
          amount: "₹4L",
          percentage: 14.8,
          color: "#8B5CF6",
          icon: Tag,
        },
        {
          label: "Working Capital",
          amount: "₹3L",
          percentage: 11.1,
          color: "#10B981",
          icon: Briefcase,
        },
        {
          label: "Marketing & Launch",
          amount: "₹1.5L",
          percentage: 5.6,
          color: "#D946EF",
          icon: Megaphone,
        },
        {
          label: "Security Deposit",
          amount: "₹1.5L",
          percentage: 5.6,
          color: "#14B8A6",
          icon: ShieldCheck,
        },
      ],
    },
    {
      id: "express",
      name: "Express",
      icon: Zap,
      priceRange: "₹15L - ₹22L",
      staffCount: "2 - 3",
      investment: "₹15L - ₹22L",
      area: "150 - 250 sq.ft",
      location: "Transit Hubs",
      avgTotal: "₹18L",
      totalAvgLabel: "₹18 Lakhs",
      costBreakdown: [
        {
          label: "Setup & Interiors",
          amount: "₹5L",
          percentage: 27.8,
          color: "#F97316",
          icon: Armchair,
        },
        {
          label: "Equipment",
          amount: "₹6L",
          percentage: 33.3,
          color: "#0EA5E9",
          icon: CoffeeMachine,
        },
        {
          label: "Franchise Fee",
          amount: "₹3L",
          percentage: 16.7,
          color: "#8B5CF6",
          icon: Tag,
        },
        {
          label: "Working Capital",
          amount: "₹2L",
          percentage: 11.1,
          color: "#10B981",
          icon: Briefcase,
        },
        {
          label: "Marketing & Launch",
          amount: "₹1L",
          percentage: 5.5,
          color: "#D946EF",
          icon: Megaphone,
        },
        {
          label: "Security Deposit",
          amount: "₹1L",
          percentage: 5.5,
          color: "#14B8A6",
          icon: ShieldCheck,
        },
      ],
    },
    {
      id: "store",
      name: "Store",
      icon: ShoppingBag,
      priceRange: "₹45L - ₹65L",
      staffCount: "6 - 8",
      staffDetails: [
        {
          name: "Lounge Manager",
          count: "1",
          experience: "4+ Years",
          type: "Full Time",
          remarks: "Focuses on customer experience.",
        },
        {
          name: "Senior Barista",
          count: "2",
          experience: "2+ Years",
          type: "Full Time",
          remarks: "Leads the beverage team.",
        },
        {
          name: "Service Staff",
          count: "3-5",
          experience: "0-1 Years",
          type: "Part Time",
          remarks: "Handles table service and clearing.",
        },
      ],
      investment: "₹45L - ₹65L",
      area: "800 - 1200 sq.ft",
      location: "High Streets, Premium Malls",
      avgTotal: "₹55L",
      totalAvgLabel: "₹55 Lakhs",
      costBreakdown: [
        {
          label: "Setup & Interiors",
          amount: "₹18L",
          percentage: 32.7,
          color: "#F97316",
          icon: Armchair,
        },
        {
          label: "Equipment",
          amount: "₹12L",
          percentage: 21.8,
          color: "#0EA5E9",
          icon: CoffeeMachine,
        },
        {
          label: "Franchise Fee",
          amount: "₹8L",
          percentage: 14.5,
          color: "#8B5CF6",
          icon: Tag,
        },
        {
          label: "Working Capital",
          amount: "₹8L",
          percentage: 14.5,
          color: "#10B981",
          icon: Briefcase,
        },
        {
          label: "Marketing & Launch",
          amount: "₹5L",
          percentage: 9.1,
          color: "#D946EF",
          icon: Megaphone,
        },
        {
          label: "Security Deposit",
          amount: "₹4L",
          percentage: 7.3,
          color: "#14B8A6",
          icon: ShieldCheck,
        },
      ],
    },
    {
      id: "mall-outlet",
      name: "Mall Outlet",
      icon: Building2,
      priceRange: "₹55L - ₹75L",
      staffCount: "5 - 7",
      staffDetails: [
        {
          name: "Experience Manager",
          count: "1",
          experience: "5+ Years",
          type: "Full Time",
          remarks: "Curates the brand experience.",
        },
        {
          name: "Coffee Experts",
          count: "2",
          experience: "3+ Years",
          type: "Full Time",
          remarks: "Conducts tasting sessions.",
        },
        {
          name: "Attendants",
          count: "2-4",
          experience: "1+ Years",
          type: "Part Time",
          remarks: "Assists customers and experts.",
        },
      ],
      investment: "₹55L - ₹75L",
      area: "400 - 600 sq.ft",
      location: "Premium Malls",
      avgTotal: "₹65L",
      totalAvgLabel: "₹65 Lakhs",
      costBreakdown: [
        {
          label: "Setup & Interiors",
          amount: "₹21L",
          percentage: 32.7,
          color: "#F97316",
          icon: Armchair,
        },
        {
          label: "Equipment",
          amount: "₹14L",
          percentage: 21.8,
          color: "#0EA5E9",
          icon: CoffeeMachine,
        },
        {
          label: "Franchise Fee",
          amount: "₹9L",
          percentage: 14.5,
          color: "#8B5CF6",
          icon: Tag,
        },
        {
          label: "Working Capital",
          amount: "₹9L",
          percentage: 14.5,
          color: "#10B981",
          icon: Briefcase,
        },
        {
          label: "Marketing & Launch",
          amount: "₹6L",
          percentage: 9.1,
          color: "#D946EF",
          icon: Megaphone,
        },
        {
          label: "Security Deposit",
          amount: "₹5L",
          percentage: 7.3,
          color: "#14B8A6",
          icon: ShieldCheck,
        },
      ],
    },
    {
      id: "standalone",
      name: "Standalone",
      icon: Landmark,
      priceRange: "₹75L - ₹1.1Cr",
      staffCount: "8 - 12",
      staffDetails: [
        {
          name: "Shift Supervisor",
          count: "2",
          experience: "3+ Years",
          type: "Full Time",
          remarks: "Manages fast-paced drive-thru shifts.",
        },
        {
          name: "Order Takers",
          count: "3-4",
          experience: "1+ Years",
          type: "Part Time",
          remarks: "Handles window communications.",
        },
        {
          name: "Baristas",
          count: "3-6",
          experience: "2+ Years",
          type: "Full Time",
          remarks: "Rapid beverage execution.",
        },
      ],
      investment: "₹75L - ₹1.1Cr",
      area: "1500 - 2500 sq.ft",
      location: "Standalone Buildings",
      avgTotal: "₹95L",
      totalAvgLabel: "₹95 Lakhs",
      costBreakdown: [
        {
          label: "Setup & Interiors",
          amount: "₹35L",
          percentage: 36.8,
          color: "#F97316",
          icon: Armchair,
        },
        {
          label: "Equipment",
          amount: "₹20L",
          percentage: 21.0,
          color: "#0EA5E9",
          icon: CoffeeMachine,
        },
        {
          label: "Franchise Fee",
          amount: "₹12L",
          percentage: 12.6,
          color: "#8B5CF6",
          icon: Tag,
        },
        {
          label: "Working Capital",
          amount: "₹12L",
          percentage: 12.6,
          color: "#10B981",
          icon: Briefcase,
        },
        {
          label: "Marketing & Launch",
          amount: "₹9L",
          percentage: 9.5,
          color: "#D946EF",
          icon: Megaphone,
        },
        {
          label: "Security Deposit",
          amount: "₹7L",
          percentage: 7.4,
          color: "#14B8A6",
          icon: ShieldCheck,
        },
      ],
    },
  ] as FranchiseModel[],
};

export const revenueROIData = {
  sectionLabel: "Break Even & Est. ROI",
  revenueCards: [
    {
      icon: BarChart3,
      year: "Year 1",
      label: "Projected",
      range: "12–18%",
      description: "Built on initial footfall metrics",
      sublabel: "Typical for newly onoff/openstart",
      intent: "warning" as const,
    },
    {
      icon: TrendingUp,
      year: "Year 2",
      label: "Projected",
      range: "22–28%",
      description: "Marketing optimization significantly",
      sublabel: "Retention marketing increases revenue",
      intent: "success" as const,
    },
    {
      icon: Target,
      year: "Year 3",
      label: "Projected",
      range: "28–34%",
      description: "Year 3 as the first phase green light",
      sublabel: "Right to the revised sales projection",
      intent: "info" as const,
    },
  ],
  paybackPeriod: {
    sectionLabel: "PAYBACK PERIOD",
    title: "18–24 Months",
    destinationLabel: "Destination • Breakeven",
    subtitle: "Target milestone for full investment recovery",
    mobileSubtitle: "Full ROI Recovery",
    milestones: [
      { icon: FileCheck, label: "ROI Time Breakeven", status: "complete" },
      { icon: Award, label: "ROI: Staff Settled", status: "complete" },
      { icon: Clock, label: "ROI: Breakeven State", status: "active" },
      { icon: Target, label: "ROI: Full Payback", status: "upcoming" },
    ],
  },
};

export const getModelSpecifications = (
  model: FranchiseModel,
): ModelSpecificationItem[] => [
  {
    icon: Wallet,
    label: "INVESTMENT",
    mobileLabel: "INVESTMENT",
    value: model.investment,
    color: "bg-[#059669] text-white",
    badge: "Estimated",
  },
  {
    icon: Maximize2,
    label: "AREA REQUIRED",
    mobileLabel: "AREA",
    value: model.area,
    color: "bg-[#7c3aed] text-white",
    badge: "Carpet",
  },
  {
    icon: Users,
    label: "STAFF NEEDED",
    mobileLabel: "STAFF",
    value: `${model.staffCount} members`,
    color: "bg-[#d97706] text-white",
    extra: Info,
    hasStaffModal: true,
    badge: "Details",
  },
  {
    icon: MapPin,
    label: "IDEAL LOCATION",
    mobileLabel: "LOCATION",
    value: model.location,
    color: "bg-[#0284c7] text-white",
    badge: "Prime",
  },
];

export const getRightMetrics = () => [
  {
    icon: BarChart3,
    label: "YEAR 1",
    value: revenueROIData.revenueCards[0]?.range || "12–18%",
    color: "bg-[#d97706] text-white",
    badge: "Projected",
  },
  {
    icon: TrendingUp,
    label: "YEAR 2",
    value: revenueROIData.revenueCards[1]?.range || "22–28%",
    color: "bg-[#059669] text-white",
    badge: "Projected",
  },
  {
    icon: Target,
    label: "YEAR 3",
    value: revenueROIData.revenueCards[2]?.range || "28–34%",
    color: "bg-[#0284c7] text-white",
    badge: "Projected",
  },
  {
    icon: Sparkles,
    label: "PAYBACK PERIOD",
    value: revenueROIData.paybackPeriod.title || "18–24 Months",
    color: "bg-[#d4af37] text-[#0a1128]",
    badge: "Breakeven",
  },
];

export const getRoiColor = (intent: string) => {
  if (intent === "primary" || intent === "warning")
    return "bg-[#d97706] text-white";
  if (intent === "success") return "bg-[#059669] text-white";
  if (intent === "info") return "bg-[#0284c7] text-white";
  return "bg-[#7c3aed] text-white";
};

export const staffBadgeColors = [
  "text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-900",
  "text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900",
  "text-orange-700 bg-orange-100 dark:text-orange-300 dark:bg-orange-900",
  "text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-900",
];

export const getStaffBadgeColor = (idx: number) => {
  return staffBadgeColors[idx % staffBadgeColors.length];
};

export const viewOptions = [
  { value: "chart", label: "Pie Chart View" },
  { value: "table", label: "Tabular View" },
];

export const franchiseModelsUI = {
  specificationLabel: "MODEL SPECIFICATIONS",
  avgTotalInvestment: "AVG. TOTAL INVESTMENT",
  avgTotalMobile: "AVG. TOTAL",
  staffRequirements: "Staff Requirements",
  roiTitle: "Break Even & Estimated ROI",
  destinationBreakeven: "Destination • Breakeven",
  recoverySubtitle: "Target milestone for full investment recovery",
  mobileRecoverySubtitle: "Full ROI Recovery",
  tapSegmentsHint: "Tap segments for detail",
  totalAvg: "Total Avg",
  category: "Category",
  amount: "Amount",
  percentage: "%",
};
