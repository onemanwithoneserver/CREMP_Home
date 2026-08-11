import { Compass, Layers, Maximize2, MoveHorizontal } from "lucide-react";

export const heroData = {
  badges: ["COMMERCIAL", "WARM SHELL", "CORNER UNIT"],
  title: "Premium Ground Floor Retail Space",
  location: "Linking Road, Bandra West, Mumbai 400050",
  mediaInfo: { videos: 3, photos: 14 },
  stats: [
    {
      label: "CARPET",
      value: "1,200 sq.ft",
      icon: Maximize2,
      color: "bg-blue-500",
      iconColor: "text-white",
    },
    {
      label: "FLOOR",
      value: "Ground",
      icon: Layers,
      color: "bg-emerald-500",
      iconColor: "text-white",
    },
    {
      label: "FRONTAGE",
      value: "40 ft",
      icon: MoveHorizontal,
      color: "bg-amber-500",
      iconColor: "text-white",
    },
    {
      label: "FACING",
      value: "North",
      icon: Compass,
      color: "bg-rose-500",
      iconColor: "text-white",
    },
  ],
};
