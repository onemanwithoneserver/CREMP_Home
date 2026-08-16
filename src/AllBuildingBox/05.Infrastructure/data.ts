import {
  Zap,
  Droplets,
  Wind,
  PlugZap,
  Car,
  Bath,
  Flame,
  Shield,
  Sun,
  ShieldAlert,
  ParkingCircle,
  Activity,
} from "lucide-react";

export const infrastructureData = {
  title: "Infrastructure & Utilities",
  items: [
    {
      label: "Designated Parking",
      sub: "18 Reserved Basement Stalls",
      status: "RESERVED",
      statusColor: "text-emerald-500",
      icon: ParkingCircle,
      iconBg:
        "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-sm border-none text-white",
    },
    {
      label: "No. of Parkings",
      sub: "24 Total Covered Bays",
      status: "24 SPOTS",
      statusColor: "text-indigo-500",
      icon: Car,
      iconBg:
        "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-sm border-none text-white",
    },
    {
      label: "Visitor Parking",
      sub: "Dedicated 8 Surface Bays",
      status: "8 SPACES",
      statusColor: "text-emerald-500",
      icon: Car,
      iconBg:
        "bg-gradient-to-br from-[#10B981] to-[#047857] shadow-sm border-none text-white",
    },
    {
      label: "Power Backup",
      sub: "100% DG Backup with Auto-Sync",
      status: "100% DG",
      statusColor: "text-emerald-500",
      icon: Activity,
      iconBg:
        "bg-gradient-to-br from-[#bf953f] to-[#b38728] shadow-sm border-none text-white",
    },
    {
      label: "Power Load (Sanctioned)",
      sub: "120 kVA Sanctioned",
      status: "120 kVA",
      statusColor: "text-emerald-500",
      icon: Zap,
      iconBg:
        "bg-gradient-to-br from-[#F97316] to-[#C2410C] shadow-sm border-none text-white",
    },
    {
      label: "Power Phase",
      sub: "Three Phase HT Substation",
      status: "3 PHASE",
      statusColor: "text-emerald-500",
      icon: PlugZap,
      iconBg:
        "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-sm border-none text-white",
    },
    {
      label: "Electricals",
      sub: "Concealed Copper + Schneider Panels",
      status: "WIRED",
      statusColor: "text-emerald-500",
      icon: PlugZap,
      iconBg:
        "bg-gradient-to-br from-[#14B8A6] to-[#0F766E] shadow-sm border-none text-white",
    },
    {
      label: "HVAC (AC)",
      sub: "VRV Central Air Conditioning",
      status: "VRV SYSTEM",
      statusColor: "text-emerald-500",
      icon: Wind,
      iconBg:
        "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-sm border-none text-white",
    },
    {
      label: "Lighting",
      sub: "Recessed Energy-Saving LED",
      status: "LED FITTED",
      statusColor: "text-emerald-500",
      icon: Sun,
      iconBg:
        "bg-gradient-to-br from-[#bf953f] to-[#b38728] shadow-sm border-none text-white",
    },
    {
      label: "Compound Wall",
      sub: "Gated Perimeter + Boom Barrier",
      status: "SECURED",
      statusColor: "text-emerald-500",
      icon: Shield,
      iconBg:
        "bg-gradient-to-br from-[#10B981] to-[#047857] shadow-sm border-none text-white",
    },
    {
      label: "Water Connection",
      sub: "24/7 Municipal & Borewell",
      status: "CONNECTED",
      statusColor: "text-emerald-500",
      icon: Droplets,
      iconBg:
        "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-sm border-none text-white",
    },
    {
      label: "Washrooms",
      sub: "6 Separate (M/F) + 1 Executive",
      status: "7 UNITS",
      statusColor: "text-emerald-500",
      icon: Bath,
      iconBg:
        "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-sm border-none text-white",
    },
    {
      label: "Fire Sprinklers",
      sub: "Automated Ceiling Grid",
      status: "NOC READY",
      statusColor: "text-emerald-500",
      icon: Flame,
      iconBg:
        "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] shadow-sm border-none text-white",
    },
    {
      label: "Fire Extinguishers",
      sub: "ABC & CO2 on all floors",
      status: "COMPLIANT",
      statusColor: "text-emerald-500",
      icon: ShieldAlert,
      iconBg:
        "bg-gradient-to-br from-[#F97316] to-[#C2410C] shadow-sm border-none text-white",
    },
  ],
};
