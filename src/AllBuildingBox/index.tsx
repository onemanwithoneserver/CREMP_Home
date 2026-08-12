import { Suspense, lazy } from "react";
import Hero from "./01.Hero";

const CommercialTerms = lazy(() => import("./02.CommercialTerms"));
const SpaceOverview = lazy(() => import("./03.SpaceOverview"));
const FitOut = lazy(() => import("./04.FitOut"));
const Infrastructure = lazy(() => import("./05.Infrastructure"));
const Media = lazy(() => import("./06.Media"));
const LocationIntelligence = lazy(() => import("./07.LocationIntelligence"));
const Terms = lazy(() => import("./08.Terms"));
const StickyFooter = lazy(() => import("./StickyFooter"));

const SectionLoader = () => (
    <div className="w-full h-32 animate-pulse bg-gray-100/60 rounded-2xl mx-2.5" style={{ width: 'calc(100% - 1.25rem)' }} />
);

export default function AllBuildingBox() {
    return (
        <div className="w-full bg-white min-h-screen relative font-sans text-gray-900 overflow-hidden pb-24">
            <div className="relative z-10 w-full max-w-[480px] mx-auto flex flex-col px-0 gap-0 pt-0">
                <Hero />
                <div className="border-b border-gray-100 w-full" />
                <Suspense fallback={<SectionLoader />}>
                    <CommercialTerms />
                    <div className="border-b border-gray-100 w-full" />
                    <SpaceOverview />
                    <div className="border-b border-gray-100 w-full" />
                    <FitOut />
                    <div className="border-b border-gray-100 w-full" />
                    <Infrastructure />
                    <div className="border-b border-gray-100 w-full" />
                    <Media />
                    <div className="border-b border-gray-100 w-full" />
                    <LocationIntelligence />
                    <div className="border-b border-gray-100 w-full" />
                    <Terms />
                </Suspense>
                
                <Suspense fallback={null}>
                    <StickyFooter />
                </Suspense>
            </div>
        </div>
    );
}
