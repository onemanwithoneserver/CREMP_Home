import {
  Percent,
  FileSignature,
  BadgeIndianRupee,
  MapPin,
  Vault,
  CalendarClock,
  Landmark,
  Wallet,
} from "lucide-react";
export const termsData = {
  overline: "TERMS & CONDITIONS",
  title: "Seller-defined conditions",
  count: "8 TERMS",
  visibleItems: [
    {
      label: "Brokerage applicable",
      value: "2% of annual rent",
      icon: Percent,
      color: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "Lease preference",
      value: "Company lease preferred",
      icon: FileSignature,
      color: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "Additional charges",
      value: "Registration & stamp duty charges extra",
      icon: BadgeIndianRupee,
      color: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
  ],
  hiddenItems: [
    {
      label: "Site visits",
      value: "By appointment only",
      icon: MapPin,
      color: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1]",
    },
    {
      label: "Security deposit",
      value: "Negotiable",
      icon: Vault,
      color: "bg-gradient-to-br from-[#bf953f] to-[#b38728]",
    },
    {
      label: "Lock-in period",
      value: "36 months",
      icon: CalendarClock,
      color: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C]",
    },
    {
      label: "Taxes",
      value: "GST applicable on monthly rent",
      icon: Landmark,
      color: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
    },
    {
      label: "Advance rent",
      value: "3 months",
      icon: Wallet,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
  ],
  warning:
    "Terms are seller-defined. CREMP does not validate or guarantee these conditions. Please review carefully before proceeding.",
};
