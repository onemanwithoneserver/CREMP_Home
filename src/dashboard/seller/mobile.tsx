import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { sellerProfile, sellerNavItems } from "./data";
import crempLogo from "../../Logo/CREMP_Light.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 420, damping: 26 },
  },
};

export default function SellerDashboardMobile() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen w-full flex flex-col font-['Outfit',sans-serif] bg-white dark:bg-[#050b14]"
    >
      <div className="bg-gradient-to-br from-[#0b1b42] via-[#121c33] to-[#0b1b42] w-full pt-5 pb-14 px-5 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-56 h-56 bg-[#d4af37]/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="flex items-center justify-between gap-4 relative z-10 mb-6">
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-semibold tracking-tight">Dashboard</h1>
            <p className="text-gray-400 text-xs mt-0.5">Manage your listings & leads</p>
          </div>
          <img
            src={crempLogo}
            alt="CREMP Logo"
            className="h-12 w-auto object-contain drop-shadow-lg"
          />
        </div>

        <motion.div variants={item} className="flex items-center gap-3.5 relative z-10">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-[#0b1b42] text-[#d4af37] flex items-center justify-center text-xl font-semibold border-2 border-[#d4af37]/60 shadow-md shadow-[#d4af37]/10">
              <sellerProfile.avatarIcon size={24} />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-white tracking-tight">{sellerProfile.name}</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-gray-400 font-medium">{sellerProfile.role}</span>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#d4af37]/10 border border-[#d4af37]/30">
                <sellerProfile.avatarIcon size={10} className="text-[#d4af37]" />
                <span className="text-[9px] font-semibold text-[#d4af37] uppercase tracking-wider">{sellerProfile.mode}</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 -mt-6 relative z-10 px-4 pb-24">
        <div className="flex flex-col gap-5">
          {sellerNavItems.map((section, sIdx) => (
            <motion.div
              key={section.category}
              variants={item}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2.5 px-1">
                <div className="w-1 h-3.5 rounded-full bg-[#d4af37]" />
                <h3 className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-widest">
                  {section.category}
                </h3>
              </div>
              <div className="bg-white dark:bg-[#0b1b42]/60 rounded-[8px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden">
                {section.items.map((navItem, idx) => {
                  const isActive = activeItem === navItem.id;
                  const isLast = idx === section.items.length - 1;
                  return (
                    <motion.button
                      key={navItem.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveItem(navItem.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 relative ${
                        !isLast ? "border-b border-gray-100 dark:border-white/5" : ""
                      } ${
                        isActive
                          ? "bg-[#0b1b42]/5 dark:bg-[#d4af37]/5"
                          : "bg-transparent hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="sellerMobileActive"
                          className="absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-[#d4af37] rounded-r-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                        />
                      )}
                      <div className="flex items-center gap-3 relative z-10">
                        <div
                          className={`w-9 h-9 rounded-[8px] flex items-center justify-center transition-all ${
                            isActive
                              ? "bg-[#0b1b42] text-[#d4af37] shadow-sm"
                              : "bg-gray-100 dark:bg-white/8 text-gray-400 dark:text-gray-500"
                          }`}
                        >
                          <navItem.icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
                        </div>
                        <div className="flex flex-col items-start text-left">
                          <span
                            className={`text-[14px] font-semibold transition-colors ${
                              isActive
                                ? "text-[#0a1128] dark:text-white"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {navItem.label}
                          </span>
                          {navItem.subtitle && (
                            <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 font-medium">
                              {navItem.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transition-all ${
                          isActive
                            ? "text-[#d4af37] translate-x-0.5"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-8 text-center">
          <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-600 tracking-widest uppercase">
            Version 1.0.0
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
