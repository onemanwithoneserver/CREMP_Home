import { TrendingUp, BarChart3, Target, Clock, Award, FileCheck } from "lucide-react";

export const revenueROIData = {
  sectionLabel: "ESTIMATED ROI BY YEAR",
  revenueCards: [
    {
      icon: BarChart3,
      year: "Year 1",
      label: "Projected",
      range: "12–18%",
      description: "Built on initial footfall metrics",
      sublabel: "Typical for newly onoff/openstart",
      color: "#D4AF37",
    },
    {
      icon: TrendingUp,
      year: "Year 2",
      label: "Projected",
      range: "22–28%",
      description: "Marketing optimization significantly",
      sublabel: "Retention marketing increases revenue",
      color: "#22c55e",
    },
    {
      icon: Target,
      year: "Year 3",
      label: "Projected",
      range: "28–34%",
      description: "Year 3 as the first phase green light",
      sublabel: "Right to the revised sales projection",
      color: "#3b82f6",
    },
  ],
  paybackPeriod: {
    sectionLabel: "PAYBACK PERIOD",
    title: "18–24 Months",
    milestones: [
      { icon: FileCheck, label: "ROI Time Breakeven", status: "complete" },
      { icon: Award, label: "ROI: Staff Settled", status: "complete" },
      { icon: Clock, label: "ROI: Breakeven State", status: "active" },
      { icon: Target, label: "ROI: Full Payback", status: "upcoming" },
    ],
  },
};
