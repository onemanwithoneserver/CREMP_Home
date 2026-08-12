import {
  FileText,
  Building2,
  TrendingUp,
  Calendar,
  Tag,
  Users,
  Store,
  CheckCircle2,
  Maximize2,
  Info,
} from "lucide-react";

export const tabsData = [
  { id: "lease", label: "Lease / Rent" },
  { id: "sale", label: "Sale" },
  { id: "pre_leased", label: "Pre-Leased" },
  { id: "fractional", label: "Fractional" },
];

export const tabContent: Record<string, any> = {
  lease: {
    header: {
      title: "MONTHLY RENT",
      value: "₹1.2L",
      suffix: "/mo",
      subtext: "₹100/sq.ft · Fixed Amount",
    },
    rightCard: {
      type: "box",
      label: "DEPOSIT",
      value: "₹3.6L",
      subtext: "3 months",
    },
    details: [
      { label: "Lease Type", value: "Full Lease", icon: FileText },
      { label: "Maintenance", value: "₹8,000/mo", icon: Building2 },
      { label: "Escalation", value: "5% pa", icon: TrendingUp },
      { label: "Escalation Cycle", value: "36 Months", icon: Calendar },
    ],
  },
  sale: {
    header: {
      title: "SALE PRICE",
      value: "₹1.85Cr",
      suffix: "",
      subtext: "₹15,417/sq.ft",
    },
    rightCard: {
      type: "pill",
      label: "Vacant Space",
    },
    details: [
      { label: "Est. Rental Yield", value: "7.8% pa", valueColor: "text-amber-500", icon: TrendingUp },
      { label: "Price / sq.ft", value: "₹15,417", icon: Tag },
      { label: "Additional Charges", value: "Stamp duty & registration charges extra", icon: Info },
    ],
  },
  pre_leased: {
    header: {
      title: "EXISTING RENT",
      value: "₹1.1L",
      valueColor: "text-emerald-500",
      suffix: "/mo",
      subtext: "",
    },
    rightCard: {
      type: "dark",
      label: "RENTAL YIELD",
      value: "7.8%",
      subtext: "per annum",
    },
    details: [
      { label: "Existing Tenant", value: "FabIndia Ltd.", icon: Users },
      { label: "Tenant Category", value: "Fashion Retail", icon: Store },
      { label: "Remaining Tenure", value: "18 Months", valueColor: "text-cyan-500", icon: Calendar },
      { label: "Rent Escalation", value: "5% / 36 Months", icon: TrendingUp },
      { label: "Sale Price", value: "₹1.85Cr", icon: Tag },
    ],
  },
  fractional: {
    header: {
      title: "ASSURED MONTHLY RENT",
      value: "₹30,000",
      suffix: "/mo",
      subtext: "Min. 300 sq.ft ownership",
    },
    rightCard: {
      type: "dark",
      label: "ANNUAL YIELD",
      value: "9.2%",
      subtext: "",
    },
    details: [
      { label: "Pre-Leased", value: "Yes", showCheck: true, valueColor: "text-emerald-500", icon: CheckCircle2 },
      { label: "Min. Investment", value: "300 sq.ft", icon: Maximize2 },
      { label: "Assured Returns", value: "Yes — Monthly", icon: TrendingUp },
    ],
    footer: "Ideal for passive income investors seeking assured returns.",
  },
};
