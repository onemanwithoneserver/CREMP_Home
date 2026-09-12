import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { buyerProfile, buyerNavItems } from "./data";

export default function BuyerDashboardMobile() {
  const [activeItem, setActiveItem] = useState("saved-props");

  return (
    <div className="h-full bg-[#0a1128] text-white font-sans flex flex-col relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#0a1128] via-[#0b1b42] to-[#0a1128] opacity-90 z-0" />
      
      <div className="relative z-10 flex flex-col h-full">

        <main className="flex-1 overflow-y-auto px-6 py-8 pb-20 scrollbar-hide">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-4 mb-10 pb-8 border-b border-white/10"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center bg-black/40 shadow-[0_0_12px_rgba(212,175,55,0.3)] backdrop-blur-md relative after:absolute after:-inset-1 after:rounded-full after:border after:border-[#d4af37]/30 after:animate-pulse">
                <buyerProfile.avatarIcon className="text-[#d4af37]" size={28} />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-white tracking-tight">{buyerProfile.name}</h2>
              <div className="inline-flex items-center gap-1.5 mt-1.5 border border-[#d4af37]/40 bg-[#d4af37]/10 px-2.5 py-1 rounded-[4px]">
                <buyerProfile.avatarIcon size={12} className="text-[#d4af37]" />
                <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">{buyerProfile.mode}</span>
              </div>
            </div>
          </motion.div>

          
          <div className="flex flex-col gap-8">
            {buyerNavItems.map((section, sIdx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * sIdx, ease: "easeOut" }}
                className="flex flex-col"
              >
                <h3 className="text-[11px] font-bold text-[#d4af37] uppercase tracking-widest mb-4">
                  {section.category}
                </h3>
                <div className="flex flex-col gap-1 relative">
                  <div className="absolute left-[-16px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent" />
                  <motion.div
                    className="absolute left-[-17px] w-[3px] h-8 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_10px_#ffd700]"
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: sIdx * 0.5 }}
                  />
                  
                  {section.items.map((item) => {
                    const isActive = activeItem === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveItem(item.id)}
                        className={`flex items-center justify-between p-3 rounded-[4px] transition-all duration-300 relative group overflow-hidden ${
                          isActive ? "bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm border border-white/5" : "bg-transparent border border-transparent"
                        }`}
                      >
                        {isActive && (
                          <motion.div 
                            layoutId="activeIndicatorBuyer"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-3/4 bg-gradient-to-b from-[#d4af37]/50 via-[#d4af37] to-[#d4af37]/50 rounded-r-full shadow-[0_0_16px_#d4af37]"
                          />
                        )}
                        <div className="flex items-center gap-4 relative z-10">
                          <div className={`w-8 h-8 rounded-[4px] flex items-center justify-center transition-colors shadow-sm ${
                            isActive ? "text-[#d4af37] bg-gradient-to-br from-[#d4af37]/15 to-transparent border border-[#d4af37]/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" : "text-gray-400 group-hover:text-white bg-white/5"
                          }`}>
                            <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                          </div>
                          <div className="flex flex-col items-start text-left">
                            <span className={`text-[15px] font-semibold transition-colors ${
                              isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                            }`}>
                              {item.label}
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? "text-[#d4af37] translate-x-1" : "text-gray-600 group-hover:text-gray-400"}`} />
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase">Version 1.0.0</span>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
