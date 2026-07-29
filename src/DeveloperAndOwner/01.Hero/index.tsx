import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function DeveloperAndOwnerHero({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileHero /> : <DesktopHero />;
}
