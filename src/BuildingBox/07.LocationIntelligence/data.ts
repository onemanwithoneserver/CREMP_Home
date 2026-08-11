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
      color: "#0b1b42",
    },
    {
      label: "Retail Presence",
      status: "Indexing...",
      icon: Store,
      color: "#0b1b42",
    },
    {
      label: "Franchise Opportunity",
      status: "Processing...",
      icon: Handshake,
      color: "#0b1b42",
    },
    {
      label: "Lease Demand",
      status: "Calculating...",
      icon: BarChart3,
      color: "#0b1b42",
    },
    {
      label: "Neighbourhood Profile",
      status: "Processing...",
      icon: Home,
      color: "#0b1b42",
    },
    {
      label: "Business Ecosystem",
      status: "Indexing...",
      icon: Globe,
      color: "#0b1b42",
    },
    {
      label: "Commercial Hotspots",
      status: "Analysing...",
      icon: Zap,
      color: "#0b1b42",
    },
    {
      label: "Connectivity Score",
      status: "Calculating...",
      icon: Train,
      color: "#0b1b42",
    },
    {
      label: "Nearby Businesses",
      status: "Processing...",
      icon: Building2,
      color: "#0b1b42",
    },
  ],
};
