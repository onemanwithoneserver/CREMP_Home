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
    <div className="relative flex min-h-[76px] shrink-0 items-center justify-between overflow-hidden bg-[#0b1b42] px-5 sm:px-6 py-4 border-b border-[#d4af37]/20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 via-transparent to-transparent opacity-70" />

      <div className="relative z-10 flex min-w-0 flex-1 items-center gap-5">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-white/5 to-transparent shadow-[0_4px_20px_-4px_rgba(212,175,55,0.25)] backdrop-blur-md"
        >
          <Icon className="text-[#d4af37]" size={20} strokeWidth={1.5} />
        </motion.div>

        <div className="flex min-w-0 flex-col justify-center gap-1">
          {overline && (
            <span className="truncate text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#d4af37]/80">
              {overline}
            </span>
          )}
          <h3 className="truncate text-lg font-medium tracking-wide text-white/95">
            {title}
          </h3>
        </div>
      </div>

      {rightElement && (
        <div className="relative z-10 ml-4 flex shrink-0 items-center justify-end">
          {rightElement}
        </div>
      )}
    </div>
  );
}