import DesktopTestimonials from "./DesktopTestimonials";
import MobileTestimonials from "./MobileTestimonials";

export default function BuyersAndSellersTestimonials({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileTestimonials /> : <DesktopTestimonials />;
}
