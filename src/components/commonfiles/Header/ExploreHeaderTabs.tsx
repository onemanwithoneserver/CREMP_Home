import { Building2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export interface ExploreHeaderTabsProps {
  activeTab: "commercial" | "business";
  onChange: (tab: "commercial" | "business") => void;
}

export default function ExploreHeaderTabs({ activeTab, onChange }: ExploreHeaderTabsProps) {
  return (
    <div className="flex w-full bg-[#0b1b42] h-12 relative overflow-hidden border-b border-white/5">
      {/* Commercial Properties */}
      <button
        onClick={() => onChange("commercial")}
        className={`flex-1 flex items-center justify-center gap-2 relative z-10 transition-colors duration-300 ${
          activeTab === "commercial" ? "text-[#d4af37]" : "text-gray-400 hover:text-gray-300"
        }`}
      >
        <Building2 size={16} />
        <span className="text-[10px] sm:text-xs font-bold font-['Outfit'] text-left leading-tight">
          Commercial<br />Properties
        </span>
        {activeTab === "commercial" && (
          <motion.div
            layoutId="exploreHeaderTabIndicator"
            className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#d4af37]"
          />
        )}
      </button>

      {/* Divider */}
      <div className="w-[1px] h-6 bg-white/10 self-center" />

      {/* Business Opportunities */}
      <button
        onClick={() => onChange("business")}
        className={`flex-1 flex items-center justify-center gap-2 relative z-10 transition-colors duration-300 ${
          activeTab === "business" ? "text-[#d4af37]" : "text-gray-400 hover:text-gray-300"
        }`}
      >
        <Briefcase size={16} />
        <span className="text-[10px] sm:text-xs font-bold font-['Outfit'] text-left leading-tight">
          Business<br />Opportunities
        </span>
        {activeTab === "business" && (
          <motion.div
            layoutId="exploreHeaderTabIndicator"
            className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#d4af37]"
          />
        )}
      </button>
    </div>
  );
}
