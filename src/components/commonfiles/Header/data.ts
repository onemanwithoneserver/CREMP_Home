export type NavItem = {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};
export const navLinks: NavItem[] = [
  { label: "Video search", href: "#" },
  {
    label: "Commercial Properties",
    subItems: [
      { label: "Lease", href: "#" },
      { label: "Buy", href: "#" }
    ]
  },
  { label: "Business Opportunity", href: "#" },
  { label: "Hire Broker", href: "#" },
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
