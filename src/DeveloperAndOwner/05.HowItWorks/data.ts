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
        "From listing your land to signing an anchor tenant, CREMP makes the entire development journey seamless.",
        "Follow a clear, structured path to monetize your assets.",
    ],
    steps: [
        {
            icon: UserPlus,
            step: "01",
            title: "List Project",
            desc: "Create your developer profile on CREMP and list your commercial projects or land assets.",
            color: "teal",
        },
        {
            icon: SlidersHorizontal,
            step: "02",
            title: "Set Parameters",
            desc: "Define your leasing terms, funding goals, and target tenant categories.",
            color: "blue",
        },
        {
            icon: Search,
            step: "03",
            title: "Get Matched",
            desc: "Our algorithm matches your project with expanding brands and active investors.",
            color: "teal",
        },
        {
            icon: MessageSquare,
            step: "04",
            title: "Connect & Pitch",
            desc: "Send proposals, schedule site visits, and negotiate directly with verified stakeholders.",
            color: "blue",
        },
        {
            icon: Handshake,
            step: "05",
            title: "Sign & Build",
            desc: "Finalize your leases or joint ventures and begin construction with confidence.",
            color: "teal",
        },
    ],
    connectorIcon: ArrowRight,
    outcome: {
        tag: "OUTCOME",
        lines: ["Clear process.", "Verified partners.", "Profitable developments."],
    },
};
