import { Building, Store, Building2, ShoppingBag, Users } from "lucide-react";

export const listingsData = {
  headerIcon: Building,
  title: "Current Listings",
  subtitle: "FEATURED REAL ESTATE SPACES",
  listings: [
    {
      id: "ground-retail",
      type: "Ground Floor · Retail",
      badge: "LEASE",
      title: "Premium Ground Floor Retail",
      area: "1,200 sq.ft",
      price: "₹1.2L/mo",
      status: "Immediate",
      statusColor: "bg-emerald-500",
      icon: Store,
      colorTheme: {
        iconBg:
          "bg-emerald-600 text-white border-emerald-700/20 shadow-[0_2px_8px_rgba(5,150,105,0.35)]",
        leftBar: "bg-emerald-500",
        badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
        priceText: "text-emerald-600",
      },
    },
    {
      id: "office-3rd",
      type: "3rd Floor · Office",
      badge: "LEASE",
      title: "Corporate Office — 3rd Floor",
      area: "3,600 sq.ft",
      price: "₹3.24L/mo",
      status: "In 30 Days",
      statusColor: "bg-amber-500",
      icon: Building2,
      colorTheme: {
        iconBg:
          "bg-sky-600 text-white border-sky-700/20 shadow-[0_2px_8px_rgba(2,132,199,0.35)]",
        leftBar: "bg-sky-500",
        badge: "bg-sky-500/10 text-sky-700 border-sky-500/30",
        priceText: "text-sky-600",
      },
    },
    {
      id: "showroom-1st",
      type: "1st Floor · Retail",
      badge: "LEASE",
      title: "First Floor Showroom",
      area: "2,200 sq.ft",
      price: "₹1.98L/mo",
      status: "Immediate",
      statusColor: "bg-emerald-500",
      icon: ShoppingBag,
      colorTheme: {
        iconBg:
          "bg-violet-600 text-white border-violet-700/20 shadow-[0_2px_8px_rgba(124,58,237,0.35)]",
        leftBar: "bg-violet-500",
        badge: "bg-violet-500/10 text-violet-700 border-violet-500/30",
        priceText: "text-violet-600",
      },
    },
    {
      id: "coworking-6th",
      type: "6th Floor · Coworking",
      badge: "LEASE",
      title: "Coworking Floor — 6th",
      area: "4,500 sq.ft",
      price: "₹4.05L/mo",
      status: "Immediate",
      statusColor: "bg-emerald-500",
      icon: Users,
      colorTheme: {
        iconBg:
          "bg-rose-600 text-white border-rose-700/20 shadow-[0_2px_8px_rgba(225,29,72,0.35)]",
        leftBar: "bg-rose-500",
        badge: "bg-rose-500/10 text-rose-700 border-rose-500/30",
        priceText: "text-rose-600",
      },
    },
  ],
};
