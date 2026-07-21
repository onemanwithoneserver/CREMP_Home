import DesktopTestimonials from "./DesktopTestimonials";
import MobileTestimonials from "./MobileTestimonials";

export default function InvestorsTestimonials({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileTestimonials /> : <DesktopTestimonials />;
}
