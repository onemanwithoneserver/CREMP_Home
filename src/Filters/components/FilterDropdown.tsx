import type { FilterState } from "./data";
import FilterDropdownDesktop from "./FilterDropdownDesktop";
interface FilterDropdownProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose: () => void;
}
export default function FilterDropdown(props: FilterDropdownProps) {
  return <FilterDropdownDesktop {...props} />;
}
