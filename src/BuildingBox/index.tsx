import { Suspense, lazy } from "react";
import { motion, type Variants } from "framer-motion";
import Hero from "./01.Hero";

const CommercialTerms = lazy(() => import("./02.CommercialTerms"));
const SpaceOverview = lazy(() => import("./03.SpaceOverview"));
const FitOut = lazy(() => import("./04.FitOut"));
const Infrastructure = lazy(() => import("./05.Infrastructure"));
const Media = lazy(() => import("./06.Media"));
const LocationIntelligence = lazy(() => import("./07.LocationIntelligence"));
const Terms = lazy(() => import("./08.Terms"));
const StickyFooter = lazy(() => import("./StickyFooter"));

const ambientGlow: Variants = {
  animate: {
    opacity: [0.4, 0.6, 0.4],
    scale: [1, 1.05, 1],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
  },
};

const SectionLoader = () => (
  <div className="w-full h-32 animate-pulse bg-gray-100/60 rounded-[4px]" />
);

export default function BuildingBox() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-[#0a1128] transition-colors duration-300 relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          variants={ambientGlow}
          animate="animate"
          className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#d4af37]/[0.04] blur-[140px]"
        />
        <motion.div
          variants={ambientGlow}
          animate="animate"
          style={{ animationDelay: "5s" }}
          className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#0b1b42]/[0.03] blur-[140px]"
        />
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#0a1128]/[0.02] via-transparent to-transparent" />
      </div>
      <div className="relative z-10 flex-1 flex flex-col pb-24">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <div className="flex flex-col gap-0 px-0 pt-0">
            <CommercialTerms />
            <SpaceOverview />
            <FitOut />
            <Infrastructure />
            <Media />
            <LocationIntelligence />
            <Terms />
          </div>
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <StickyFooter />
      </Suspense>
    </div>
  );
}
