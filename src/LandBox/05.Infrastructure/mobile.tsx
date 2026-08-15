import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { infrastructureData } from "./data";
import SectionHeader from "../components/SectionHeader";
import {
  fadeInUp,
  staggerContainer,
  rowReveal,
} from "../components/animations";

const getStatusStyle = (status: string) => {
  const s = status.toUpperCase();
  if (
    [
      "INSTALLED",
      "CONNECTED",
      "COMPLIANT",
      "WIRED",
      "TESTED",
      "YES",
      "AVAILABLE",
    ].includes(s)
  )
    return "bg-emerald-50/80 text-emerald-600 border-emerald-100";
  if (["PROVISION"].includes(s))
    return "bg-amber-50/80 text-amber-600 border-amber-100";
  return "bg-sky-50/80 text-sky-600 border-sky-100";
};

export default function Mobile() {
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
        className="w-full bg-white border-b border-gray-100 relative pb-6"
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
          className="flex flex-col gap-2.5 px-5 py-4 mx-0"
        >
          {infrastructureData.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={rowReveal}
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between p-3.5 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.iconBg}`}
                >
                  <item.icon size={15} strokeWidth={2} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.8rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[0.65rem] text-gray-400 font-medium mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
              <span
                className={`text-[0.6rem] font-semibold tracking-[0.1em] px-3 py-1.5 rounded-[4px] shadow-sm uppercase ${getStatusStyle(item.status).replace("border-", "border-transparent ")}`}
              >
                {item.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
