import DesktopCategories from "./DesktopCategories";
import MobileCategories from "./MobileCategories";
export default function FranchiseCategories({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileCategories /> : <DesktopCategories />;
}
