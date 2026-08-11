import { Calendar, MapPin, PlaySquare, User, UserPlus } from "lucide-react";

export const heroData = {
  tag: "FOR FRANCHISORS • PRE-LAUNCH EARLY ACCESS",
  titleHighlight: "Expansion.",
  desc: "Powered by India's Integrated Commercial Real Estate, Franchise & Retail Business Opportunities Platform, CREMP helps you build your brand, reach investors in your preferred micro markets, define your ideal franchise partner and discover expansion-ready locations—all through one connected ecosystem.",
  buttons: [
    { text: "Register Your Brand", icon: User, variant: "primary" },
    { text: "Schedule a Discovery Call", icon: Calendar, variant: "outline" },
  ],
  features: [
    { icon: UserPlus, text: "Direct\nInvestor Enquiries" },
    { icon: MapPin, text: "Micro Market\nCampaigns" },
    { icon: PlaySquare, text: "Video\nBrand Building" },
  ],
  mapPins: [
    { type: "new", title: "New Micro Market", desc: "Campaign Active" },
    { type: "existing", title: "Existing Outlet", desc: "Strengthen Presence" },
    { type: "video", title: "Video Showcase", desc: "Watch Brand Story" },
  ],
};
