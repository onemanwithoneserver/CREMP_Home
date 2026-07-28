import {
  Briefcase,
  CupSoda,
  Flag,
  Gem,
  Heart,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Store,
  Users,
  Building2,
  User,
} from "lucide-react";

export const heroDetailsData = {
  whyPartnerTitle: "Why Partner With Us?",
  partnerFeatures: [
    {
      title: "Proven Business Model",
      description: "Strong unit economics and scalable operations",
      icon: LineChart,
      intent: "success",
    },
    {
      title: "End-to-End Support",
      description: "Training, setup, marketing & ongoing operations",
      icon: Users,
      intent: "info",
    },
    {
      title: "Premium Quality & Consistency",
      description: "Signature blends and high-quality sourcing",
      icon: CupSoda,
      intent: "warning",
    },
    {
      title: "Powerful Brand Recall",
      description: "Loved by communities across India",
      icon: Heart,
      intent: "primary",
    },
  ],

  locationsTitle: "Where We Brew",
  locations: ["Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai", "Kolkata"],

  keyDetailsTitle: "KEY DETAILS",
  keyDetails: [
    { label: "Sector", value: "Food & Beverage", icon: Briefcase, intent: "neutral" },
    { label: "Category", value: "Speciality Café", icon: CupSoda, intent: "neutral" },
    { label: "Headquarters", value: "Bengaluru, Karnataka", icon: Building2, intent: "neutral" },
    { label: "Founder", value: "Arjun Malhotra", icon: User, intent: "neutral" },
    { label: "Presence", value: "14+ cities nationwide", icon: MapPin, intent: "info" },
    { label: "Countries", value: "India", icon: Flag, intent: "neutral" },
    { label: "Contact", value: "+91 80 4567 8900", icon: Phone, intent: "primary" },
    { label: "Email", value: "franchise@urbanbrew.co", icon: Mail, intent: "primary" },
  ],

  stats: [
    { value: "9+", label: "Years of Brewing Excellence", icon: Gem },
    { value: "187+", label: "Outlets Across India", icon: Store },
    { value: "14+", label: "Cities Pan India", icon: MapPin },
    { value: "1M+", label: "Cups Served Every Month", icon: CupSoda },
  ],
};
