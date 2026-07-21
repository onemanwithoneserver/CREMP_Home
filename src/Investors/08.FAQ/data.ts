import {
  Search,
  IndianRupee,
  MessageSquare,
  MapPin,
  CalendarDays,
  PlaySquare,
  Star,
  ShieldCheck,
  Store,
  Calendar,
} from "lucide-react";

export const faqData = {
  tag: "FREQUENTLY ASKED QUESTIONS",
  title: "Frequently Asked Questions",
  desc: "Everything you need to know about investing through CREMP.",
  faqs: [
    {
      icon: Search,
      q: "1. How do I find investment opportunities?",
      a: "Browse opportunities by category, location and budget on CREMP. Set your preferences and get matched with verified brands and commercial spaces.",
    },
    {
      icon: IndianRupee,
      q: "2. Is it free to use CREMP as an investor?",
      a: "Yes, browsing and exploring opportunities is completely free. You only engage when you find an opportunity that matches your goals.",
    },
    {
      icon: MessageSquare,
      q: "3. How do I connect with brands?",
      a: "Send enquiries directly through the platform or schedule discovery calls. Brands receive your profile and respond based on mutual fit.",
    },
    {
      icon: ShieldCheck,
      q: "4. Are the opportunities verified?",
      a: "Yes, all brands and commercial listings on CREMP go through a verification process to ensure quality and authenticity.",
    },
    {
      icon: MapPin,
      q: "5. Can I search by specific locations?",
      a: "Absolutely. You can search by city, micro market or commercial zone to find opportunities in your preferred areas.",
    },
    {
      icon: CalendarDays,
      q: "6. Can I schedule calls with brands?",
      a: "Yes, you can book discovery calls directly with brand representatives based on their available time slots.",
    },
    {
      icon: PlaySquare,
      q: "7. Can I view brand videos and walkthroughs?",
      a: "Yes, many brands on CREMP share founder stories, outlet walkthroughs and educational videos to help you make informed decisions.",
    },
    {
      icon: Star,
      q: "8. How is CREMP different from other platforms?",
      a: "CREMP is the only platform that integrates commercial real estate, franchise and retail business opportunities in one ecosystem—giving you a 360° view of every investment opportunity.",
    },
  ],
  banner: {
    icon: Store,
    title: "Ready to find your next\ninvestment opportunity?",
    desc: "Join CREMP and discover franchise, retail and commercial real estate opportunities across India.",
    btn1: { text: "Explore Opportunities", icon: Calendar },
    btn2: { text: "Join Now", icon: Search },
  },
};
