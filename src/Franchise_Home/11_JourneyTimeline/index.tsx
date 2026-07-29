import JourneyTimelineDesktop from "./11_JourneyTimelineDesktop";
import JourneyTimelineMobile from "./11_JourneyTimelineMobile";

export default function JourneyTimeline({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <JourneyTimelineMobile /> : <JourneyTimelineDesktop />;
}
