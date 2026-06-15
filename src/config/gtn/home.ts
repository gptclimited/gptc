import { siteImages } from "@/config/images";
import type { CtaLink, FeatureItem, ServiceCategoryCard, StatItem, TestimonialItem } from "@/config/types";

const gtnCategoryMeta: Record<string, { description: string; href: string }> = {
  "Educational Consulting": {
    description:
      "Admissions support, pathway planning, scholarships, and study permit guidance for learners at every stage.",
    href: "/gtn/college-admissions",
  },
  "Leadership Development": {
    description:
      "Youth academies, governance training, ethical leadership, and public speaking for emerging leaders.",
    href: "/gtn/leadership-development",
  },
  "Holistic Development": {
    description:
      "Personal growth, emotional intelligence, mental wellness, and family enrichment programs.",
    href: "/gtn/personal-development",
  },
  "Biblical & Theological Studies": {
    description:
      "Biblical studies, theological education, and church leadership development for faith communities.",
    href: "/gtn/biblical-studies",
  },
  "Digital Skills": {
    description:
      "Digital literacy, AI awareness, research technology, and online learning success skills.",
    href: "/gtn/digital-literacy",
  },
  "Research & Policy": {
    description:
      "Educational research, community needs assessments, policy development, and program evaluation.",
    href: "/gtn/educational-research",
  },
  Entrepreneurship: {
    description:
      "Business mentoring, financial literacy, and social enterprise development for aspiring entrepreneurs.",
    href: "/gtn/entrepreneurship-training",
  },
};

export const gtnHomeConfig = {
  hero: {
    eyebrow: "Global Training Network",
    headline: "Equipping Leaders and Transforming Minds Through Education and Training",
    animatedPhrases: [
      "Equipping Leaders",
      "and Transforming Minds",
      "Through Education and Training",
    ],
    subheadline:
      "Education, research, leadership development, train-the-trainer programs, student consultancy, and workshops.",
    backgroundImage: siteImages.subsidiaryHeroBackgrounds.gtn,
    backgroundPosition: "center center",
    trustBadges: ["Students & Families", "Leaders & Educators", "Institutions & Partners"],
    primaryCta: {
      label: "Book Consultation",
      href: "/contact?type=consultation&org=gtn",
      analyticsLabel: "gtn_hero_consultation",
    } satisfies CtaLink,
    secondaryCta: {
      label: "Explore Services",
      href: "/gtn/services",
      analyticsLabel: "gtn_hero_services",
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
      "To equip people with knowledge and skills through accessible consulting, training, mentorship, and educational pathways that turn aspiration into achievement.",
    vision: "Creating lifelong learners and transformative leaders.",
  },
  servicesOverview: {
    eyebrow: "What We Offer",
    title: "Training & Education Services",
    description:
      "Comprehensive consulting, training, and mentorship across education, leadership, research, and professional development.",
    categories: Object.entries(gtnCategoryMeta).map(([title, meta]) => ({
      title,
      description: meta.description,
      href: meta.href,
    })) satisfies ServiceCategoryCard[],
  },
  whyChooseUs: {
    eyebrow: "What Sets Us Apart",
    title: "Why GTN",
    description: "Trusted guidance shaped by experience, empathy, and a commitment to lasting outcomes.",
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
          "We bring cross-cultural insight to admissions, leadership, and community development.",
        icon: "globe",
      },
      {
        title: "Train-the-Trainer Excellence",
        description:
          "Our multiplication model certifies trainers who extend impact across communities worldwide.",
        icon: "graduation-cap",
      },
    ] satisfies FeatureItem[],
  },
  testimonials: {
    eyebrow: "Client Stories",
    title: "Testimonials",
    description: "Hear from students, families, and partners who have walked the journey with GTN.",
    items: [
      {
        quote:
          "GTN helped our family navigate university admissions with clarity and confidence. The personalized guidance made a complex process feel manageable from start to finish.",
        name: "Sarah M.",
        role: "Parent, Educational Consulting Client",
      },
      {
        quote:
          "The leadership workshops delivered by GTN strengthened our team's communication and governance practices. We saw immediate improvements in how we plan and serve our community.",
        name: "James O.",
        role: "Community Organization Partner",
      },
      {
        quote:
          "The entrepreneurship mentoring program gave me the confidence to launch my small business. GTN connected practical skills with real-world guidance I could apply immediately.",
        name: "Elena R.",
        role: "Entrepreneurship Training Graduate",
      },
      {
        quote:
          "Our institution valued GTN's professional approach and cultural sensitivity. Their training programs were practical, well structured, and aligned with our mission.",
        name: "Rev. Daniel T.",
        role: "Faith-Based Institutional Partner",
      },
      {
        quote:
          "I arrived with limited digital skills and left feeling equipped for online learning and research. The instructors were patient, clear, and genuinely invested in my progress.",
        name: "Michael C.",
        role: "Digital Literacy Program Participant",
      },
    ] satisfies TestimonialItem[],
  },
  ctaBanner: {
    headline: "Book Your Consultation",
    description: "Take the next step with personalized guidance from the GTN team.",
    ctaLabel: "Book Consultation",
    ctaHref: "/contact?type=consultation&org=gtn",
    analyticsLabel: "gtn_cta_banner",
  },
} as const;
