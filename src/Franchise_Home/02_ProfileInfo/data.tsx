import {
  MapPin,
  Calendar,
  Building2,
  Store,
  Tag,
  Coffee,
} from "lucide-react";

export const profileInfoData = {
  sectionLabel: "BRAND PROFILE",
  brandName: "The Urban Brew Co.",
  isVerified: true,
  tagline: "Redefining the café experience, one cup at a time.",
  category: "Food & Beverage · Speciality Café",
  description:
    "Urban Brew Co. is India's fastest-growing speciality coffee franchise, blending third-wave coffee culture with community-driven values. Known for its distinctive interiors and signature blends, the brand has cultivated a loyal, actively following across its cities in just 8 years of operations.",
  establishedYear: "Est. 2016",
  totalOutlets: "187+",
  keyDetails: [
    { icon: Tag, label: "Category", value: "Food & Beverage" },
    { icon: Coffee, label: "Sub Category", value: "Speciality Café" },
    { icon: Calendar, label: "Established", value: "2016 (10 years)" },
    { icon: Building2, label: "Headquarters", value: "Bengaluru, Karnataka" },
    { icon: Store, label: "Outlets", value: "187+ outlets" },
    { icon: MapPin, label: "Presence", value: "14+ locations nationwide" },
  ],
  locationTags: ["Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai", "Kolkata"],
};
