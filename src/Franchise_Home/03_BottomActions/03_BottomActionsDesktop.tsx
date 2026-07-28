import { motion } from "framer-motion";
import { bottomActionsData } from "./data";

export default function BottomActionsDesktop() {
  return (
    <section className="w-full bg-[#0a1128] px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-end"
        >
          {bottomActionsData.actions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  action.variant === "primary"
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#b38728] text-[#0a1128] shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40"
                    : "border border-gray-700 text-gray-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] bg-[#0d1a3a]"
                }`}
              >
                <Icon size={16} />
                {action.label}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
