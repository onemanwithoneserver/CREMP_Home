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
    <div className="px-4 py-3.5 flex items-center justify-between shrink-0 relative bg-[#0b1b42] rounded-none min-h-[72px] border-b border-white/5">
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-12 h-12 rounded-lg bg-white/5 border border-[#d4af37]/60 shadow-[0_0_12px_rgba(212,175,55,0.3)] backdrop-blur-md flex items-center justify-center text-[#d4af37] shrink-0"
        >
          <Icon size={22} strokeWidth={2} />
        </motion.div>

        <div className="flex flex-col min-w-0 gap-1.5 justify-center">
          {overline && (
            <div className="flex w-fit items-center">
              <span className="flex items-center gap-1 rounded-[4px] border border-[#d4af37]/25 bg-gradient-to-r from-[#d4af37]/5 to-[#d4af37]/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-[#d4af37]/90 shadow-[0_0_8px_rgba(212,175,55,0.1)] backdrop-blur-sm">
                {overline}
              </span>
            </div>
          )}
          <h3 className="text-[1.1rem] font-semibold text-white/95 leading-none tracking-wide truncate">
            {title}
          </h3>
        </div>
      </div>
      {rightElement && (
        <div className="ml-3 shrink-0 flex items-center justify-end">
          {rightElement}
        </div>
      )}
    </div>
  );
}