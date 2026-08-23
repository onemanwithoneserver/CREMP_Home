import DesktopYourMarkets from "./DesktopYourMarkets";
import MobileYourMarkets from "./MobileYourMarkets";
export default function FranchiseYourMarkets({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileYourMarkets /> : <DesktopYourMarkets />;
}
