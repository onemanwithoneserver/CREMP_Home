import { Building } from "lucide-react";

export const listingsData = {
  headerIcon: Building,
  title: "Current Listings",
  listings: [
    {
      type: "Ground Floor · Retail",
      badge: "LEASE",
      title: "Premium Ground Floor Retail",
      area: "1,200 sq.ft",
      price: "₹1.2L/mo",
      status: "Immediate",
      statusColor: "bg-emerald-500",
      accent: "border-orange-400",
    },
    {
      type: "3rd Floor · Office",
      badge: "LEASE",
      title: "Corporate Office — 3rd Floor",
      area: "3,600 sq.ft",
      price: "₹3.24L/mo",
      status: "In 30 Days",
      statusColor: "bg-amber-500",
      accent: "border-blue-400",
    },
    {
      type: "1st Floor · Retail",
      badge: "LEASE",
      title: "First Floor Showroom",
      area: "2,200 sq.ft",
      price: "₹1.98L/mo",
      status: "Immediate",
      statusColor: "bg-emerald-500",
      accent: "border-orange-400",
    },
    {
      type: "6th Floor · Coworking",
      badge: "LEASE",
      title: "Coworking Floor — 6th",
      area: "4,500 sq.ft",
      price: "₹4.05L/mo",
      status: "Immediate",
      statusColor: "bg-emerald-500",
      accent: "border-purple-400",
    },
  ],
};
