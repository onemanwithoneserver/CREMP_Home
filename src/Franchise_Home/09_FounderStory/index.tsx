import FounderStoryDesktop from "./09_FounderStoryDesktop";
import FounderStoryMobile from "./09_FounderStoryMobile";

export default function FounderStory({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <FounderStoryMobile /> : <FounderStoryDesktop />;
}
