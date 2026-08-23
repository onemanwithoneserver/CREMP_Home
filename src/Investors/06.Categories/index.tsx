import DesktopCategories from "./DesktopCategories";
import MobileCategories from "./MobileCategories";
export default function InvestorsCategories({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileCategories /> : <DesktopCategories />;
}
