import { motion } from "framer-motion";
import { leadershipData } from "./data";
import { SectionHeader } from "../components/SectionHeader";


const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function LeadershipDesktop() {
    return (
        <section className="w-full bg-[#FAFAFA] dark:bg-[#0b162c] px-6 py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                <div className="mb-12">
                    <SectionHeader 
                        overline={leadershipData.sectionLabel}
                        align="center"
                    />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
                >
                    {leadershipData.members.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            className="group relative flex flex-col h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(212,175,55,0.15)] transition-all duration-500 bg-white"
                        >
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                draggable={false}
                            />
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/95 via-[#0a1128]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                            
                            {/* Hover Reveal Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h4 className="text-white font-semibold text-2xl tracking-tight mb-1 group-hover:text-[#d4af37] transition-colors duration-300">
                                    {member.name}
                                </h4>
                                <p className="text-gray-300 text-sm font-semibold tracking-widest uppercase mb-4 opacity-100 transition-opacity duration-300">
                                    {member.role}
                                </p>
                                
                                {/* Hidden bio that reveals on hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <div className="w-8 h-[2px] bg-[#d4af37] mb-4 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
