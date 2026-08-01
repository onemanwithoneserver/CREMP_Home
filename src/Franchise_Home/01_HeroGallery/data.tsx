import {
    BookOpen,
    Building2,
    CalendarDays,
    Download,
    Store,
    Coffee,
    Utensils,
} from "lucide-react";

export const heroGalleryData = {
    brandName: "The Third Place",
    logoText: "THE THIRD PLACE", // Using text for logo if image isn't available
    tag: {
        text: "urban favourite Third Place Business",
        bg: "#ffffff",
        textColor: "#c69a54",
    },
    logoDescription: "Experience a blended world of coffee with warm and minimalist space, strong youth mindfulness 'The Third Place'.",
    description:
        "The Third place is a fast-growing QSR franchise founded in 2024, specializing in modern, minimalist, and light-roast third wave 100% arabica or cane india, we offer a fully managed franchise model with zero local supply chain, marketing support, and technology-backed operations.",
    
    categories: [
        { label: "Food & Beverage", icon: Utensils },
        { label: "Quick Service Restaurant", icon: Store },
        { label: "Cafe & Snacks", icon: Coffee },
        { label: "Beverages", icon: Coffee },
    ],

    buttons: {
        primary: {
            label: "Download Franchise Brochure",
            icon: Download,
        },
        secondary: {
            label: "Apply Now",
            icon: BookOpen,
        },
    },
};
