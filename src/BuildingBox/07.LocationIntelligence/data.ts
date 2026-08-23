import {
  Activity,
  Store,
  Handshake,
  BarChart3,
  Home,
  Globe,
  Zap,
  Train,
  Building2,
} from "lucide-react";
export const locationIntelligenceData = {
  title: "Location Intelligence",
  subtitle: "AI-Powered Insights",
  description:
    "CREMP's AI-powered intelligence engine is mapping commercial activity, brand density, and franchise demand for this micro-market.",
  footer: {
    title: "Linking Road, Bandra West",
    subtitle: "Commercial Corridor • High Footfall Zone",
  },
  items: [
    {
      label: "Commercial Activity",
      status: "Analysing...",
      icon: Activity,
      bgClass:
        "bg-gradient-to-br from-[#bf953f] to-[#b38728] shadow-sm shadow-[#d4af37]/20 border-none",
    },
    {
      label: "Retail Presence",
      status: "Indexing...",
      icon: Store,
      bgClass:
        "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] shadow-sm shadow-[#3B82F6]/20 border-none",
    },
    {
      label: "Franchise Opportunity",
      status: "Processing...",
      icon: Handshake,
      bgClass:
        "bg-gradient-to-br from-[#F97316] to-[#C2410C] shadow-sm shadow-[#F97316]/20 border-none",
    },
    {
      label: "Lease Demand",
      status: "Calculating...",
      icon: BarChart3,
      bgClass:
        "bg-gradient-to-br from-[#10B981] to-[#047857] shadow-sm shadow-[#10B981]/20 border-none",
    },
    {
      label: "Neighbourhood Profile",
      status: "Processing...",
      icon: Home,
      bgClass:
        "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-sm shadow-[#8B5CF6]/20 border-none",
    },
    {
      label: "Business Ecosystem",
      status: "Indexing...",
      icon: Globe,
      bgClass:
        "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] shadow-sm shadow-[#0EA5E9]/20 border-none",
    },
    {
      label: "Commercial Hotspots",
      status: "Analysing...",
      icon: Zap,
      bgClass:
        "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] shadow-sm shadow-[#F43F5E]/20 border-none",
    },
    {
      label: "Connectivity Score",
      status: "Calculating...",
      icon: Train,
      bgClass:
        "bg-gradient-to-br from-[#14B8A6] to-[#0F766E] shadow-sm shadow-[#14B8A6]/20 border-none",
    },
    {
      label: "Nearby Businesses",
      status: "Processing...",
      icon: Building2,
      bgClass:
        "bg-gradient-to-br from-[#bf953f] to-[#b38728] shadow-sm shadow-[#d4af37]/20 border-none",
    },
  ],
};
