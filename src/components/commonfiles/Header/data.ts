export type NavItem = {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "#" },
  { 
    label: "Commercial Listing", 
    subItems: [
      { label: "Lease", href: "#" },
      { label: "Buy", href: "#" }
    ]
  },
  { label: "Business Opportunity", href: "#" },
  { label: "Video search", href: "#" },
  { 
    label: "Collections", 
    subItems: [
      { label: "Saved Properties", href: "#" },
      { label: "Hand Picked", href: "#" }
    ]
  },
];

export const cities = [
  "All cities",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];
