import {
  Zap,
  Droplets,
  Wind,
  PlugZap,
  Car,
  Bath,
  Flame,
  Shield,
} from "lucide-react";
export const infrastructureData = {
  title: "Infrastructure & Facilities",
  items: [
    {
      label: "Power",
      sub: "30 kW · Three Phase",
      status: "INSTALLED",
      statusColor: "text-emerald-500",
      icon: Zap,
      iconBg:
        "bg-gradient-to-br from-[#bf953f] to-[#b38728] shadow-sm shadow-[#d4af37]/20 border-none text-white",
    },
    {
      label: "Water",
      sub: "Municipal + Borewell",
      status: "CONNECTED",
      statusColor: "text-emerald-500",
      icon: Droplets,
      iconBg:
        "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-sm shadow-[#3B82F6]/20 border-none text-white",
    },
    {
      label: "HVAC / AC",
      sub: "Ducting provision done",
      status: "PROVISION",
      statusColor: "text-orange-500",
      icon: Wind,
      iconBg:
        "bg-gradient-to-br from-[#F97316] to-[#C2410C] shadow-sm shadow-[#F97316]/20 border-none text-white",
    },
    {
      label: "Electricals",
      sub: "30 kW sanctioned",
      status: "WIRED",
      statusColor: "text-emerald-500",
      icon: PlugZap,
      iconBg:
        "bg-gradient-to-br from-[#10B981] to-[#047857] shadow-sm shadow-[#10B981]/20 border-none text-white",
    },
    {
      label: "Parking",
      sub: "Visitor: Limited",
      status: "4 SPOTS",
      statusColor: "text-indigo-500",
      icon: Car,
      iconBg:
        "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-sm shadow-[#8B5CF6]/20 border-none text-white",
    },
    {
      label: "Washrooms",
      sub: "Accessible 24/7",
      status: "WITHIN UNIT",
      statusColor: "text-emerald-500",
      icon: Bath,
      iconBg:
        "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-sm shadow-[#0EA5E9]/20 border-none text-white",
    },
    {
      label: "Fire Safety",
      sub: "Sprinklers + Extinguishers",
      status: "COMPLIANT",
      statusColor: "text-emerald-500",
      icon: Flame,
      iconBg:
        "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] shadow-sm shadow-[#F43F5E]/20 border-none text-white",
    },
    {
      label: "Compound Wall",
      sub: "Secured perimeter",
      status: "YES",
      statusColor: "text-emerald-500",
      icon: Shield,
      iconBg:
        "bg-gradient-to-br from-[#14B8A6] to-[#0F766E] shadow-sm shadow-[#14B8A6]/20 border-none text-white",
    },
  ],
};
