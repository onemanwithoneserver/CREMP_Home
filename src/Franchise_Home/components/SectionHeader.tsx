import { motion } from "framer-motion";

interface SectionHeaderProps {
    title?: string;
    subtitle?: string;
    overline?: string;
    align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, overline, align = "left" }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-2 mt-6 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
        >
            {overline && (
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#bf953f] mb-3 block">
                    {overline}
                </span>
            )}
            
            {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {title}
                </h2>
            )}
            
            {(title || overline) && (
                <div className={`w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full mb-6 ${align === "center" ? "mx-auto" : ""}`}></div>
            )}
            
        </motion.div>
    );
}
