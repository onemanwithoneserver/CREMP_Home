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
    { label: "Total Units", value: "45", icon: Building },
    { label: "Building Management", value: "In-house", icon: ShieldCheck },
    { label: "Power Backup", value: "100% DG Backup", icon: Zap },
  ],
};
