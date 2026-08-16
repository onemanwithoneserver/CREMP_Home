export type MediaFormatType = "image" | "video" | "short_video" | "document";
export type MediaCategoryType = string;

export interface MediaItem {
  id: string;
  format: MediaFormatType;
  category: MediaCategoryType;
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  fileSize?: string;
}

export const mediaGalleryData = {
  sectionLabel: "MEDIA GALLERY",
  categories: [
    "All",
    "Outlet Photos",
    "Product Photos",
    "Hero Video",
    "Outlet Video",
    "Brand Video",
    "Shorts & Reels",
    "Success Stories Video",
    "Educational Video",
    "Others Video",
    "Documents",
  ],
  items: [
    {
      id: "img-1",
      format: "image" as const,
      category: "Outlet Photos",
      src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800",
      title: "Premium Outlet Interior",
    },
    {
      id: "img-2",
      format: "image" as const,
      category: "Outlet Photos",
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
      title: "Cozy Seating Area",
    },
    {
      id: "img-3",
      format: "image" as const,
      category: "Product Photos",
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
      title: "Signature Espresso",
    },
    {
      id: "img-4",
      format: "image" as const,
      category: "Product Photos",
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
      title: "Fresh Roasted Beans",
    },
    {
      id: "vid-1",
      format: "video" as const,
      category: "Hero Video",
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
      title: "Brand Anthem",
    },
    {
      id: "vid-2",
      format: "video" as const,
      category: "Outlet Video",
      src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
      title: "Outlet Tour",
    },
    {
      id: "vid-3",
      format: "video" as const,
      category: "Brand Video",
      src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
      title: "Our Coffee Culture",
    },
    {
      id: "vid-4",
      format: "video" as const,
      category: "Educational Video",
      src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800",
      title: "Brewing Guide",
    },
    {
      id: "vid-5",
      format: "video" as const,
      category: "Success Stories Video",
      src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=800",
      title: "Franchisee Interview",
    },
    {
      id: "vid-6",
      format: "video" as const,
      category: "Others Video",
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
      title: "Event Highlights",
    },
    {
      id: "short-1",
      format: "short_video" as const,
      category: "Shorts & Reels",
      src: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800",
      title: "Barista Skills in 60s",
    },
    {
      id: "short-2",
      format: "short_video" as const,
      category: "Shorts & Reels",
      src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800",
      title: "Latte Art Reveal",
    },
    {
      id: "short-3",
      format: "short_video" as const,
      category: "Shorts & Reels",
      src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800",
      title: "Store Grand Opening Short",
    },
    {
      id: "doc-1",
      format: "document" as const,
      category: "Documents",
      src: "#",
      title: "Franchise Investor Deck",
    },
    {
      id: "doc-2",
      format: "document" as const,
      category: "Documents",
      src: "#",
      title: "Store Operations Manual",
    },
    {
      id: "doc-3",
      format: "document" as const,
      category: "Documents",
      src: "#",
      title: "Brand Guidelines",
    },
  ],
};
