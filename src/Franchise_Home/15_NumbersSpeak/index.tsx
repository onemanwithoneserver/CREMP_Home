import NumbersSpeakDesktop from "./15_NumbersSpeakDesktop";
import NumbersSpeakMobile from "./15_NumbersSpeakMobile";

export default function NumbersSpeak({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <NumbersSpeakMobile /> : <NumbersSpeakDesktop />;
}
