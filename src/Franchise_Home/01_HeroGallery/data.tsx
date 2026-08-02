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
    description:
      "A tested and profitable franchise model with strong unit economics, streamlined operations, and the ability to scale efficiently across multiple locations.",
    icon: LineChart,
    colorClass: "bg-[#0284c7] text-white shadow-md shadow-[#0284c7]/25",
  },
  {
    title: "End-to-End Support",
    description:
      "From site selection and store setup to staff training, marketing campaigns, and day-to-day operational guidance, we support you at every stage of your journey.",
    icon: Users,
    colorClass: "bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/25",
  },
  {
    title: "Premium Quality",
    description:
      "We source ethically grown coffee beans and craft signature blends with uncompromising quality standards, ensuring a consistently exceptional customer experience.",
    icon: Coffee,
    colorClass: "bg-[#d97706] text-white shadow-md shadow-[#d97706]/25",
  },
  {
    title: "Brand Recall",
    description:
      "A trusted and recognizable brand with a loyal customer base, strong community presence, and growing nationwide recognition that drives repeat business.",
    icon: Heart,
    colorClass: "bg-[#0d9488] text-white shadow-md shadow-[#0d9488]/25",
  },
],
};