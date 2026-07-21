import {
  Search,
  IndianRupee,
  MessageSquare,
  MapPin,
  CalendarDays,
  PlaySquare,
  Star,
  ShieldCheck,
  Home,
  Calendar,
} from "lucide-react";

export const faqData = {
  tag: "FREQUENTLY ASKED QUESTIONS",
  title: "Frequently Asked Questions",
  desc: "Everything you need to know about buying or selling properties on CREMP.",
  faqs: [
    {
      icon: Search,
      q: "1. How does CREMP integrate with platforms like Zillow or LoopNet?",
      a: "We partner with leading external networks to aggregate MLS data, commercial listings, and buyer profiles into a single seamless interface.",
    },
    {
      icon: IndianRupee,
      q: "2. Is it free to browse listings?",
      a: "Yes, browsing residential and commercial listings is completely free. We connect you with brokers and sellers when you are ready.",
    },
    {
      icon: MessageSquare,
      q: "3. How do I contact a seller or agent?",
      a: "You can securely message listing agents or private sellers directly through our unified dashboard.",
    },
    {
      icon: ShieldCheck,
      q: "4. Are the properties verified?",
      a: "Yes, we synchronize with trusted external MLS databases to ensure that the listings you see are active and verified.",
    },
    {
      icon: MapPin,
      q: "5. Can I search for off-market properties?",
      a: "Absolutely. CREMP provides access to exclusive off-market deals shared directly by our network of private sellers and brokers.",
    },
    {
      icon: CalendarDays,
      q: "6. Can I schedule property tours?",
      a: "Yes, you can request and book both virtual and in-person property tours based on agent availability.",
    },
    {
      icon: PlaySquare,
      q: "7. Are virtual walkthroughs supported?",
      a: "Many of our integrated listings include 3D tours, drone footage, and detailed property walkthroughs.",
    },
    {
      icon: Star,
      q: "8. How is CREMP different for buyers and sellers?",
      a: "By unifying residential, commercial, and land real estate from multiple fragmented external sites, we save you time and give you a complete market picture.",
    },
  ],
  banner: {
    icon: Home,
    title: "Ready to buy or sell\nyour next property?",
    desc: "Join CREMP and connect with the top real estate networks globally.",
    btn1: { text: "Browse Listings", icon: Calendar },
    btn2: { text: "List Property", icon: Search },
  },
};
