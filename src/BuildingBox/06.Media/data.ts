import {
  Video,
  Map,
  Maximize,
  Images,
  LayoutGrid,
  Navigation,
} from "lucide-react";

export const mediaData = {
  title: "Media",
  tabs: [
    { label: "Video", count: 3, icon: Video },
    { label: "Floor Plan", count: 2, icon: Map },
    { label: "Virtual Tour", count: 1, icon: Maximize },
    { label: "Photos", count: 14, icon: Images },
  ],
  videos: [
    {
      title: "Interior Walkthrough",
      duration: "2:34",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
      fullWidth: true,
    },
    {
      title: "Facade & Entrance",
      duration: "1:12",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80",
      fullWidth: false,
    },
    {
      title: "Surrounding Area",
      duration: "3:05",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      fullWidth: false,
    },
  ],
  floorPlans: [
    {
      title: "Ground Floor Plan",
      desc: "PDF · Scaled 1:100 · A3",
      icon: LayoutGrid,
    },
    {
      title: "Mezzanine Plan",
      desc: "PDF · Scaled 1:100 · A3",
      icon: LayoutGrid,
    },
  ],
  virtualTour: {
    title: "360° Virtual Tour",
    desc: "Interactive walkthrough available",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    btnIcon: Navigation,
    btnText: "Launch Tour",
  },
  photos: [
    {
      label: "Interior",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    },
    {
      label: "Facade",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80",
    },
    {
      label: "Space",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      label: "Lobby",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80",
    },
    {
      label: "View",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    },
  ],
};
