import { LayoutTemplate, Grid3X3, Star } from "lucide-react";

export const spaceOverviewData = {
  title: "Space Overview",
  tags: [
    {
      text: "WARM SHELL",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "GLASS FACADE",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "COLUMN FREE",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "BRANDING SPACE",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "FALSE CEILING",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "STORAGE",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
    {
      text: "EXTERNAL BRANDING",
      color: "bg-[#0b1b42]/5 text-[#0b1b42] border border-[#0b1b42]/10",
    },
  ],
  details: [
    { label: "Partition Type", value: "Glass", icon: LayoutTemplate, bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]" },
    { label: "No. of Partitions", value: "2", icon: Grid3X3, bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]" },
    { label: "External Branding", value: "Available Outside", icon: Star, bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]" },
  ],
};
