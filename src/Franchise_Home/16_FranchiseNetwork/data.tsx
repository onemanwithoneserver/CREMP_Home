import { MapPin, Building2, Target, Lock } from "lucide-react";

export const franchiseNetworkData = {
  sectionLabel: "EXPANSION MAP",
  title: "Franchise Network — India",
  outletCount: "6 active zones • 120 outlets",
  legend: [
    { color: "#D4AF37", label: "Existing Outlets", icon: Building2 },
    { color: "#22c55e", label: "Expansion Cities", icon: MapPin },
    { color: "#3b82f6", label: "Franchise Territories", icon: Target },
    { color: "#ef4444", label: "Available Territories", icon: Lock },
  ],
  networkStats: {
    label: "NATIONAL SUMMARY",
    items: [
      { label: "Active Outlets", value: "187+" },
      { label: "States Present", value: "8" },
      { label: "In Pipeline", value: "25" },
      { label: "Tier 1 Cities", value: "6" },
      { label: "Tier 2 Cities", value: "8" },
      { label: "Territory Count", value: "84/90" },
    ],
  },
  cta: {
    primary: "Check Territory Availability",
    secondary: "Download Territory Map",
  },
};
