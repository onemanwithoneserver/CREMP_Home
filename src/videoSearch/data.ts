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
  {
    id: "v7",
    title: "Building a Food Franchise Empire",
    brand: "Spice Kitchen",
    duration: "32:15",
    views: "4.8k",
    thumbnail:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    category: "Franchise Models",
  },
  {
    id: "v8",
    title: "Investor Insights: Q3 Performance",
    brand: "CREMP Analytics",
    duration: "22:40",
    views: "1.9k",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Webinars",
  },
  {
    id: "v9",
    title: "From Teacher to Franchise Owner",
    brand: "EduBright",
    duration: "19:55",
    views: "2.7k",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    category: "Success Stories",
  },
  {
    id: "v10",
    title: "Retail Franchise: Complete Guide",
    brand: "StyleMart",
    duration: "41:30",
    views: "6.2k",
    thumbnail:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    category: "Franchise Models",
  },
  {
    id: "v11",
    title: "CEO Interview: Vision 2030",
    brand: "CREMP Group",
    duration: "28:10",
    views: "3.1k",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    category: "Interviews",
  },
  {
    id: "v12",
    title: "Healthcare Franchise Opportunities",
    brand: "MedCare Plus",
    duration: "16:45",
    views: "1.5k",
    thumbnail:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    category: "Webinars",
  },
  {
    id: "v13",
    title: "Zero to Hero: My Franchise Story",
    brand: "AutoShine",
    duration: "35:20",
    views: "7.3k",
    thumbnail:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    category: "Success Stories",
  },
  {
    id: "v14",
    title: "Legal Essentials for Franchisees",
    brand: "LegalEase",
    duration: "14:50",
    views: "890",
    thumbnail:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    category: "Webinars",
  },
  {
    id: "v15",
    title: "Franchise Partner Interview: India",
    brand: "GrowthNet",
    duration: "20:30",
    views: "2.4k",
    thumbnail:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    category: "Interviews",
  },
  {
    id: "v16",
    title: "Fitness Franchise: ROI Breakdown",
    brand: "FitZone",
    duration: "11:25",
    views: "1.8k",
    thumbnail:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    category: "Franchise Models",
  },
  {
    id: "v17",
    title: "Multi-Unit Ownership Strategies",
    brand: "FranchiseIQ",
    duration: "38:00",
    views: "4.1k",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    category: "Webinars",
  },
  {
    id: "v18",
    title: "Women in Franchising: Panel Talk",
    brand: "SheLeads",
    duration: "52:15",
    views: "5.9k",
    thumbnail:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    category: "Interviews",
  },
];
