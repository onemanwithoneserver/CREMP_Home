import HeroGalleryDesktop from "./01_HeroGalleryDesktop";
import HeroGalleryMobile from "./01_HeroGalleryMobile";

export default function HeroGallery({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <HeroGalleryMobile /> : <HeroGalleryDesktop />;
}
