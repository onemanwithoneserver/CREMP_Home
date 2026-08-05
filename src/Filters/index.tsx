import { useState } from "react";
import TopHeader from "./components/TopHeader";
import FilterBar from "./components/FilterBar";
import AdvancedFilterModal, {
  DEFAULT_ADVANCED_FILTERS,
} from "./components/AdvancedFilterModal";
import type { AdvancedFilterState } from "./components/AdvancedFilterModal";
import {
  BuyLeaseModal,
  PropertyTypeModal,
  BudgetModal,
  IndustryModal,
  InvestmentBudgetModal,
} from "./components/StepModals";

interface FiltersProps {
  isMobile?: boolean;
}

export default function Filters({ isMobile: _isMobile = false }: FiltersProps) {
  const [activeTab, setActiveTab] = useState<"commercial" | "business">("commercial");
  const [searchQuery, setSearchQuery] = useState("");
  const [radiusKm, setRadiusKm] = useState(5);

  // Commercial Quick States
  const [buyOrLease, setBuyOrLease] = useState<"Buy" | "Lease">("Buy");
  const [selectedPropertyType, setSelectedPropertyType] = useState("office-space");
  const [selectedBudget, setSelectedBudget] = useState("1 - 3 Cr");
  const [selectedCommercialTags, setSelectedCommercialTags] = useState<string[]>(["Pre-Leased"]);

  // Business Quick States
  const [selectedIndustry, setSelectedIndustry] = useState("food-beverage");
  const [selectedInvestmentBudget, setSelectedInvestmentBudget] = useState("₹ 25 L - ₹ 50 L");
  const [selectedBusinessTags, setSelectedBusinessTags] = useState<string[]>(["New Franchise"]);

  // Advanced Filters State
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilterState>(DEFAULT_ADVANCED_FILTERS);

  // Modal Open States
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);
  const [isBuyLeaseOpen, setIsBuyLeaseOpen] = useState(false);
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isInvestmentBudgetOpen, setIsInvestmentBudgetOpen] = useState(false);

  const toggleCommercialTag = (tag: string) => {
    setSelectedCommercialTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleBusinessTag = (tag: string) => {
    setSelectedBusinessTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleResetAllFilters = () => {
    setAdvancedFilters(DEFAULT_ADVANCED_FILTERS);
    setSelectedCommercialTags([]);
    setSelectedBusinessTags([]);
    setSearchQuery("");
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-start overflow-x-hidden font-sans">
      <div className="w-full flex flex-col">
        {/* Category Tabs */}
        <TopHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Filter Bar with Search, Radius, Filter Button, and Quick Pills */}
        <FilterBar
          activeTab={activeTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          radiusKm={radiusKm}
          onRadiusChange={setRadiusKm}
          // Commercial
          buyOrLease={buyOrLease}
          selectedPropertyType={selectedPropertyType}
          selectedBudget={selectedBudget}
          selectedCommercialTags={selectedCommercialTags}
          onToggleCommercialTag={toggleCommercialTag}
          // Business
          selectedIndustry={selectedIndustry}
          selectedInvestmentBudget={selectedInvestmentBudget}
          selectedBusinessTags={selectedBusinessTags}
          onToggleBusinessTag={toggleBusinessTag}
          // Modal Triggers
          onOpenAdvancedFilters={() => setIsAdvancedFilterOpen(true)}
          onOpenBuyLease={() => setIsBuyLeaseOpen(true)}
          onOpenPropertyType={() => setIsPropertyTypeOpen(true)}
          onOpenBudget={() => setIsBudgetOpen(true)}
          onOpenIndustry={() => setIsIndustryOpen(true)}
          onOpenInvestmentBudget={() => setIsInvestmentBudgetOpen(true)}
        />
      </div>

      {/* Advanced Filters Full Modal */}
      <AdvancedFilterModal
        isOpen={isAdvancedFilterOpen}
        onClose={() => setIsAdvancedFilterOpen(false)}
        filters={advancedFilters}
        onApply={(updated) => setAdvancedFilters(updated)}
        onReset={handleResetAllFilters}
        listingsCount={activeTab === "commercial" ? 30 : 356}
      />

      {/* Commercial Step Modals */}
      <BuyLeaseModal
        isOpen={isBuyLeaseOpen}
        onClose={() => setIsBuyLeaseOpen(false)}
        selectedType={buyOrLease}
        onSelect={(type) => setBuyOrLease(type)}
      />

      <PropertyTypeModal
        isOpen={isPropertyTypeOpen}
        onClose={() => setIsPropertyTypeOpen(false)}
        selectedType={selectedPropertyType}
        onSelect={(typeId) => setSelectedPropertyType(typeId)}
      />

      <BudgetModal
        isOpen={isBudgetOpen}
        onClose={() => setIsBudgetOpen(false)}
        selectedPreset={selectedBudget}
        onSelectPreset={(preset) => setSelectedBudget(preset)}
      />

      {/* Business Opportunity Step Modals */}
      <IndustryModal
        isOpen={isIndustryOpen}
        onClose={() => setIsIndustryOpen(false)}
        selectedIndustry={selectedIndustry}
        onSelect={(indId) => setSelectedIndustry(indId)}
      />

      <InvestmentBudgetModal
        isOpen={isInvestmentBudgetOpen}
        onClose={() => setIsInvestmentBudgetOpen(false)}
        selectedPreset={selectedInvestmentBudget}
        onSelectPreset={(preset) => setSelectedInvestmentBudget(preset)}
      />
    </div>
  );
}
