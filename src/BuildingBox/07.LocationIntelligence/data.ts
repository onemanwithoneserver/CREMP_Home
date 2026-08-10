import { Activity, Store, Handshake, BarChart3, Home, Globe, Zap, Train, Building2 } from "lucide-react";

export const locationIntelligenceData = {
    title: "Location Intelligence",
    description: "CREMP's AI-powered intelligence engine is mapping commercial activity, brand density, and franchise demand for this micro-market.",
    footer: "Linking Road, Bandra West · Commercial Corridor · High Footfall Zone",
    items: [
        { label: "Commercial Activity", status: "Analysing...", icon: Activity },
        { label: "Retail Presence", status: "Indexing...", icon: Store },
        { label: "Franchise Opportunities", status: "Processing...", icon: Handshake },
        { label: "Lease Demand", status: "Calculating...", icon: BarChart3 },
        { label: "Neighbourhood Profile", status: "Processing...", icon: Home },
        { label: "Business Ecosystem", status: "Indexing...", icon: Globe },
        { label: "Commercial Hotspots", status: "Analysing...", icon: Zap },
        { label: "Connectivity", status: "Calculating...", icon: Train },
        { label: "Nearby Business Parks", status: "Processing...", icon: Building2 },
    ]
};
