import { MapPin, Store, Target, TrendingUp, Users } from "lucide-react";

export const marketData = {
    tag: "YOUR MARKETS",
    titleBase: "Your Markets.",
    titleHighlight: "Your Rules.",
    desc: [
        "Expand where your business wants to grow—not where your marketing budget gets wasted.",
        "Launch campaigns only for the micro markets that matter to your business, whether you're entering a new city or strengthening your presence around existing outlets.",
    ],
    hexagons: [
        {
            title: "Financial District",
            status: "Active Campaign",
            color: "blue",
            icon: Store,
            position: { top: "35%", left: "20%" },
        },
        {
            title: "Hi-Tech City",
            status: "Active Campaign",
            color: "blue",
            icon: Store,
            position: { top: "20%", left: "48%" },
        },
        {
            title: "Kukatpally",
            status: "Active Campaign",
            color: "blue",
            icon: Store,
            position: { top: "15%", left: "75%" },
        },
        {
            title: "Uppal Corridor",
            status: "Upcoming Campaign",
            color: "gold",
            icon: Store,
            position: { top: "35%", right: "10%" },
        },
        {
            title: "Existing Outlet",
            status: "Strengthening Presence",
            color: "gray",
            icon: Store,
            position: { top: "55%", left: "55%" },
        },
    ],
    benefitsTitle: "KEY BENEFITS",
    benefits: [
        { icon: Target, text: "Target specific commercial micro markets" },
        { icon: Users, text: "Focus on high-footfall business districts" },
        { icon: MapPin, text: "Prioritize preferred expansion corridors" },
        { icon: Store, text: "Promote opportunities around existing outlets" },
        {
            icon: TrendingUp,
            text: "Improve enquiry quality while making every marketing rupee work harder",
        },
    ],
    outcome: {
        tag: "OUTCOME",
        lines: ["Better locations.", "Better enquiries.", "Better ROI."],
    },
};
