import {
  MapPin,
  Store,
  FileCheck,
  GraduationCap,
  Settings,
  Megaphone,
  Truck,
  Users,
  Monitor,
  Smartphone,
} from "lucide-react";

export const fullCycleSupportData = {
  sectionLabel: "SUPPORT SESSIONS",
  title: "Full-cycle partner support — from Day 0 to Daily Operations",
  subtitle:
    "Every franchisor gets a dedicated launch manager, quarterly audits, and access to the full support stack below.",
  ctaLabel: "Request Advisor",
  supportItems: [
    {
      icon: MapPin,
      title: "Location Assistance",
      description: "Site selection & geo analysis",
      colorClass: "bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] text-white shadow-[0_2px_8px_rgba(212,175,55,0.4)]",
    },
    {
      icon: Store,
      title: "Outlet Setup",
      description: "Full fit-to-finish management",
      colorClass: "bg-[#8B5CF6]/10 dark:bg-[#0a1128] text-[#8B5CF6] border border-[#8B5CF6]/30 shadow-md shadow-[#8B5CF6]/20",
    },
    {
      icon: FileCheck,
      title: "Licensing",
      description: "FSSAI, GST & trade permits",
      colorClass: "bg-[#10B981]/10 dark:bg-[#121c33] text-[#10B981] border border-[#10B981]/30 shadow-md shadow-[#10B981]/20",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "3-week multistage programs",
      colorClass: "bg-[#F97316]/10 dark:bg-[#0a1128] text-[#F97316] border border-[#F97316]/30 shadow-md shadow-[#F97316]/20",
    },
    {
      icon: Settings,
      title: "Operations",
      description: "SOPs, audits & QA response",
      colorClass: "bg-[#121c33] text-[#FBBF24] border border-white/10 shadow-md",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "National & hyperlocal campaigns",
      colorClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-[0_2px_8px_rgba(139,92,246,0.4)]",
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "Central orders & sourcing network",
      colorClass: "bg-gradient-to-br from-[#10B981] to-[#047857] text-white shadow-[0_2px_8px_rgba(16,185,129,0.4)]",
    },
    {
      icon: Users,
      title: "Staffing",
      description: "Hire, onboard & HR framework",
      colorClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C] text-white shadow-[0_2px_8px_rgba(249,115,22,0.4)]",
    },
    {
      icon: Monitor,
      title: "POS Systems",
      description: "Integrated branded tech platform",
      colorClass: "bg-gradient-to-bl from-[#FBBF24] to-[#D97706] text-[#0a1128] shadow-[0_2px_8px_rgba(251,191,36,0.4)]",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "White-label consumer app",
      colorClass: "bg-gradient-to-b from-[#121c33] to-[#0a1128] text-[#94A3B8] border border-[#2a2d45] shadow-md",
    },
  ],
};
