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
  overline: "TERMS & CONDITIONS",
  title: "Seller-defined conditions",
  count: "8 TERMS",
  visibleItems: [
    {
      label: "BROKERAGE APPLICABLE",
      value: "2% of annual rent",
      icon: Percent,
      color: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "LEASE PREFERENCE",
      value: "Company lease preferred",
      icon: Building,
      color: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "ADDITIONAL CHARGES",
      value: "Registration & stamp duty charges extra",
      icon: Stamp,
      color: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
  ],
  hiddenItems: [
    {
      label: "LOCK-IN PERIOD",
      value: "3 years",
      icon: Lock,
      color: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1]",
    },
    {
      label: "SECURITY DEPOSIT",
      value: "6 months rent",
      icon: ShieldCheck,
      color: "bg-gradient-to-br from-[#bf953f] to-[#b38728]",
    },
    {
      label: "NOTICE PERIOD",
      value: "3 months",
      icon: Bell,
      color: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C]",
    },
    {
      label: "PROPERTY TAX",
      value: "To be borne by owner",
      icon: IndianRupee,
      color: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
    },
    {
      label: "UTILITIES",
      value: "Water & electricity charges as per meter reading",
      icon: Zap,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
  ],
  warning:
    "Terms are seller-defined. CREMP does not validate or guarantee these conditions. Please review carefully before proceeding.",
};
