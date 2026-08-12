import { Building, ShieldCheck, Zap } from "lucide-react";

export const spaceOverviewData = {
  title: "Building Overview",
  tags: [
    { text: "GRADE A BUILDING" },
    { text: "LEED CERTIFIED" },
    { text: "FIBER OPTIC READY" },
    { text: "24/7 ACCESS" },
    { text: "CENTRAL AC" },
    { text: "VISITOR MANAGEMENT" },
    { text: "MULTI TIER SECURITY" },
  ],
  details: [
    { label: "Total Units", value: "45", icon: Building, bgClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]" },
    { label: "Building Management", value: "In-house", icon: ShieldCheck, bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]" },
    { label: "Power Backup", value: "100% DG Backup", icon: Zap, bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]" },
  ],
};
