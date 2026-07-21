import {
  Wallet,
  MapPin,
  Briefcase,
  Calendar,
  Square,
  TrendingUp,
  User,
  Target,
  Clock,
  Handshake,
  Star,
  BarChart3,
} from "lucide-react";

export const investorData = {
  tag: "YOUR INVESTORS",
  titleBase: "Your Investors.",
  titleHighlight: "Better Qualified.",
  desc: [
    "Every franchise looks for a different type of investor.",
    "Instead of receiving every enquiry, let investors understand your expectations before they connect.",
  ],
  pills: [
    { icon: Wallet, label: "Investment Budget" },
    { icon: MapPin, label: "Preferred Cities" },
    { icon: Briefcase, label: "Business Experience" },
    { icon: Calendar, label: "Timeline to Invest" },
    { icon: Square, label: "Space Requirement" },
    { icon: TrendingUp, label: "Expansion Interest" },
  ],
  expectationsTitle: "Investor Expectations You Can Set",
  expectations: [
    {
      icon: User,
      title: "Entrepreneur Profile",
      desc: "Understand the investor's background, education, and entrepreneurial journey.",
    },
    {
      icon: Target,
      title: "Expected Involvement",
      desc: "Define the level of involvement you expect in day-to-day operations.",
    },
    {
      icon: Clock,
      title: "Time Commitment",
      desc: "Know how much time the investor can dedicate to the business.",
    },
    {
      icon: Handshake,
      title: "Business Experience",
      desc: "Evaluate relevant business/industry experience and manage add preferences.",
    },
    {
      icon: Star,
      title: "Partner Attributes",
      desc: "Specify the qualities and values you look for in a long-term partner.",
    },
    {
      icon: BarChart3,
      title: "Investment Capacity",
      desc: "Set the expected investment range and financial readiness.",
    },
  ],
  outcome: {
    tag: "Outcome",
    title: "Higher-quality conversations with serious investors.",
  },
};
