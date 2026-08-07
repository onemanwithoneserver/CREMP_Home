import type { FilterState } from "../data";
import AdvancedFiltersDesktop from "./AdvancedFiltersDesktop";
import AdvancedFiltersMobile from "./AdvancedFiltersMobile";

interface AdvancedFiltersProps {
  activeTab: "commercial" | "business";
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose: () => void;
}

export default function AdvancedFilters(props: AdvancedFiltersProps) {
  return (
    <>
      <AdvancedFiltersDesktop {...props} />
      <AdvancedFiltersMobile {...props} />
    </>
  );
}
