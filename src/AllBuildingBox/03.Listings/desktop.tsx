import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  itemReveal,
} from "../components/animations";
import SectionHeader from "../components/SectionHeader";
import { listingsData } from "./data";
export default function Desktop() {
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
        className="w-full bg-white border-b border-gray-100 relative pb-8"
      >
        <SectionHeader
          overline={listingsData.subtitle}
          title={listingsData.title}
          icon={listingsData.headerIcon}
        />
        <div className="px-[var(--panel-px,1rem)] mt-4 flex flex-col gap-4">
          {listingsData.listings.map((item) => {
            const Icon = item.icon;
            const { iconBg, leftBar, badge, priceText } = item.colorTheme;
            return (
              <motion.div
                key={item.id}
                variants={itemReveal}
                className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-100 p-4 pl-5 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-200 cursor-pointer group"
              >
                <div
                  className={`absolute top-0 bottom-0 left-0 w-1 ${leftBar} transition-all duration-300`}
                />
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-[5px] ${iconBg} transition-transform duration-300 flex items-center justify-center shrink-0`}
                    >
                      <Icon size={16} strokeWidth={2} className="text-white" />
                    </div>
                    <span className="text-[0.68rem] font-bold text-gray-500 uppercase tracking-widest">
                      {item.type}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-[4px] border text-[0.62rem] font-bold tracking-wider uppercase ${badge}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-[#17274c] font-bold text-[1.1rem] mt-2 mb-3 group-hover:text-[#0b1b42] transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center mb-4 p-2.5 rounded-md bg-[#fdfdfd] border border-gray-50 transition-colors">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Maximize2 size={13} className="text-gray-400" />
                    <span className="text-[0.75rem] font-semibold">
                      {item.area}
                    </span>
                  </div>
                  <span
                    className={`text-[1.1rem] font-bold ${priceText} group-hover:scale-105 origin-right transition-transform duration-300`}
                  >
                    {item.price}
                  </span>
                </div>
                <div className="border-t border-gray-100/80 pt-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${item.statusColor} shadow-[0_0_6px_rgba(16,185,129,0.4)]`}
                    />
                    <span className="text-[0.75rem] text-gray-500 font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <button className="flex items-center gap-1.5 text-[0.75rem] font-bold bg-white text-[#17274c] group-hover:bg-[#17274c] group-hover:text-white px-3 py-1.5 rounded-[4px] transition-all duration-300">
                    <span>View Listing</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
