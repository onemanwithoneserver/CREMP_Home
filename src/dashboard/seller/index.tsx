import SellerDashboardMobile from "./mobile";
import SellerDashboardDesktop from "./desktop";
export default function SellerDashboard({ isMobile }: { isMobile?: boolean }) {
  return isMobile ? <SellerDashboardMobile /> : <SellerDashboardDesktop />;
}
