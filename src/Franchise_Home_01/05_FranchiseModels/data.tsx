import {
  Armchair,
  Building2,
  Coffee as CoffeeMachine,
  Briefcase,
  Megaphone,
  ShieldCheck,
  Tag,
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
  ] as FranchiseModel[],
};
export const revenueROIData = {
  sectionLabel: "Est. ROI",
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
    label: "Break Even Timeline",
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
