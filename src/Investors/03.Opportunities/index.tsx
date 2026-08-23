import DesktopOpportunities from "./DesktopOpportunities";
import MobileOpportunities from "./MobileOpportunities";
export default function InvestorsOpportunities({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileOpportunities /> : <DesktopOpportunities />;
}
