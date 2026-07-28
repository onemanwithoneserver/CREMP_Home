import HeroGallery from "./01_HeroGallery";
import ProfileInfo from "./02_ProfileInfo";
import BottomActions from "./03_BottomActions";
import InvestmentSnapshot from "./04_InvestmentSnapshot";
import FranchiseModels from "./05_FranchiseModels";
import RevenueROI from "./06_RevenueROI";
import IdealPartner from "./07_IdealPartner";
import FullCycleSupport from "./08_FullCycleSupport";
import FounderStory from "./09_FounderStory";
import MissionVision from "./10_MissionVision";
import JourneyTimeline from "./11_JourneyTimeline";
import ProvenPlaybook from "./12_ProvenPlaybook";
import Leadership from "./13_Leadership";
import MediaGallery from "./14_MediaGallery";
import NumbersSpeak from "./15_NumbersSpeak";
import FranchiseNetwork from "./16_FranchiseNetwork";
import FAQ from "./17_FAQ";
import { ThemeProvider } from "../Home/ThemeContext";

interface FranchiseHomeProps {
  isMobile: boolean;
}

export default function FranchiseHome({ isMobile }: FranchiseHomeProps) {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-[#0a1128] text-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex-1 flex flex-col">
          <HeroGallery isMobile={isMobile} />
          <ProfileInfo isMobile={isMobile} />
          <BottomActions isMobile={isMobile} />
          <InvestmentSnapshot isMobile={isMobile} />
          <FranchiseModels isMobile={isMobile} />
          <RevenueROI isMobile={isMobile} />
          <IdealPartner isMobile={isMobile} />
          <FullCycleSupport isMobile={isMobile} />
          <FounderStory isMobile={isMobile} />
          <MissionVision isMobile={isMobile} />
          <JourneyTimeline isMobile={isMobile} />
          <ProvenPlaybook isMobile={isMobile} />
          <Leadership isMobile={isMobile} />
          <MediaGallery isMobile={isMobile} />
          <NumbersSpeak isMobile={isMobile} />
          <FranchiseNetwork isMobile={isMobile} />
          <FAQ isMobile={isMobile} />
        </div>
      </div>
    </ThemeProvider>
  );
}
