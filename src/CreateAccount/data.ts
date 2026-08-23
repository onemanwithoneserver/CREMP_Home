import {
  BarChart3,
  Brain,
  ShieldCheck,
  Database,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";

export const heroFeatures = [
  {
    icon: BarChart3,
    label: "Real-time Analytics",
    color: "#d4af37",
  },
  {
    icon: Brain,
    label: "AI-Powered Insights",
    color: "#d4af37",
  },
  {
    icon: ShieldCheck,
    label: "Enterprise Grade Security",
    color: "#d4af37",
  },
  {
    icon: Database,
    label: "Trusted Data Sources",
    color: "#d4af37",
  },
];

export const socialProviders = [
  {
    name: "Google",
    svg: `<svg viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`,
  },
  {
    name: "Microsoft",
    svg: `<svg viewBox="0 0 21 21"><path fill="#f25022" d="M1 1h9v9H1z"/><path fill="#00a4ef" d="M1 11h9v9H1z"/><path fill="#7fba00" d="M11 1h9v9h-9z"/><path fill="#ffb900" d="M11 11h9v9h-9z"/></svg>`,
  },
  {
    name: "Apple",
    svg: `<svg viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.84 1.54.07 2.85.74 3.69 1.95-3.04 1.77-2.53 5.92.51 7.15-.65 1.6-1.57 3.03-2.78 3.91zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`,
  },
];

export const footerBadges = [
  { icon: Shield, label: "Bank-Level", sublabel: "Security" },
  { icon: Clock, label: "99.9%", sublabel: "Uptime" },
  { icon: Headphones, label: "24/7", sublabel: "Support" },
];

export const countryCodes = [
  { code: "+91", flag: "IN", country: "India" },
  { code: "+1", flag: "US", country: "USA" },
  { code: "+44", flag: "GB", country: "UK" },
  { code: "+971", flag: "AE", country: "UAE" },
  { code: "+65", flag: "SG", country: "Singapore" },
];
