import { motion } from "framer-motion";
import { useRef } from "react";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
        opacity: 1, 
        scale: 1, 
        transition: { type: "spring" as const, stiffness: 200, damping: 20 } 
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function LeadershipDesktop() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = 320; 
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            scroll('right');
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scroll('left');
        }
    };

    return (
        <section className="w-full bg-white dark:bg-[#0b162c] px-6 py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                <SectionHeader 
                    overline={leadershipData.sectionLabel}
                    align="center"
                />

                <div className="w-full relative mt-4 group/carousel">
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-[#0a1128] border border-gray-100 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-colors duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-[#0a1128] border border-gray-100 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-colors duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <motion.div
                        ref={scrollContainerRef}
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-8 lg:gap-12 pb-12 pt-4 px-4 hide-scrollbar outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-8 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b162c] rounded-3xl"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {leadershipData.members.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={itemVariants}
                                className="group relative flex flex-col items-center cursor-pointer shrink-0 w-[260px] snap-center"
                            >
                                <div className="relative w-48 h-48 mb-6">
                                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#d4af37]/40 transition-colors duration-500 scale-[1.08]" />
                                    <div className="w-full h-full rounded-full overflow-hidden relative z-10 shadow-lg group-hover:shadow-[0_20px_40px_rgb(212,175,55,0.2)] transition-shadow duration-500 bg-gray-100">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-full h-full object-cover filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                            draggable={false}
                                        />
                                        <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                                    </div>
                                </div>

                                <div className="text-center flex flex-col items-center">
                                    <h4 className="text-[#0a1128] dark:text-white font-semibold text-xl tracking-tight mb-1 group-hover:text-[#d4af37] transition-colors duration-300">
                                        {member.name}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-[13px] font-semibold tracking-wider uppercase">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
