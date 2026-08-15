import { Layers, Grid3X3, MapPin } from "lucide-react";

export const spaceOverviewData = {
  title: "Plot Overview",
  tags: [
    {
      text: "CLEAR TITLE",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "CORNER PLOT",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "COMMERCIAL ZONING",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "LEVEL GROUND",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "FREEHOLD",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "HIGH VISIBILITY",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
  ],
  details: [
    {
      label: "Soil Type",
      value: "Red Soil",
      icon: Layers,
      bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "FSI / FAR",
      value: "2.5",
      icon: Grid3X3,
      bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "Road Access",
      value: "40ft Wide Road",
      icon: MapPin,
      bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
  ],
};
