import clsx from "clsx";
import { motion } from "framer-motion";
import { getCardStyles, getSolidBgStyles, getTextStyles } from "../utils/theme";
import { franchiseNetworkData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FranchiseNetworkMobile() {
  return (
    <section className="w-full bg-[#FAFAFA] px-4 py-12">
      <SectionHeader
        overline={franchiseNetworkData.sectionLabel}
        align="center"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={clsx(
          "overflow-hidden rounded-[4px] border flex flex-col transition-all duration-300",
          getCardStyles(),
        )}
      >
        <div className="w-full h-[220px] bg-gray-50 dark:bg-white flex items-center justify-center relative border-b border-gray-100">
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 500" className="w-full h-full">
              <path
                d="M200,50 C250,80 300,120 310,180 C320,240 280,300 260,340 C240,380 220,420 200,450 C180,420 160,380 140,340 C120,300 80,240 90,180 C100,120 150,80 200,50Z"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
                opacity="0.3"
              />
              <circle cx="200" cy="180" r="4" fill="#D4AF37" />
              <circle cx="180" cy="220" r="3" fill="#22c55e" />
              <circle cx="230" cy="200" r="3" fill="#3b82f6" />
            </svg>
          </div>
          <div className="z-10 p-6 text-center">
            <h3 className="text-[#0a1128] dark:text-white font-semibold text-lg tracking-tight mb-1">
              {franchiseNetworkData.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs font-medium">
              {franchiseNetworkData.outletCount}
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-6 mb-6">
            {franchiseNetworkData.legend.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div
                    className={clsx(
                      "w-2 h-2 rounded-full",
                      getSolidBgStyles(item.intent),
                    )}
                  />
                  {Icon && (
                    <Icon
                      size={12}
                      strokeWidth={1.5}
                      className={getTextStyles(item.intent)}
                    />
                  )}
                  <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {franchiseNetworkData.networkStats.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-1.5 border-b border-gray-100"
              >
                <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                  {item.label}
                </span>
                <span className="text-[#0a1128] dark:text-white text-xs font-semibold">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <button className="w-full px-4 py-2.5 bg-primary text-white text-xs font-semibold rounded shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-shadow">
              {franchiseNetworkData.cta.primary}
            </button>
            <button className="w-full px-4 py-2.5 border border-gray-100 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded">
              {franchiseNetworkData.cta.secondary}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
