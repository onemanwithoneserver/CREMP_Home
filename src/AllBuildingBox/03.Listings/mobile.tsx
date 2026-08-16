import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  itemReveal,
} from "../components/animations";
import SectionHeader from "../components/SectionHeader";
import { listingsData } from "./data";

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
          overline={listingsData.subtitle}
          title={listingsData.title}
          icon={listingsData.headerIcon}
        />

        <div className="px-4 mt-4 flex flex-col gap-3.5">
          {listingsData.listings.map((item) => {
            const Icon = item.icon;
            const { iconBg, leftBar, badge, priceText } = item.colorTheme;
            return (
              <motion.div
                key={item.id}
                variants={itemReveal}
                className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-100 p-3 pl-3.5 relative overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer group"
              >
                <div
                  className={`absolute top-0 bottom-0 left-0 w-1 ${leftBar} transition-all duration-300`}
                />

                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-[4px] ${iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon
                        size={14}
                        strokeWidth={2}
                        className="text-white"
                      />
                    </div>
                    <span className="text-[0.62rem] font-semibold text-gray-500 uppercase tracking-widest truncate">
                      {item.type}
                    </span>
                  </div>
                  <span
                    className={`px-1.5 py-0.5 rounded-[3px] border text-[0.55rem] font-semibold tracking-wider uppercase ${badge}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-[#17274c] font-semibold text-[0.98rem] mt-1.5 mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <div className="flex justify-between items-center mb-3 p-2 rounded-md bg-[#fdfdfd] border border-gray-50 transition-colors">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Maximize2 size={12} className="text-gray-400" />
                    <span className="text-[0.7rem] font-semibold">
                      {item.area}
                    </span>
                  </div>
                  <span className={`text-[1.05rem] font-semibold ${priceText}`}>
                    {item.price}
                  </span>
                </div>

                <div className="border-t border-gray-100/80 pt-2.5 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`}
                    />
                    <span className="text-[0.68rem] text-gray-500 font-semibold">
                      {item.status}
                    </span>
                  </div>

                  <button className="flex items-center gap-1 text-[0.7rem] font-semibold bg-white text-[#17274c] group-hover:bg-[#17274c] group-hover:text-white px-2.5 py-1 rounded-[3px] transition-all duration-300">
                    <span>View Listing</span>
                    <ArrowRight
                      size={12}
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
