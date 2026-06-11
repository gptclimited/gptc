import { consultationHref } from "@/lib/constants";

import { siteImages } from "./images";
import type {
  CtaLink,
  FeatureItem,
  ServiceCategoryCard,
  StatItem,
  TestimonialItem,
} from "./types";

const serviceCategoryMeta: Record<
  string,
  { description: string; href: string }
> = {
  "Educational Consulting": {
    description:
      "Admissions support, pathway planning, scholarships, and study permit guidance for learners at every stage.",
    href: "/college-admissions",
  },
  "Newcomer Integration": {
    description:
      "Settlement support, cultural orientation, and employment readiness for newcomers building life in Canada.",
    href: "/newcomer-integration",
  },
  "Leadership Development": {
    description:
      "Youth academies, governance training, ethical leadership, and public speaking for emerging leaders.",
    href: "/leadership-development",
  },
  "Peacebuilding & Reconciliation": {
    description:
      "Workshops and training in conflict resolution, restorative justice, and community healing dialogues.",
    href: "/peacebuilding-workshops",
  },
  "Holistic Development": {
    description:
      "Personal growth, emotional intelligence, mental wellness, and family enrichment programs.",
    href: "/personal-development",
  },
  "Biblical & Theological Studies": {
    description:
      "Biblical studies, theological education, and church leadership development for faith communities.",
    href: "/biblical-studies",
  },
  "Digital Skills": {
    description:
      "Digital literacy, AI awareness, research technology, and online learning success skills.",
    href: "/digital-literacy",
  },
  "Research & Policy": {
    description:
      "Educational research, community needs assessments, policy development, and program evaluation.",
    href: "/educational-research",
  },
  Entrepreneurship: {
    description:
      "Business mentoring, financial literacy, and social enterprise development for aspiring entrepreneurs.",
    href: "/entrepreneurship-training",
  },
};

export const homeConfig = {
  hero: {
    eyebrow: "Global Training Network",
    headline:
      "Empowering Students, Newcomers, Families, and Communities Through Education and Transformation",
    subheadline:
      "Guiding learners and leaders from aspiration to achievement through consulting, training, mentorship, and educational pathways.",
    backgroundImage: siteImages.heroBackground,
    /** CSS object-position for the hero background image (desktop) */
    backgroundPosition: "right center",
    trustBadges: [
      "Students & Families",
      "Newcomers to Canada",
      "Institutions & Partners",
    ],
    primaryCta: {
      label: "Book Consultation",
      href: consultationHref,
      analyticsLabel: "home_hero_consultation",
    } satisfies CtaLink,
    secondaryCta: {
      label: "Explore Services",
      href: "/services",
      analyticsLabel: "home_hero_services",
    } satisfies CtaLink,
  },

  impactStats: {
    items: [
      { label: "Students Supported", value: 500 },
      { label: "Programs Delivered", value: 50 },
      { label: "Community Partnerships", value: 25 },
      { label: "Countries Served", value: 12 },
    ] satisfies StatItem[],
  },

  missionVision: {
    mission:
      "To empower students, newcomers, families, and communities through accessible consulting, training, mentorship, and educational pathways that turn aspiration into achievement.",
    vision:
      "A world where every learner and leader—regardless of background—has the guidance, skills, and support to thrive in education, work, and community life.",
  },

  founderQuote: {
    quote:
      "Every student, newcomer, and community leader deserves a trusted guide on their journey. At GTN, we walk alongside you—from the first question to lasting transformation.",
    name: "Mutabazi Nsenga Shadrack",
    title: "Chief Executive Officer, Global Training Network",
  },

  servicesOverview: {
    eyebrow: "What We Offer",
    title: "Services Overview",
    description:
      "Comprehensive consulting, training, and mentorship across education, integration, leadership, and community development.",
    categories: Object.entries(serviceCategoryMeta).map(([title, meta]) => ({
      title,
      description: meta.description,
      href: meta.href,
    })) satisfies ServiceCategoryCard[],
  },

  whyChooseUs: {
    eyebrow: "What Sets Us Apart",
    title: "Why Choose Us",
    description:
      "Trusted guidance shaped by experience, empathy, and a commitment to lasting outcomes.",
    features: [
      {
        title: "Personalized Guidance",
        description:
          "Every pathway is tailored to the individual, family, or organization we serve—never one-size-fits-all.",
        icon: "compass",
      },
      {
        title: "Global Perspective",
        description:
          "We bring cross-cultural insight to admissions, integration, leadership, and community development.",
        icon: "globe",
      },
      {
        title: "Experienced Advisors",
        description:
          "Our team combines educational expertise, community knowledge, and practical mentorship experience.",
        icon: "graduation-cap",
      },
      {
        title: "Holistic Support",
        description:
          "We address academic, personal, cultural, and professional needs as interconnected parts of success.",
        icon: "heart-handshake",
      },
      {
        title: "Community-Centered Approach",
        description:
          "We partner with families, institutions, and community organizations to create lasting impact together.",
        icon: "users",
      },
    ] satisfies FeatureItem[],
  },

  testimonials: {
    eyebrow: "Client Stories",
    title: "Testimonials",
    description:
      "Hear from students, families, and partners who have walked the journey with GTN.",
    items: [
      {
        quote:
          "GTN helped our family navigate university admissions with clarity and confidence. The personalized guidance made a complex process feel manageable from start to finish.",
        name: "Sarah M.",
        role: "Parent, Educational Consulting Client",
      },
      {
        quote:
          "The leadership workshops delivered by GTN strengthened our team’s communication and governance practices. We saw immediate improvements in how we plan and serve our community.",
        name: "James O.",
        role: "Community Organization Partner",
      },
      {
        quote:
          "As a newcomer, I felt supported every step of the way—from settlement planning to building confidence in a new education system. GTN truly understood my journey.",
        name: "Amara K.",
        role: "Newcomer Integration Program Participant",
      },
      {
        quote:
          "Our institution valued GTN’s professional approach and cultural sensitivity. Their training programs were practical, well structured, and aligned with our mission.",
        name: "Rev. Daniel T.",
        role: "Faith-Based Institutional Partner",
      },
      {
        quote:
          "The entrepreneurship mentoring program gave me the confidence to launch my small business. GTN connected practical skills with real-world guidance I could apply immediately.",
        name: "Elena R.",
        role: "Entrepreneurship Training Graduate",
      },
      {
        quote:
          "I arrived with limited digital skills and left feeling equipped for online learning and research. The instructors were patient, clear, and genuinely invested in my progress.",
        name: "Michael C.",
        role: "Digital Literacy Program Participant",
      },
      {
        quote:
          "The peacebuilding workshop created a safe space for honest dialogue in our community. GTN’s facilitators modeled the listening and reconciliation we hope to practice every day.",
        name: "Grace W.",
        role: "Peacebuilding Workshop Attendee",
      },
      {
        quote:
          "GTN’s biblical studies program deepened my understanding of scripture and strengthened my ability to serve my congregation with greater wisdom and compassion.",
        name: "Pastor Paul N.",
        role: "Biblical Studies Program Graduate",
      },
    ] satisfies TestimonialItem[],
  },

  ctaBanner: {
    headline: "Book Your Consultation",
    description: "Take the next step with personalized guidance from our team.",
    ctaLabel: "Book Consultation",
    ctaHref: consultationHref,
    analyticsLabel: "home_cta_banner",
  },
} as const;
