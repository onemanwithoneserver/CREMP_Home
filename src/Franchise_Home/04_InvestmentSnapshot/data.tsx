import {
  IndianRupee,
  Banknote,
  Maximize2,
  TrendingUp,
  Clock,
  Building,
} from "lucide-react";

export const investmentSnapshotData = {
  sectionLabel: "INVESTMENT SNAPSHOT",
  stats: [
    {
      icon: IndianRupee,
      label: "Total Investment",
      value: "₹6L – ₹12L",
      sublabel: "All-inclusive setup cost",
      highlight: true,
    },
    {
      icon: Banknote,
      label: "Franchise Fee",
      value: "₹5 Lakhs",
      sublabel: "One-time licensing fee",
      highlight: false,
    },
    {
      icon: Maximize2,
      label: "Carpet Area",
      value: "400–600 sq.ft",
      sublabel: "Customisable property",
      highlight: false,
    },
    {
      icon: TrendingUp,
      label: "Average ROI",
      value: "28–34% p.a.",
      sublabel: "Return on total investment",
      highlight: true,
    },
    {
      icon: Clock,
      label: "Payback Period",
      value: "18–24 Months",
      sublabel: "Estimated payback timeline",
      highlight: false,
    },
    {
      icon: Building,
      label: "Model",
      value: "FOCO / FOFO",
      sublabel: "Franchise operating structures",
      highlight: false,
    },
  ],
};
