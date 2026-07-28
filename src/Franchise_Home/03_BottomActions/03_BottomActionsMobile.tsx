import { motion } from "framer-motion";
import { bottomActionsData } from "./data";

export default function BottomActionsMobile() {
  return (
    <section className="w-full bg-[#0a1128] px-4 py-3">
      <div className="flex items-center gap-2">
        {bottomActionsData.actions.map((action) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.id}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold ${
                action.variant === "primary"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#b38728] text-[#0a1128]"
                  : "border border-gray-700 text-gray-300 bg-[#0d1a3a]"
              }`}
            >
              <Icon size={14} />
              {action.label}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
