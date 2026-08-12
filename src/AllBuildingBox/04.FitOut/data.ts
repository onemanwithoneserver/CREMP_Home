import { Building2, Utensils, Car, Zap } from "lucide-react";

export const fitOutData = {
  title: "Building Core & Shell",
  subtitle: "Building-level features",
  included: ["Central HVAC", "Passenger Elevators", "Service Elevators", "Fire Detection"],
  items: [
    { label: "Grand Lobby", icon: Building2, active: true, bgClass: "bg-gradient-to-br from-rose-500 to-rose-700" },
    { label: "Cafeteria", icon: Utensils, active: true, bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]" },
    { label: "Basement Parking", icon: Car, active: true, bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]" },
    { label: "Power Backup", icon: Zap, active: true, bgClass: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1]" },
  ],
};
