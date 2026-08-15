import {
  Percent,
  Building,
  Stamp,
  Lock,
  ShieldCheck,
  Bell,
  IndianRupee,
  Zap,
} from "lucide-react";

export const termsData = {
  overline: "Master Lease Terms",
  title: "Building-level conditions",
  count: "8 TERMS",
  visibleItems: [
    {
      label: "Master Brokerage",
      value: "2% of annual rent",
      icon: Percent,
      color: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "Lease preference",
      value: "MNC / Corporate preferred",
      icon: Building,
      color: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "Additional charges",
      value: "CAM & Registration extra",
      icon: Stamp,
      color: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
  ],
  hiddenItems: [
    {
      label: "Lock-in period",
      value: "5 years minimum",
      icon: Lock,
      color: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1]",
    },
    {
      label: "Security deposit",
      value: "9 months rent",
      icon: ShieldCheck,
      color: "bg-gradient-to-br from-[#bf953f] to-[#b38728]",
    },
    {
      label: "Notice period",
      value: "6 months",
      icon: Bell,
      color: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C]",
    },
    {
      label: "Property tax",
      value: "To be borne by owner",
      icon: IndianRupee,
      color: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
    },
    {
      label: "Utilities",
      value: "Common Area Maintenance based",
      icon: Zap,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
  ],
  warning:
    "Terms are seller-defined. CREMP does not validate or guarantee these conditions. Please review carefully before proceeding.",
};
