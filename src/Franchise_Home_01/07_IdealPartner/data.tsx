import {
  Briefcase,
  Building2,
  Clock,
  HandCoins,
  UserCheck,
  Users,
  ClipboardList,
} from "lucide-react";
export const idealPartnerData = {
  sectionLabel: "IDEAL FRANCHISE PARTNER",
  title: "Who makes the ideal Urban Brew Co. partner?",
  subtitle: "",
  multiSelects: [
    {
      icon: Briefcase,
      title: "Entrepreneur Profile",
      items: [
        "Successful Entrepreneur",
        "First-time Investor",
        "MBA / MG Background",
      ],
      intent: "success",
    },
    {
      icon: HandCoins,
      title: "Existing Business Setup",
      items: ["GST Registered", "FSSAI License", "Standard Local Certificates"],
      intent: "violet",
    },
    {
      icon: Users,
      title: "Partner Attributes",
      items: [
        "Customer-Centric",
        "Team Builder",
        "Culture-Aligned",
        "Family-Minded",
      ],
      intent: "pink",
    },
  ],
  singleSelects: [
    {
      icon: UserCheck,
      title: "Expected Involvement",
      value: "Owner Managed",
      intent: "warning",
    },
    {
      icon: Clock,
      title: "Time Commitment",
      value: "Full Time",
      intent: "danger",
    },
    {
      icon: Building2,
      title: "Business Experience",
      value: "Preferred",
      intent: "info",
    },
  ],
  additionalExpectations: {
    title: "Additional Expectations",
    icon: ClipboardList,
    text: "Must be willing to deeply engage with the local community and brand. Expect to invest significant time during the initial launch phase (4-5 AM to PM). Off-hours can be managed by a hired team after stabilization. A confident person driven by brand love is highly preferred.",
  },
};
