import { Box, Armchair, Monitor, Coffee } from "lucide-react";

export const fitOutData = {
  title: "Fit-out & Furniture",
  subtitle: "Core essentials",
  included: ["AC", "Fridge", "Water Dispenser", "Internet Modem"],
  items: [
    {
      label: "Storage / Cupboards",
      icon: Box,
      active: true,
      bgClass: "bg-gradient-to-br from-rose-500 to-rose-700",
    },
    {
      label: "Sofa / Lounge",
      icon: Armchair,
      active: true,
      bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "Reception Desk",
      icon: Monitor,
      active: true,
      bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
    {
      label: "Pantry Equipment",
      icon: Coffee,
      active: true,
      bgClass: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1]",
    },
  ],
};
