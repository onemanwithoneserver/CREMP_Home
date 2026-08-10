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

const pulseGlow: Variants = {
    animate: {
        scale: [1, 1.08, 1],
        opacity: [0.15, 0.35, 0.15],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
};

const SectionLoader = () => (
    <div className="w-full h-32 animate-pulse bg-gray-50 dark:bg-[#0b1b42] rounded-[4px]" />
);

export default function BuildingBox() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-white dark:bg-[#0b1b42] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
            <motion.div
                variants={pulseGlow}
                animate="animate"
                className="pointer-events-none fixed top-[20%] -right-[15%] w-[400px] h-[400px] rounded-full bg-[#D4AF37]/8 blur-[120px] dark:bg-[#D4AF37]/10 z-0"
            />
            <motion.div
                variants={pulseGlow}
                animate="animate"
                style={{ animationDelay: "4s" }}
                className="pointer-events-none fixed bottom-[30%] -left-[15%] w-[350px] h-[350px] rounded-full bg-[#D4AF37]/6 blur-[120px] dark:bg-[#D4AF37]/8 z-0"
            />

            <div className="relative z-10 flex-1 flex flex-col pb-24">
                <Hero />
                <Suspense fallback={<SectionLoader />}>
                    <CommercialTerms />
                    <SpaceOverview />
                    <FitOut />
                    <Infrastructure />
                    <Media />
                    <LocationIntelligence />
                    <Terms />
                </Suspense>
            </div>
            <Suspense fallback={null}>
                <StickyFooter />
            </Suspense>
        </div>
    );
}
