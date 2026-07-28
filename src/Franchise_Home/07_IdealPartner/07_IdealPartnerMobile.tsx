import { motion } from "framer-motion";
import { idealPartnerData } from "./data";

export default function IdealPartnerMobile() {
  return (
    <section className="w-full bg-background px-4 py-6">
      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 rounded p-4 mb-4">
        <p className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500 mb-1">
          {idealPartnerData.sectionLabel}
        </p>
        <h2 className="text-base font-bold text-white mb-1">{idealPartnerData.title}</h2>
        <p className="text-gray-400 text-sm">{idealPartnerData.subtitle}</p>
      </div>

      <div className="space-y-3 mb-4">
        {idealPartnerData.criteria.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1a3a] border border-gray-800 rounded p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                  <Icon size={14} className="text-accent" />
                </div>
                <h4 className="text-white font-bold text-xs">{item.title}</h4>
              </div>
              <div className="space-y-1 mb-2">
                {item.items.map((subItem, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-gray-300 text-[10px]">{subItem.label}</span>
                    {subItem.value && (
                      <>
                        <span className="text-gray-600 text-[10px]">·</span>
                        <span className="text-accent text-[10px] font-semibold">{subItem.value}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-[9px]">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {idealPartnerData.additionalCriteria.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="bg-[#0d1a3a] border border-gray-800 rounded p-3 text-center">
              <div className="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center mx-auto mb-2">
                <Icon size={12} className="text-gray-400" />
              </div>
              <h4 className="text-white font-bold text-[9px] mb-1">{item.title}</h4>
              <div className="space-y-0.5">
                {item.items.map((tag, idx) => (
                  <span key={idx} className="text-[8px] text-gray-400 block">{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
