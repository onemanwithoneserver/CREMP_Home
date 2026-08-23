import { Building2, Rocket, TrendingUp } from "lucide-react";
export const growthStagesData = {
  tag: "Growth Roadmap",
  titleBase: "Built for Every Stage of",
  titleHighlight: "Franchise Growth",
  subtitle:
    "Whether you're launching your first franchise or expanding an established network, CREMP helps you connect with the right commercial spaces, partners, and opportunities.",
  stages: [
    {
      id: "new-entrants",
      icon: Rocket,
      title: "New Entrants",
      subtitle: "Starting your franchise journey?",
      description:
        "Showcase your business concept, attract early partners, and explore suitable commercial locations to launch your first outlets.",
      color: "blue",
    },
    {
      id: "emerging-brands",
      icon: TrendingUp,
      title: "Emerging Brands",
      subtitle: "Ready to scale across new markets?",
      description:
        "Connect with commercial brokers, investors, and property owners to accelerate your regional expansion.",
      color: "gold",
    },
    {
      id: "established-franchisors",
      icon: Building2,
      title: "Established Franchisors",
      subtitle: "Expand with confidence.",
      description:
        "Strengthen your market presence, discover strategic expansion opportunities, and manage growth through a wider business ecosystem.",
      color: "emerald",
    },
  ],
};
