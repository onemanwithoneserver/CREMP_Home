import DesktopInvestorProfile from "./DesktopInvestorProfile";
import MobileInvestorProfile from "./MobileInvestorProfile";

export default function InvestorsProfile({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileInvestorProfile /> : <DesktopInvestorProfile />;
}
