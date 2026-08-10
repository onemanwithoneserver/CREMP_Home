import { Cpu, Lock, MapPin } from "lucide-react";
import { locationIntelligenceData } from "./data";
import { Container } from "../../components/layout";

export default function LocationIntelligence() {
    return (
        <div className="w-full py-2 bg-transparent relative z-10">
            <Container>
                <div className="w-full bg-white dark:bg-[#11224d] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white shrink-0">
                                <Cpu size={16} />
                            </div>
                            <h2 className="text-[1.05rem] font-medium text-gray-800 dark:text-gray-100">{locationIntelligenceData.title}</h2>
                        </div>
                        <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 px-2 py-1 rounded-full text-[0.6rem] font-bold tracking-widest uppercase">
                            COMING SOON
                        </span>
                    </div>

                    <div className="p-4 flex flex-col gap-4">
                        <p className="text-[0.8rem] text-gray-500 dark:text-gray-400 leading-relaxed">
                            {locationIntelligenceData.description}
                        </p>

                        {/* Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {locationIntelligenceData.items.map((item, idx) => (
                                <div key={idx} className="relative rounded-xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/10 p-3 flex flex-col justify-between min-h-[90px] overflow-hidden opacity-70">
                                    <Lock size={12} className="absolute top-2.5 right-2.5 text-gray-300 dark:text-gray-600" />
                                    <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mb-2">
                                        <item.icon size={14} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[0.7rem] font-medium text-gray-700 dark:text-gray-300 truncate pr-4">{item.label}</span>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                            <span className="text-[0.65rem] text-gray-400">{item.status}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 dark:bg-black/20 p-3 px-4 border-t border-gray-100 dark:border-white/5 flex items-center gap-2">
                        <MapPin size={14} className="text-purple-500 shrink-0" />
                        <span className="text-[0.7rem] text-gray-500 dark:text-gray-400 font-medium truncate">{locationIntelligenceData.footer}</span>
                    </div>
                </div>
            </Container>
        </div>
    );
}
