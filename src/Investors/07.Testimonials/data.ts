import {
  Award,
  Building2,
  CalendarDays,
  Handshake,
  Headphones,
  Rocket,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
export const testimonialsData = {
  tag: "EARLY ACCESS • JOIN BEFORE LAUNCH",
  title: "Be Among the\nFirst Investors\non CREMP",
  desc: "Join CREMP before public launch and get early access to India's Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform.",
  growthNodes: [
    { icon: Building2, label: "Commercial\nReal Estate", pos: "left-top" },
    { icon: Store, label: "Franchise\nBrands", pos: "left-bottom" },
    { icon: Handshake, label: "Business\nOpportunities", pos: "right-top" },
    { icon: ShieldCheck, label: "Verified\nListings", pos: "right-bottom" },
  ],
  benefitsTitle: "Early Access Benefits",
  benefits: [
    { icon: TrendingUp, text: "Priority access to opportunities" },
    { icon: Users, text: "Direct brand connections" },
    { icon: Award, text: "Featured investor status" },
    { icon: Headphones, text: "Dedicated support team" },
    { icon: CalendarDays, text: "Exclusive discovery calls" },
    { icon: ShieldCheck, text: "Pre-launch pricing advantage" },
  ],
  buttons: [
    {
      icon: Rocket,
      title: "Join CREMP Now",
      subtitle: "Secure your early access spot. Start exploring opportunities.",
    },
    { icon: CalendarDays, title: "Schedule\nDiscovery Call" },
  ],
  bottomDisclaimer:
    "Limited early access spots available for investors across India.",
};
