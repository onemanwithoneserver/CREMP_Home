export interface VideoResult {
  id: string;
  title: string;
  brand: string;
  duration: string;
  views: string;
  thumbnail: string;
  category: string;
}

export const videoCategories = [
  "All",
  "Franchise Models",
  "Success Stories",
  "Interviews",
  "Webinars",
];

export const sampleVideos: VideoResult[] = [
  {
    id: "v1",
    title: "How to Start a Coffee Franchise",
    brand: "Brew & Co",
    duration: "12:45",
    views: "1.2k",
    thumbnail:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    category: "Franchise Models",
  },
  {
    id: "v2",
    title: "Founder's Journey: From 1 to 100 Stores",
    brand: "Fitness Hub",
    duration: "45:20",
    views: "3.5k",
    thumbnail:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    category: "Success Stories",
  },
  {
    id: "v3",
    title: "Real Estate Market Trends 2024",
    brand: "Property Max",
    duration: "18:30",
    views: "856",
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    category: "Webinars",
  },
  {
    id: "v4",
    title: "Behind the Scenes: Operations",
    brand: "Quick Bites",
    duration: "08:15",
    views: "2.1k",
    thumbnail:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    category: "Interviews",
  },
  {
    id: "v5",
    title: "Scaling Your Franchise Fast",
    brand: "Tech Repair",
    duration: "25:00",
    views: "5.4k",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    category: "Webinars",
  },
  {
    id: "v6",
    title: "Meeting the Ideal Partner",
    brand: "Wellness Spa",
    duration: "15:10",
    views: "930",
    thumbnail:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    category: "Success Stories",
  },
];
