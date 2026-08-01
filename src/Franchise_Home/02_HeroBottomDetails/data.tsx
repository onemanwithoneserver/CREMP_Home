import {
    Award,
    Briefcase,
    Building2,
    Coffee,
    CupSoda,
    Globe2,
    Heart,
    LineChart,
    Mail,
    MapPin,
    Phone,
    Sparkles,
    Store,
    User,
    Users
} from "lucide-react";

export const heroDetailsData = {
    whyPartnerTitle: "Why Partner With Us?",
    partnerFeatures: [
        {
            title: "Proven Business Model",
            description: "Strong unit economics and scalable operations",
            icon: LineChart,
            colorClass: "bg-gradient-to-br from-[#10B981] to-[#047857] text-white shadow-md shadow-[#10B981]/30"
        },
        {
            title: "End-to-End Support",
            description: "Training, setup, marketing & ongoing operations",
            icon: Users,
            colorClass: "bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] text-white shadow-md shadow-[#0EA5E9]/30"
        },
        {
            title: "Premium Quality",
            description: "Signature blends and high-quality ethical sourcing",
            icon: Coffee,
            colorClass: "bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white shadow-md shadow-[#d4af37]/30"
        },
        {
            title: "Brand Recall",
            description: "Loved by communities across the nation",
            icon: Heart,
            colorClass: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] text-white shadow-md shadow-[#F43F5E]/30"
        },
    ],

    locationsTitle: "Where We Brew",
    locations: ["Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Bengaluru", "Chennai", "Kolkata", "Ahmedabad"],

    keyDetailsTitle: "Feature Categories",
    keyDetails: [
        {
            label: "Primary Category",
            value: "Food & Beverage",
            icon: Briefcase,
            colorClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-sm shadow-[#8B5CF6]/30"
        },
        {
            label: "Sub Category",
            value: "Quick Service Restaurant",
            icon: Award,
            colorClass: "bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white shadow-sm shadow-[#FBBF24]/30"
        },
        {
            label: "Micro Category",
            value: "Cafe & Snacks",
            icon: Building2,
            colorClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white shadow-sm shadow-[#3B82F6]/30"
        },
        {
            label: "Secondary Micro",
            value: "Beverages",
            icon: CupSoda,
            colorClass: "bg-gradient-to-br from-[#D946EF] to-[#A21CAF] text-white shadow-sm shadow-[#D946EF]/30"
        },
        {
            label: "Format",
            value: "FOCO / FOFO",
            icon: Store,
            colorClass: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] text-white shadow-sm shadow-[#F43F5E]/30"
        },
        {
            label: "Status",
            value: "Active",
            icon: Sparkles,
            colorClass: "bg-gradient-to-br from-[#10B981] to-[#047857] text-white shadow-sm shadow-[#10B981]/30"
        },
    ],

    stats: [
        {
            value: "9+",
            label: "Years of Excellence",
            icon: Sparkles,
            color: "text-amber-300 dark:text-amber-900"
        },
        {
            value: "187+",
            label: "Outlets Across India",
            icon: Store,
            color: "text-rose-300 dark:text-rose-900"
        },
        {
            value: "14+",
            label: "Cities Pan India",
            icon: MapPin,
            color: "text-blue-300 dark:text-blue-900"
        },
        {
            value: "1M+",
            label: "Cups Served Monthly",
            icon: CupSoda,
            color: "text-emerald-300 dark:text-emerald-900"
        },
    ],
};
