import {
  Armchair,
  Layers,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Grid,
  Store,
  Building2,
  Package,
  MonitorPlay,
  Factory,
  Building,
  Coffee,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Flower2,
  Dumbbell,
  Bell,
  Car,
  MoreHorizontal,
  Truck,
  Box,
} from "lucide-react";

export interface FilterState {
  transactionType: string;
  propertyType: string;
  budgetMin: string;
  budgetMax: string;
  size: string;
  fitOut: string;
  status: string[];
  commercialTags: string[];
  dealPref: string;
  industry: string;
  
  // Advanced Filter Additions
  sizeMin: string;
  sizeMax: string;
  sizeUnit: string;
  occupancy: string;
  constructionStage: string;
  
  // Business Opportunities Additions
  city: string;
  businessOption: string;
}

export type SingleSelectFilterKey =
  | "transactionType"
  | "propertyType"
  | "budgetMin"
  | "budgetMax"
  | "size"
  | "fitOut"
  | "dealPref"
  | "industry";

export type ArrayFilterKey = "status" | "commercialTags";

export const DEFAULT_FILTERS: FilterState = {
  transactionType: "Buy",
  propertyType: "Office",
  budgetMin: "Any",
  budgetMax: "Any",
  size: "Any",
  fitOut: "Any",
  status: [],
  commercialTags: [],
  dealPref: "Any",
  industry: "food-beverage",

  // Advanced Filter Default Values
  sizeMin: "Any",
  sizeMax: "Any",
  sizeUnit: "Sq Ft",
  occupancy: "Any",
  constructionStage: "Any",

  // Business Opportunities Default Values
  city: "",
  businessOption: "Any",
};

export const PROPERTY_TYPES = [
  { id: "Plot", label: "Plot", icon: Grid },
  { id: "Retail", label: "Retail", icon: Store },
  { id: "Office", label: "Office", icon: Building2 },
  { id: "Warehouse", label: "Warehouse", icon: Package },
  { id: "Showroom", label: "Showroom", icon: MonitorPlay },
  { id: "Industrial", label: "Industrial", icon: Factory },
];

export const BUDGET_OPTIONS = ["Any", "Under ₹50L", "₹50L - ₹1 Cr", "₹1 - ₹3 Cr", "₹3 - ₹5 Cr", "₹5 Cr+"];
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
export const OCCUPANCY_OPTIONS = ["Pre-Leased", "Vacant", "Fractional"];
export const CONSTRUCTION_STAGE_OPTIONS = ["Ready to Move", "Under Construction", "Planned"];

export const BOP_INDUSTRIES = [
  { id: "food-beverage", label: "Food & Beverage", icon: Coffee, color: "text-amber-500" },
  { id: "retail", label: "Retail", icon: ShoppingBag, color: "text-purple-500" },
  { id: "education", label: "Education", icon: GraduationCap, color: "text-blue-500" },
  { id: "healthcare", label: "Healthcare", icon: HeartPulse, color: "text-emerald-500" },
  { id: "beauty-wellness", label: "Beauty & Wellness", icon: Flower2, color: "text-pink-500" },
  { id: "fitness", label: "Fitness", icon: Dumbbell, color: "text-orange-500" },
  { id: "hospitality", label: "Hospitality", icon: Bell, color: "text-indigo-500" },
  { id: "automobile", label: "Automobile", icon: Car, color: "text-cyan-500" },
  { id: "manufacturing", label: "Manufacturing", icon: Factory, color: "text-teal-500" },
  { id: "more", label: "More Industries", icon: MoreHorizontal, color: "text-gray-400" },
];

export const BUSINESS_OPTIONS = [
  { id: "New Franchise", label: "New Franchise", icon: Store },
  { id: "Existing Business", label: "Existing Business", icon: Store },
  { id: "Distribution", label: "Distribution", icon: Truck },
  { id: "Movable Assets", label: "Movable Assets", icon: Box },
];

export const SIZE_MIN_OPTIONS = ["Any", "1000", "2000", "5000", "10000"];
export const SIZE_MAX_OPTIONS = ["Any", "2000", "5000", "10000", "20000+"];
export const SIZE_UNITS = ["Sq Ft", "Sq M", "Acres"];
