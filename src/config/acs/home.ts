import { siteImages } from "@/config/images";
import type { CtaLink, FeatureItem, ServiceCategoryCard, StatItem, TestimonialItem } from "@/config/types";

export const acsHomeConfig = {
  hero: {
    eyebrow: "Amani Care Services Inc.",
    headline: "Caring for People. Creating Opportunities.",
    animatedPhrases: ["Caring for People.", "Creating Opportunities."],
    subheadline:
      "Employment, staffing, newcomer services, language adaptation, and compassionate care for diverse communities.",
    backgroundImage: siteImages.subsidiaryHeroBackgrounds.acs,
    backgroundPosition: "center center",
    trustBadges: ["Newcomers & Refugees", "Employers", "Families & Seniors"],
    primaryCta: {
      label: "Book Consultation",
      href: "/contact?type=consultation&org=acs",
      analyticsLabel: "acs_hero_consultation",
    } satisfies CtaLink,
    secondaryCta: {
      label: "Explore Services",
      href: "/acs/services",
      analyticsLabel: "acs_hero_services",
    } satisfies CtaLink,
  },
  impactStats: {
    items: [
      { label: "Clients Supported", value: 300 },
      { label: "Job Placements", value: 150 },
      { label: "Employer Partners", value: 40 },
      { label: "Languages Served", value: 8 },
    ] satisfies StatItem[],
  },
  missionVision: {
    mission:
      "To improve people's quality of life and economic well-being through employment services, compassionate care, and successful community integration.",
    vision:
      "To become a leading social enterprise that creates opportunities, delivers compassionate care, and supports successful integration and well-being for diverse communities.",
  },
  servicesOverview: {
    eyebrow: "What We Offer",
    title: "Care & Employment Services",
    description:
      "From job placement to settlement support—practical services that transform lives and strengthen communities.",
    categories: [
      {
        title: "Employment & Career",
        description: "Career coaching, job search support, and employment readiness programs.",
        href: "/acs/employment-career-centre",
      },
      {
        title: "Newcomer Settlement",
        description: "Orientation, housing, school registration, and community navigation.",
        href: "/acs/newcomer-settlement-services",
      },
      {
        title: "Staffing Solutions",
        description: "Temporary and permanent staffing for employers across industries.",
        href: "/acs/staffing-recruitment-agency",
      },
    ] satisfies ServiceCategoryCard[],
  },
  whyChooseUs: {
    eyebrow: "What Sets Us Apart",
    title: "Why ACS",
    description: "Compassionate, practical support that meets people where they are.",
    features: [
      {
        title: "Culturally Responsive",
        description: "Services designed for the diverse backgrounds and needs of our clients.",
        icon: "globe",
      },
      {
        title: "Employment Pathways",
        description: "From training to placement—comprehensive workforce development.",
        icon: "compass",
      },
      {
        title: "Holistic Care",
        description: "Addressing practical, emotional, and community needs together.",
        icon: "heart-handshake",
      },
    ] satisfies FeatureItem[],
  },
  testimonials: {
    eyebrow: "Client Stories",
    title: "Testimonials",
    description: "Hear from clients who have found opportunity and care through ACS.",
    items: [
      {
        quote:
          "As a newcomer, I felt supported every step of the way—from settlement planning to building confidence in a new education system. ACS truly understood my journey.",
        name: "Amara K.",
        role: "Newcomer Integration Program Participant",
      },
      {
        quote:
          "ACS helped me rewrite my résumé, prepare for interviews, and land my first job in Canada. Their employment coaches believed in me when I struggled to believe in myself.",
        name: "Carlos M.",
        role: "Employment Readiness Graduate",
      },
      {
        quote:
          "We rely on ACS for reliable staffing across our care facilities. Their team understands our needs and consistently sends candidates who are prepared and professional.",
        name: "Priya S.",
        role: "Employer Partner, Staffing Solutions",
      },
      {
        quote:
          "From finding housing to registering my children in school, ACS guided us through every practical step of settling in a new country. We never felt alone in the process.",
        name: "Ruth E.",
        role: "Newcomer Settlement Client",
      },
      {
        quote:
          "The career coaching sessions gave me clarity about my strengths and next steps. ACS connected me with opportunities I would never have found on my own.",
        name: "Thomas B.",
        role: "Career Coaching Client",
      },
      {
        quote:
          "ACS provided compassionate support for my family during a difficult transition. Their holistic approach addressed both our practical needs and our emotional well-being.",
        name: "Helen J.",
        role: "Family Support Services Client",
      },
    ] satisfies TestimonialItem[],
  },
  ctaBanner: {
    headline: "Get the Support You Need",
    description: "Connect with Amani Care Services for employment, settlement, and care support.",
    ctaLabel: "Book Consultation",
    ctaHref: "/contact?type=consultation&org=acs",
    analyticsLabel: "acs_cta_banner",
  },
} as const;
