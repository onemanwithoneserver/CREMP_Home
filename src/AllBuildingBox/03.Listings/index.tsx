import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../components/animations";
import SectionHeader from "../components/SectionHeader";
import { listingsData } from "./data";

export default function Listings() {
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
        className="w-full bg-slate-50 border-b border-gray-200/60 relative pb-6"
      >
        <SectionHeader
          overline="Listings"
          title={listingsData.title}
          icon={listingsData.headerIcon}
        />

        <div className="px-4 mt-5 flex flex-col gap-4">
          {listingsData.listings.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -2 }}
              className="flex flex-col bg-white rounded-[8px] shadow-sm border border-gray-200 p-4 relative overflow-hidden transition-all hover:shadow-md cursor-pointer group"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 border-t-2 ${item.accent} opacity-80`} />

              <div className="flex justify-between items-center mb-2 mt-1">
                <span className="text-[0.65rem] font-semibold text-gray-500">
                  {item.type}
                </span>
                <span className="px-2 py-0.5 rounded-full border border-teal-500/40 text-teal-600 text-[0.6rem] font-semibold tracking-wider bg-teal-50">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-[#0a1128] font-semibold text-[1.05rem] mb-3 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>

              <div className="flex justify-between items-center mb-4">
                <span className="text-[0.75rem] text-gray-500 font-medium">
                  {item.area}
                </span>
                <span className="text-[1.1rem] font-semibold text-[#0a1128]">
                  {item.price}
                </span>
              </div>

              <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`} />
                  <span className="text-[0.7rem] text-gray-500 font-medium">
                    {item.status}
                  </span>
                </div>
                
                <button className="flex items-center gap-1 text-[0.75rem] font-semibold text-[#d4af37]">
                  View Listing
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
