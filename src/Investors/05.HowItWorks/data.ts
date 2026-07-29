import {
    ArrowRight,
    Handshake,
    MessageSquare,
    Search,
    SlidersHorizontal,
    UserPlus,
} from "lucide-react";

export const howItWorksData = {
    tag: "HOW IT WORKS",
    titleBase: "How It Works.",
    titleHighlight: "Simple & Transparent.",
    desc: [
        "From registration to your first brand connection, CREMP makes the entire investment journey seamless.",
        "Follow a clear, structured path to find the right opportunity.",
    ],
    steps: [
        {
            icon: UserPlus,
            step: "01",
            title: "Register",
            desc: "Create your investor profile on CREMP with your basic details and investment interests.",
            color: "teal",
        },
        {
            icon: SlidersHorizontal,
            step: "02",
            title: "Set Preferences",
            desc: "Define your budget, preferred locations, categories and investment timeline.",
            color: "blue",
        },
        {
            icon: Search,
            step: "03",
            title: "Browse Opportunities",
            desc: "Explore franchise brands, commercial properties and retail opportunities that match your criteria.",
            color: "teal",
        },
        {
            icon: MessageSquare,
            step: "04",
            title: "Connect with Brands",
            desc: "Send enquiries, schedule discovery calls and access brand videos and detailed profiles.",
            color: "blue",
        },
        {
            icon: Handshake,
            step: "05",
            title: "Invest & Grow",
            desc: "Finalize your investment and begin your journey as a franchise partner or property investor.",
            color: "teal",
        },
    ],
    connectorIcon: ArrowRight,
    outcome: {
        tag: "OUTCOME",
        lines: ["Clear process.", "Trusted brands.", "Smart investments."],
    },
};
