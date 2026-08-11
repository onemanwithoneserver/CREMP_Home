import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  icon: LucideIcon;
  rightElement?: React.ReactNode;
}

export default function SectionHeader({
  overline,
  title,
  icon: Icon,
  rightElement,
}: SectionHeaderProps) {
  return (
    <div className="px-4 py-5 flex items-start justify-between shrink-0 relative bg-[#0b1b42] rounded-t-[4px]">
      <div className="flex flex-col gap-2.5">
        {overline && (
          <div className="flex items-center">
            <span className="flex w-fit items-center gap-1.5 rounded-[2px] border border-[#d4af37]/30 bg-[#d4af37]/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-[#d4af37]">
              {overline}
            </span>
          </div>
        )}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-9 h-9 rounded-[4px] bg-gradient-to-br from-[#bf953f] to-[#b38728] text-white shadow-md shadow-[#d4af37]/30 border-none flex items-center justify-center shrink-0"
          >
            <Icon size={18} strokeWidth={2} />
          </motion.div>
          <h3 className="text-[1.25rem] font-bold text-white leading-tight tracking-tight">
            {title}
          </h3>
        </div>
      </div>

      {rightElement && (
        <div className="relative z-10 shrink-0 ml-4">{rightElement}</div>
      )}
    </div>
  );
}
