import {
  Percent,
  Building,
  Stamp,
  Lock,
  ShieldCheck,
  Bell,
  IndianRupee,
  Zap,
  Briefcase,
  FileCheck,
} from "lucide-react";

export const termsData = {
  overline: "Master Commercial Terms & Remarks",
  title: "Building & Sub Lease Conditions",
  count: "10 TERMS",
  visibleItems: [
    {
      label: "Master Brokerage",
      value: "2% of annual rent",
      icon: Percent,
      color: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "Full Lease / Sub Lease",
      value: "Full Lease & Sub Lease Allowed",
      icon: Briefcase,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      label: "Lease Preference",
      value: "MNC / Corporate / BFSI preferred",
      icon: Building,
      color: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
  ],
  hiddenItems: [
    {
      label: "Additional Charges",
      value: "CAM ₹12/sq.ft & Registration extra",
      icon: Stamp,
      color: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
    {
      label: "Lock-in Period",
      value: "5 years minimum",
      icon: Lock,
      color: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1]",
    },
    {
      label: "Advance Deposit",
      value: "6 Months rent refundable",
      icon: ShieldCheck,
      color: "bg-gradient-to-br from-[#bf953f] to-[#b38728]",
    },
    {
      label: "Notice Period",
      value: "6 months prior notice",
      icon: Bell,
      color: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C]",
    },
    {
      label: "Property Tax",
      value: "To be borne by property owner",
      icon: IndianRupee,
      color: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
    },
    {
      label: "Utilities & Power",
      value: "Metered actuals + CAM based",
      icon: Zap,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      label: "Remarks & Clearances",
      value:
        "Clear title, Occupancy Certificate (OC) received, Fire NOC active",
      icon: FileCheck,
      color: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
  ],
  warning:
    "Terms are seller-defined. CREMP does not validate or guarantee these conditions. Please review all title deeds and lease agreements carefully before proceeding.",
};
