import { Phone } from "lucide-react";

export const faqData = {
    sectionLabel: "FREQUENTLY ASKED QUESTIONS",
    title: "Everything you need to know",
    subtitle:
        "Can't find an answer? Book a discovery call and our franchise team will walk you through every detail.",
    ctaButton: { label: "Book a Call", icon: Phone },
    tabs: [
        { id: "investment", label: "Investment" },
        { id: "operations", label: "Operations" },
        { id: "support", label: "Support" },
        { id: "finances", label: "Finances" },
    ],
    questions: [
        {
            id: "q1",
            question:
                "What is the total investment required to open an Urban Brew Co. outlet?",
            answer:
                "Total investment ranges from Five Lakhs to Fift Lakhs depending on city, property, and format. This includes the franchise fee (FRR), fit-out & interiors, equipment, working capital, launch marketing, and security deposit. A detailed financost cost sheet is shared after application.",
            category: "investment",
            isExpanded: true,
        },
        {
            id: "q2",
            question: "What are the royalty and revenue-sharing terms?",
            answer:
                "We operate on a monthly royalty model based on gross revenue. Details are shared during the franchise discovery call.",
            category: "finances",
        },
        {
            id: "q3",
            question: "When can I expect to break even?",
            answer:
                "Most outlets break even within 18–24 months based on location, footfall, and operational efficiency.",
            category: "finances",
        },
        {
            id: "q4",
            question:
                "Do I need prior experience in food & beverages?",
            answer:
                "No, prior F&B experience is not mandatory. Our training program covers everything from operations to customer service.",
            category: "operations",
        },
        {
            id: "q5",
            question:
                "How long does setup take from agreement signing to opening day?",
            answer:
                "Typically 60–90 days from agreement signing to store launch, depending on property readiness and approvals.",
            category: "operations",
        },
        {
            id: "q6",
            question: "Is there territory exclusivity?",
            answer:
                "Yes, each franchise partner receives exclusive rights to operate within their designated territory.",
            category: "investment",
        },
        {
            id: "q7",
            question:
                "What ongoing support will I receive after opening?",
            answer:
                "You'll receive ongoing support including marketing, operations audits, supply chain management, and quarterly business reviews.",
            category: "support",
        },
        {
            id: "q8",
            question:
                "How is the 3-week training program structured?",
            answer:
                "Week 1 covers operations & SOPs, Week 2 focuses on barista training & product knowledge, Week 3 is on-site launch support.",
            category: "support",
        },
        {
            id: "q9",
            question: "What happens if my outlet underperforms?",
            answer:
                "Our team works closely with underperforming outlets through dedicated turnaround programs including marketing boosts and operational improvements.",
            category: "support",
        },
        {
            id: "q10",
            question: "Can I open multiple outlets?",
            answer:
                "Yes, multi-unit franchising is encouraged. Many of our partners operate 3–5 outlets across their territory.",
            category: "investment",
        },
        {
            id: "q11",
            question:
                "How do I apply to become a franchise partner?",
            answer:
                "Submit your application through our platform, and our franchise team will schedule a discovery call within 48 hours.",
            category: "investment",
        },
    ],
};
