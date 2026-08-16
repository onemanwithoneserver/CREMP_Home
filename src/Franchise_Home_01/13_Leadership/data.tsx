export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  experience: string;
  highlights: string[];
  quote: string;
  education?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface BrandStat {
  value: string;
  label: string;
  intent: "warning" | "info" | "success" | "primary";
}

export const brandLeadershipData = {
  sectionLabel: "BRAND STORY & LEADERSHIP",
  title: "The Vision Behind the Brand",
  subtitle:
    "A journey of passion, community, and operational excellence dedicated to franchise partner profitability.",
  brandStory: {
    title: "The Vision Behind the Brand",
    subtitle:
      "A story of community, passion, and building something greater than coffee.",
    quote:
      "When I started Urban Brew Co. in 2016, I wasn't just opening a café — I was building a community. I believed that great coffee, served in the right environment, could become the anchor of a neighbourhood's daily life. Today, 187 outlets later, that belief has never felt more validated. Our franchise partners aren't vendors; they're co-founders of a movement.",
    stats: [
      { value: "187+", label: "Outlets Nationwide", intent: "warning" as const },
      { value: "8+", label: "Years of Excellence", intent: "info" as const },
      { value: "₹900Cr+", label: "Network Revenue", intent: "success" as const },
      { value: "70%+", label: "Gross Product Margin", intent: "primary" as const },
    ],
  },
  members: [
    {
      id: "arjun-malhotra",
      name: "Arjun Malhotra",
      role: "Founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
      experience: "12+ Years",
      bio: "Over 12 years of experience in retail & specialty coffee hospitality. Scaled Urban Brew Co. from a single neighborhood café in 2016 to 187+ thriving franchise outlets nationwide.",
      highlights: [
        "12+ Yrs F&B Leadership & Scale",
        "Pioneered 187+ Outlet Expansion",
        "Former Head of Retail Strategy",
      ],
      quote:
        "When I started Urban Brew Co., I believed great coffee could anchor a community. Today, our franchise partners aren't vendors; they're co-founders of a movement.",
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
  ],
};

export const leadershipData = brandLeadershipData;
