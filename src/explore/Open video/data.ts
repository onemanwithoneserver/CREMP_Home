import { sampleVideos } from '../data';

export interface ReelData {
  id: string;
  videoUrl: string;
  thumbnail: string;
  username: string;
  description: string;
  likes: string;
  comments: string;
  shares: string;
  profilePic: string;
  category?: string;
}
export const reelsData: ReelData[] = [
  {
    id: "v1",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    username: "vishh.mms",
    description: "No other Option Doods 🤣🤣🤣..",
    likes: "4,825",
    comments: "47",
    shares: "13",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "v2",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    username: "cremp_official",
    description: "Real estate investment tips! 🏡📈",
    likes: "12K",
    comments: "340",
    shares: "1.2K",
    profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "v3",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    username: "franchise_king",
    description: "How to open your first franchise. Watch till end!",
    likes: "8,942",
    comments: "128",
    shares: "450",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80"
  },
];
export const getReelData = (id: string): ReelData => {
  const sample = sampleVideos.find(v => v.id === id);
  const category = sample ? sample.category : "Pre-Leased";

  const found = reelsData.find(r => r.id === id);
  if (found) {
    return { ...found, category };
  }
  return {
    id,
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: sample ? sample.thumbnail : "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    username: sample ? sample.brand : "user_" + id,
    description: sample ? sample.title : "Explore the possibilities with our new franchise models! ✨",
    likes: "1,234",
    comments: "56",
    shares: "12",
    profilePic: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80",
    category
  };
};
