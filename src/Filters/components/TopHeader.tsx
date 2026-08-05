import { ChevronDown, MapPin, User, Building2, Briefcase, Menu } from "lucide-react";
import { useState } from "react";
import { CITIES } from "../data";

interface TopHeaderProps {
  activeTab: "commercial" | "business";
  onTabChange: (tab: "commercial" | "business") => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export default function TopHeader({
  activeTab,
  onTabChange,
  selectedCity,
  onCityChange,
}: TopHeaderProps) {
  const [isCityOpen, setIsCityOpen] = useState(false);

  return (
    <header className="w-full bg-[#0b1b42] text-white shadow-md z-30 relative select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 pb-0">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Menu"
              className="p-1.5 rounded-[4px] hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCityOpen(!isCityOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-medium transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{selectedCity}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white/60 transition-transform ${isCityOpen ? "rotate-180" : ""}`} />
              </button>

              {isCityOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-44 bg-[#07132e] border border-white/15 rounded-[6px] shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        onCityChange(city);
                        setIsCityOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedCity === city
                          ? "bg-[#d4af37]/20 text-[#d4af37] font-semibold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{city}</span>
                      {selectedCity === city && <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            className="flex flex-col items-center justify-center p-1 text-white/90 hover:text-[#d4af37] transition-colors"
          >
            <div className="w-7 h-7 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
              <User className="w-4 h-4" />
            </div>
            <span className="text-[10px] mt-0.5 font-medium tracking-tight text-[#d4af37]">Login</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-1 border-t border-white/10">
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
