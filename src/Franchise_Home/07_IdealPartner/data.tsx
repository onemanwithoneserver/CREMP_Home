import {
  Briefcase,
  Building2,
  UserCheck,
  Clock,
  HandCoins,
  Users,
  Target,
  GraduationCap,
  Handshake,
} from "lucide-react";

export const idealPartnerData = {
  sectionLabel: "IDEAL FRANCHISE PARTNER",
  title: "Who makes the ideal Urban Brew Co. partner?",
  subtitle:
    "We look for motivated individuals who are passionate about the café culture and want to build a thriving local business. Capital matters, but culture matters more.",
  criteria: [
    {
      icon: Briefcase,
      title: "Entrepreneur Profile",
      items: [
        { label: "First-time Investor", value: "Successful Entrepreneur" },
        { label: "MBA / MG", value: "" },
      ],
      description:
        "A confident person. For 2-3 hours engaged powerfully by the brand love.",
    },
    {
      icon: Building2,
      title: "Business Experience",
      items: [
        { label: "2-3 Yrs Minimum", value: "Serial Preferred" },
        { label: "F&B background a Plus", value: "" },
      ],
      description:
        "Minimum 2 years in any meaningful & thriving program for all partners.",
    },
    {
      icon: UserCheck,
      title: "Expected Involvement",
      items: [
        { label: "Active Management", value: "Daily Oversight" },
        { label: "Semi-passive via FOCO", value: "" },
      ],
      description:
        "Willing as a general manager going immediately to their FnB lovers.",
    },
  ],
  additionalCriteria: [
    {
      icon: Clock,
      title: "Time Commitment",
      items: ["4-6 hrs/day", "6 Days a Week"],
      description:
        "Invest 5 hours. 4-5 AM to PM Manager can handle off hours.",
    },
    {
      icon: HandCoins,
      title: "Business Setup",
      items: ["GST Registered", "FSSAI License"],
      description:
        "Must have standard certificates/local municipality. credit rating check.",
    },
    {
      icon: Users,
      title: "Partner Attributes",
      items: ["Customer-Centric", "Team Builder"],
      description:
        "Culture-aligned & family-minded thriving partner program.",
    },
  ],
};
