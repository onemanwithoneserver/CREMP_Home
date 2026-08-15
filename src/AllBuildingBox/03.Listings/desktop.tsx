import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { fadeInUp, staggerContainer, itemReveal } from "../components/animations";
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

        <div className="px-6 mt-4 flex flex-col gap-4">
          {listingsData.listings.map((item) => {
            const Icon = item.icon;
            const { iconBg, leftBar, badge, priceText } = item.colorTheme;
            return (
              <motion.div
                key={item.id}
                variants={itemReveal}
                whileHover={{ y: -2 }}
                className="flex flex-col bg-white rounded-[4px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-gray-200/80 p-5 pl-6 relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(11,27,66,0.12)] hover:border-slate-300 cursor-pointer group"
              >
                {/* Vertical Left Accent Stripe on Hover */}
                <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${leftBar} opacity-0 group-hover:opacity-100 transition-all duration-300`} />

                {/* Top Row: Icon + Type + Badge */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-[4px] border ${iconBg} transition-transform duration-300 flex items-center justify-center shrink-0`}>
                      <Icon size={17} strokeWidth={2.2} className="text-white" />
                    </div>
                    <span className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-[2px] border text-[0.6rem] font-bold tracking-wider uppercase ${badge}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#0a1128] font-bold text-[1.05rem] mb-3 group-hover:text-[#0b1b42] transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Area & Price */}
                <div className="flex justify-between items-center mb-4 p-2.5 rounded-[4px] bg-gray-50/70 border border-gray-100 group-hover:border-gray-200 transition-colors">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Maximize2 size={13} className="text-gray-400" />
                    <span className="text-[0.75rem] font-semibold">
                      {item.area}
                    </span>
                  </div>
                  <span className={`text-[1.1rem] font-bold ${priceText} group-hover:scale-105 origin-right transition-transform duration-300`}>
                    {item.price}
                  </span>
                </div>

                {/* Footer: Availability status + View Listing button pill expansion */}
                <div className="border-t border-gray-100/80 pt-3 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-2 h-2 rounded-full ${item.statusColor} shadow-[0_0_6px_rgba(16,185,129,0.4)]`}
                    />
                    <span className="text-[0.72rem] text-gray-500 font-semibold">
                      {item.status}
                    </span>
                  </div>

                  <button className="flex items-center gap-1.5 text-[0.75rem] font-bold text-[#0b1b42] px-2.5 py-1 rounded-[3px] transition-all duration-300 group-hover:bg-[#0b1b42] group-hover:text-white group-hover:shadow-sm">
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
