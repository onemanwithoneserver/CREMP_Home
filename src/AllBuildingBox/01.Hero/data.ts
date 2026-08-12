import { Compass, Layers, Maximize2, MoveHorizontal } from "lucide-react";

export const heroData = {
  badges: ["COMMERCIAL", "IT PARK", "GRADE A"],
  title: "Premium Commercial IT Park",
  location: "Linking Road, Bandra West, Mumbai 400050",
  mediaInfo: { videos: 3, photos: 14 },
  stats: [
    {
      label: "TOTAL AREA",
      value: "120,000 sq.ft",
      icon: Maximize2,
      color: "bg-blue-500",
      iconColor: "text-white",
    },
    {
      label: "FLOORS",
      value: "G + 10",
      icon: Layers,
      color: "bg-emerald-500",
      iconColor: "text-white",
    },
    {
      label: "PARKING",
      value: "150 Cars",
      icon: MoveHorizontal,
      color: "bg-amber-500",
      iconColor: "text-white",
    },
    {
      label: "OCCUPANCY",
      value: "85%",
      icon: Compass,
      color: "bg-rose-500",
      iconColor: "text-white",
    },
  ],
};
