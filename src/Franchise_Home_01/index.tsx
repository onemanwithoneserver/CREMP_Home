import { Suspense, lazy } from "react";
import HeroGallery from "./01_HeroGallery";

const FranchiseModels = lazy(() => import("./05_FranchiseModels"));
const IdealPartner = lazy(() => import("./07_IdealPartner"));
const FullCycleSupport = lazy(() => import("./08_FullCycleSupport"));
const FounderStory = lazy(() => import("./09_FounderStory"));
const Leadership = lazy(() => import("./13_Leadership"));
const MediaGallery = lazy(() => import("./14_MediaGallery"));
const FranchiseNetwork = lazy(() => import("./16_FranchiseNetwork"));
const FAQ = lazy(() => import("./17_FAQ"));
const StickyFooter = lazy(() => import("./StickyFooter"));

interface FranchiseHomeProps {
  isMobile: boolean;
}

export default function FranchiseHome({ isMobile }: FranchiseHomeProps) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background text-gray-900 dark:text-primary transition-colors duration-300">
      <div className="flex-1 flex flex-col">
        <HeroGallery isMobile={isMobile} />
        <Suspense
          fallback={
            <div className="h-32 w-full animate-pulse bg-gray-50 dark:bg-[#0b1b42]" />
          }
        >
          <FranchiseModels isMobile={isMobile} />
          <IdealPartner isMobile={isMobile} />
          <FullCycleSupport isMobile={isMobile} />
          <FounderStory isMobile={isMobile} />
          <Leadership isMobile={isMobile} />
          <MediaGallery isMobile={isMobile} />
          <FranchiseNetwork isMobile={isMobile} />
          <FAQ isMobile={isMobile} />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <StickyFooter isMobile={isMobile} />
      </Suspense>
    </div>
  );
}
