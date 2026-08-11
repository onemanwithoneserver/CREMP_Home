import { motion, type Variants } from "framer-motion";
import { Activity } from "lucide-react";
import { infrastructureData } from "./data";
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
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const rowReveal: Variants = {
  hidden: { opacity: 0, x: -15 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

const getStatusStyle = (status: string) => {
  const s = status.toUpperCase();
  if (
    [
      "INSTALLED",
      "CONNECTED",
      "COMPLIANT",
      "WIRED",
      "WITHIN UNIT",
      "YES",
    ].includes(s)
  )
    return "bg-emerald-50/80 text-emerald-600 border-emerald-100";
  if (["PROVISION"].includes(s))
    return "bg-amber-50/80 text-amber-600 border-amber-100";
  return "bg-sky-50/80 text-sky-600 border-sky-100";
};

export default function Infrastructure() {
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
        className="w-full"
      >
        <SectionHeader
          overline="Systems & Utilities"
          title={infrastructureData.title}
          icon={Activity}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-0 px-4 py-4"
        >
          {infrastructureData.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={rowReveal}
              whileHover={{ x: 3 }}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 group cursor-default transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-[4px] ${item.iconBg} flex items-center justify-center text-[#d4af37] shrink-0 border border-[#d4af37]/20`}
                >
                  <item.icon size={15} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.82rem] font-semibold text-[#0a1128]">
                    {item.label}
                  </span>
                  <span className="text-[0.65rem] text-gray-400 font-medium">
                    {item.sub}
                  </span>
                </div>
              </div>
              <span
                className={`text-[0.58rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[4px] ${getStatusStyle(item.status).replace("border-", "border-transparent ")}`}
              >
                {item.status}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="h-2" />
      </motion.div>
    </motion.div>
  );
}
