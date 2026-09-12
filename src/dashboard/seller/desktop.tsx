import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { sellerProfile, sellerNavItems } from "./data";

export default function SellerDashboardDesktop() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className="h-full bg-gray-50 dark:bg-[#0a1128] font-sans flex flex-col relative overflow-hidden transition-colors">
      <div className="flex flex-1 overflow-hidden">
        
        <aside className="w-[300px] h-full flex flex-col bg-white/80 dark:bg-[#0b1b42]/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-white/10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 shrink-0 relative">
          
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent" />
          <motion.div
             className="absolute right-[-1px] w-[3px] h-16 rounded-full bg-gradient-to-b from-transparent via-[#ffd700] to-transparent shadow-[0_0_12px_#ffd700]"
             animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
            
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200/50 dark:border-white/10">
              <div className="relative group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-gray-50 dark:bg-black/40 shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                  <sellerProfile.avatarIcon className="text-[#d4af37] transition-transform group-hover:scale-110" size={24} />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-[#0a1128] dark:text-white tracking-tight">{sellerProfile.name}</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{sellerProfile.role}</span>
                  <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">{sellerProfile.mode}</span>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col gap-6">
              {sellerNavItems.map((section, sIdx) => (
                <motion.div 
                  key={section.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * sIdx }}
                  className="flex flex-col"
                >
                  <h3 className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest mb-3 pl-2">
                    {section.category}
                  </h3>
                  <div className="flex flex-col gap-0.5">
                    {section.items.map((item) => {
                      const isActive = activeItem === item.id;
                      return (
                        <motion.button
                          key={item.id}
                          whileHover={{ x: 4, backgroundColor: "rgba(10,17,40,0.02)" }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => setActiveItem(item.id)}
                          className={`flex items-center justify-between p-2.5 rounded-[4px] transition-all duration-300 relative group overflow-hidden ${
                            isActive ? "bg-gray-100/80 dark:bg-white/10 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-white/5" : "bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          {isActive && (
                            <motion.div 
                              layoutId="activeIndicatorDesktop"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[#d4af37] rounded-r-full shadow-[0_0_8px_#d4af37]"
                            />
                          )}
                          <div className="flex items-center gap-3.5 relative z-10">
                            <motion.div whileHover={{ scale: 1.08, rotate: 4 }} className={`w-8 h-8 rounded-[4px] flex items-center justify-center transition-colors ${
                              isActive 
                                ? "text-[#d4af37] bg-white dark:bg-black/20 shadow-sm" 
                                : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                            }`}>
                              <item.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                            </motion.div>
                            <div className="flex flex-col items-start text-left">
                              <span className={`text-[13px] font-semibold transition-colors ${
                                isActive ? "text-[#0a1128] dark:text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-[#0a1128] dark:group-hover:text-gray-200"
                              }`}>
                                {item.label}
                              </span>
                            </div>
                          </div>
                          {isActive && <ChevronRight size={14} className="text-[#d4af37]" />}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </aside>

        
        <main className="flex-1 p-8 overflow-y-auto relative bg-transparent">
          <motion.div 
            key={activeItem}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl mx-auto h-full min-h-[600px] border border-gray-200/50 dark:border-white/5 rounded-xl bg-white/50 dark:bg-[#0b1b42]/30 backdrop-blur-sm shadow-sm flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-4 border border-gray-200 dark:border-white/10">
              <span className="text-[#d4af37]">
                
                {(() => {
                  for (const section of sellerNavItems) {
                    for (const item of section.items) {
                      if (item.id === activeItem) return <item.icon size={24} />;
                    }
                  }
                  return null;
                })()}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-[#0a1128] dark:text-white mb-2">
              {sellerNavItems.flatMap(s => s.items).find(i => i.id === activeItem)?.label}
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Content for this section will go here.
            </p>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
