import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  overline?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  overline,
  align = "left",
}: SectionHeaderProps) {
  const location = useLocation();
  const isMobile = location.pathname.includes("/mobile/");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-4xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-2`}
    >
      {overline && (
        <div
          className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            {overline}
          </span>
        </div>
      )}

      {title && (
        <>
          {isMobile ? (
            <h2 className="text-2xl font-semibold text-[#0a1128] dark:text-white tracking-tight mb-3 leading-tight">
              {title}
            </h2>
          ) : (
            <h2 className="text-4xl lg:text-[42px] font-semibold text-[#0a1128] dark:text-white tracking-tight mb-3 leading-tight">
              {title}
            </h2>
          )}
        </>
      )}

      {subtitle && (
        <p
          className={`text-sm md:text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed mb-4 ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
