export interface LocationResult {
  id: string;
  name: string;
  area: string;
  city: string;
  listings: number;
  type: "locality" | "landmark" | "hub";
}
export const LOCATIONS: LocationResult[] = [
  {
    id: "kphb",
    name: "KPHB Colony",
    area: "Kukatpally",
    city: "Hyderabad",
    listings: 24,
    type: "locality",
  },
  {
    id: "kukatpally",
    name: "Kukatpally",
    area: "Hyderabad West",
    city: "Hyderabad",
    listings: 38,
    type: "locality",
  },
  {
    id: "madhapur",
    name: "Madhapur",
    area: "Hitech City Area",
    city: "Hyderabad",
    listings: 56,
    type: "hub",
  },
  {
    id: "hitech-city",
    name: "Hitech City",
    area: "Madhapur",
    city: "Hyderabad",
    listings: 72,
    type: "hub",
  },
  {
    id: "gachibowli",
    name: "Gachibowli",
    area: "Financial District",
    city: "Hyderabad",
    listings: 45,
    type: "hub",
  },
  {
    id: "banjara-hills",
    name: "Banjara Hills",
    area: "Central Hyderabad",
    city: "Hyderabad",
    listings: 33,
    type: "locality",
  },
  {
    id: "jubilee-hills",
    name: "Jubilee Hills",
    area: "Central Hyderabad",
    city: "Hyderabad",
    listings: 28,
    type: "locality",
  },
  {
    id: "ameerpet",
    name: "Ameerpet",
    area: "Central Zone",
    city: "Hyderabad",
    listings: 19,
    type: "locality",
  },
  {
    id: "begumpet",
    name: "Begumpet",
    area: "Secunderabad Zone",
    city: "Hyderabad",
    listings: 15,
    type: "locality",
  },
  {
    id: "miyapur",
    name: "Miyapur",
    area: "Hyderabad West",
    city: "Hyderabad",
    listings: 21,
    type: "locality",
  },
  {
    id: "lb-nagar",
    name: "LB Nagar",
    area: "Hyderabad East",
    city: "Hyderabad",
    listings: 17,
    type: "locality",
  },
  {
    id: "kondapur",
    name: "Kondapur",
    area: "Hitech City Area",
    city: "Hyderabad",
    listings: 41,
    type: "hub",
  },
  {
    id: "financial-district",
    name: "Financial District",
    area: "Gachibowli",
    city: "Hyderabad",
    listings: 63,
    type: "hub",
  },
  {
    id: "kompally",
    name: "Kompally",
    area: "North Hyderabad",
    city: "Hyderabad",
    listings: 12,
    type: "locality",
  },
  {
    id: "uppal",
    name: "Uppal",
    area: "East Hyderabad",
    city: "Hyderabad",
    listings: 14,
    type: "locality",
  },
  {
    id: "dilsukhnagar",
    name: "Dilsukhnagar",
    area: "South Hyderabad",
    city: "Hyderabad",
    listings: 22,
    type: "locality",
  },
  {
    id: "secunderabad",
    name: "Secunderabad",
    area: "Twin City",
    city: "Hyderabad",
    listings: 31,
    type: "locality",
  },
  {
    id: "shamshabad",
    name: "Shamshabad",
    area: "Airport Zone",
    city: "Hyderabad",
    listings: 9,
    type: "landmark",
  },
  {
    id: "narsingi",
    name: "Narsingi",
    area: "Outer Ring Road",
    city: "Hyderabad",
    listings: 18,
    type: "locality",
  },
  {
    id: "manikonda",
    name: "Manikonda",
    area: "Gachibowli Area",
    city: "Hyderabad",
    listings: 26,
    type: "locality",
  },
];
export const DEFAULT_LOCATIONS = LOCATIONS.filter((l) =>
  ["hitech-city", "madhapur", "gachibowli"].includes(l.id),
);
export function searchLocations(query: string): LocationResult[] {
  if (!query.trim()) return DEFAULT_LOCATIONS;
  const q = query.toLowerCase().trim();
  const matches = LOCATIONS.filter(
    (loc) =>
      loc.name.toLowerCase().includes(q) ||
      loc.area.toLowerCase().includes(q) ||
      loc.city.toLowerCase().includes(q),
  );
  return matches.slice(0, 3);
}
