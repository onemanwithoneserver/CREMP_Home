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
  BookOpen,
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

function FlagIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
      <line x1="4" y1="22" x2="4" y2="15"></line>
    </svg>
  );
}
