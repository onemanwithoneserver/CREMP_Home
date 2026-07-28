import {
  Store,
  Coffee,
  Zap,
  ShoppingBag,
  Building2,
  Landmark,
} from "lucide-react";

export interface FranchiseModelType {
  id: string;
  name: string;
  icon: typeof Store;
  investmentRange: string;
  area: string;
  description: string;
  isPopular?: boolean;
}

export interface CostBreakdownItem {
  label: string;
  amount: string;
  percentage: number;
}

export const franchiseModelsData = {
  sectionLabel: "FRANCHISE MODELS / ENGAGEMENT",
  models: [
    {
      id: "kiosk",
      name: "Kiosk",
      icon: Coffee,
      investmentRange: "₹6L – ₹8L",
      area: "100–200 sq.ft",
      description: "Compact setup for high-traffic zones",
    },
    {
      id: "studio",
      name: "Studio",
      icon: Store,
      investmentRange: "₹8L – ₹10L",
      area: "200–350 sq.ft",
      description: "Cozy café experience in a smaller footprint",
    },
    {
      id: "express",
      name: "Express",
      icon: Zap,
      investmentRange: "₹8L – ₹10L",
      area: "250–400 sq.ft",
      description: "Quick-service model for busy locations",
    },
    {
      id: "store",
      name: "Store",
      icon: ShoppingBag,
      investmentRange: "₹10L – ₹12L",
      area: "400–600 sq.ft",
      description: "Full café experience with seating",
      isPopular: true,
    },
    {
      id: "mall-outlet",
      name: "Mall Outlet",
      icon: Building2,
      investmentRange: "₹12L – ₹15L",
      area: "350–500 sq.ft",
      description: "Premium positioning in shopping malls",
    },
    {
      id: "standalone",
      name: "Standalone",
      icon: Landmark,
      investmentRange: "₹15L – ₹20L",
      area: "600–1000 sq.ft",
      description: "Full-scale independent café with branding",
    },
  ] as FranchiseModelType[],
  costBreakdown: [
    { label: "Setup & Interiors", amount: "₹3.5L", percentage: 32.7 },
    { label: "Equipment", amount: "₹1.5L", percentage: 13.6 },
    { label: "Franchise Fee", amount: "₹5L", percentage: 5.45 },
    { label: "Working Capital", amount: "₹5L", percentage: 5.45 },
    { label: "Marketing & Launch", amount: "₹5L", percentage: 5.45 },
    { label: "Security Deposit", amount: "₹5L", percentage: 5.45 },
  ] as CostBreakdownItem[],
  totalInvestment: "₹10L Lakhs",
  totalLabel: "Total (Average)",
  detailLink: "FRR Lakhs",
};
