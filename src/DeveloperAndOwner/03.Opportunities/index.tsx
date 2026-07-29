import DesktopOpportunities from "./DesktopOpportunities";
import MobileOpportunities from "./MobileOpportunities";

export default function DeveloperAndOwnerOpportunities({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileOpportunities /> : <DesktopOpportunities />;
}
