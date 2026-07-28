import {
  Briefcase,
  CupSoda,
  Download,
  Gem,
  Globe2,
  Heart,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Store,
  Users,
  Building2,
  CalendarDays,
  User,
  BookOpen,
} from "lucide-react";

export const heroGalleryData = {
  sectionLabel: "THE URBAN BREW CO.",
  badge: "Verified",
  category: "Food & Beverage • Speciality Café",
  titleHighlight: "one cup",
  description:
    "India's fastest-growing speciality coffee franchise, blending third-wave coffee culture with community-driven values and iconic café experiences.",
  
  tags: [
    { label: "FOCO / FOFO", icon: Building2 },
    { label: "Est. 2016", icon: CalendarDays },
    { label: "187+ Outlets", icon: Store },
  ],

  buttons: {
    primary: {
      label: "Download Franchise Brochure",
      icon: Download,
    },
    secondary: {
      label: "View Editions",
      icon: BookOpen,
    },
  },

  whyPartnerTitle: "Why Partner With Us?",
  partnerFeatures: [
    {
      title: "Proven Business Model",
      description: "Strong unit economics and scalable operations",
      icon: LineChart,
    },
    {
      title: "End-to-End Support",
      description: "Training, setup, marketing & ongoing operations",
      icon: Users,
    },
    {
      title: "Premium Quality & Consistency",
      description: "Signature blends and high-quality sourcing",
      icon: CupSoda,
    },
    {
      title: "Powerful Brand Recall",
      description: "Loved by communities across India",
      icon: Heart,
    },
  ],

  locationsTitle: "Where We Brew",
  locations: ["Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai", "Kolkata"],

  keyDetailsTitle: "KEY DETAILS",
  keyDetails: [
    { label: "Sector", value: "Food & Beverage", icon: Briefcase },
    { label: "Category", value: "Speciality Café", icon: CupSoda },
    { label: "Format", value: "FOCO / FOFO", icon: Building2 },
    { label: "Established", value: "2016 (9+ years)", icon: CalendarDays },
    { label: "Headquarters", value: "Bengaluru, Karnataka", icon: Building2 },
    { label: "Founder", value: "Arjun Malhotra", icon: User },
    { label: "Outlets", value: "187+ outlets", icon: Store },
    { label: "Presence", value: "14+ cities nationwide", icon: MapPin },
    { label: "Countries", value: "India", icon: FlagIcon }, // Handled as custom or standard icon
    { label: "Website", value: "urbanbrew.co", icon: Globe2 },
    { label: "Contact", value: "+91 80 4567 8900", icon: Phone },
    { label: "Email", value: "franchise@urbanbrew.co", icon: Mail },
  ],

  stats: [
    { value: "9+", label: "Years of Brewing Excellence", icon: Gem },
    { value: "187+", label: "Outlets Across India", icon: Store },
    { value: "14+", label: "Cities Pan India", icon: MapPin },
    { value: "1M+", label: "Cups Served Every Month", icon: CupSoda },
  ],
};

function FlagIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
      <line x1="4" y1="22" x2="4" y2="15"></line>
    </svg>
  );
}
