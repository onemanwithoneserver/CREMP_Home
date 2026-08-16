import {
  Building2,
  Maximize2,
  Compass,
  Ruler,
  Layers,
  Sparkles,
  ArrowUpRight,
  Shield,
  Eye,
  LayoutTemplate,
  Grid3X3,
  Users2,
  Video,
  Archive,
  Star,
  CheckCircle2,
} from "lucide-react";

export const spaceOverviewData = {
  overline: "Spatial & Architectural Specs",
  title: "Property & Space Overview",
  tags: [
    {
      text: "STANDALONE COMMERCIAL",
      color: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700/50",
    },
    {
      text: "CORNER UNIT",
      color: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-700/50",
    },
    {
      text: "WARM SHELL",
      color: "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-700/50",
    },
    {
      text: "GLASS FACADE (EXTERNAL BRANDING)",
      color: "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-700/50",
    },
    {
      text: "COLUMN FREE",
      color: "bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-700/50",
    },
    {
      text: "HIGH STREET FRONTAGE (85 FT)",
      color: "bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400 dark:border-cyan-700/50",
    },
    {
      text: "FALSE CEILING INSTALLED",
      color: "bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    },
    {
      text: "EXTERNAL & INTERNAL BRANDING",
      color: "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-700/50",
    },
  ],
  specs: [
    {
      label: "Building Type",
      value: "Commercial Complex",
      icon: Building2,
      bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "Plot Size (Sq.Yards)",
      value: "1,200 Sq. Yards",
      icon: Maximize2,
      bgClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      label: "Unit Facing",
      value: "North-East (Main Road)",
      icon: Compass,
      bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "Plot Dimensions",
      value: "60 ft x 180 ft",
      icon: Ruler,
      bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },

    {
      label: "Layout Dimensions",
      value: "45 ft x 120 ft (L x B)",
      icon: Ruler,
      bgClass: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
    },
    {
      label: "Road Size",
      value: "80 ft Wide Arterial Road",
      icon: ArrowUpRight,
      bgClass: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C]",
    },
    {
      label: "Floor & Total Floors",
      value: "Ground + 6 Floors (G+6)",
      icon: Layers,
      bgClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      label: "Ideal Business Category",
      value: "Corporate / Retail / BFSI",
      icon: Sparkles,
      bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "Corner Unit & Frontage",
      value: "Yes · 85 ft Frontage",
      icon: Shield,
      bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "Ceiling Height (ft)",
      value: "14 ft Clear Height",
      icon: Maximize2,
      bgClass: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1]",
    },
    {
      label: "Space Condition",
      value: "Warm Shell (Finished)",
      icon: CheckCircle2,
      bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
    {
      label: "Glass Facade & Branding",
      value: "Yes · High Street View",
      icon: Eye,
      bgClass: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
    },
    {
      label: "Flooring & Walls",
      value: "Vitrified Tile + POP Paint",
      icon: LayoutTemplate,
      bgClass: "bg-gradient-to-br from-[#bf953f] to-[#b38728]",
    },
    {
      label: "Partitions & Rooms",
      value: "12 Cabins + Glass Panels",
      icon: Grid3X3,
      bgClass: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C]",
    },
    {
      label: "External Branding",
      value: "Outside Facade + Lobby",
      icon: Star,
      bgClass: "bg-gradient-to-br from-[#10B981] to-[#047857]",
    },
    {
      label: "Meeting & Conference",
      value: "3 Meeting + 1 Boardroom",
      icon: Video,
      bgClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]",
    },
    {
      label: "Reception & Lounge",
      value: "Grand Double-Height Desk",
      icon: Users2,
      bgClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      label: "Storage & Server Space",
      value: "Dedicated 400 sq.ft room",
      icon: Archive,
      bgClass: "bg-gradient-to-br from-[#F97316] to-[#C2410C]",
    },
  ],
};
