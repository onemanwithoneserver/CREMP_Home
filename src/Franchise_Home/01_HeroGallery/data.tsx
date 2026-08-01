import { LineChart, Users, Coffee, Heart } from "lucide-react";

export const heroData = {
  brandName: "The Third Place",
  logoText: "THE THIRD PLACE",
  category: "Food & Beverage",
  subCategory: "Quick Service Restaurant",
  yearEstablished: "2024",
  investmentRange: "₹15L - ₹30L",
  breakevenTimeframe: "12-18 Months",
  shortDescription:
    "The Third place is a fast-growing QSR franchise founded in 2024, specializing in modern, minimalist, and light-roast third wave 100% arabica or cane india. We offer a fully managed franchise model with zero local supply chain, marketing support, and technology-backed operations.",
  contactInfo: {
    email: "franchise@thethirdplace.com",
    phone: "+91 98765 43210",
    youtube: "TheThirdPlaceOfficial",
    headquarters: "Mumbai, Maharashtra",
    website: "www.thethirdplace.com",
    instagram: "@thethirdplace",
    linkedin: "the-third-place",
  },

  whyChooseUs: [
    {
      title: "Proven Business Model",
      description: "Strong unit economics and scalable operations",
      icon: LineChart,
      colorClass:
        "bg-gradient-to-br from-[#00F2FE] to-[#4FACFE] text-white shadow-md shadow-[#4FACFE]/30",
    },
    {
      title: "End-to-End Support",
      description: "Training, setup, marketing & ongoing operations",
      icon: Users,
      colorClass:
        "bg-gradient-to-br from-[#7F00FF] to-[#E100FF] text-white shadow-md shadow-[#7F00FF]/30",
    },
    {
      title: "Premium Quality",
      description: "Signature blends and high-quality ethical sourcing",
      icon: Coffee,
      colorClass:
        "bg-gradient-to-br from-[#00c6ff] to-[#0072ff] text-white shadow-md shadow-[#0072ff]/30",
    },
    {
      title: "Brand Recall",
      description: "Loved by communities across the nation",
      icon: Heart,
      colorClass:
        "bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white shadow-md shadow-[#4F46E5]/30",
    },
  ],
};
