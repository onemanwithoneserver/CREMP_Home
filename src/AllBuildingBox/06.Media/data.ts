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
      title: "Building Walkthrough",
      duration: "3:45",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
      fullWidth: true,
    },
    {
      title: "Lobby & Amenities",
      duration: "1:30",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80",
      fullWidth: false,
    },
    {
      title: "Building Elevation",
      duration: "2:10",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      fullWidth: false,
    },
  ],
  floorPlans: [
    {
      title: "Master Floor Plan",
      desc: "PDF · Scaled 1:100 · A3",
      icon: LayoutGrid,
    },
    {
      title: "Typical Floor Plan",
      desc: "PDF · Scaled 1:100 · A3",
      icon: LayoutGrid,
    },
  ],
  virtualTour: {
    title: "360° Building Tour",
    desc: "Interactive walkthrough available",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    btnIcon: Navigation,
    btnText: "Launch Tour",
  },
  photos: [
    {
      label: "Exterior",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    },
    {
      label: "Lobby",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80",
    },
    {
      label: "Amenities",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      label: "Parking",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80",
    },
    {
      label: "Roof",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    },
  ],
};
