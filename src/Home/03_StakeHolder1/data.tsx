import {
  Award,
  BarChart,
  Briefcase,
  Building,
  Building2,
  FileText,
  Globe,
  Handshake,
  Lightbulb,
  Megaphone,
  PlayCircle,
  PlaySquare,
  Scale,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  Target,
  User,
  Users,
} from "lucide-react";
import brokerCard from "./assets/broker_card.png";
import commercialBuildings from "./assets/commercial_buildings.png";
import consultantCard from "./assets/consultant_card.png";
import developerCard from "./assets/developer_card.png";
import franchiseCard from "./assets/franchise_card.png";
import handshakeIllustration from "./assets/handshake_illustration.png";
import laptopUser from "./assets/laptop_user.png";
export const stakeholderData = {
  block1: {
    bgImage: commercialBuildings,
    tag: "FOR BUILDERS, OWNERS & FRANCHISORS",
    title: (
      <>
        Create{" "}
        <span className="animate-pulse bg-gradient-to-r from-[#D4AF37] to-[#b38728] bg-clip-text text-transparent dark:from-[#D4AF37] dark:to-[#f9d08b]">
          Opportunities.
        </span>
      </>
    ),
    subtitle:
      "Build your brand. Showcase with impact.\nGenerate quality leads and expand your reach.",
    floaters: [
      {
        icon: Award,
        label: (
          <>
            Build
            <br />
            Credibility
          </>
        ),
      },
      {
        icon: Users,
        label: (
          <>
            Generate
            <br />
            Quality Leads
          </>
        ),
      },
      {
        icon: BarChart,
        label: (
          <>
            Expand
            <br />
            Your Reach
          </>
        ),
      },
      {
        icon: Target,
        label: (
          <>
            Drive More
            <br />
            Opportunities
          </>
        ),
      },
    ],
    cards: [
      {
        id: "developers",
        icon: Building2,
        image: developerCard,
        title: "Developers & Property Owners",
        desktopSubtitle: "Showcase. Educate. Grow.",
        mobileSubtitle: "Showcase. Educate. Grow.",
        description:
          "Showcase your commercial projects and properties with rich media and expert content that builds trust and attracts the right investors and tenants.",
        features: [
          {
            icon: Megaphone,
            labelDesktop: (
              <>
                Brand
                <br />
                Building
              </>
            ),
            labelMobile: "Brand Building",
          },
          {
            icon: PlayCircle,
            labelDesktop: (
              <>
                Video
                <br />
                Showcase
              </>
            ),
            labelMobile: "Video Showcase",
          },
          {
            icon: Search,
            labelDesktop: (
              <>
                Commercial
                <br />
                Discovery
              </>
            ),
            labelMobile: "Commercial Discovery",
          },
          {
            icon: Users,
            labelDesktop: (
              <>
                Qualified
                <br />
                Leads
              </>
            ),
            labelMobile: "Qualified Leads",
          },
        ],
        buttonText: "Explore Developer Solutions",
        route: "/developer-and-owner",
      },
      {
        id: "franchisors",
        icon: Store,
        image: franchiseCard,
        title: "Franchisors",
        desktopSubtitle: "Expand Your Brand. Create More Impact.",
        mobileSubtitle: "Expand Your Brand.",
        description:
          "Showcase your franchise opportunities, educate potential partners through engaging videos and content, and seamlessly expand into new markets.",
        features: [
          {
            icon: Megaphone,
            labelDesktop: (
              <>
                Brand
                <br />
                Awareness
              </>
            ),
            labelMobile: "Brand Awareness",
          },
          {
            icon: PlayCircle,
            labelDesktop: (
              <>
                Video
                <br />
                Explainers
              </>
            ),
            labelMobile: "Video Explainers",
          },
          {
            icon: Users,
            labelDesktop: (
              <>
                Investor
                <br />
                Enquiries
              </>
            ),
            labelMobile: "Investor Enquiries",
          },
          {
            icon: Globe,
            labelDesktop: (
              <>
                Market
                <br />
                Expansion
              </>
            ),
            labelMobile: "Market Expansion",
          },
        ],
        buttonText: "Explore Franchisor Solutions",
        route: "/franchise",
      },
    ],
  },
  block2: {
    headerImage: handshakeIllustration,
    tag: "FOR GROWTH PARTNERS",
    title: (
      <>
        Enable <span className="text-blue-400">Growth.</span>
      </>
    ),
    subtitle:
      "Share expertise. Build credibility. Connect with the right opportunities.",
    cards: [
      {
        id: "brokers",
        icon: Handshake,
        image: brokerCard,
        title: "Commercial Brokers",
        desktopSubtitle: "Build Your Brand. Grow Your Network.",
        mobileSubtitle: "Build Your Brand. Grow.",
        description:
          "Showcase exclusive inventory, share market insights, and connect with serious buyers, tenants, and investors.",
        features: [
          {
            icon: User,
            labelDesktop: (
              <>
                Personal
                <br />
                Branding
              </>
            ),
            labelMobile: "Personal Branding",
          },
          {
            icon: Building,
            labelDesktop: (
              <>
                Inventory
                <br />
                Showcase
              </>
            ),
            labelMobile: "Inventory Showcase",
          },
          {
            icon: Users,
            labelDesktop: (
              <>
                Buyer
                <br />
                Connections
              </>
            ),
            labelMobile: "Buyer Connections",
          },
          {
            icon: BarChart,
            labelDesktop: (
              <>
                Lead
                <br />
                Management
              </>
            ),
            labelMobile: "Lead Management",
          },
        ],
        buttonText: "Explore Broker Solutions",
        route: "/buyers-and-sellers",
      },
      {
        id: "consultants",
        icon: Lightbulb,
        image: consultantCard,
        title: "Franchise Consultants",
        desktopSubtitle: "Be the Growth Catalyst.",
        mobileSubtitle: "Be the Growth Catalyst.",
        description:
          "Educate brands and investors, showcase your expertise, and drive successful expansions together.",
        features: [
          {
            icon: Award,
            labelDesktop: (
              <>
                Expert
                <br />
                Positioning
              </>
            ),
            labelMobile: "Expert Positioning",
          },
          {
            icon: FileText,
            labelDesktop: (
              <>
                Content
                <br />
                Publishing
              </>
            ),
            labelMobile: "Content Publishing",
          },
          {
            icon: Users,
            labelDesktop: (
              <>
                Brand & Investor
                <br />
                Connections
              </>
            ),
            labelMobile: "Brand Connections",
          },
          {
            icon: Briefcase,
            labelDesktop: (
              <>
                Consulting
                <br />
                Opportunities
              </>
            ),
            labelMobile: "Consulting",
          },
        ],
        buttonText: "Explore Consultant Solutions",
        route: "/franchise",
      },
    ],
  },
  block3: {
    mainImage: laptopUser,
    tag: "FOR BUYERS, INVESTORS & TENANTS",
    title: (
      <>
        Discover Opportunities <br className="hidden lg:block" />
        with <span className="text-emerald-700 italic">Confidence.</span>
      </>
    ),
    subtitleBold: "Explore. Learn. Decide with Confidence.",
    subtitle:
      "Discover commercial properties, franchise networks, and retail businesses. Learn through expert videos, market insights, and business education before making your next move.",
    categories: [
      {
        icon: Building2,
        label: (
          <>
            Commercial
            <br />
            Properties
          </>
        ),
      },
      {
        icon: Store,
        label: (
          <>
            Franchise
            <br />
            Opportunities
          </>
        ),
      },
      {
        icon: ShoppingBag,
        label: (
          <>
            Retail Business
            <br />
            Opportunities
          </>
        ),
      },
      {
        icon: PlaySquare,
        label: (
          <>
            Expert
            <br />
            Videos & Insights
          </>
        ),
      },
    ],
    floaters: [
      {
        icon: ShieldCheck,
        labelDesktop: (
          <>
            Verified
            <br />
            Opportunities
          </>
        ),
        labelMobile: "Verified Opportunities",
      },
      {
        icon: PlayCircle,
        labelDesktop: (
          <>
            Video-Led
            <br />
            Discovery
          </>
        ),
        labelMobile: "Video-Led Discovery",
      },
      {
        icon: Scale,
        labelDesktop: (
          <>
            Compare &<br />
            Shortlist
          </>
        ),
        labelMobile: "Compare & Shortlist",
      },
      {
        icon: Users,
        labelDesktop: (
          <>
            Connect with
            <br />
            Right Partners
          </>
        ),
        labelMobile: "Connect with Right Partners",
      },
    ],
    buttonText: "Explore Marketplace",
    route: "/buyers-and-sellers",
  },
};
