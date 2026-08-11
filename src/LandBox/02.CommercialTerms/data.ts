import {
  Maximize,
  Navigation,
  Compass,
  Layers,
  LayoutGrid,
  MapPin,
} from "lucide-react";

export const commercialData = {
  tabs: ["Sale", "Lease / Rent"],
  tabData: {
    Sale: {
      title: "Land Details",
      headerIcon: MapPin,
      headerIconBg: "bg-emerald-500",
      primaryAmountLabel: "SALE PRICE",
      primaryAmount: "₹1.85Cr",
      primaryAmountColor: "text-[#0a1128] dark:text-white",
      primaryDesc: "",
      primarySub: "₹15,417/sq.yd",
      details: [
        { label: "Plot Size", value: "2,400 sq.yd", icon: Maximize, bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]" },
        { label: "Road Width", value: "40 ft", icon: Navigation, bgClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]" },
        { label: "Facing", value: "North", icon: Compass, bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]" },
        { label: "Zoning", value: "Commercial / Mixed Use", icon: Layers, bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]" },
        { label: "Corner Plot", value: "✓ Yes", icon: LayoutGrid, bgClass: "bg-gradient-to-br from-[#bf953f] to-[#b38728]" },
      ],
    },
    "Lease / Rent": {
      title: "Land Details",
      headerIcon: MapPin,
      headerIconBg: "bg-emerald-500",
      primaryAmountLabel: "MONTHLY RENT",
      primaryAmount: "₹1.2L",
      primaryAmountColor: "text-[#0a1128] dark:text-white",
      primaryDesc: "/mo",
      primarySub: "₹100/sq.yd",
      details: [
        { label: "Plot Size", value: "2,400 sq.yd", icon: Maximize, bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]" },
        { label: "Road Width", value: "40 ft", icon: Navigation, bgClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]" },
        { label: "Facing", value: "North", icon: Compass, bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]" },
        { label: "Zoning", value: "Commercial / Mixed Use", icon: Layers, bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]" },
        { label: "Corner Plot", value: "✓ Yes", icon: LayoutGrid, bgClass: "bg-gradient-to-br from-[#bf953f] to-[#b38728]" },
      ],
    },
  },
} as const;
