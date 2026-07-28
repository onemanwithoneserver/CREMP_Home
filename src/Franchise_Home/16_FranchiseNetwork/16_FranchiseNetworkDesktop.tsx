import { motion } from "framer-motion";
import { franchiseNetworkData } from "./data";

export default function FranchiseNetworkDesktop() {
  return (
    <section className="w-full bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[3px] text-gray-500 mb-6 text-center"
        >
          {franchiseNetworkData.sectionLabel}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d1a3a] border border-gray-800 rounded overflow-hidden"
        >
          <div className="flex">
            <div className="flex-1 relative min-h-[400px] bg-gradient-to-br from-[#0a1128] to-[#0d1a3a] p-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-white font-bold text-base">
                  {franchiseNetworkData.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                {franchiseNetworkData.outletCount}
              </p>
              <div className="w-full h-[300px] rounded-lg bg-background border border-gray-800/50 flex items-center justify-center relative overflow-hidden">
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
                <span className="text-gray-600 text-sm z-10">Interactive Map</span>
              </div>
            </div>
            <div className="w-[300px] border-l border-gray-800 p-6">
              <p className="text-sm font-bold uppercase tracking-[3px] text-gray-500 mb-4">
                MAP LEGEND
              </p>
              <div className="space-y-3 mb-6">
                {franchiseNetworkData.legend.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <Icon size={14} style={{ color: item.color }} />
                      <span className="text-gray-300 text-xs">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-sm font-bold uppercase tracking-[3px] text-gray-500 mb-3">
                {franchiseNetworkData.networkStats.label}
              </p>
              <div className="space-y-2 mb-6">
                {franchiseNetworkData.networkStats.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{item.label}</span>
                    <span className="text-white text-xs font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2.5 bg-[#D4AF37] text-[#0a1128] text-xs font-bold rounded-lg"
                >
                  {franchiseNetworkData.cta.primary}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2.5 border border-gray-700 text-gray-300 text-xs font-semibold rounded-lg hover:border-[#D4AF37]/50 hover:text-accent transition-all"
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
