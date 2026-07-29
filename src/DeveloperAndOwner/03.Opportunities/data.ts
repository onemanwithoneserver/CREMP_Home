import {
    Briefcase,
    Building2,
    Handshake,
    Landmark,
    Search,
    TrendingUp,
} from "lucide-react";

export const opportunitiesData = {
    tag: "EXPLORE POTENTIAL",
    titleBase: "Developer Horizons.",
    titleHighlight: "Maximum Yield.",
    desc: [
        "Whether you're looking to pre-lease a new commercial tower, find buyers for an industrial park, or partner on a joint venture—CREMP brings the right stakeholders to you.",
        "Showcase your projects to a verified network of investors, brands, and corporate tenants.",
    ],
    showcaseMenu: [
        { icon: Building2, text: "Commercial Leasing" },
        { icon: Landmark, text: "Land Monetization" },
        { icon: Briefcase, text: "Joint Ventures" },
        { icon: TrendingUp, text: "Project Funding" },
        { icon: Search, text: "Anchor Tenants" },
        { icon: Handshake, text: "Direct Sales" },
    ],
    tabletStats: [
        { value: "50K+", label: "Active Investors" },
        { value: "100+", label: "Cities Covered" },
        { value: "₹500Cr+", label: "Funding Pool" },
        { value: "4.9/5", label: "Developer Rating" },
    ],
    outcome: {
        tag: "OUTCOME",
        text: "Secure the right tenants and funding before you break ground.",
        icon: Handshake,
    },
};
