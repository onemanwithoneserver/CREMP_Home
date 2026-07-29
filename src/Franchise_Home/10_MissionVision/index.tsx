import MissionVisionDesktop from "./10_MissionVisionDesktop";
import MissionVisionMobile from "./10_MissionVisionMobile";

export default function MissionVision({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <MissionVisionMobile /> : <MissionVisionDesktop />;
}
