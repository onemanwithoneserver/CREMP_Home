import {
  Calendar,
  CalendarDays,
  IndianRupee,
  Mail,
  MapPin,
  PlaySquare,
  Star,
  Store,
  UserCog,
  UserSearch,
} from "lucide-react";

export const faqData = {
  tag: "FREQUENTLY ASKED QUESTIONS",
  title: "Frequently Asked Questions",
  desc: "Everything you need to know about expanding your franchise with CREMP.",
  faqs: [
    {
      icon: UserSearch,
      q: "1. How do investor enquiries work?",
      a: "Investors browse opportunities on CREMP and share their interest. Only pre-qualified leads that match your criteria are sent to you.",
    },
    {
      icon: Mail,
      q: "2. Do I receive leads directly?",
      a: "Yes, you receive investor enquiries directly in your dashboard and via email. You can manage, respond and track all conversations.",
    },
    {
      icon: IndianRupee,
      q: "3. Is brokerage charged?",
      a: "No upfront charges. We operate on a success-based model when an investor connection leads to a meaningful discussion.",
    },
    {
      icon: UserCog,
      q: "4. Can I define my ideal investor profile?",
      a: "Yes, you can set preferences for budget, experience, location, time commitment, involvement and other custom criteria.",
    },
    {
      icon: MapPin,
      q: "5. Can I launch campaigns only for selected micro markets?",
      a: "Absolutely. You can target specific micro markets where your brand has expansion potential.",
    },
    {
      icon: CalendarDays,
      q: "6. Can investors schedule discovery calls?",
      a: "Yes, interested investors can book discovery calls based on your availability. You stay in control of your schedule.",
    },
    {
      icon: PlaySquare,
      q: "7. Can I upload videos?",
      a: "Yes, you can upload brand videos, founder messages, outlet walkthroughs and more to showcase your brand to investors.",
    },
    {
      icon: Star,
      q: "8. How is CREMP different from franchise portals?",
      a: "CREMP connects commercial real estate, franchise and retail business opportunities in one integrated ecosystem, helps you target micro markets and attracts more serious, qualified investors.",
    },
  ],
  banner: {
    icon: Store,
    title: "Ready to expand your franchise\nwith the right investors?",
    desc: "Join CREMP and connect with investors who are ready to grow with you.",
    btn1: { text: "Schedule Discovery Call", icon: Calendar },
    btn2: { text: "Join Us", icon: UserSearch },
  },
};
