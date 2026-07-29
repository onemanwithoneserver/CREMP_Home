import { ExternalLink, Home, MapPin, Search, ShieldCheck } from "lucide-react";

export const heroData = {
    tag: "FOR BUYERS & SELLERS • CONNECTING THE MARKET",
    titleHighlight: "Real Estate Journey.",
    desc: "Powered by India's Integrated Commercial Real Estate Platform, CREMP connects buyers and sellers with verified listings from external top networks. Discover properties, list your spaces, and access trusted market data.",
    buttons: [
        { text: "Search Properties", icon: Search, variant: "primary" },
        { text: "List Your Property", icon: Home, variant: "outline" },
    ],
    features: [
        { icon: ExternalLink, text: "Network\nIntegrations" },
        { icon: ShieldCheck, text: "Verified\nListings" },
        { icon: MapPin, text: "Local Market\nData" },
    ],
};
