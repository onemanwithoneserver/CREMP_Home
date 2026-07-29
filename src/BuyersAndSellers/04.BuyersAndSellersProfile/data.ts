import {
    BarChart3,
    Briefcase,
    Building2,
    Calendar,
    Clock,
    MapPin,
    Shield,
    Star,
    Target,
    TrendingUp,
    User,
    Wallet,
} from "lucide-react";

export const BuyersAndSellersProfileData = {
    tag: "YOUR PROFILE",
    titleBase: "Your Profile.",
    titleHighlight: "Your Preferences.",
    desc: [
        "Every buyer and seller has unique real estate goals, budgets, and timelines.",
        "Set your preferences once and let CREMP match you with the right opportunities from external networks—so you only see what matters to you.",
    ],
    pills: [
        { icon: Wallet, label: "Property Budget" },
        { icon: MapPin, label: "Preferred Areas" },
        { icon: Briefcase, label: "Property Type" },
        { icon: Calendar, label: "Timeline to Move" },
        { icon: Building2, label: "Space Requirement" },
        { icon: TrendingUp, label: "Resale Value" },
    ],
    expectationsTitle: "Preferences You Can Define",
    expectations: [
        {
            icon: User,
            title: "Property Type",
            desc: "Choose between single-family homes, condos, commercial spaces, or land.",
        },
        {
            icon: Target,
            title: "Location Preferences",
            desc: "Define your preferred neighborhoods, school districts, and zip codes.",
        },
        {
            icon: Clock,
            title: "Closing Timeline",
            desc: "Specify how soon you want to close on a property.",
        },
        {
            icon: Shield,
            title: "Inspection Needs",
            desc: "Indicate your comfort level with fixer-uppers or turnkey homes.",
        },
        {
            icon: Star,
            title: "Amenities",
            desc: "Set filters for pools, garages, square footage, and recent renovations.",
        },
        {
            icon: BarChart3,
            title: "Price Range",
            desc: "Define your budget or listing price to attract the right matches.",
        },
    ],
    outcome: {
        tag: "Outcome",
        title:
            "See only the properties and buyers that match your real estate goals.",
    },
};
