import HeroGallery from "./01_HeroGallery";
import FranchiseModels from "./05_FranchiseModels";
import IdealPartner from "./07_IdealPartner";
import FullCycleSupport from "./08_FullCycleSupport";
import FounderStory from "./09_FounderStory";
import Leadership from "./13_Leadership";
import MediaGallery from "./14_MediaGallery";
import FranchiseNetwork from "./16_FranchiseNetwork";
import FAQ from "./17_FAQ";
import StickyFooter from "./StickyFooter";

interface FranchiseHomeProps {
  isMobile: boolean;
}

export default function FranchiseHome({ isMobile }: FranchiseHomeProps) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background text-gray-900 dark:text-primary transition-colors duration-300">
      <div className="flex-1 flex flex-col">
        <HeroGallery isMobile={isMobile} />
        <FranchiseModels isMobile={isMobile} />
        <IdealPartner isMobile={isMobile} />
        <FullCycleSupport isMobile={isMobile} />
        <FounderStory isMobile={isMobile} />
        <Leadership isMobile={isMobile} />
        <MediaGallery isMobile={isMobile} />
        <FranchiseNetwork isMobile={isMobile} />
        <FAQ isMobile={isMobile} />
      </div>
      <StickyFooter isMobile={isMobile} />
    </div>
  );
}
