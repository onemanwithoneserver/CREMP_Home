import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sofa, ChevronDown, CheckCircle2 } from "lucide-react";
import { fitOutData } from "./data";
import SectionHeader from "../components/SectionHeader";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, x: -10, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

export default function FitOut() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="w-full relative z-10"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full bg-white overflow-hidden border-b border-gray-200/60"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-full group block"
        >
          <SectionHeader
            overline={fitOutData.subtitle}
            title={fitOutData.title}
            icon={Sofa}
            rightElement={
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-8 h-8 rounded-[4px] bg-white/5 border border-white/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.1)] backdrop-blur-md group-hover:border-[#d4af37]/50 transition-colors"
              >
                <ChevronDown size={16} className="text-white" />
              </motion.div>
            }
          />
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-3 flex flex-col gap-3 border-t border-gray-100/80 mx-0">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2 pt-5"
                >
                  {fitOutData.included.map((item, idx) => (
                    <motion.span
                      key={idx}
                      variants={itemReveal}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[0.68rem] font-semibold rounded-full bg-emerald-50/80 text-emerald-600 border border-emerald-100 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-emerald-50"
                    >
                      <CheckCircle2 size={12} />
                      {item}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 gap-y-2 gap-x-3 pb-1"
                >
                  {fitOutData.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemReveal}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2.5 text-gray-600 group cursor-default py-2 px-2 rounded-[4px] hover:bg-[#d4af37]/[0.03] transition-all duration-300"
                    >
                      <div className="w-7 h-7 flex items-center justify-center shrink-0 transition-all duration-300">
                        <item.icon
                          size={15}
                          className="text-gray-400 group-hover:text-[#d4af37] transition-colors duration-300"
                        />
                      </div>
                      <span className="text-[0.78rem] font-medium truncate">
                        {item.label}
                      </span>
                      {item.active && (
                        <CheckCircle2
                          size={13}
                          className="text-emerald-500 shrink-0 ml-auto"
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
