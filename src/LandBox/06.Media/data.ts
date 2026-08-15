import {
  Video,
  Maximize,
  Images,
  LayoutGrid,
  Navigation,
  Map,
} from "lucide-react";

import premiumPlotImg from "../../assets/premium_land_plot.png";

export const mediaData = {
  title: "Media",
  tabs: [
    { label: "Video", count: 3, icon: Video },
    { label: "Site Plan", count: 2, icon: Map },
    { label: "3D Tour", count: 1, icon: Maximize },
    { label: "Photos", count: 14, icon: Images },
  ],
  videos: [
    {
      title: "Site Walkthrough",
      duration: "2:34",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80",
      fullWidth: true,
    },
    {
      title: "Plot Boundaries",
      duration: "1:12",
      image: premiumPlotImg,
      fullWidth: false,
    },
    {
      title: "Surrounding Area",
      duration: "3:05",
      image:
        "https://images.unsplash.com/photo-1590494490715-8167f40d39e2?auto=format&fit=crop&q=80",
      fullWidth: false,
    },
  ],
  floorPlans: [
    {
      title: "Site Plan",
      desc: "PDF · Scaled 1:100 · A3",
      icon: LayoutGrid,
    },
    {
      title: "Zoning Map",
      desc: "PDF · Scaled 1:500 · A3",
      icon: LayoutGrid,
    },
  ],
  virtualTour: {
    title: "360° Drone Tour",
    desc: "Interactive aerial walkthrough",
    image:
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80",
    btnIcon: Navigation,
    btnText: "Launch Tour",
  },
  photos: [
    {
      label: "Site View",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80",
    },
    {
      label: "Plot Area",
      image: premiumPlotImg,
    },
    {
      label: "Surroundings",
      image:
        "https://images.unsplash.com/photo-1590494490715-8167f40d39e2?auto=format&fit=crop&q=80",
    },
    {
      label: "Aerial View",
      image:
        "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80",
    },
    {
      label: "Terrain",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
    },
  ],
};
