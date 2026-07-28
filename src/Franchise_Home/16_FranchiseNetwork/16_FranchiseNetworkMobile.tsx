import { motion } from "framer-motion";
import { franchiseNetworkData } from "./data";

export default function FranchiseNetworkMobile() {
  return (
    <section className="w-full bg-background px-4 py-6">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
        {franchiseNetworkData.sectionLabel}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0d1a3a] border border-gray-800 rounded-xl overflow-hidden"
      >
        <div className="w-full h-[200px] bg-background flex items-center justify-center relative">
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
          <div className="z-10">
            <h3 className="text-white font-bold text-sm text-center">{franchiseNetworkData.title}</h3>
            <p className="text-gray-500 text-[10px] text-center">{franchiseNetworkData.outletCount}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-3 mb-4">
            {franchiseNetworkData.legend.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-400 text-[9px]">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {franchiseNetworkData.networkStats.items.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-1 border-b border-gray-800/50">
                <span className="text-gray-400 text-[9px]">{item.label}</span>
                <span className="text-white text-[9px] font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <button className="w-full px-3 py-2.5 bg-[#D4AF37] text-[#0a1128] text-[10px] font-bold rounded-lg">
              {franchiseNetworkData.cta.primary}
            </button>
            <button className="w-full px-3 py-2.5 border border-gray-700 text-gray-300 text-[10px] font-semibold rounded-lg">
              {franchiseNetworkData.cta.secondary}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
