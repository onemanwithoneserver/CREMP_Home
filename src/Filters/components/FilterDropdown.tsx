import type { FilterState } from "./data";
import FilterDropdownDesktop from "./FilterDropdownDesktop";
import FilterDropdownMobile from "./FilterDropdownMobile";

interface FilterDropdownProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose: () => void;
}

export default function FilterDropdown(props: FilterDropdownProps) {
  return (
    <>
      <div className="hidden sm:block">
        <FilterDropdownDesktop {...props} />
      </div>
      <div className="block sm:hidden">
        <FilterDropdownMobile {...props} />
      </div>
    </>
  );
}
