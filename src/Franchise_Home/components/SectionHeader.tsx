import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface SectionHeaderProps {
    title?: string;
    subtitle?: string;
    overline?: string;
    align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, overline, align = "left" }: SectionHeaderProps) {
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
                <div className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                        {overline}
                    </span>
                </div>
            )}
            
            {title && (
                <>
                    {/* Mobile Title */}
                    {isMobile ? (
                        <h2 className="text-2xl font-black text-[#0a1128] tracking-tight mb-4 leading-tight">
                            {title}
                        </h2>
                    ) : (
                        <h2 className="text-4xl lg:text-[42px] font-black text-[#0a1128] tracking-tight mb-4 leading-tight">
                            {title}
                        </h2>
                    )}
                </>
            )}
            
            {subtitle && (
                <p className={`text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
