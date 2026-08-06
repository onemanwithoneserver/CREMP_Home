import {
  Building2,
  Store,
  MapPin,
  Building,
  Users,
  Armchair,
  Layers,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface FilterState {
  propertyType: string;
  budget: string;
  size: string;
  fitOut: string;
  status: string[];
  commercialTags: string[];
  dealPref: string;
  industry: string;
  invBudget: string;
  model: string;
  payback: string;
  businessTags: string[];
}

export type SingleSelectFilterKey =
  | "propertyType"
  | "budget"
  | "size"
  | "fitOut"
  | "dealPref"
  | "industry"
  | "invBudget"
  | "model"
  | "payback";

export type ArrayFilterKey = "status" | "commercialTags" | "businessTags";

export const DEFAULT_FILTERS: FilterState = {
  propertyType: "office-space",
  budget: "Any",
  size: "Any",
  fitOut: "Any",
  status: [],
  commercialTags: [],
  dealPref: "Any",
  industry: "food-beverage",
  invBudget: "Any",
  model: "Any",
  payback: "Any ROI",
  businessTags: [],
};

export const PROPERTY_TYPES = [
  { id: "office-space", label: "Office Space", icon: Building2 },
  { id: "retail-space", label: "Retail Space", icon: Store },
  { id: "commercial-plot", label: "Commercial Plot", icon: MapPin },
  { id: "full-building", label: "Full Building", icon: Building },
  { id: "co-working", label: "Co-Working", icon: Users },
];

export const BUDGET_OPTIONS = ["Any", "Under 50L", "50L - 1 Cr", "1 - 3 Cr", "3 - 5 Cr", "5 Cr+"];
export const SIZE_OPTIONS = ["Any", "Under 500 sq.ft", "500 - 1500 sq.ft", "1500 - 3000 sq.ft", "3000 - 5000 sq.ft", "5000+ sq.ft"];

export const FIT_OUT_OPTIONS = [
  { id: "Any", label: "Any", icon: Armchair },
  { id: "Bare Shell", label: "Bare Shell", icon: Building },
  { id: "Warm Shell", label: "Warm Shell", icon: Armchair },
  { id: "Semi-Fitted", label: "Semi-Fitted", icon: Layers },
  { id: "Fully Fitted", label: "Fully Fitted", icon: Briefcase },
];

export const COMMERCIAL_TAGS = [
  { id: "Pre-Leased", label: "Pre-Leased (High Yield)", icon: TrendingUp },
  { id: "Verified", label: "Verified Property", icon: ShieldCheck },
];

export const STATUS_OPTIONS = ["Ready to Move", "Under Construction", "RERA Registered"];
export const DEAL_PREF = ["Any", "Direct Owner", "Channel Partner"];

export const INDUSTRY_OPTIONS = [
  { id: "food-beverage", label: "Food & Beverage" },
  { id: "retail", label: "Retail" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
];

export const INV_BUDGET = ["Any", "Under ₹ 10 L", "₹ 10 L - ₹ 25 L", "₹ 25 L - ₹ 50 L", "₹ 50 L - ₹ 1 Cr", "₹ 1 Cr+"];
export const MODEL_OPTIONS = ["Any", "FOCO", "FOFO", "COCO", "Master Franchise"];
export const PAYBACK_OPTIONS = ["Any ROI", "< 1 Year", "1-2 Years", "2-3 Years", "3+ Years"];

export const BUSINESS_TAGS = [
  { id: "High ROI", label: "High ROI", icon: TrendingUp },
  { id: "Turnkey", label: "Turnkey Setup", icon: Zap },
  { id: "Premium", label: "Premium Brand", icon: ShieldCheck },
];

// Semantic categorical icon colors keyed by filter id, keeps hues stable across tabs.
export const CATEGORY_ICON_BG: Record<string, string> = {
  property: "bg-[#8B5CF6]",
  industry: "bg-[#8B5CF6]",
  budget: "bg-[#F97316]",
  "inv-budget": "bg-[#F97316]",
  size: "bg-[#0EA5E9]",
  fitout: "bg-[#14B8A6]",
  model: "bg-[#14B8A6]",
  status: "bg-[#10B981]",
  tags: "bg-[#D946EF]",
  "biz-tags": "bg-[#D946EF]",
  deal: "bg-cremp-accent",
  payback: "bg-cremp-accent",
};
