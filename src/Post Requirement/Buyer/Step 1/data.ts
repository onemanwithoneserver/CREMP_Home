import { Building, FileText, Store, Briefcase, Map, Store as StoreIcon, Building2, Warehouse, MoreHorizontal } from "lucide-react";

export const requirementTypes = [
  { id: "buy_property", label: "Buy Property", icon: Building },
  { id: "lease_property", label: "Lease Property", icon: FileText },
  { id: "franchise_opportunity", label: "Franchise Opportunity", icon: Store },
  { id: "buy_existing_business", label: "Buy Existing Business", icon: Briefcase },
];

export const propertyCategories = [
  { id: "commercial_plot", label: "Commercial Plot", icon: Map },
  { id: "retail_space", label: "Retail Space", icon: StoreIcon },
  { id: "office_space", label: "Office Space", icon: Building2 },
  { id: "warehouse", label: "Warehouse", icon: Warehouse },
  { id: "others", label: "Others", icon: MoreHorizontal },
];
