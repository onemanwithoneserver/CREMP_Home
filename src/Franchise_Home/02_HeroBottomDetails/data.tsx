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

    keyDetailsTitle: "Key Details",
    keyDetails: [
        {
            label: "Sector",
            value: "Food & Beverage",
            icon: Briefcase,
            colorClass: "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-sm shadow-[#8B5CF6]/30"
        },
        {
            label: "Category",
            value: "Speciality Café",
            icon: Award,
            colorClass: "bg-gradient-to-br from-[#FBBF24] to-[#D97706] text-white shadow-sm shadow-[#FBBF24]/30"
        },
        {
            label: "Headquarters",
            value: "Bengaluru, KA",
            icon: Building2,
            colorClass: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white shadow-sm shadow-[#3B82F6]/30"
        },
        {
            label: "Founder",
            value: "Arjun Malhotra",
            icon: User,
            colorClass: "bg-gradient-to-br from-[#D946EF] to-[#A21CAF] text-white shadow-sm shadow-[#D946EF]/30"
        },
        {
            label: "Presence",
            value: "14+ Cities",
            icon: MapPin,
            colorClass: "bg-gradient-to-br from-[#F43F5E] to-[#BE123C] text-white shadow-sm shadow-[#F43F5E]/30"
        },
        {
            label: "Footprint",
            value: "Pan-India",
            icon: Globe2,
            colorClass: "bg-gradient-to-br from-[#10B981] to-[#047857] text-white shadow-sm shadow-[#10B981]/30"
        },
        {
            label: "Contact",
            value: "+91 80 4567 8900",
            icon: Phone,
            colorClass: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E] text-white shadow-sm shadow-[#14B8A6]/30"
        },
        {
            label: "Email",
            value: "partner@urbanbrew.co",
            icon: Mail,
            colorClass: "bg-gradient-to-br from-[#6366F1] to-[#4338CA] text-white shadow-sm shadow-[#6366F1]/30"
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
