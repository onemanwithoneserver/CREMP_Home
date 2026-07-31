import { useState } from "react";
import clsx from "clsx";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FullCycleSupportMobile() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="w-full bg-background py-8">
            <style>{`
                @keyframes marquee-slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee-slide 20s linear infinite;
                }
                .animate-marquee.paused {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="px-4">
                <SectionHeader 
                    overline={fullCycleSupportData.sectionLabel}
                    title={fullCycleSupportData.title}
                    align="center"
                />
            </div>

            <div className="relative w-full overflow-hidden py-2 mt-4">
                <div 
                    className={clsx("animate-marquee", isPaused && "paused")}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {["first", "second"].map((keyPrefix) => (
                        <div key={keyPrefix} className="flex gap-2 pr-2 px-2">
                            {fullCycleSupportData.supportItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={`${keyPrefix}-${item.title}-${idx}`}
                                        className="w-[180px] shrink-0 bg-white dark:bg-surface border border-border rounded-lg p-4 text-center flex flex-col items-center justify-center transition-all duration-300 shadow-elevation-1"
                                    >
                                        <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3", item.colorClass)}>
                                            <Icon size={16} strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-1.5 whitespace-nowrap">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-snug line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                
                <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}