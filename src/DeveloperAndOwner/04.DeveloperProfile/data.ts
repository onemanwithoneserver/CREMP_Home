import {
  Wallet,
  MapPin,
  Briefcase,
  Calendar,
  Building2,
  TrendingUp,
  User,
  Target,
  Clock,
  Star,
  BarChart3,
  Shield,
} from "lucide-react";

export const DeveloperProfileData = {
  tag: "PROJECT PROFILE",
  titleBase: "Project Profile.",
  titleHighlight: "Target Audience.",
  desc: [
    "Every development project has unique requirements for tenants, funding, and leasing timelines.",
    "Set your project parameters once and let CREMP match you with the right anchor brands and institutional investors.",
  ],
  pills: [
    { icon: Wallet, label: "Funding Target" },
    { icon: MapPin, label: "Project Location" },
    { icon: Briefcase, label: "Asset Class" },
    { icon: Calendar, label: "Completion Date" },
    { icon: Building2, label: "Total GLA" },
    { icon: TrendingUp, label: "Expected ROI" },
  ],
  expectationsTitle: "Project Parameters You Can Define",
  expectations: [
    {
      icon: User,
      title: "Tenant Mix",
      desc: "Choose between retail brands, corporate offices, or mixed-use commercial.",
    },
    {
      icon: Target,
      title: "Leasing Strategy",
      desc: "Define your strategy for anchor tenants versus vanilla box spaces.",
    },
    {
      icon: Clock,
      title: "Project Timeline",
      desc: "Specify construction phases and targeted handover dates.",
    },
    {
      icon: Shield,
      title: "Partnership Type",
      desc: "Indicate your preference for joint ventures, outright sale, or leasing.",
    },
    {
      icon: Star,
      title: "Brand Tier",
      desc: "Set filters to attract premium, national, or international brands.",
    },
    {
      icon: BarChart3,
      title: "Investment Size",
      desc: "Define your funding requirements for seamless investor matching.",
    },
  ],
  outcome: {
    tag: "Outcome",
    title:
      "Connect only with brands and investors that match your development goals.",
  },
};
