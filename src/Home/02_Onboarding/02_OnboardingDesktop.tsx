import { useRef, useState, useEffect, useMemo} from "react";
import { motion, useScroll, useTransform} from "framer-motion";
import { Rocket, TrendingUp} from "lucide-react";
import { vendorBenefits} from "./data";
import { stakeholdersData} from "../03_StakeHolders/data";
import bgImage from "./bg.png";
import crempLogo from "../../Logo/CREMP_Light.png";

export default function Desktop() {
 const allStakeholders = useMemo(() => {
 const hasInvestors = stakeholdersData.some(
 (s) =>
 s.id.toLowerCase().includes("investor") ||
 s.label.toLowerCase().includes("investor"),
 );
 if (hasInvestors) return stakeholdersData;

 return [
 ...stakeholdersData,
 { id: "investors", label: "Investors\n& VC", icon: TrendingUp},
];
}, []);

 const [activeTab, setActiveTab] = useState(allStakeholders[0].id);
 const sectionRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const interval = setInterval(() => {
 setActiveTab((current) => {
 const currentIndex = allStakeholders.findIndex((s) => s.id === current);
 const nextIndex = (currentIndex + 1) % allStakeholders.length;
 return allStakeholders[nextIndex].id;
});
}, 3000);
 return () => clearInterval(interval);
}, [allStakeholders]);

 const { scrollYProgress} = useScroll({
 target: sectionRef,
 offset: ["start end", "end start"],
});

 const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
 const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

 const springAnim = { type: "spring"as const, stiffness: 100, damping: 20};

 const floatingParticles = Array.from({ length: 5}, (_, i) => ({
 id: i,
 x: 20 + Math.random() * 60,
 y: 15 + Math.random() * 70,
 size: 2 + Math.random() * 3,
 delay: Math.random() * 4,
 duration: 4 + Math.random() * 4,
}));

 return (
 <div
 ref={sectionRef}
 className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-50 px-4 pb-8 pt-28 text-[#0a1128] dark:bg-[#0a1128] dark:text-white lg:pt-28 xl:pt-32"
 >
 <motion.div
 initial={{ opacity: 0}}
 animate={{ opacity: 0.8}}
 transition={{ duration: 2, ease: "easeOut"}}
 style={{ y: bgY, scale: bgScale}}
 className="pointer-events-none absolute right-0 top-0 z-0 h-full w-full opacity-20 mix-blend-multiply dark:opacity-40 dark:mix-blend-screen lg:w-3/5"
 aria-hidden="true"
 >
 <div
 className="h-full w-full bg-cover bg-right"
 style={{
 backgroundImage: `url(${bgImage})`,
 maskImage:
 "linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
 WebkitMaskImage:
 "linear-gradient(to right, transparent 0%, black 40%, black 100%), linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
 WebkitMaskComposite: "source-in",
 maskComposite: "intersect",
}}
 />
 </motion.div>

 <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-transparent dark:from-[#0a1128] dark:via-[#0a1128]/95 lg:via-gray-50/80 dark:lg:via-[#0a1128]/80"/>

 {floatingParticles.map((p) => (
 <motion.div
 key={p.id}
 className="pointer-events-none absolute z-0 hidden rounded-full bg-[#D4AF37]/30 dark:block"
 style={{
 left: `${p.x}%`,
 top: `${p.y}%`,
 width: p.size,
 height: p.size,
}}
 animate={{ y: [-10, 10, -10], opacity: [0, 0.6, 0]}}
 transition={{
 duration: p.duration,
 repeat: Infinity,
 delay: p.delay,
 ease: "easeInOut",
}}
 />
 ))}

 <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 lg:gap-10">
 <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
 <div className="z-10 flex w-full flex-col lg:w-[50%] xl:w-[55%]">
 <motion.div
 initial={{ opacity: 0, y: 15, scale: 0.95}}
 animate={{ opacity: 1, y: 0, scale: 1}}
 transition={springAnim}
 className="mb-4 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-3 py-1.5 text-xs shadow-[0_0_15px_rgba(178,127,28,0.1)] backdrop-blur-md sm:gap-3 sm:px-4 sm:text-sm dark:border-[#D4AF37]/20 dark:from-[#D4AF37]/10 dark:shadow-[0_0_15px_rgba(246,178,59,0.1)]"
 >
 <div className="flex items-center gap-1.5 font-bold text-[#0a1128] sm:gap-2 dark:text-white">
 <Rocket className="h-3.5 w-3.5 text-[#D4AF37] sm:h-4 sm:w-4 dark:text-[#D4AF37]"/>
 <span className="uppercase tracking-wide">
 Vendor Onboarding Open
 </span>
 </div>
 <div className="hidden h-3.5 w-[1px] bg-gray-300 sm:block dark:bg-gray-700"></div>
 <div className="flex items-center gap-1.5 font-semibold text-[#D4AF37] sm:gap-2 dark:text-[#D4AF37]">
 <span className="rounded bg-[#D4AF37]/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] sm:px-2 sm:text-xs dark:bg-[#D4AF37]/20 dark:text-[#D4AF37]">
 Phase 1
 </span>
 <span className="uppercase tracking-wide">
 Launching in Telangana
 </span>
 </div>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, y: 20}}
 animate={{ opacity: 1, y: 0}}
 transition={{ ...springAnim, delay: 0.1}}
 className="mb-4 text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0a1128] dark:text-white lg:text-5xl xl:text-6xl"
 >
 India's 1st Integrated <br />
 <motion.span
 className="bg-gradient-to-r from-[#d97b29] to-[#D4AF37] bg-clip-text text-transparent"
 style={{ backgroundSize: "200% auto"}}
 animate={{
 backgroundPosition: ["0% center", "100% center", "0% center"],
}}
 transition={{ duration: 6, repeat: Infinity, ease: "linear"}}
 >
 Commercial Real Estate
 </motion.span>{""}
 <br />
 Marketplace
 </motion.h1>

 <motion.div
 initial={{ opacity: 0, y: 15}}
 animate={{ opacity: 1, y: 0}}
 transition={{ ...springAnim, delay: 0.2}}
 className="flex flex-wrap items-center gap-2 text-base font-bold text-[#0a1128]/80 dark:text-white/80"
 >
 <span>Commercial Properties</span>
 <span className="text-[#D4AF37]">•</span>
 <span>Franchise Expansion</span>
 <span className="text-[#D4AF37]">•</span>
 <span>Retail Business</span>
 </motion.div>

 <motion.p
 initial={{ opacity: 0, y: 15}}
 animate={{ opacity: 1, y: 0}}
 transition={{ ...springAnim, delay: 0.3}}
 className="mt-4 max-w-[95%] text-base leading-relaxed text-gray-600 dark:text-gray-400 xl:text-lg"
 >
 CREMP redefines how commercial opportunities are discovered and
 connected. From commercial properties and retail spaces to
 franchise expansion and business opportunities, CREMP brings
 together multiple commercial ecosystems into one integrated
 marketplace—helping property owners, brokers, franchisors,
 business owners, investors and tenants connect, collaborate and
 grow.
 </motion.p>
 </div>

 <div className="flex w-full items-center justify-center lg:w-[45%] xl:w-[40%]">
 <div className="group/orbit relative mx-auto hidden h-[320px] w-[320px] shrink-0 items-center justify-center lg:flex lg:h-[360px] lg:w-[360px] xl:h-[420px] xl:w-[420px]">
 <div className="pointer-events-none absolute inset-0 rounded-full bg-[#D4AF37]/5 blur-[60px] transition-opacity duration-700 group-hover/orbit:opacity-100"/>

 <motion.div
 initial={{ scale: 0.8, opacity: 0}}
 whileInView={{ scale: 1, opacity: 1, rotate: 360}}
 transition={{
 scale: { duration: 1},
 opacity: { duration: 1},
 rotate: { repeat: Infinity, duration: 60, ease: "linear"},
}}
 viewport={{ once: true}}
 className="absolute inset-0 rounded-full border border-dashed border-gray-800/80"
 />

 <motion.div
 initial={{ scale: 0.8, opacity: 0}}
 whileInView={{ scale: 1, opacity: 1}}
 transition={{ duration: 1, delay: 0.2}}
 viewport={{ once: true}}
 className="absolute inset-[9%] rounded-full border border-gray-700/30"
 />

 <motion.div
 initial={{ scale: 0.8, opacity: 0}}
 whileInView={{ scale: 1, opacity: 1, rotate: -360}}
 transition={{
 scale: { duration: 1, delay: 0.4},
 opacity: { duration: 1, delay: 0.4},
 rotate: { repeat: Infinity, duration: 30, ease: "linear"},
}}
 viewport={{ once: true}}
 className="absolute inset-[18%] rounded-full border border-[#121c33]"
 >
 <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"/>
 <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"/>
 <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"/>
 <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_15px_#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"/>
 </motion.div>

 <motion.div
 initial={{ scale: 0}}
 whileInView={{ scale: 1}}
 transition={{ type: "spring", duration: 1, delay: 0.6}}
 viewport={{ once: true}}
 className="relative z-10 flex h-[38%] w-[38%] flex-col items-center justify-center rounded-full border border-gray-800 dark:border-white bg-[#0a1128] dark:bg-white shadow-[0_0_20px_rgba(246,178,59,0.1)] transition-shadow duration-700 before:absolute before:inset-[-10px] before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-[#0a0f25] dark:before:from-white/50 before:to-transparent group-hover/orbit:shadow-[0_0_30px_rgba(246,178,59,0.15)]"
 >
 <div className="absolute inset-0 animate-ping rounded-full bg-[#D4AF37]/10 opacity-20 duration-[3000ms]"/>
 <img
 src={crempLogo}
 alt="CREMP Logo"
 className="z-10 h-[55%] w-[55%] object-contain opacity-100 drop-shadow-[0_0_5px_rgba(246,178,59,0.2)]"
 />
 </motion.div>

 <motion.div
 animate={{ rotate: 360}}
 transition={{ repeat: Infinity, duration: 60, ease: "linear"}}
 className="absolute inset-0 z-20"
 >
 {allStakeholders.map((stakeholder, index) => {
 const isActive = activeTab === stakeholder.id;

 const angle =
 (index / allStakeholders.length) * 2 * Math.PI -
 Math.PI / 2;
 const radius = 45;
 const x = 50 + radius * Math.cos(angle);
 const y = 50 + radius * Math.sin(angle);

 return (
 <motion.div
 key={stakeholder.id}
 initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%"}}
 whileInView={{
 opacity: 1,
 scale: 1,
 x: "-50%",
 y: "-50%",
}}
 transition={{
 type: "spring",
 duration: 0.6,
 delay: 0.8 + index * 0.1,
}}
 viewport={{ once: true}}
 className="absolute flex flex-col items-center justify-center"
 style={{ left: `${x}%`, top: `${y}%`}}
 >
 <motion.div
 animate={{ rotate: -360}}
 transition={{
 repeat: Infinity,
 duration: 60,
 ease: "linear",
}}
 className="flex flex-col items-center justify-center"
 >
 <div className="relative">
 {isActive && (
 <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] opacity-30 duration-1000 dark:bg-gradient-to-r from-[#FEF08A] via-[#FBBF24] to-[#F59E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] active:scale-95"/>
 )}
 <motion.div
 className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white transition-all duration-500 dark:bg-[#121c33] lg:h-14 lg:w-14 xl:h-16 xl:w-16 ${
 isActive
 ? "scale-110 border-[#D4AF37] text-[#D4AF37] shadow-[0_0_30px_rgba(178,127,28,0.2)] dark:border-[#D4AF37] dark:text-[#D4AF37] dark:shadow-[0_0_30px_rgba(246,178,59,0.5)]"
 : "border-gray-200 text-gray-400 hover:border-[#D4AF37]/50 hover:text-[#0a1128] dark:border-gray-700 dark:hover:border-[#D4AF37]/50 dark:hover:text-white"
}`}
 whileHover={{ scale: 1.05}}
 >
 <stakeholder.icon
 className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7"
 strokeWidth={1.8}
 />
 </motion.div>
 </div>
 <span
 className={`mt-2 text-center text-[10px] font-bold transition-all duration-500 lg:text-[11px] xl:mt-3 xl:text-sm ${isActive ? "text-[#0a1128] drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] dark:text-white dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]": "text-gray-500"}`}
 style={{ whiteSpace: "pre-line"}}
 >
 {stakeholder.label}
 </span>
 </motion.div>
 </motion.div>
 );
})}
 </motion.div>
 </div>
 </div>
 </div>

 <div className="mt-8 flex w-full flex-col gap-6 lg:mt-12">
 <motion.div
 initial={{ opacity: 0, y: 20}}
 whileInView={{ opacity: 1, y: 0}}
 transition={{ ...springAnim, delay: 0.6}}
 viewport={{ once: true}}
 className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-800 bg-[#121c33] px-6 py-4 shadow-lg lg:flex-row"
 >
 <div className="flex-shrink-0 text-sm font-bold uppercase tracking-wider text-gray-200">
 Founding Vendor Benefits
 </div>

 <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
 {vendorBenefits.map((benefit) => (
 <motion.div
 key={benefit.title}
 whileHover={{ y: -2}}
 className="flex items-center gap-2.5"
 >
 <div className="rounded-full border border-gray-700 bg-[#121c33] p-1.5 text-[#D4AF37] shadow-sm">
 <benefit.icon className="h-4 w-4"/>
 </div>
 <span className="text-sm font-medium text-gray-300">
 {benefit.title}
 </span>
 </motion.div>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 );
}
