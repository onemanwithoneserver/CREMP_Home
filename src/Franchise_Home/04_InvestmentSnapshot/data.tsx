import {
    Banknote,
    Building,
    Clock,
    IndianRupee,
    Maximize2,
    TrendingUp,
} from "lucide-react";

export const investmentSnapshotData = {
    sectionLabel: "INVESTMENT SNAPSHOT",
    stats: [
        {
            icon: IndianRupee,
            label: "Total Investment",
            value: "₹6L – ₹12L",
            sublabel: "All-inclusive setup cost",
            intent: "success",
        },
        {
            icon: Banknote,
            label: "Franchise Fee",
            value: "₹5 Lakhs",
            sublabel: "One-time licensing fee",
            intent: "warning",
        },
        {
            icon: Maximize2,
            label: "Carpet Area",
            value: "400–600 sq.ft",
            sublabel: "Customisable property",
            intent: "info",
        },
        {
            icon: TrendingUp,
            label: "Average ROI",
            value: "28–34% p.a.",
            sublabel: "Return on total investment",
            intent: "success",
        },
        {
            icon: Clock,
            label: "Payback Period",
            value: "18–24 Months",
            sublabel: "Estimated payback timeline",
            intent: "primary",
        },
        {
            icon: Building,
            label: "Model",
            value: "FOCO / FOFO",
            sublabel: "Franchise operating structures",
            intent: "neutral",
        },
    ],
};
