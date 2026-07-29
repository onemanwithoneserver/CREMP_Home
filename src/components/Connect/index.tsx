import Desktop from "./05_connectDesktop";
import Mobile from "./05_connectMobile";

export default function Connect({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <Mobile /> : <Desktop />;
}
