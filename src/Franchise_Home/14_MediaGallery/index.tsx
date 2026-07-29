import MediaGalleryDesktop from "./14_MediaGalleryDesktop";
import MediaGalleryMobile from "./14_MediaGalleryMobile";

export default function MediaGallery({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <MediaGalleryMobile /> : <MediaGalleryDesktop />;
}
