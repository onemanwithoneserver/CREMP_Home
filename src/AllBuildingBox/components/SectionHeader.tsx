import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.03,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 28 },
  },
};

interface SectionHeaderProps {
  overline: string;
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="relative flex w-full items-end justify-between px-4 sm:px-5 pt-3.5 pb-2"
    >
      <div className="flex flex-col gap-1.5 min-w-0">
        <motion.div variants={fadeInUp} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-[3px] bg-gradient-to-br from-[#d4af37] via-[#b38728] to-[#96771d] shadow-[0_2px_8px_rgba(212,175,55,0.3)] text-white shrink-0">
              <Icon size={12} strokeWidth={2.4} />
            </div>
            <span className="text-[0.6rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#b38728] dark:text-[#d4af37]">
              {overline}
            </span>
          </div>
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-[#d4af37]/40 to-transparent shrink-0"></div>
        </motion.div>
        
        <motion.h2 
          variants={fadeInUp} 
          className="text-[1.3rem] sm:text-[1.5rem] font-bold text-[#0a1128] dark:text-white tracking-tight leading-tight"
        >
          {title}
        </motion.h2>
      </div>

      {rightElement && (
        <motion.div 
          variants={fadeInUp} 
          className="relative z-10 flex shrink-0 items-center justify-end pb-0.5"
        >
          {rightElement}
        </motion.div>
      )}
    </motion.div>
  );
}
