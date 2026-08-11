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
  <div className="w-full h-32 flex flex-col items-center justify-center gap-3">
    <div className="w-6 h-6 border-2 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin" />
    <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37] to-[#d4af37]/20 animate-[pulse_1.5s_ease-in-out_infinite] w-full" />
    </div>
  </div>
);

export default function BuildingBox() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-[#0a1128] transition-colors duration-300 relative overflow-hidden">
      <div className="relative z-10 flex-1 flex flex-col pb-24">
        <Hero />
        <div className="flex flex-col gap-0 px-0 pt-0">
          <Suspense fallback={<SectionLoader />}>
            <CommercialTerms />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <SpaceOverview />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <FitOut />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Infrastructure />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Media />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <LocationIntelligence />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Terms />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={null}>
        <StickyFooter />
      </Suspense>
    </div>
  );
}
