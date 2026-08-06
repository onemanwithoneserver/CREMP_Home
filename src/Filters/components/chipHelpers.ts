import {
  Building2,
  Store,
  Armchair,
  Building,
  Factory,
  Banknote,
  Tags,
  TrendingUp,
  Briefcase,
  Maximize2,
  type LucideIcon,
} from "lucide-react";
import { PROPERTY_TYPES, INDUSTRY_OPTIONS } from "./data";
import type { FilterState } from "./data";

export interface FilterChip {
  id: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

export function getCommercialChips(filters: FilterState): FilterChip[] {
  return [
    {
      id: "property",
      icon: Building2,
      label: PROPERTY_TYPES.find((p) => p.id === filters.propertyType)?.label || "Property Type",
      isActive: filters.propertyType !== "office-space",
    },
    {
      id: "budget",
      icon: Banknote,
      label: filters.budget !== "Any" ? filters.budget : "Budget",
      isActive: filters.budget !== "Any",
    },
    {
      id: "size",
      icon: Maximize2,
      label: filters.size !== "Any" ? filters.size : "Size",
      isActive: filters.size !== "Any",
    },
    {
      id: "fitout",
      icon: Armchair,
      label: filters.fitOut !== "Any" ? filters.fitOut : "Fit-Out",
      isActive: filters.fitOut !== "Any",
    },
    {
      id: "status",
      icon: Building,
      label: filters.status.length > 0 ? `${filters.status.length} Status` : "Project Status",
      isActive: filters.status.length > 0,
    },
    {
      id: "tags",
      icon: Tags,
      label: filters.commercialTags.length > 0 ? `${filters.commercialTags.length} Tags` : "Tags",
      isActive: filters.commercialTags.length > 0,
    },
    {
      id: "deal",
      icon: Briefcase,
      label: filters.dealPref !== "Any" ? filters.dealPref : "Deal By",
      isActive: filters.dealPref !== "Any",
    },
  ];
}

export function getBusinessChips(filters: FilterState): FilterChip[] {
  return [
    {
      id: "industry",
      icon: Factory,
      label: INDUSTRY_OPTIONS.find((p) => p.id === filters.industry)?.label || "Industry",
      isActive: filters.industry !== "food-beverage",
    },
    {
      id: "inv-budget",
      icon: Banknote,
      label: filters.invBudget !== "Any" ? filters.invBudget : "Investment",
      isActive: filters.invBudget !== "Any",
    },
    {
      id: "model",
      icon: Store,
      label: filters.model !== "Any" ? filters.model : "Model",
      isActive: filters.model !== "Any",
    },
    {
      id: "payback",
      icon: TrendingUp,
      label: filters.payback !== "Any ROI" ? filters.payback : "Payback",
      isActive: filters.payback !== "Any ROI",
    },
    {
      id: "biz-tags",
      icon: Tags,
      label: filters.businessTags.length > 0 ? `${filters.businessTags.length} Tags` : "Tags",
      isActive: filters.businessTags.length > 0,
    },
  ];
}
