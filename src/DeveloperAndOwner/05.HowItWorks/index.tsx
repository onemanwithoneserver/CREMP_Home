import DesktopHowItWorks from "./DesktopHowItWorks";
import MobileHowItWorks from "./MobileHowItWorks";

export default function DeveloperAndOwnerHowItWorks({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileHowItWorks /> : <DesktopHowItWorks />;
}
