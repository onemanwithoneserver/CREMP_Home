import DesktopFAQ from "./DesktopFAQ";
import MobileFAQ from "./MobileFAQ";

export default function InvestorsFAQ({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <MobileFAQ /> : <DesktopFAQ />;
}
