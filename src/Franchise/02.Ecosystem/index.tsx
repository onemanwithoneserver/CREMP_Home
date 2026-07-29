import DesktopEcosystem from "./DesktopEcosystem";
import MobileEcosystem from "./MobileEcosystem";

export default function FranchiseEcosystem({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileEcosystem /> : <DesktopEcosystem />;
}
