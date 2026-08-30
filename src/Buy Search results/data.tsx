import {
  Building2,
  Store,
  Warehouse,
  LayoutGrid,
  Users,
  Factory,
  LandPlot,
} from "lucide-react";

export interface Property {
  id: number;
  name: string;
  logo: string;
  price: string;
  location: string;
  lat: number;
  lng: number;
  category: string;
  matchLevel: "selected" | "high" | "other";
  area: string;
  builtYear: string;
  floors: number;
  furnishing: string;
  tags: string[];
  description: string;
}

export const categories = [
  "All",
  "Office Space",
  "Retail Shop",
  "Warehouse",
  "Showroom",
  "Co-working",
  "Industrial",
  "Plot / Land",
] as const;

export const properties: Property[] = [
  {
    id: 1,
    name: "Skyline Business Tower",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=300",
    price: "₹1.2 Cr",
    location: "HITEC City, Hyderabad",
    lat: 55,
    lng: 45,
    category: "Office Space",
    matchLevel: "selected",
    area: "1,800 – 2,500 sq.ft",
    builtYear: "2022",
    floors: 12,
    furnishing: "Fully Furnished",
    tags: ["Premium", "Verified"],
    description:
      "Grade-A office space in the heart of HITEC City with panoramic views, 24/7 security, and modern amenities.",
  },
  {
    id: 2,
    name: "Metro Mall Retail Unit",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&h=300",
    price: "₹85 Lakh",
    location: "Jubilee Hills, Hyderabad",
    lat: 25,
    lng: 30,
    category: "Retail Shop",
    matchLevel: "high",
    area: "450 – 700 sq.ft",
    builtYear: "2020",
    floors: 3,
    furnishing: "Semi Furnished",
    tags: ["Hot Deal"],
    description:
      "Prime retail space on the ground floor of a high-footfall mall near Jubilee Hills checkpost.",
  },
  {
    id: 3,
    name: "Greenfield Logistics Hub",
    logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&h=300",
    price: "₹2.5 Cr",
    location: "Shamshabad, Hyderabad",
    lat: 70,
    lng: 55,
    category: "Warehouse",
    matchLevel: "high",
    area: "5,000 – 8,000 sq.ft",
    builtYear: "2021",
    floors: 1,
    furnishing: "Unfurnished",
    tags: ["New Listing"],
    description:
      "Large-scale warehouse with loading docks, 24ft clear height, and proximity to Rajiv Gandhi International Airport.",
  },
  {
    id: 4,
    name: "Crystal Auto Showroom",
    logo: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?auto=format&fit=crop&w=400&h=300",
    price: "₹3.8 Cr",
    location: "Banjara Hills, Hyderabad",
    lat: 40,
    lng: 20,
    category: "Showroom",
    matchLevel: "other",
    area: "3,200 – 4,000 sq.ft",
    builtYear: "2019",
    floors: 2,
    furnishing: "Shell & Core",
    tags: ["Premium"],
    description:
      "Double-height showroom space on Road No. 12 with massive glass frontage and dedicated parking.",
  },
  {
    id: 5,
    name: "WorkHub Flex Space",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300",
    price: "₹50 Lakh",
    location: "Gachibowli, Hyderabad",
    lat: 35,
    lng: 75,
    category: "Co-working",
    matchLevel: "high",
    area: "800 – 1,200 sq.ft",
    builtYear: "2023",
    floors: 8,
    furnishing: "Fully Furnished",
    tags: ["New Listing", "Ready to Move"],
    description:
      "Plug-and-play co-working space with high-speed internet, meeting rooms, and cafeteria access.",
  },
  {
    id: 6,
    name: "Vasavi Industrial Complex",
    logo: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=400&h=300",
    price: "₹4.5 Cr",
    location: "Jeedimetla, Hyderabad",
    lat: 30,
    lng: 65,
    category: "Industrial",
    matchLevel: "other",
    area: "10,000 – 15,000 sq.ft",
    builtYear: "2018",
    floors: 2,
    furnishing: "Unfurnished",
    tags: ["Verified"],
    description:
      "Industrial shed with heavy power supply, water treatment plant, and easy access to NH-44.",
  },
  {
    id: 7,
    name: "Prestige Office Suites",
    logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&h=300",
    price: "₹65 Lakh",
    location: "Madhapur, Hyderabad",
    lat: 80,
    lng: 40,
    category: "Office Space",
    matchLevel: "high",
    area: "600 – 900 sq.ft",
    builtYear: "2023",
    floors: 6,
    furnishing: "Fully Furnished",
    tags: ["Ready to Move", "High ROI"],
    description:
      "Boutique office suites with private cabins, pantry, and dedicated parking in the IT corridor.",
  },
  {
    id: 8,
    name: "Sunshine Commercial Plot",
    logo: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&h=300",
    price: "₹1.8 Cr",
    location: "Kompally, Hyderabad",
    lat: 85,
    lng: 60,
    category: "Plot / Land",
    matchLevel: "other",
    area: "2,400 sq.yards",
    builtYear: "N/A",
    floors: 0,
    furnishing: "N/A",
    tags: ["Verified", "High ROI"],
    description:
      "HMDA-approved commercial plot on a 100ft road with clear title and excellent connectivity.",
  },
  {
    id: 9,
    name: "Meridian Retail Plaza",
    logo: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=400&h=300",
    price: "₹1.5 Cr",
    location: "Kukatpally, Hyderabad",
    lat: 62,
    lng: 25,
    category: "Retail Shop",
    matchLevel: "high",
    area: "1,000 – 1,500 sq.ft",
    builtYear: "2021",
    floors: 4,
    furnishing: "Semi Furnished",
    tags: ["Hot Deal", "Verified"],
    description:
      "Corner retail unit in a bustling commercial complex near KPHB metro station.",
  },
  {
    id: 10,
    name: "Pinnacle Business Park",
    logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=400&h=300",
    price: "₹95 Lakh",
    location: "Financial District, Hyderabad",
    lat: 45,
    lng: 50,
    category: "Office Space",
    matchLevel: "selected",
    area: "1,200 – 1,800 sq.ft",
    builtYear: "2022",
    floors: 15,
    furnishing: "Warm Shell",
    tags: ["Premium", "New Listing"],
    description:
      "Premium office space in the Financial District with LEED-certified green building standards.",
  },
  {
    id: 11,
    name: "Lakshmi Warehouse Park",
    logo: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=400&h=300",
    price: "₹3.2 Cr",
    location: "Patancheru, Hyderabad",
    lat: 18,
    lng: 55,
    category: "Warehouse",
    matchLevel: "other",
    area: "8,000 – 12,000 sq.ft",
    builtYear: "2020",
    floors: 1,
    furnishing: "Unfurnished",
    tags: ["Verified"],
    description:
      "Cold-storage capable warehouse with 3-phase power, fire safety systems, and round-the-clock security.",
  },
  {
    id: 12,
    name: "Horizon Co-work Hub",
    logo: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=400&h=300",
    price: "₹40 Lakh",
    location: "Kondapur, Hyderabad",
    lat: 75,
    lng: 70,
    category: "Co-working",
    matchLevel: "high",
    area: "500 – 800 sq.ft",
    builtYear: "2024",
    floors: 5,
    furnishing: "Fully Furnished",
    tags: ["New Listing", "Ready to Move"],
    description:
      "Modern co-working space with ergonomic furniture, video conferencing rooms, and community events.",
  },
];

