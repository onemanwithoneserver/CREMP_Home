import { Building, FileText, Store, Briefcase, Map, Store as StoreIcon, Building2, Warehouse, MoreHorizontal } from "lucide-react";

export const requirementTypes = [
  { id: "sell_property", label: "Sell Property", icon: Building },
  { id: "lease_property", label: "Lease Property", icon: FileText },
  { id: "franchise_opportunity", label: "Franchise Opportunity", icon: Store },
  { id: "sell_existing_business", label: "Sell Existing Business", icon: Briefcase },
];

export const propertyCategories = [
  { id: "commercial_plot", label: "Commercial Plot", icon: Map },
  { id: "retail_space", label: "Retail Space", icon: StoreIcon },
  { id: "office_space", label: "Office Space", icon: Building2 },
  { id: "warehouse", label: "Warehouse", icon: Warehouse },
  { id: "others", label: "Others", icon: MoreHorizontal },
];

export const industries = [
  { id: "food_beverage", label: "Food & Beverage" },
  { id: "retail_fashion", label: "Retail & Fashion" },
  { id: "education_training", label: "Education & Training" },
  { id: "healthcare_pharma", label: "Healthcare & Pharma" },
  { id: "information_technology", label: "Information Technology" },
  { id: "automotive", label: "Automotive" },
  { id: "fitness_wellness", label: "Fitness & Wellness" },
  { id: "banking_finance", label: "Banking & Finance" },
  { id: "logistics_supply_chain", label: "Logistics & Supply Chain" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "real_estate", label: "Real Estate" },
  { id: "other", label: "Other" },
];
