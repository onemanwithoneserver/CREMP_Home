import {
  User,
  Map,
  Store,
  Award,
  HelpCircle,
  PlaySquare,
  Search,
  Handshake,
} from "lucide-react";

export const brandData = {
  tag: "YOUR BRAND",
  titleBase: "Your Brand.",
  titleHighlight: "Your Story.",
  desc: [
    "Today's investors don't enquire after seeing one listing.",
    "They research.",
    "They compare.",
    "They watch.",
    "CREMP gives your brand a dedicated stage to educate, inspire and build investor confidence before the first conversation.",
  ],
  showcaseMenu: [
    { icon: User, text: "Founder Story" },
    { icon: Map, text: "Brand Journey" },
    { icon: Store, text: "Store Walkthroughs" },
    { icon: Award, text: "Success Stories" },
    { icon: HelpCircle, text: "Investor FAQs" },
    { icon: PlaySquare, text: "Educational Videos" },
    { icon: Search, text: "Dedicated Video Search" },
  ],
  tabletStats: [
    { value: "150+", label: "Outlets" },
    { value: "45+", label: "Cities" },
    { value: "10K+", label: "Investors Engaged" },
    { value: "4.8/5", label: "Investor Rating" },
  ],
  outcome: {
    tag: "OUTCOME",
    text: "Build trust before an investor contacts you.",
    icon: Handshake,
  },
};
