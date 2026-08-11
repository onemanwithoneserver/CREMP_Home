import { Suspense, lazy } from "react";

import Hero from "./01.Hero";

const CommercialTerms = lazy(() => import("./02.CommercialTerms"));
const SpaceOverview = lazy(() => import("./03.SpaceOverview"));
// const FitOut = lazy(() => import("./04.FitOut"));
const Infrastructure = lazy(() => import("./05.Infrastructure"));
const Media = lazy(() => import("./06.Media"));
const LocationIntelligence = lazy(() => import("./07.LocationIntelligence"));
const Terms = lazy(() => import("./08.Terms"));
const StickyFooter = lazy(() => import("./StickyFooter"));


const SectionLoader = () => (
  <div className="w-full py-16 flex flex-col items-center justify-center gap-5">
    <div className="relative flex items-center justify-center w-12 h-12">
      <div className="absolute inset-0 border-[3px] border-gray-100 rounded-full" />
      <div className="absolute inset-0 border-[3px] border-[#d4af37] rounded-full border-t-transparent animate-spin" />
      <div className="absolute inset-2 border-[3px] border-[#d4af37]/30 rounded-full border-b-transparent animate-[spin_1.5s_linear_infinite_reverse]" />
      <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
    </div>
    <div className="flex flex-col items-center gap-1.5">
      <span className="text-[0.68rem] font-semibold tracking-[0.25em] text-[#d4af37] animate-pulse">
        Loading Content
      </span>
      <div className="flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>
  </div>
);

export default function LandBox() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 text-[#0a1128] transition-colors duration-300 relative overflow-hidden">
      <div className="relative z-10 flex-1 flex flex-col pb-24">
        <Hero />
        <div className="flex flex-col gap-0 px-0 py-0">
          <Suspense fallback={<SectionLoader />}>
            <CommercialTerms />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <SpaceOverview />
          </Suspense>
          {/* <Suspense fallback={<SectionLoader />}>
            <FitOut />
          </Suspense> */}
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
