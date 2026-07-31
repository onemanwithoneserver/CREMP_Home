import { useState } from "react";
import clsx from "clsx";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FullCycleSupportMobile() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-6 overflow-hidden">
            <style>{`
                @keyframes marquee-slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee-slide 15s linear infinite;
                }
                .animate-marquee.paused {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="px-4 mb-3">
                <SectionHeader 
                    overline={fullCycleSupportData.sectionLabel}
                    title={fullCycleSupportData.title}
                    align="center"
                />
            </div>

            <div className="relative w-full py-2">
                <div 
                    className={clsx("animate-marquee", isPaused && "paused")}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {[0, 1].map((keyPrefix) => (
                        <div key={keyPrefix} className="flex gap-3 pr-3">
                            {fullCycleSupportData.supportItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={`${keyPrefix}-${item.title}-${idx}`}
                                        className="w-[150px] shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 rounded-2xl p-4 text-center flex flex-col items-center justify-center transition-transform active:scale-[0.98] shadow-sm"
                                    >
                                        <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2.5 shadow-sm", item.colorClass)}>
                                            <Icon size={18} strokeWidth={2.5} />
                                        </div>
                                        <h4 className="text-gray-900 dark:text-white font-extrabold text-[13px] mb-1 whitespace-nowrap tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-[11px] font-medium leading-snug line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}