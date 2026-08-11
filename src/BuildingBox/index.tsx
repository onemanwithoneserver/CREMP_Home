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
  <div className="w-full h-32 animate-pulse bg-gray-100/60 rounded-[4px]" />
);

export default function BuildingBox() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-[#0a1128] transition-colors duration-300 relative overflow-hidden">
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
