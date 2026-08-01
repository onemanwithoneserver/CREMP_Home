import { BookOpen, FileText, GraduationCap, Image, Video } from "lucide-react";

export interface MediaItem {
  id: string;
  src: string;
  title: string;
  type: "video" | "image";
}

export const mediaGalleryData = {
  sectionLabel: "MEDIA GALLERY",
  tabs: [
    {
      id: "brand-videos",
      label: "Brand Videos",
      icon: Video,
      isDefault: true,
    },
    { id: "outlet-videos", label: "Outlet Videos", icon: Video },
    { id: "product-photos", label: "Product Photos", icon: Image },
    { id: "news-food", label: "News & Food", icon: FileText },
    { id: "business-stories", label: "Business Stories", icon: BookOpen },
    {
      id: "training-videos",
      label: "Training Videos",
      icon: GraduationCap,
    },
  ],
  items: [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400",
      title: "The Urban Brew Story",
      type: "image" as const,
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
      title: "Our Coffee Culture",
      type: "image" as const,
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400",
      title: "From Farm to Cup",
      type: "image" as const,
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
      title: "Recent Launch 2024",
      type: "image" as const,
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
      title: "Brand Campaign",
      type: "image" as const,
    },
  ],
};
