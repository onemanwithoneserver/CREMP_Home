import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { fadeInUp, staggerContainer, itemReveal } from "../components/animations";
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
                whileHover={{ y: -1 }}
                className="flex flex-col bg-white rounded-[4px] shadow-sm border border-gray-200/80 p-4 pl-4.5 relative overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer group"
              >
                {/* Vertical Left Accent Stripe */}
                <div className={`absolute top-0 bottom-0 left-0 w-1 ${leftBar} opacity-0 group-hover:opacity-100 transition-all duration-300`} />

                {/* Top Row */}
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-[4px] border ${iconBg} flex items-center justify-center shrink-0`}>
                      <Icon size={15} strokeWidth={2.2} className="text-white" />
                    </div>
                    <span className="text-[0.62rem] font-bold text-gray-500 uppercase tracking-wider truncate">
                      {item.type}
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-[2px] border text-[0.55rem] font-bold tracking-wider uppercase ${badge}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#0a1128] font-bold text-[0.98rem] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Area & Price */}
                <div className="flex justify-between items-center mb-3 p-2 rounded-[4px] bg-gray-50/70 border border-gray-100">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Maximize2 size={12} className="text-gray-400" />
                    <span className="text-[0.7rem] font-semibold">
                      {item.area}
                    </span>
                  </div>
                  <span className={`text-[1.05rem] font-bold ${priceText}`}>
                    {item.price}
                  </span>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100/80 pt-2.5 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`}
                    />
                    <span className="text-[0.68rem] text-gray-500 font-semibold">
                      {item.status}
                    </span>
                  </div>

                  <button className="flex items-center gap-1 text-[0.72rem] font-bold text-[#0b1b42] px-2 py-0.5 rounded-[3px] transition-all duration-300 group-hover:bg-[#0b1b42] group-hover:text-white">
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
