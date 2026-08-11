import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { infrastructureData } from "./data";
import SectionHeader from "../components/SectionHeader";
import { fadeInUp, staggerContainer, rowReveal } from "../components/animations";

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
        className="w-full bg-white border-b border-gray-200/60 relative"
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
          className="flex flex-col gap-3 px-4 py-4"
        >
          {infrastructureData.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={rowReveal}
              whileHover={{ scale: 1.015, y: -1 }}
              className="flex items-center justify-between p-3.5 rounded-[8px] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-9 h-9 rounded-[6px] flex items-center justify-center shrink-0 shadow-sm group-hover:animate-icon-shake origin-center transition-all duration-300 ${item.iconBg}`}
                >
                  <item.icon size={16} strokeWidth={2.2} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.78rem] font-semibold tracking-wide text-gray-700 group-hover:text-[#0a1128] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[0.62rem] text-gray-400 font-medium mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
              <span
                className={`text-[0.62rem] font-semibold tracking-[0.1em] px-3 py-1.5 rounded-[6px] shadow-sm ${getStatusStyle(item.status).replace("border-", "border-transparent ")}`}
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
