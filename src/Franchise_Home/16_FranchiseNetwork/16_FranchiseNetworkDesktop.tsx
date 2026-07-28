import { motion } from "framer-motion";
import { franchiseNetworkData } from "./data";
import clsx from "clsx";
import { getTextStyles, getSolidBgStyles } from "../utils/theme";

export default function FranchiseNetworkDesktop() {
  return (
    <section className="w-full bg-background px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-primary mb-8 text-center"
        >
          {franchiseNetworkData.sectionLabel}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-surface border border-border rounded-lg overflow-hidden shadow-sm flex"
        >
          <div className="flex-1 relative min-h-[440px] bg-gray-50 dark:bg-surface-alt p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-gray-900 dark:text-white font-black text-xl">
                {franchiseNetworkData.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 font-medium">
              {franchiseNetworkData.outletCount}
            </p>
            <div className="w-full flex-1 rounded-lg bg-white dark:bg-background border border-border flex items-center justify-center relative overflow-hidden shadow-sm">
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
                    <circle cx="160" cy="160" r="3" fill="#D4AF37" />
                    <circle cx="220" cy="250" r="3" fill="#22c55e" />
                    <circle cx="190" cy="300" r="3" fill="#ef4444" />
                  </svg>
                </div>
                <span className="text-gray-400 dark:text-gray-500 text-sm z-10 font-medium">Interactive Map</span>
              </div>
            </div>
            <div className="w-[320px] border-l border-border bg-white dark:bg-surface p-8 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-primary mb-5">
                  MAP LEGEND
                </p>
              <div className="space-y-4 mb-8">
                {franchiseNetworkData.legend.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div
                        className={clsx("w-3 h-3 rounded-full", getSolidBgStyles(item.intent))}
                      />
                      <Icon size={16} strokeWidth={1.5} className={getTextStyles(item.intent)} />
                      <span className="text-gray-700 dark:text-gray-300 text-xs font-semibold">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-primary mb-4">
                {franchiseNetworkData.networkStats.label}
              </p>
              <div className="space-y-2 mb-8">
                {franchiseNetworkData.networkStats.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                    <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">{item.label}</span>
                    <span className="text-gray-900 dark:text-white text-xs font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-[4px] hover-lift transition-all"
                >
                  {franchiseNetworkData.cta.primary}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 border border-border text-gray-700 dark:text-gray-300 text-sm font-bold rounded-[4px] hover-lift hover:border-primary/50 transition-all"
                >
                  {franchiseNetworkData.cta.secondary}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