export const categoryMeta: Record<
  string,
  { icon: React.ElementType; bg: string; text: string; glow: string }
> = {
  "Office Space": {
    icon: Building2,
    bg: "bg-blue-500",
    text: "text-white",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
  },
  "Retail Shop": {
    icon: Store,
    bg: "bg-rose-500",
    text: "text-white",
    glow: "shadow-[0_0_20px_rgba(244,63,94,0.4)]",
  },
  Warehouse: {
    icon: Warehouse,
    bg: "bg-amber-500",
    text: "text-white",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
  },
  Showroom: {
    icon: LayoutGrid,
    bg: "bg-violet-500",
    text: "text-white",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
  },
  "Co-working": {
    icon: Users,
    bg: "bg-emerald-500",
    text: "text-white",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
  },
  Industrial: {
    icon: Factory,
    bg: "bg-cyan-500",
    text: "text-white",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.4)]",
  },
  "Plot / Land": {
    icon: LandPlot,
    bg: "bg-teal-500",
    text: "text-white",
    glow: "shadow-[0_0_20px_rgba(20,184,166,0.4)]",
  },
};

export const defaultMeta = {
  icon: Building2,
  bg: "bg-[#d4af37]/10",
  text: "text-[#d4af37]",
  glow: "shadow-[0_0_15px_rgba(212,175,55,0.4)]",
};

export const getMeta = (cat: string) => categoryMeta[cat] || defaultMeta;

export const tagColors: Record<string, string> = {
  Premium:
    "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Verified:
    "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Hot Deal":
    "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/20",
  "New Listing":
    "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/20",
  "Ready to Move":
    "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Under Construction":
    "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "High ROI":
    "bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/20",
};
