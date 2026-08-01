import clsx from "clsx";
import { motion } from "framer-motion";
import { Quote, Store, Users, Award, TrendingUp, IndianRupee } from "lucide-react";
import { getTextStyles } from "../utils/theme";
import { founderStoryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const getStatIcon = (label: string) => {
  const lower = (label || "").toLowerCase();
  if (lower.includes("outlet") || lower.includes("store")) return <Store size={22} strokeWidth={2.5} />;
  if (lower.includes("user") || lower.includes("customer") || lower.includes("client")) return <Users size={22} strokeWidth={2.5} />;
  if (lower.includes("award") || lower.includes("win")) return <Award size={22} strokeWidth={2.5} />;
  if (lower.includes("revenue") || lower.includes("sales")) return <IndianRupee size={22} strokeWidth={2.5} />;
  return <TrendingUp size={22} strokeWidth={2.5} />;
};

const getIconBgColor = (idx: number) => {
  const colors = [
    "bg-amber-600", 
    "bg-blue-500", 
    "bg-emerald-500", 
    "bg-pink-500"
  ];
  return colors[idx % colors.length];
};

export default function FounderStoryDesktop() {
  return (
    <section className="w-full px-6 py-16 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-[50rem] h-[50rem] bg-[#d4af37]/5 dark:bg-[#d4af37]/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div
          className="absolute w-[40rem] h-[40rem] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-12">
          <SectionHeader
            overline={founderStoryData.sectionLabel}
            title={founderStoryData.title}
            subtitle={founderStoryData.subtitle}
            align="center"
          />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="lg:col-span-3 relative rounded-[8px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#0a1128] h-full"
          >
            <div className="relative z-10 p-10 flex flex-col gap-6 h-full min-h-[400px]">
              <div className="flex items-start justify-between">
                <Quote
                  size={64}
                  className="text-[#d4af37]/30 -translate-x-2 -translate-y-2 group-hover:text-[#d4af37]/50 transition-colors duration-500"
                />
                
                <div className="flex items-center gap-2">
                  <a
                    href={founderStoryData.founder.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full bg-white/10 hover:bg-red-500/80 border border-white/20 hover:border-red-400 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    title="YouTube"
                  >
                    <YoutubeIcon size={18} />
                  </a>
                  <a
                    href={founderStoryData.founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full bg-white/10 hover:bg-pink-500/80 border border-white/20 hover:border-pink-400 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    title="Instagram"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <a
                    href={founderStoryData.founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full bg-white/10 hover:bg-blue-600/80 border border-white/20 hover:border-blue-400 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>

              <div className="flex-1 flex items-center">
                <p className="text-white text-xl md:text-2xl leading-relaxed tracking-wide font-medium italic">
                  "{founderStoryData.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                <img
                  src={founderStoryData.founder.avatar}
                  alt={founderStoryData.founder.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/60 shadow-lg shrink-0"
                />
                <div>
                  <h4 className="text-white font-bold text-xl tracking-tight">
                    {founderStoryData.founder.name}
                  </h4>
                  <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mt-0.5">
                    {founderStoryData.founder.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-1 flex flex-col gap-6 h-full">
            {founderStoryData.stats.map((stat, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 120,
                  }}
                  key={stat.label}
                  className="flex-1 bg-[#0a1128] border border-white/10 rounded-[8px] p-6 lg:p-8 flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] group hover:-translate-y-1 hover:border-[#d4af37]/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-[#d4af37]/10 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-row items-center justify-between gap-4 w-full">
                    <div className="flex flex-col items-start">
                      <p
                        className={clsx(
                          "text-4xl lg:text-5xl tracking-tight font-bold mb-1",
                          getTextStyles(stat.intent),
                        )}
                      >
                        {stat.value}
                      </p>
                      <p className="text-gray-400 text-sm font-bold uppercase tracking-widest group-hover:text-gray-200 transition-colors duration-300">
                        {stat.label}
                      </p>
                    </div>

                    <div 
                      className={clsx(
                        "w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white shadow-lg shrink-0",
                        getIconBgColor(idx)
                      )}
                    >
                      {getStatIcon(stat.label)}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}