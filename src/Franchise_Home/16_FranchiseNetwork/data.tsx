import {
  Building2,
  CheckCircle2,
  Lock,
  MapPin,
  Sparkles,
  IndianRupee,
  LayoutGrid,
} from "lucide-react";

export interface OpportunityItem {
  id: string;
  circleName: string;
  format: string;
  badge?: "Prime" | "Hot" | "Available" | "New";
}

export interface CityNode {
  id: string;
  name: string;
  state: string;
  zone: "South" | "West" | "North" | "East";
  status: "active" | "expansion" | "available";
  statusLabel: string;
  outlets: number;
  pipeline: number;
  top: string;
  left: string;
  featured?: boolean;
  opportunities: OpportunityItem[];
}

export const franchiseNetworkData = {
  sectionLabel: "EXPANSION MAP",
  title: "Franchise Locations Available",
  subtitle: "",
  outletCount: "187+ Outlets • 8 States • 25 In Pipeline",

  stats: [
    {
      label: "No of Locations",
      value: "36",
      change: "Available Pan India",
      icon: MapPin,
    },
    {
      label: "No of Cities",
      value: "12",
      change: "Across 8 States",
      icon: Building2,
    },
    {
      label: "No of Formats",
      value: "5",
      change: "Versatile Models",
      icon: LayoutGrid,
    },
    {
      label: "Min Investment",
      value: "₹25L",
      change: "Starting Capital",
      icon: IndianRupee,
    },
  ],

  legend: [
    {
      status: "active",
      label: "Existing Outlets (187+)",
      icon: CheckCircle2,
      color: "text-emerald-500",
      bg: "bg-emerald-500",
      ring: "ring-emerald-400/30",
    },
    {
      status: "expansion",
      label: "Fast-Track Expansion (25)",
      icon: Sparkles,
      color: "text-[#d4af37]",
      bg: "bg-[#d4af37]",
      ring: "ring-[#d4af37]/30",
    },
    {
      status: "available",
      label: "Prime Available Territories (6)",
      icon: Lock,
      color: "text-blue-400",
      bg: "bg-blue-500",
      ring: "ring-blue-400/30",
    },
  ],

  cities: [
    {
      id: "hyd",
      name: "Hyderabad",
      state: "Telangana",
      zone: "South",
      status: "active",
      statusLabel: "Existing Hub",
      outlets: 52,
      pipeline: 6,
      top: "62%",
      left: "44%",
      featured: true,
      opportunities: [
        { id: "hyd-1", circleName: "HITEC City - Cyber Towers", format: "High Street Cafe", badge: "Prime" },
        { id: "hyd-2", circleName: "Gachibowli Financial Dist", format: "Kiosk Express", badge: "Available" },
        { id: "hyd-3", circleName: "Jubilee Hills Rd 36", format: "Flagship Lounge", badge: "Hot" },
        { id: "hyd-4", circleName: "Banjara Hills Rd 12", format: "Drive-Thru", badge: "Available" },
      ],
    },
    {
      id: "blr",
      name: "Bengaluru",
      state: "Karnataka",
      zone: "South",
      status: "active",
      statusLabel: "Existing Hub",
      outlets: 44,
      pipeline: 5,
      top: "76%",
      left: "40%",
      featured: true,
      opportunities: [
        { id: "blr-1", circleName: "Indiranagar 100ft Rd", format: "Flagship Lounge", badge: "Hot" },
        { id: "blr-2", circleName: "Koramangala 80ft Rd", format: "High Street Cafe", badge: "Prime" },
        { id: "blr-3", circleName: "Whitefield ITPL Main", format: "Kiosk Express", badge: "Available" },
        { id: "blr-4", circleName: "HSR Layout Sector 1", format: "Drive-Thru", badge: "Available" },
      ],
    },
    {
      id: "bom",
      name: "Mumbai & MMR",
      state: "Maharashtra",
      zone: "West",
      status: "active",
      statusLabel: "Existing Hub",
      outlets: 38,
      pipeline: 4,
      top: "56%",
      left: "24%",
      featured: true,
      opportunities: [
        { id: "bom-1", circleName: "BKC Commercial Hub", format: "Kiosk Express", badge: "Hot" },
        { id: "bom-2", circleName: "Bandra West Linking Rd", format: "Flagship Lounge", badge: "Prime" },
        { id: "bom-3", circleName: "Powai Hiranandani", format: "High Street Cafe", badge: "Available" },
        { id: "bom-4", circleName: "Lower Parel Phoenix", format: "Express Counter", badge: "Available" },
      ],
    },
    {
      id: "del",
      name: "Delhi NCR",
      state: "Delhi / Haryana / UP",
      zone: "North",
      status: "expansion",
      statusLabel: "Fast Expansion",
      outlets: 28,
      pipeline: 6,
      top: "28%",
      left: "37%",
      featured: true,
      opportunities: [
        { id: "del-1", circleName: "Connaught Place Inner Circle", format: "Flagship Lounge", badge: "Hot" },
        { id: "del-2", circleName: "Cyber City DLF Phase 2", format: "Kiosk Express", badge: "Prime" },
        { id: "del-3", circleName: "Sector 29 Gurgaon", format: "High Street Cafe", badge: "Available" },
        { id: "del-4", circleName: "Noida Sector 18 Market", format: "Drive-Thru", badge: "Available" },
      ],
    },
    {
      id: "pun",
      name: "Pune",
      state: "Maharashtra",
      zone: "West",
      status: "active",
      statusLabel: "Existing Hub",
      outlets: 18,
      pipeline: 2,
      top: "60%",
      left: "28%",
      opportunities: [
        { id: "pun-1", circleName: "Koregaon Park North Main", format: "High Street Cafe", badge: "Prime" },
        { id: "pun-2", circleName: "Baner High Street", format: "Flagship Lounge", badge: "Hot" },
        { id: "pun-3", circleName: "Hinjawadi IT Park Ph 1", format: "Kiosk Express", badge: "Available" },
      ],
    },
    {
      id: "maa",
      name: "Chennai",
      state: "Tamil Nadu",
      zone: "South",
      status: "expansion",
      statusLabel: "Fast Expansion",
      outlets: 14,
      pipeline: 4,
      top: "80%",
      left: "47%",
      opportunities: [
        { id: "maa-1", circleName: "OMR IT Express Corridor", format: "High Street Cafe", badge: "Available" },
        { id: "maa-2", circleName: "Anna Nagar 2nd Avenue", format: "Flagship Lounge", badge: "Prime" },
        { id: "maa-3", circleName: "T. Nagar Commercial", format: "Kiosk Express", badge: "Hot" },
      ],
    },
    {
      id: "ccu",
      name: "Kolkata",
      state: "West Bengal",
      zone: "East",
      status: "available",
      statusLabel: "Prime Territory Open",
      outlets: 0,
      pipeline: 3,
      top: "48%",
      left: "72%",
      featured: true,
      opportunities: [
        { id: "ccu-1", circleName: "Park Street Central", format: "Flagship Lounge", badge: "Hot" },
        { id: "ccu-2", circleName: "Salt Lake Sector V", format: "High Street Cafe", badge: "Prime" },
        { id: "ccu-3", circleName: "New Town Action Area 1", format: "Drive-Thru", badge: "Available" },
      ],
    },
    {
      id: "amd",
      name: "Ahmedabad",
      state: "Gujarat",
      zone: "West",
      status: "expansion",
      statusLabel: "Fast Expansion",
      outlets: 8,
      pipeline: 3,
      top: "44%",
      left: "22%",
      opportunities: [
        { id: "amd-1", circleName: "SG Highway Corporate Hub", format: "Drive-Thru", badge: "Hot" },
        { id: "amd-2", circleName: "Sindhu Bhavan Road", format: "Flagship Lounge", badge: "Prime" },
        { id: "amd-3", circleName: "Prahlad Nagar Garden", format: "High Street Cafe", badge: "Available" },
      ],
    },
    {
      id: "jai",
      name: "Jaipur",
      state: "Rajasthan",
      zone: "North",
      status: "available",
      statusLabel: "Prime Territory Open",
      outlets: 0,
      pipeline: 2,
      top: "34%",
      left: "30%",
      opportunities: [
        { id: "jai-1", circleName: "C-Scheme Central", format: "High Street Cafe", badge: "Prime" },
        { id: "jai-2", circleName: "Malviya Nagar GT Zone", format: "Kiosk Express", badge: "Available" },
        { id: "jai-3", circleName: "Tonk Road Flyover", format: "Drive-Thru", badge: "Available" },
      ],
    },
    {
      id: "cok",
      name: "Kochi",
      state: "Kerala",
      zone: "South",
      status: "available",
      statusLabel: "Prime Territory Open",
      outlets: 0,
      pipeline: 2,
      top: "88%",
      left: "38%",
      opportunities: [
        { id: "cok-1", circleName: "Marine Drive Promenade", format: "High Street Cafe", badge: "Prime" },
        { id: "cok-2", circleName: "Kakkanad InfoPark Zone", format: "Kiosk Express", badge: "Available" },
        { id: "cok-3", circleName: "MG Road Commercial", format: "Flagship Lounge", badge: "Hot" },
      ],
    },
    {
      id: "ixc",
      name: "Chandigarh",
      state: "Punjab",
      zone: "North",
      status: "expansion",
      statusLabel: "Fast Expansion",
      outlets: 6,
      pipeline: 2,
      top: "22%",
      left: "34%",
      opportunities: [
        { id: "ixc-1", circleName: "Sector 26 Inner Market", format: "Flagship Lounge", badge: "Hot" },
        { id: "ixc-2", circleName: "Sector 35 Food Street", format: "High Street Cafe", badge: "Prime" },
        { id: "ixc-3", circleName: "IT Park Cyber Hub", format: "Kiosk Express", badge: "Available" },
      ],
    },
    {
      id: "idr",
      name: "Indore",
      state: "Madhya Pradesh",
      zone: "West",
      status: "available",
      statusLabel: "Prime Territory Open",
      outlets: 0,
      pipeline: 2,
      top: "47%",
      left: "36%",
      opportunities: [
        { id: "idr-1", circleName: "Vijay Nagar Scheme 54", format: "High Street Cafe", badge: "Prime" },
        { id: "idr-2", circleName: "Chappan Dukan Food Walk", format: "Kiosk Express", badge: "Hot" },
        { id: "idr-3", circleName: "AB Road Super Corridor", format: "Drive-Thru", badge: "Available" },
      ],
    },
  ] as CityNode[],

  cta: {
    primary: "Check Territory Availability",
    secondary: "Download Network Dossier",
  },
};
