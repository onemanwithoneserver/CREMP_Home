import DesktopCategories from "./DesktopCategories";
import MobileCategories from "./MobileCategories";
export default function DeveloperAndOwnerCategories({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileCategories /> : <DesktopCategories />;
}
