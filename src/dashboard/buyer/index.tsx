import BuyerDashboardMobile from "./mobile";
import BuyerDashboardDesktop from "./desktop";
export default function BuyerDashboard({ isMobile }: { isMobile?: boolean }) {
  return isMobile ? <BuyerDashboardMobile /> : <BuyerDashboardDesktop />;
}
