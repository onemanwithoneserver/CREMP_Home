import {
  LayoutGrid,
  Heart,
  Building2,
  PlusCircle,
  Users,
  PlaySquare,
  UserSearch,
  ClipboardList,
  User,
  CreditCard,
  Headphones,
  ShieldCheck,
  LogOut,
  Building
} from "lucide-react";

export const sellerProfile = {
  name: "Maruthi",
  role: "AIOM",
  mode: "Seller Mode",
  avatarIcon: Building,
};

export const sellerNavItems = [
  {
    category: "DASHBOARD",
    items: [
      { id: "dashboard", label: "Dashboard Overview", subtitle: "Overview", icon: LayoutGrid, path: "/dashboard-seller" }
    ]
  },
  {
    category: "SAVED",
    items: [
      { id: "saved", label: "Saved", icon: Heart, path: "/dashboard-seller/saved" }
    ]
  },
  {
    category: "LISTINGS",
    items: [
      { id: "my-listings", label: "My Listings", subtitle: "Manage your listings", icon: Building2, path: "/dashboard-seller/listings" },
      { id: "add-listing", label: "Add New Listing", subtitle: "Property, Franchise, Business & more", icon: PlusCircle, path: "/dashboard-seller/add-listing" }
    ]
  },
  {
    category: "LEADS",
    items: [
      { id: "my-leads", label: "My Leads", subtitle: "Manage & track your leads", icon: Users, path: "/dashboard-seller/leads" },
      { id: "property-leads", label: "Property Leads", subtitle: "Manage your property leads", icon: Users, path: "/dashboard-seller/property-leads" }
    ]
  },
  {
    category: "CONTENT",
    items: [
      { id: "my-videos", label: "My Videos", subtitle: "Manage uploaded videos", icon: PlaySquare, path: "/dashboard-seller/videos" }
    ]
  },
  {
    category: "REQUIREMENTS",
    items: [
      { id: "buyer-reqs", label: "Buyer Requirements", subtitle: "Match & respond to buyers", icon: UserSearch, path: "/dashboard-seller/buyer-reqs" },
      { id: "my-reqs", label: "My Posted Requirements", subtitle: "Manage your requirements", icon: ClipboardList, path: "/dashboard-seller/posted-reqs" }
    ]
  },
  {
    category: "ACCOUNT",
    items: [
      { id: "profile", label: "My Profile", subtitle: "Profile, KYC, Company & more", icon: User, path: "/dashboard-seller/profile" },
      { id: "billing", label: "Payments & Billing", subtitle: "Plans, Invoices & history", icon: CreditCard, path: "/dashboard-seller/billing" },
      { id: "support", label: "Help & Support", icon: Headphones, path: "/dashboard-seller/support" },
      { id: "terms", label: "Terms & Privacy", icon: ShieldCheck, path: "/dashboard-seller/terms" },
      { id: "logout", label: "Logout", icon: LogOut, path: "/" }
    ]
  }
];
