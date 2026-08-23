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
}
export const leadershipData = {
  sectionLabel: "LEADERSHIP",
  title: "Meet the Minds Behind the Brand",
  subtitle:
    "A dedicated leadership team uniting deep F&B operational mastery, franchise scalability, and culinary innovation.",
  members: [
    {
      id: "arjun-malhotra",
      name: "Arjun Malhotra",
      role: "Founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80",
      experience: "12+ Years",
      bio: "Over 12 years of experience in retail & specialty coffee hospitality. Scaled Urban Brew Co. from a single neighborhood café to 187+ thriving franchise outlets nationwide.",
      highlights: [
        "12+ Yrs F&B Leadership",
        "Scaled 187+ Outlets",
        "Ex-Retail Strategy Lead",
      ],
      quote:
        "Franchising is not about selling licenses; it's about building enduring wealth for our partners.",
    },
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      role: "Co-Founder & COO",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
      experience: "10+ Years",
      bio: "Specializes in multi-unit operations, supply chain resilience, and quality control systems. Ensures zero-breakdown logistics and standardized SOPs across all territories.",
      highlights: [
        "Supply Chain Specialist",
        "Multi-Unit Operations",
        "IIM Ahmedabad Alum",
      ],
      quote:
        "Operational rigor and consistent cup quality are the foundation of partner profitability.",
    },
    {
      id: "rahul-nair",
      name: "Rahul Nair",
      role: "Chief Franchise Officer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80",
      experience: "18+ Years",
      bio: "Veteran franchise strategist who has guided over 300+ entrepreneurs through territory acquisition, store fit-out, and initial launch break-even velocity.",
      highlights: [
        "300+ Franchise Setups",
        "Territory Geo-Analysis",
        "18+ Yrs Expansion Expert",
      ],
      quote:
        "Our success is measured solely by how fast our partners achieve full ROI recovery.",
    },
    {
      id: "ananya-desai",
      name: "Ananya Desai",
      role: "VP of Culinary Innovation",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
      experience: "9+ Years",
      bio: "Internationally certified Q-Grader and master roaster leading our R&D kitchen. Drives seasonal menu updates, localized palate curation, and gross margin optimization.",
      highlights: [
        "Certified Q-Grader",
        "Menu R&D & Margins",
        "Le Cordon Bleu Trained",
      ],
      quote:
        "Crafting memorable flavor profiles that keep guests returning daily at 70%+ margins.",
    },
  ],
};
