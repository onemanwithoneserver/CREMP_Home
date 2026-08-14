import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./components/animations";

export default function AvailableOpportunities() {
  const metrics = [
    { label: "LEASE", value: "42", sub: "Units available" },
    { label: "SALE", value: "18", sub: "Units listed" },
    { label: "PRE-LEASED", value: "6", sub: "Active tenants" },
    { label: "FRACTIONAL", value: "3", sub: "Opportunities" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className="w-full relative z-10 px-4 py-5 bg-white border-b border-gray-100"
    >
      <motion.div variants={fadeInUp} className="mb-4">
        <span className="inline-block px-3 py-1 rounded-[4px] border border-[#d4af37]/40 text-[#d4af37] text-[0.65rem] font-semibold tracking-wider bg-[#d4af37]/5">
          AVAILABLE OPPORTUNITIES
        </span>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
        {metrics.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col p-4 rounded-[8px] bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
          >
            <span className="text-[0.6rem] font-semibold text-gray-500 tracking-wider mb-1">
              {item.label}
            </span>
            <span className="text-[1.8rem] font-semibold text-[#0a1128] leading-none mb-1">
              {item.value}
            </span>
            <span className="text-[0.65rem] text-gray-500">
              {item.sub}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
