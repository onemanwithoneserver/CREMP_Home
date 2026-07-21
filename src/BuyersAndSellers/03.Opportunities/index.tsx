import DesktopOpportunities from "./DesktopOpportunities";
import MobileOpportunities from "./MobileOpportunities";

export default function BuyersAndSellersOpportunities({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileOpportunities /> : <DesktopOpportunities />;
}
