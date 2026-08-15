export interface MapPin {
  id: string;
  name: string;
  x: number;
  y: number;
  color: "purple" | "orange" | "blue" | "green" | "red";
  listingsCount?: number;
}

export interface PropertyTypeOption {
  id: string;
  name: string;
  iconName: string;
  color: string;
}

export interface IndustryOption {
  id: string;
  name: string;
  iconName: string;
  color: string;
}

export const CITIES = [
  "Hyderabad",
  "Bengaluru",
  "Mumbai",
  "Delhi NCR",
  "Pune",
  "Chennai",
  "Kolkata",
];

export const COMMERCIAL_PROPERTY_TYPES: PropertyTypeOption[] = [
  {
    id: "commercial-plot",
    name: "Commercial Plot",
    iconName: "MapPin",
    color: "#16a34a",
  },
  {
    id: "retail-space",
    name: "Retail Space",
    iconName: "Store",
    color: "#ea580c",
  },
  {
    id: "office-space",
    name: "Office Space",
    iconName: "Building2",
    color: "#9333ea",
  },
  {
    id: "co-working",
    name: "Co-Working",
    iconName: "Users",
    color: "#0891b2",
  },
  {
    id: "full-building",
    name: "Full Building",
    iconName: "Building",
    color: "#2563eb",
  },
];

export const BUSINESS_INDUSTRIES: IndustryOption[] = [
  {
    id: "food-beverage",
    name: "Food & Beverage",
    iconName: "Utensils",
    color: "#f59e0b",
  },
  {
    id: "retail",
    name: "Retail",
    iconName: "ShoppingBag",
    color: "#8b5cf6",
  },
  {
    id: "education",
    name: "Education",
    iconName: "GraduationCap",
    color: "#3b82f6",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    iconName: "HeartPulse",
    color: "#10b981",
  },
  {
    id: "beauty-wellness",
    name: "Beauty & Wellness",
    iconName: "Sparkles",
    color: "#ec4899",
  },
  {
    id: "fitness",
    name: "Fitness",
    iconName: "Dumbbell",
    color: "#f97316",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    iconName: "Hotel",
    color: "#6366f1",
  },
  {
    id: "automobile",
    name: "Automobile",
    iconName: "Car",
    color: "#06b6d4",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    iconName: "Factory",
    color: "#059669",
  },
  {
    id: "more",
    name: "More Industries",
    iconName: "LayoutGrid",
    color: "#64748b",
  },
];

export const COMMERCIAL_BUDGET_PRESETS = [
  { label: "Under 50L", min: 0, max: 50 },
  { label: "50L - 1Cr", min: 50, max: 100 },
  { label: "1 - 3 Cr", min: 100, max: 300 },
  { label: "3 - 5 Cr", min: 300, max: 500 },
  { label: "5 Cr+", min: 500, max: 1000 },
];

export const BUSINESS_BUDGET_PRESETS = [
  { label: "Under ₹10 L", min: 0, max: 10 },
  { label: "₹10 L - ₹25 L", min: 10, max: 25 },
  { label: "₹25 L - ₹50 L", min: 25, max: 50 },
  { label: "₹50 L - ₹1 Cr", min: 50, max: 100 },
  { label: "₹1 Cr+", min: 100, max: 500 },
];

export const FIT_OUT_OPTIONS = [
  "Any",
  "Bare Shell",
  "Warm Shell",
  "Semi-Fitted",
  "Fully Fitted",
];

export const OCCUPANCY_OPTIONS = [
  "Any",
  "Pre-Leased",
  "Vacant",
  "Partial Occupied",
];

export const CONSTRUCTION_STAGE_OPTIONS = [
  "Any",
  "Ready to Move",
  "Under Construction",
  "Planned",
];

export const SIZE_UNITS = ["Sq Ft", "Sq Yds", "Acres"] as const;

export const MAP_AREAS = [
  { name: "HITEC CITY", x: 18, y: 35 },
  { name: "GACHIBOWLI", x: 22, y: 55 },
  { name: "MADHAPUR", x: 55, y: 58 },
  { name: "JUBILEE HILLS", x: 48, y: 68 },
  { name: "BANJARA HILLS", x: 45, y: 76 },
  { name: "MIYAPUR", x: 52, y: 34 },
  { name: "KUKATPALLY", x: 72, y: 44 },
  { name: "LB NAGAR", x: 68, y: 80 },
];

export const MAP_PINS: MapPin[] = [
  { id: "p1", name: "HITEC City Hub", x: 15, y: 43, color: "purple" },
  { id: "p2", name: "Knowledge City", x: 30, y: 44, color: "orange" },
  { id: "p3", name: "Financial District", x: 27, y: 58, color: "blue" },
  { id: "p4", name: "Cyber Towers", x: 38, y: 56, color: "blue" },
  { id: "p5", name: "Inorbit Mall Road", x: 32, y: 69, color: "orange" },
  { id: "p6", name: "Gachibowli Junction", x: 24, y: 66, color: "green" },
  { id: "p7", name: "Banjara Hills Rd 1", x: 30, y: 79, color: "purple" },
  { id: "p8", name: "Jubilee Hills Rd 36", x: 39, y: 73, color: "red" },
  { id: "p9", name: "Madhapur Main Rd", x: 58, y: 52, color: "purple" },
  { id: "p10", name: "Miyapur Metro", x: 60, y: 41, color: "green" },
  { id: "p11", name: "Kukatpally Y-Junction", x: 68, y: 49, color: "red" },
  { id: "p12", name: "LB Nagar Ring Rd", x: 66, y: 75, color: "green" },
  { id: "p13", name: "Banjara Hills Rd 12", x: 40, y: 83, color: "orange" },
  { id: "p14", name: "Ameerpet Cross", x: 62, y: 63, color: "red" },
  { id: "p15", name: "Begumpet Airport Rd", x: 78, y: 55, color: "blue" },
];
