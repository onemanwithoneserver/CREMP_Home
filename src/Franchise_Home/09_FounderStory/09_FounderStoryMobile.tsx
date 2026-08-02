import clsx from "clsx";
import { motion, type Variants } from "framer-motion";
import { Quote, Store, Users, Award, TrendingUp, IndianRupee } from "lucide-react";
import { getTextStyles } from "../utils/theme";
import { founderStoryData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

const pulseGlow: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const getStatIcon = (label: string, size = 18) => {
  const lower = (label || "").toLowerCase();
  if (lower.includes("outlet") || lower.includes("store")) return <Store size={size} strokeWidth={2.5} />;
  if (lower.includes("user") || lower.includes("customer") || lower.includes("client")) return <Users size={size} strokeWidth={2.5} />;
  if (lower.includes("award") || lower.includes("win")) return <Award size={size} strokeWidth={2.5} />;
  if (lower.includes("revenue") || lower.includes("sales")) return <IndianRupee size={size} strokeWidth={2.5} />;
  return <TrendingUp size={size} strokeWidth={2.5} />;
};

const getIconBgColor = (idx: number) => {
  const colors = [
    "bg-[#d4af37]", 
    "bg-blue-500", 
    "bg-emerald-500", 
    "bg-pink-500"
  ];
  return colors[idx % colors.length];
};

export default function FounderStoryMobile() {
  return (
    <section className="w-full px-4 py-16 relative overflow-hidden rounded-[8px] dark:bg-[#050b14] bg-white">
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute -left-[10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/15"
      />
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[250px] w-[250px] rounded-full bg-[#D4AF37]/10 blur-[100px] dark:bg-[#D4AF37]/10"
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="mb-8 w-full">
          <SectionHeader
            overline={founderStoryData.sectionLabel}
            title={founderStoryData.title}
            subtitle={founderStoryData.subtitle}
            align="center"
          />
        </div>

        <div className="w-full flex flex-col gap-4 dark">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="relative rounded-[8px] overflow-hidden group shadow-lg w-full"
          >
            <div className="absolute inset-0 bg-[#0a1128] border border-white/5" />

            <div className="relative z-10 p-6 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <Quote
                  size={40}
                  className="text-[#d4af37]/30 -translate-x-1 -translate-y-1"
                />
                
                <div className="flex items-center gap-2">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={founderStoryData.founder.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-red-500/80 text-white transition-all duration-300"
                    title="YouTube"
                  >
                    <YoutubeIcon size={15} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={founderStoryData.founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-pink-500/80 text-white transition-all duration-300"
                    title="Instagram"
                  >
                    <InstagramIcon size={15} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={founderStoryData.founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-blue-600/80 text-white transition-all duration-300"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={15} />
                  </motion.a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-gray-900 dark:text-white text-[15px] leading-relaxed tracking-wide font-medium italic">
                  "{founderStoryData.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={founderStoryData.founder.avatar}
                    alt={founderStoryData.founder.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#d4af37]/60 shadow-md shrink-0"
                  />
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">
                      {founderStoryData.founder.name}
                    </h4>
                    <p className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {founderStoryData.founder.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3 w-full">
            {founderStoryData.stats.map((stat, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  key={stat.label}
                  className="bg-[#0a1128] border border-white/5 rounded-[8px] p-4 flex flex-row items-center justify-between shadow-sm relative overflow-hidden hover:border-white/10 hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/5 rounded-full blur-xl" />
                  
                  <div className="flex flex-col items-start z-10">
                    <p
                      className={clsx(
                        "text-2xl sm:text-3xl tracking-tight font-bold mb-1",
                        getTextStyles(stat.intent),
                      )}
                    >
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight">
                      {stat.label}
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md shrink-0 z-10",
                      getIconBgColor(idx)
                    )}
                  >
                    {getStatIcon(stat.label)}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}