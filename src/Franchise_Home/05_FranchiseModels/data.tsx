import {
  Store,
  Coffee,
  Zap,
  ShoppingBag,
  Building2,
  Landmark,
  Armchair,
  Coffee as CoffeeMachine,
  Tag,
  IndianRupee,
  Megaphone,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface CostBreakdownItem {
  label: string;
  amount: string;
  percentage: number;
  color: string;
  icon: LucideIcon;
}

export interface FranchiseModel {
  id: string;
  name: string;
  icon: LucideIcon;
  priceRange: string;
  staffCount: string;
  investment: string;
  area: string;
  location: string;
  avgTotal: string;
  totalAvgLabel: string;
  costBreakdown: CostBreakdownItem[];
}

export const franchiseModelsData = {
  sectionLabel: "INVESTMENT BREAKDOWN",
  subtitle: "Choose an outlet type to see the detailed investment insights",
  models: [
    {
      id: "kiosk",
      name: "Kiosk",
      icon: Store,
      priceRange: "₹8L - ₹12L",
      staffCount: "1 - 2",
      investment: "₹8L - ₹12L",
      area: "80 - 150 sq.ft",
      location: "Malls, Tech Parks",
      avgTotal: "₹10L",
      totalAvgLabel: "₹10 Lakhs",
      costBreakdown: [
        { label: "Setup & Interiors", amount: "₹3L", percentage: 30, color: "#f97316", icon: Armchair },
        { label: "Equipment", amount: "₹4L", percentage: 40, color: "#8b5cf6", icon: CoffeeMachine },
        { label: "Franchise Fee", amount: "₹1.5L", percentage: 15, color: "#1e3a8a", icon: Tag },
        { label: "Working Capital", amount: "₹1L", percentage: 10, color: "#10b981", icon: IndianRupee },
        { label: "Marketing & Launch", amount: "₹0.5L", percentage: 5, color: "#f59e0b", icon: Megaphone },
      ],
    },
    {
      id: "studio",
      name: "Studio",
      icon: Coffee,
      priceRange: "₹22L - ₹32L",
      staffCount: "2 - 3",
      investment: "₹22L - ₹32L",
      area: "200 - 300 sq.ft",
      location: "High Streets",
      avgTotal: "₹27L",
      totalAvgLabel: "₹27 Lakhs",
      costBreakdown: [
        { label: "Setup & Interiors", amount: "₹9L", percentage: 33.3, color: "#f97316", icon: Armchair },
        { label: "Equipment", amount: "₹8L", percentage: 29.6, color: "#8b5cf6", icon: CoffeeMachine },
        { label: "Franchise Fee", amount: "₹4L", percentage: 14.8, color: "#1e3a8a", icon: Tag },
        { label: "Working Capital", amount: "₹3L", percentage: 11.1, color: "#10b981", icon: IndianRupee },
        { label: "Marketing & Launch", amount: "₹1.5L", percentage: 5.6, color: "#f59e0b", icon: Megaphone },
        { label: "Security Deposit", amount: "₹1.5L", percentage: 5.6, color: "#64748b", icon: ShieldCheck },
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
        { label: "Setup & Interiors", amount: "₹5L", percentage: 27.8, color: "#f97316", icon: Armchair },
        { label: "Equipment", amount: "₹6L", percentage: 33.3, color: "#8b5cf6", icon: CoffeeMachine },
        { label: "Franchise Fee", amount: "₹3L", percentage: 16.7, color: "#1e3a8a", icon: Tag },
        { label: "Working Capital", amount: "₹2L", percentage: 11.1, color: "#10b981", icon: IndianRupee },
        { label: "Marketing & Launch", amount: "₹1L", percentage: 5.5, color: "#f59e0b", icon: Megaphone },
        { label: "Security Deposit", amount: "₹1L", percentage: 5.5, color: "#64748b", icon: ShieldCheck },
      ],
    },
    {
      id: "store",
      name: "Store",
      icon: ShoppingBag,
      priceRange: "₹45L - ₹65L",
      staffCount: "6 - 8",
      investment: "₹45L - ₹65L",
      area: "800 - 1200 sq.ft",
      location: "High Streets, Premium Malls",
      avgTotal: "₹55L",
      totalAvgLabel: "₹55 Lakhs",
      costBreakdown: [
        { label: "Setup & Interiors", amount: "₹18L", percentage: 32.7, color: "#f97316", icon: Armchair },
        { label: "Equipment", amount: "₹12L", percentage: 21.8, color: "#8b5cf6", icon: CoffeeMachine },
        { label: "Franchise Fee", amount: "₹8L", percentage: 14.5, color: "#1e3a8a", icon: Tag },
        { label: "Working Capital", amount: "₹8L", percentage: 14.5, color: "#10b981", icon: IndianRupee },
        { label: "Marketing & Launch", amount: "₹5L", percentage: 9.1, color: "#f59e0b", icon: Megaphone },
        { label: "Security Deposit", amount: "₹4L", percentage: 7.3, color: "#64748b", icon: ShieldCheck },
      ],
    },
    {
      id: "mall-outlet",
      name: "Mall Outlet",
      icon: Building2,
      priceRange: "₹55L - ₹75L",
      staffCount: "5 - 7",
      investment: "₹55L - ₹75L",
      area: "400 - 600 sq.ft",
      location: "Premium Malls",
      avgTotal: "₹65L",
      totalAvgLabel: "₹65 Lakhs",
      costBreakdown: [
        { label: "Setup & Interiors", amount: "₹21L", percentage: 32.7, color: "#eab308", icon: Armchair }, // Adjusted color for donut chart match (yellow-orange)
        { label: "Equipment", amount: "₹14L", percentage: 21.8, color: "#8b5cf6", icon: CoffeeMachine }, // Purple
        { label: "Franchise Fee", amount: "₹9L", percentage: 14.5, color: "#1e293b", icon: Tag }, // Dark Navy
        { label: "Working Capital", amount: "₹9L", percentage: 14.5, color: "#10b981", icon: IndianRupee }, // Green
        { label: "Marketing & Launch", amount: "₹6L", percentage: 9.1, color: "#f97316", icon: Megaphone }, // Orange
        { label: "Security Deposit", amount: "₹5L", percentage: 7.3, color: "#64748b", icon: ShieldCheck }, // Grey
      ],
    },
    {
      id: "standalone",
      name: "Standalone",
      icon: Landmark,
      priceRange: "₹75L - ₹1.1Cr",
      staffCount: "8 - 12",
      investment: "₹75L - ₹1.1Cr",
      area: "1500 - 2500 sq.ft",
      location: "Standalone Buildings",
      avgTotal: "₹95L",
      totalAvgLabel: "₹95 Lakhs",
      costBreakdown: [
        { label: "Setup & Interiors", amount: "₹35L", percentage: 36.8, color: "#f97316", icon: Armchair },
        { label: "Equipment", amount: "₹20L", percentage: 21.0, color: "#8b5cf6", icon: CoffeeMachine },
        { label: "Franchise Fee", amount: "₹12L", percentage: 12.6, color: "#1e3a8a", icon: Tag },
        { label: "Working Capital", amount: "₹12L", percentage: 12.6, color: "#10b981", icon: IndianRupee },
        { label: "Marketing & Launch", amount: "₹9L", percentage: 9.5, color: "#f59e0b", icon: Megaphone },
        { label: "Security Deposit", amount: "₹7L", percentage: 7.4, color: "#64748b", icon: ShieldCheck },
      ],
    },
  ] as FranchiseModel[],
};
