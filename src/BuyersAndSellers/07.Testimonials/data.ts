import {
    Award,
    Building2,
    CalendarDays,
    Handshake,
    Headphones,
    Rocket,
    ShieldCheck,
    Store,
    TrendingUp,
    Users,
} from "lucide-react";

export const testimonialsData = {
    tag: "EARLY ACCESS • JOIN BEFORE LAUNCH",
    title: "Be Among the\nFirst Buyers & Sellers\non CREMP",
    desc: "Join CREMP before public launch and get early access to our integrated real estate network. Connect directly with MLS platforms, commercial exchanges, and private seller networks.",
    growthNodes: [
        { icon: Building2, label: "Commercial\nNetworks", pos: "left-top" },
        { icon: Store, label: "Residential\nMLS Data", pos: "left-bottom" },
        { icon: Handshake, label: "Direct Buyer\nMatching", pos: "right-top" },
        { icon: ShieldCheck, label: "Verified\nListings", pos: "right-bottom" },
    ],
    benefitsTitle: "Early Access Benefits",
    benefits: [
        { icon: TrendingUp, text: "Priority access to off-market properties" },
        { icon: Users, text: "Direct connections with top brokerages" },
        { icon: Award, text: "Featured listing status for sellers" },
        { icon: Headphones, text: "Dedicated support team" },
        { icon: CalendarDays, text: "Exclusive market trend reports" },
        { icon: ShieldCheck, text: "Pre-launch subscription advantage" },
    ],
    buttons: [
        {
            icon: Rocket,
            title: "Join CREMP Now",
            subtitle: "Secure your early access spot. Start exploring properties.",
        },
        { icon: CalendarDays, title: "Schedule\nOnboarding" },
    ],
    bottomDisclaimer:
        "Limited early access spots available for buyers and sellers.",
};
