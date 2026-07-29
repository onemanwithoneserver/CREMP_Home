import {
    BookOpen,
    Building2,
    CalendarDays,
    Download,
    Store,
} from "lucide-react";

export const heroGalleryData = {
    sectionLabel: "THE URBAN BREW CO.",
    badge: "Verified",
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

};

