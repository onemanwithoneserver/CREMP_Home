import { Building2, Briefcase } from "lucide-react";

interface TopHeaderProps {
  activeTab: "commercial" | "business";
  onTabChange: (tab: "commercial" | "business") => void;
}

export default function TopHeader({
  activeTab,
  onTabChange,
}: TopHeaderProps) {
  return (
    <header className="w-full bg-[#0b1b42] text-white shadow-md z-30 relative select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-2 gap-1">
          <button
            type="button"
            onClick={() => onTabChange("commercial")}
            className={`py-3 px-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all relative ${
              activeTab === "commercial"
                ? "text-[#d4af37]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Commercial Properties</span>
            {activeTab === "commercial" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onTabChange("business")}
            className={`py-3 px-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all relative ${
              activeTab === "business"
                ? "text-[#d4af37]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Business Opportunities</span>
            {activeTab === "business" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
