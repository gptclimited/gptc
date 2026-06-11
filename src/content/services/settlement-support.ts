import type { ServicePage } from "@/types/service";

export const settlementSupport: ServicePage = {
  slug: "settlement-support",
  title: "Settlement Support",
  category: "Newcomer Integration",
  metaTitle: "Settlement Support for Newcomers in Canada | Global Training Network",
  metaDescription:
    "Practical settlement support for newcomers in Canada. GTN helps with housing, healthcare, banking, government services, and building stability in your new community.",
  hero: {
    headline: "Settlement Support for Newcomers",
    subheadline:
      "Hands-on guidance to navigate housing, healthcare, government services, and daily life essentials so you can settle in Canada with confidence.",
  },
  overview: `Arriving in Canada is a major life transition. Between finding housing, opening a bank account, registering for healthcare, enrolling children in school, and understanding government programs, the first months can feel overwhelming. Even newcomers who researched extensively before departure often discover that practical settlement tasks look different on the ground—lease requirements vary by province, healthcare registration timelines differ, and navigating public transit or winter preparedness may not have been part of anyone's pre-arrival briefing. Global Training Network's settlement support services provide practical, step-by-step guidance tailored to your family's situation, language needs, and settlement stage so you are not facing these challenges alone.

Our settlement advisors work with newcomers across British Columbia and beyond to demystify the systems that shape daily life in Canada. We help you understand provincial and federal programs, connect with community resources, and complete essential tasks that build a stable foundation. Whether you are a skilled worker, refugee, international graduate, or family reunification applicant, we meet you where you are and walk alongside you through the practical work of settling in. Sessions cover priority tasks such as securing temporary or permanent housing, obtaining a Social Insurance Number, registering for provincial health coverage, opening a Canadian bank account, and enrolling children in local schools. We also address less visible but equally important needs—understanding tenant rights, accessing food security programs, setting up utilities, and learning how to use community transit systems.

GTN's approach is culturally responsive and dignity-centered. We do not simply hand you a checklist—we explain why each step matters, what documents you need, and how to advocate for yourself when navigating institutions that may feel unfamiliar or intimidating. Settlement support is available through one-on-one coaching, family sessions, and group workshops delivered in partnership with community organizations, faith groups, and local service providers. By building a reliable network of support around you, we ensure you have guidance long after your first appointment. Our goal is to help you move from surviving your first weeks in Canada to building a secure, connected life in your new community—one practical step at a time.`,
  whoWeServe: [
    "Permanent residents and new immigrants in their first years in Canada",
    "Refugees and protected persons completing initial settlement tasks",
    "International students transitioning from temporary to long-term residence",
    "Families reuniting in Canada who need coordinated settlement guidance",
    "Community organizations seeking settlement support for their newcomer clients",
  ],
  benefits: [
    {
      title: "Housing & Tenancy Guidance",
      description:
        "Understand rental agreements, tenant rights, neighbourhood selection, and how to search for safe, affordable housing in Canadian communities.",
    },
    {
      title: "Healthcare & Social Services Navigation",
      description:
        "Register for provincial health coverage, find family doctors, and access social programs you may be eligible for as a newcomer.",
    },
    {
      title: "Government & ID Documentation",
      description:
        "Receive step-by-step support for SIN applications, driver's licences, government benefits, and other essential identification processes.",
    },
    {
      title: "Banking & Financial Setup",
      description:
        "Open accounts, understand credit systems, and build basic financial literacy for managing money in the Canadian economy.",
    },
    {
      title: "School & Family Transitions",
      description:
        "Support enrolling children in school, understanding the education system, and addressing family-wide settlement priorities together.",
    },
  ],
  process: [
    {
      step: 1,
      title: "Settlement Intake & Assessment",
      description:
        "We review your arrival date, immigration status, family composition, and immediate priorities to identify the most urgent settlement tasks.",
    },
    {
      step: 2,
      title: "Personalized Settlement Roadmap",
      description:
        "Together we create a prioritized action plan covering housing, healthcare, government services, and family needs for your first 90 days and beyond.",
    },
    {
      step: 3,
      title: "Guided Task Completion",
      description:
        "Work through essential settlement steps with one-on-one or small-group support, including document preparation and appointment planning.",
    },
    {
      step: 4,
      title: "Community Resource Connection",
      description:
        "We introduce you to local programs, language services, food banks, transit resources, and community partners relevant to your situation.",
    },
    {
      step: 5,
      title: "Follow-Up & Stability Check-In",
      description:
        "Continued support as you address emerging needs, resolve challenges, and build long-term stability in your Canadian community.",
    },
  ],
  faq: [
    {
      question: "What settlement tasks can GTN help me with?",
      answer:
        "We assist with housing searches, healthcare registration, SIN and ID applications, banking setup, school enrollment, and navigating provincial and federal newcomer programs. Support is tailored to your specific priorities.",
    },
    {
      question: "Is settlement support available for refugees?",
      answer:
        "Yes. We provide culturally sensitive settlement guidance for refugees and protected persons, working alongside resettlement agencies and community partners where appropriate.",
    },
    {
      question: "Do you help newcomers outside of British Columbia?",
      answer:
        "While GTN is based in Langley, BC, many settlement processes are similar across provinces. Contact us to discuss your location and how we can support you directly or through partner referrals.",
    },
    {
      question: "Can you help my whole family settle, not just me?",
      answer:
        "Absolutely. Settlement support addresses household needs including children's school transitions, spousal employment questions, and family-wide access to community services.",
    },
    {
      question: "How do I start settlement support with GTN?",
      answer:
        "Book a consultation through our contact page or call our Langley office. We will discuss your arrival timeline, current challenges, and the settlement support that fits your situation.",
    },
  ],
  relatedSlugs: ["cultural-orientation", "employment-readiness", "community-engagement"],
};
