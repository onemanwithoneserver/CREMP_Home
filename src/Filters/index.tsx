import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

interface FiltersProps {
  isMobile?: boolean;
}

export default function Filters({ isMobile = false }: FiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={`w-full min-h-screen bg-white text-[#0a1128] flex flex-col items-center justify-start ${isMobile ? "pt-4 px-3" : "pt-8 sm:pt-10 px-4"} select-none`}>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full max-w-[450px]"
      >
        <form
          onSubmit={handleSearch}
          className={`w-full bg-white rounded-[6px] border transition-all duration-300 shadow-[0_2px_12px_rgba(11,27,66,0.06)] p-1.5 flex items-center gap-2 ${
            isFocused
              ? "border-[#0b1b42]/40 shadow-[0_4px_16px_rgba(11,27,66,0.1)]"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div
            className="w-8 h-8 rounded-[4px] border border-gray-200 bg-gray-50 flex items-center justify-center text-[#0b1b42] shrink-0 shadow-xs"
            aria-hidden="true"
          >
            <div className="w-3.5 h-3.5 border-[1.8px] border-[#0b1b42] rounded-[2.5px] rotate-45" />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search locations, projects, or builders"
            className="flex-1 bg-transparent text-[13px] font-normal text-[#0a1128] placeholder:text-gray-400 placeholder:font-light outline-none border-none px-1"
          />

          <div className="flex items-center gap-1.5 shrink-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Filters"
              className="w-8 h-8 rounded-[4px] bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <TuneRoundedIcon sx={{ fontSize: 18 }} />
            </motion.button>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Search"
              className="w-8 h-8 rounded-[4px] bg-[#0b1b42] hover:bg-[#07132e] text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer shrink-0 border border-[#d4af37]/20"
            >
              <Search
                className="w-4 h-4 text-white"
                strokeWidth={2.2}
              />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
