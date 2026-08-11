import DesktopGrowthStages from "./DesktopGrowthStages";
import MobileGrowthStages from "./MobileGrowthStages";

interface GrowthStagesProps {
  isMobile: boolean;
}

export default function GrowthStages({ isMobile }: GrowthStagesProps) {
  return isMobile ? <MobileGrowthStages /> : <DesktopGrowthStages />;
}
