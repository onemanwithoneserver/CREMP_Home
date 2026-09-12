import {
  Heart,
  PlaySquare,
  Sliders,
  ArrowUpRight,
  ClipboardList,
  User,
} from "lucide-react";

export const buyerProfile = {
  name: "Lakshman",
  role: "",
  mode: "Buyer Mode",
  avatarIcon: User,
};

export const buyerNavItems = [
  {
    category: "SAVED",
    items: [
      { id: "saved-props", label: "Saved Properties & Opportunities", icon: Heart, path: "/dashboard-buyer/saved" },
      { id: "saved-videos", label: "Saved Videos", icon: PlaySquare, path: "/dashboard-buyer/videos" },
      { id: "saved-searches", label: "Saved Searches & Filters", icon: Sliders, path: "/dashboard-buyer/searches" }
    ]
  },
  {
    category: "ACTIVITY",
    items: [
      { id: "contacted", label: "Contacted", icon: ArrowUpRight, path: "/dashboard-buyer/contacted" },
      { id: "my-reqs", label: "My Requirements", icon: ClipboardList, path: "/dashboard-buyer/requirements" }
    ]
  },
  {
    category: "ACCOUNT",
    items: [
      { id: "profile", label: "My Profile", icon: User, path: "/dashboard-buyer/profile" }
    ]
  }
];
