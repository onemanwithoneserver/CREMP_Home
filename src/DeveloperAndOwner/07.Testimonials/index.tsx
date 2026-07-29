import DesktopTestimonials from "./DesktopTestimonials";
import MobileTestimonials from "./MobileTestimonials";

export default function DeveloperAndOwnerTestimonials({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileTestimonials /> : <DesktopTestimonials />;
}
