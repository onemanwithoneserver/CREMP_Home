export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "investment" | "operations" | "support" | "finances" | "property";
  categoryLabel: string;
  highlight?: string;
  points?: string[];
}

export const faqData = {
  sectionLabel: "FREQUENTLY ASKED QUESTIONS",
  title: "Everything You Need to Know",
  
  keyFacts: [
    { label: "Capex Range", value: "₹25L – ₹45L", sub: "100% turnkey setup" },
    { label: "Avg. Payback", value: "14 – 22 Months", sub: "Fast capital ROI" },
    { label: "Flat Royalty", value: "6%", sub: "Zero ad surcharges" },
    { label: "Exclusivity", value: "2–4 km", sub: "Contractual protection" },
  ],

  supportCard: {
    title: "Have Specific Questions?",
    description: "Speak directly with our senior franchise development team for territory verification and unit economics modeling.",
    cta: "Book a Discovery Call",
    phone: "+91 98765 43210",
    phoneLabel: "Instant Franchise Helpline",
    badge: "Average Response: < 2 Hours",
  },

  questions: [
    {
      id: "q1",
      question: "What is the total turnkey investment required to launch an outlet?",
      answer: "The total investment ranges between ₹25 Lakhs to ₹45 Lakhs depending on your chosen format (Kiosk, Express Cafe, or Flagship Lounge). This comprehensive cost covers the one-time franchise fee, interior fit-outs, professional-grade espresso machinery, initial inventory, launch marketing campaigns, and working capital cushion.",
      category: "investment",
      categoryLabel: "Investment & Cost",
      highlight: "Turnkey package with zero hidden costs.",
      points: [
        "Franchise License Fee included",
        "Commercial equipment & fit-outs covered",
        "30-day working capital reserve built-in"
      ]
    },
    {
      id: "q2",
      question: "What are the royalty fees and revenue-sharing percentages?",
      answer: "We operate on a competitive and growth-friendly monthly royalty of 6% on gross monthly sales. This fee directly funds centralized brand marketing, continuous menu innovation, seasonal recipe R&D, supply chain logistics discounts, and dedicated operations audits.",
      category: "finances",
      categoryLabel: "ROI & Royalty",
      highlight: "Simple 6% flat royalty with full marketing reinvestment.",
      points: [
        "6% monthly royalty on gross sales",
        "No separate advertising fund surcharge",
        "Quarterly audit and performance reports included"
      ]
    },
    {
      id: "q3",
      question: "When can an outlet realistically expect to achieve operational break-even?",
      answer: "Operating break-even (covering daily operational expenses) is typically achieved within Month 1 to Month 3. Capital investment payback (complete ROI) occurs comfortably within 14 to 22 months, based on site footfall, average order value (AOV), and adherence to brand standard operating procedures.",
      category: "finances",
      categoryLabel: "ROI & Royalty",
      highlight: "Average capital payback period of 14–22 months.",
      points: [
        "Operational break-even: 30–90 days",
        "Projected Net Margins: 22% – 31%",
        "Proven unit economics across 187+ outlets"
      ]
    },
    {
      id: "q4",
      question: "Do I or my team need prior food & beverage (F&B) industry experience?",
      answer: "No prior F&B experience is necessary. Over 68% of our top-performing franchise partners came from corporate, IT, real estate, and finance backgrounds. Our comprehensive operational training program empowers you and your staff with complete mastery over operations, food prep, inventory control, and customer service.",
      category: "operations",
      categoryLabel: "Operations & Setup",
      highlight: "Designed for entrepreneurs without prior cafe experience.",
      points: [
        "3-week intensive Barista & Management Academy",
        "Standardized digital SOPs & recipes",
        "Automated POS and inventory management system"
      ]
    },
    {
      id: "q5",
      question: "How long does the setup process take from agreement signing to grand opening?",
      answer: "The typical timeline is 45 to 60 calendar days from the date of final site approval and agreement signing. Our specialized project management cell supervises architectural planning, 3D interior design, equipment delivery, vendor onboarding, and pre-launch digital marketing in parallel.",
      category: "operations",
      categoryLabel: "Operations & Setup",
      highlight: "Fast-track 45–60 day launch roadmap.",
      points: [
        "Days 1–15: Site layout & MEP architectural design",
        "Days 16–40: Interior fit-out & equipment installation",
        "Days 41–60: Staff training, dry runs & launch campaigns"
      ]
    },
    {
      id: "q6",
      question: "How does territory exclusivity work for franchise partners?",
      answer: "Every franchise partner is granted guaranteed exclusive territory rights within a designated 2–4 km catchment radius (or specific high-density commercial tech park). We enforce strict non-compete clauses ensuring no other outlet from our brand can open within your protected boundary.",
      category: "property",
      categoryLabel: "Location & Exclusivity",
      highlight: "Guaranteed geographical territory protection.",
      points: [
        "Contractual radius exclusivity (2–4 km)",
        "First right of refusal for neighboring expansions",
        "Micro-market demographic validation prior to signing"
      ]
    },
    {
      id: "q7",
      question: "What site criteria and property assistance do you provide?",
      answer: "Our real estate intelligence team actively assists in site scouting, footfall heat-mapping, lease negotiation, and commercial viability audits. We look for carpet areas between 300 to 1,200 sq.ft with minimum 15-foot frontage, high visibility, power backup, and appropriate water/drainage provisions.",
      category: "property",
      categoryLabel: "Location & Exclusivity",
      highlight: "End-to-end real estate evaluation & lease negotiation support.",
      points: [
        "High-street, mall, or tech-park prime locations",
        "Footfall analysis & catchment revenue modeling",
        "Legal review of commercial lease agreements"
      ]
    },
    {
      id: "q8",
      question: "What ongoing support and marketing assistance do I receive post-launch?",
      answer: "You receive continuous 360-degree operational backing: dedicated Area Operations Managers, centralized digital ad campaigns (Meta, Google, Zomato, Swiggy), supply chain deliveries at subsidized bulk rates, regular menu refreshes, and seasonal marketing toolkits.",
      category: "support",
      categoryLabel: "Training & Support",
      highlight: "Lifetime dedicated operational & marketing partnership.",
      points: [
        "Assigned Area Business Manager for weekly audits",
        "Pre-negotiated aggregator commissions with Swiggy/Zomato",
        "Continuous supply of proprietary beans, syrups & bakery items"
      ]
    },
    {
      id: "q9",
      question: "How is the staff recruitment and 3-week training academy structured?",
      answer: "We assist in hiring qualified baristas and service staff. Your team then undergoes 21 days of rigorous hands-on training covering espresso extraction, latte art, inventory audits, hygiene standards, POS handling, customer delight protocols, and dry-run service simulations.",
      category: "support",
      categoryLabel: "Training & Support",
      highlight: "Complete staff hiring assistance & certified academy training.",
      points: [
        "Week 1: Coffee theory, SOPs & beverage preparation",
        "Week 2: Machine maintenance, POS & customer service",
        "Week 3: On-site store simulations & grand opening handholding"
      ]
    },
    {
      id: "q10",
      question: "What protocols are in place if my outlet faces initial underperformance?",
      answer: "We deploy an emergency Turnaround Task Force. Our central team conducts deep-dive audits into operational speed, local marketing saturation, staff efficiency, and aggregator rating optimization, followed by localized micro-campaigns and operational re-alignment.",
      category: "operations",
      categoryLabel: "Operations & Setup",
      highlight: "Proactive performance monitoring & turnaround deployment.",
      points: [
        "Weekly digital health & customer sentiment tracking",
        "Targeted local ad boost sponsored by brand",
        "Refresher training and cost-optimization audits"
      ]
    },
    {
      id: "q11",
      question: "Can I scale and operate multiple franchise units?",
      answer: "Absolutely! Over 42% of our partner network owns 2 or more units. We provide discounted franchise fees for second and third outlets, priority territorial expansion rights, and streamlined multi-unit management frameworks.",
      category: "investment",
      categoryLabel: "Investment & Cost",
      highlight: "Preferred multi-unit franchise expansion terms.",
      points: [
        "Discounted license fees for subsequent outlets",
        "Cluster management training for scaling teams",
        "Priority allocation of new high-demand micro-markets"
      ]
    },
    {
      id: "q12",
      question: "What is the exact application and onboarding procedure?",
      answer: "Step 1: Submit the Franchise Application. Step 2: Discovery Call with our leadership team within 48 hours. Step 3: Location feasibility study & financial modeling. Step 4: Agreement execution. Step 5: Design, buildout & grand launch in 45–60 days.",
      category: "investment",
      categoryLabel: "Investment & Cost",
      highlight: "Simple, transparent 5-step onboarding journey.",
      points: [
        "Discovery call within 48 hours of form submission",
        "Transparent mutual due diligence process",
        "Structured launch timeline managed by dedicated project lead"
      ]
    },
  ] as FAQItem[],
};
