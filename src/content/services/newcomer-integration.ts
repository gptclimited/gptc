import type { ServicePage } from "@/types/service";

export const newcomerIntegration: ServicePage = {
  slug: "newcomer-integration",
  subsidiary: "acs",
  title: "Newcomer Integration",
  category: "Newcomer Integration",
  metaTitle: "Newcomer Integration Services in Canada | Global Training Network",
  metaDescription:
    "Support for newcomers integrating into Canadian communities. GTN offers settlement guidance, cultural orientation, and pathways to employment and community belonging.",
  hero: {
    headline: "Newcomer Integration Services",
    subheadline:
      "Comprehensive support helping newcomers settle, adapt, and thrive in Canadian communities through practical guidance, cultural orientation, and community connection.",
  },
  overview: `Moving to a new country brings opportunity and challenge. Global Training Network's newcomer integration services help individuals and families navigate settlement, cultural transition, and community participation with confidence and dignity.

We work with newcomers at every stage—from arrival and orientation to employment readiness and long-term community engagement. Our approach is practical, culturally sensitive, and centered on the unique needs of each person and family we serve.

GTN partners with community organizations, institutions, and faith-based groups to deliver integration support that builds belonging, reduces isolation, and empowers newcomers to contribute meaningfully to their new communities.`,
  whoWeServe: [
    "New immigrants and permanent residents in Canada",
    "Refugees and protected persons beginning settlement",
    "International students transitioning to life in Canada",
    "Families navigating cultural and community adjustment",
    "Community organizations supporting newcomer populations",
  ],
  benefits: [
    {
      title: "Settlement Guidance",
      description:
        "Practical support understanding housing, healthcare, education, and essential services in your community.",
    },
    {
      title: "Cultural Orientation",
      description:
        "Build awareness of Canadian workplace norms, social expectations, and community life.",
    },
    {
      title: "Employment Readiness",
      description:
        "Prepare résumés, interview skills, and credential recognition pathways for the Canadian job market.",
    },
    {
      title: "Community Connection",
      description:
        "Access networks, programs, and relationships that foster belonging and reduce isolation.",
    },
    {
      title: "Holistic Family Support",
      description:
        "Programs that address the needs of children, parents, and extended family members together.",
    },
  ],
  process: [
    {
      step: 1,
      title: "Needs Assessment",
      description:
        "We listen to your story, settlement stage, and priorities to understand where support is most needed.",
    },
    {
      step: 2,
      title: "Personalized Integration Plan",
      description:
        "Together we create a practical roadmap covering settlement, orientation, and community goals.",
    },
    {
      step: 3,
      title: "Guided Support Sessions",
      description:
        "Receive one-on-one or group guidance on settlement tasks, cultural adaptation, and next steps.",
    },
    {
      step: 4,
      title: "Community & Employment Pathways",
      description:
        "Connect with programs, employers, and community partners aligned with your integration goals.",
    },
    {
      step: 5,
      title: "Ongoing Mentorship",
      description:
        "Continued check-ins and support as you build stability, confidence, and long-term success in Canada.",
    },
  ],
  faq: [
    {
      question: "What newcomer integration services does GTN provide?",
      answer:
        "We offer settlement support, cultural orientation, employment readiness, and community engagement programs. Services can be tailored for individuals, families, or groups through partner organizations.",
    },
    {
      question: "Do you work with refugees and protected persons?",
      answer:
        "Yes. We provide culturally sensitive support for refugees and protected persons at various stages of settlement, working alongside community partners where appropriate.",
    },
    {
      question: "Can you help with employment in Canada?",
      answer:
        "Our employment readiness services include résumé support, interview preparation, workplace culture orientation, and guidance on credential recognition pathways.",
    },
    {
      question: "Is newcomer integration support available for families?",
      answer:
        "Absolutely. We address family-wide needs including school transitions for children, language resources, and community activities that involve the whole household.",
    },
    {
      question: "How do I get started with GTN newcomer services?",
      answer:
        "Book a consultation through our contact page or call our Langley office. We will discuss your situation and recommend the most appropriate integration support.",
    },
  ],
  relatedSlugs: ["settlement-support", "cultural-orientation", "employment-readiness"],
};
