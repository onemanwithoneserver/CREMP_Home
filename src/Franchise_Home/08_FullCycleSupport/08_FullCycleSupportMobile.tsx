import { motion } from "framer-motion";
import { fullCycleSupportData } from "./data";

export default function FullCycleSupportMobile() {
  return (
    <section className="w-full bg-background px-4 py-6">
      <div className="text-center mb-4">
        <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-1">
          {fullCycleSupportData.sectionLabel}
        </p>
        <h2 className="text-base font-bold text-white mb-1">{fullCycleSupportData.title}</h2>
        <p className="text-gray-400 text-[10px]">{fullCycleSupportData.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {fullCycleSupportData.supportItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="bg-[#0d1a3a] border border-gray-800 rounded-xl p-3 text-center"
            >
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-2">
                <Icon size={14} className="text-accent" />
              </div>
              <h4 className="text-white font-semibold text-[10px] mb-0.5">{item.title}</h4>
              <p className="text-gray-500 text-[8px]">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
