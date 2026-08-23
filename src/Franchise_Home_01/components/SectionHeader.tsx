import { motion, type Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};
interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  overline?: string;
  align?: "left" | "center";
}
export function SectionHeader({
  title,
  overline,
  align = "left",
}: SectionHeaderProps) {
  const location = useLocation();
  const isMobile = location.pathname.includes("/mobile/");
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-50px" }}
      className={`w-full max-w-4xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-2`}
    >
      {overline && (
        <motion.div
          variants={fadeInUp}
          className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="flex w-fit items-center gap-2 rounded-[2px] border border-[#D4AF37]/20 bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] shadow-sm backdrop-blur-xl dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/5 dark:text-[#D4AF37]">
            {overline}
          </span>
        </motion.div>
      )}
      {title && (
        <motion.h2
          variants={fadeInUp}
          className={
            isMobile
              ? "text-2xl font-semibold text-[#0a1128] dark:text-white tracking-tight mb-3 leading-tight"
              : "text-4xl lg:text-[42px] font-semibold text-[#0a1128] dark:text-white tracking-tight mb-3 leading-tight"
          }
        >
          {title}
        </motion.h2>
      )}
    </motion.div>
  );
}
