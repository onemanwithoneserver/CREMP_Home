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
export const investorProfileData = {
  tag: "YOUR PROFILE",
  titleBase: "Your Profile.",
  titleHighlight: "Your Preferences.",
  desc: [
    "Every investor has unique goals, budgets and timelines.",
    "Set your preferences once and let CREMP match you with the right opportunities—so you only see what matters to you.",
  ],
  pills: [
    { icon: Wallet, label: "Investment Budget" },
    { icon: MapPin, label: "Preferred Cities" },
    { icon: Briefcase, label: "Industry Interest" },
    { icon: Calendar, label: "Timeline to Invest" },
    { icon: Building2, label: "Space Requirement" },
    { icon: TrendingUp, label: "Growth Potential" },
  ],
  expectationsTitle: "Preferences You Can Define",
  expectations: [
    {
      icon: User,
      title: "Investment Type",
      desc: "Choose between franchise, retail, commercial real estate or business resale.",
    },
    {
      icon: Target,
      title: "Location Preferences",
      desc: "Define your preferred cities, micro markets and commercial zones.",
    },
    {
      icon: Clock,
      title: "Time Commitment",
      desc: "Specify how much time you can dedicate to operations or management.",
    },
    {
      icon: Shield,
      title: "Risk Appetite",
      desc: "Indicate your comfort level with different risk categories and investment sizes.",
    },
    {
      icon: Star,
      title: "Brand Preferences",
      desc: "Set filters for brand size, category, rating and expansion stage.",
    },
    {
      icon: BarChart3,
      title: "Investment Range",
      desc: "Define your budget range so you only see matching opportunities.",
    },
  ],
  outcome: {
    tag: "Outcome",
    title: "See only the opportunities that match your investment goals.",
  },
};
