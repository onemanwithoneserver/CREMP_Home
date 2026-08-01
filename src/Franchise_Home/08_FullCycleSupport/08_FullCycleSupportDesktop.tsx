import { useRef, useState } from "react";
import clsx from "clsx";
import { motion, useAnimationFrame } from "framer-motion";
import { fullCycleSupportData } from "./data";
import { SectionHeader } from "../components/SectionHeader";

export default function FullCycleSupportDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    if (paused || !containerRef.current) return;
    const speed = 60;
    x.current -= (speed * delta) / 1000;
    const totalWidth = containerRef.current.scrollWidth / 2;
    if (Math.abs(x.current) >= totalWidth) {
      x.current = 0;
    }
    containerRef.current.style.transform = `translate3d(${x.current}px,0,0)`;
  });

  return (
    <section className="w-full bg-white px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 flex justify-center">
        <SectionHeader
          overline={fullCycleSupportData.sectionLabel}
          title={fullCycleSupportData.title}
          align="center"
        />
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex w-max"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...Array(2)].map((_, keyPrefix) => (
            <div key={keyPrefix} className="flex gap-6 pr-6 shrink-0">
              {fullCycleSupportData.supportItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${keyPrefix}-${idx}`}
                    className="w-[240px] shrink-0 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:border-gray-300"
                  >
                    <div
                      className={clsx(
                        "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full",
                        item.colorClass
                      )}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="mb-2 text-[15px] font-semibold text-[#0a1128]">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-snug text-gray-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent" />
      </div>
    </section>
  );
}