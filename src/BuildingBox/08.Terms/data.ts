import {
  Percent,
  Building,
  Stamp,
  Lock,
  ShieldCheck,
  Bell,
  FileText,
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
      color: "bg-[#059669]",
    },
    {
      label: "LEASE PREFERENCE",
      value: "Company lease preferred",
      icon: Building,
      color: "bg-[#7c3aed]",
    },
    {
      label: "ADDITIONAL CHARGES",
      value: "Registration & stamp duty charges extra",
      icon: Stamp,
      color: "bg-[#ea580c]",
    },
  ],
  hiddenItems: [
    {
      label: "LOCK-IN PERIOD",
      value: "3 years",
      icon: Lock,
      color: "bg-[#0284c7]",
    },
    {
      label: "SECURITY DEPOSIT",
      value: "6 months rent",
      icon: ShieldCheck,
      color: "bg-[#d97706]",
    },
    {
      label: "NOTICE PERIOD",
      value: "3 months",
      icon: Bell,
      color: "bg-[#e11d48]",
    },
    {
      label: "PROPERTY TAX",
      value: "To be borne by owner",
      icon: FileText,
      color: "bg-[#0d9488]",
    },
    {
      label: "UTILITIES",
      value: "Water & electricity charges as per meter reading",
      icon: Zap,
      color: "bg-[#06b6d4]",
    },
  ],
  warning:
    "Terms are seller-defined. CREMP does not validate or guarantee these conditions. Please review carefully before proceeding.",
};
