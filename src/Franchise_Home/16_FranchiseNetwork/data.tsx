import { Building2, Lock, MapPin, Target } from "lucide-react";

export const franchiseNetworkData = {
  sectionLabel: "EXPANSION MAP",
  title: "Franchise Network — India",
  outletCount: "6 active zones • 120 outlets",
  legend: [
    { intent: "warning", label: "Existing Outlets", icon: Building2 },
    { intent: "success", label: "Expansion Cities", icon: MapPin },
    { intent: "info", label: "Franchise Territories", icon: Target },
    { intent: "danger", label: "Available Territories", icon: Lock },
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
