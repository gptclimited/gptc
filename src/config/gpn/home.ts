import { consultationHref } from "@/lib/constants";
import { siteImages } from "@/config/images";
import type { CtaLink, FeatureItem, ServiceCategoryCard, StatItem, TestimonialItem } from "@/config/types";

export const gpnHomeConfig = {
  hero: {
    eyebrow: "Global Peacebuilding Network",
    headline: "Building Peaceful, Inclusive, and Resilient Communities Worldwide",
    animatedPhrases: [
      "Building Peaceful,",
      "Inclusive, and Resilient",
      "Communities Worldwide.",
    ],
    subheadline:
      "Peace, reconciliation, governance, social justice, conflict transformation, dialogue, and trauma healing for communities everywhere.",
    backgroundImage: siteImages.subsidiaryHeroBackgrounds.gpn,
    backgroundPosition: "center center",
    trustBadges: ["Communities", "Churches & Schools", "Civil Society"],
    primaryCta: {
      label: "Book Consultation",
      href: "/contact?type=consultation&org=gpn",
      analyticsLabel: "gpn_hero_consultation",
    } satisfies CtaLink,
    secondaryCta: {
      label: "Explore Programs",
      href: "/gpn/services",
      analyticsLabel: "gpn_hero_services",
    } satisfies CtaLink,
  },
  impactStats: {
    items: [
      { label: "Communities Served", value: 40 },
      { label: "Peace Programs", value: 16 },
      { label: "Workshop Facilitators", value: 30 },
      { label: "Countries Reached", value: 12 },
    ] satisfies StatItem[],
  },
  missionVision: {
    mission:
      "To promote human dignity and social transformation through peacebuilding, reconciliation, dialogue, and trauma-informed community healing.",
    vision: "Building peaceful, inclusive, and resilient communities worldwide.",
  },
  servicesOverview: {
    eyebrow: "Our Programs",
    title: "Peacebuilding Programs",
    description:
      "Institutes, workshops, and initiatives for conflict transformation, reconciliation, and community resilience.",
    categories: [
      {
        title: "Peacebuilding Programs",
        description: "Institutes and centres for reconciliation, conflict transformation, and peace education.",
        href: "/gpn/peacebuilding-reconciliation-institute",
      },
      {
        title: "Community Mediation",
        description: "Professional mediation and dialogue facilitation for disputes and divisions.",
        href: "/gpn/community-mediation-services",
      },
      {
        title: "Youth & Women in Peace",
        description: "Leadership programs empowering youth and women as peacebuilders.",
        href: "/gpn/youth-peace-ambassador",
      },
    ] satisfies ServiceCategoryCard[],
  },
  whyChooseUs: {
    eyebrow: "Our Approach",
    title: "Why GPN",
    description: "Field-tested peacebuilding rooted in dignity, dialogue, and sustainable transformation.",
    features: [
      {
        title: "Micro to Macro Impact",
        description: "Programs addressing individuals, communities, and systems simultaneously.",
        icon: "globe",
      },
      {
        title: "Trauma-Informed",
        description: "Healing approaches that honour the wounds conflict leaves behind.",
        icon: "heart-handshake",
      },
      {
        title: "Dialogue-Centred",
        description: "Facilitation skills that build bridges across deep differences.",
        icon: "users",
      },
    ] satisfies FeatureItem[],
  },
  testimonials: {
    eyebrow: "Community Stories",
    title: "Testimonials",
    description: "Voices from communities that have walked the path toward peace and reconciliation.",
    items: [
      {
        quote:
          "The peacebuilding workshop created a safe space for honest dialogue in our community. GPN's facilitators modeled the listening and reconciliation we hope to practice every day.",
        name: "Grace W.",
        role: "Peacebuilding Workshop Attendee",
      },
      {
        quote:
          "Our church community was deeply divided after years of tension. GPN's reconciliation institute gave us tools to listen, heal, and rebuild trust with one another.",
        name: "Rev. Daniel T.",
        role: "Faith-Based Community Leader",
      },
      {
        quote:
          "The Youth Peace Ambassador program showed me that young people can lead change. GPN helped me develop the skills to mediate conflicts among my peers with confidence.",
        name: "Maria S.",
        role: "Youth Peace Ambassador Graduate",
      },
      {
        quote:
          "When our neighbourhood dispute seemed impossible to resolve, GPN's mediators brought calm and clarity. They helped us find common ground we didn't think existed.",
        name: "David L.",
        role: "Community Mediation Client",
      },
      {
        quote:
          "The restorative justice workshop changed how our school handles conflict. GPN's approach focuses on repair and dignity rather than punishment alone.",
        name: "Fatima H.",
        role: "Restorative Justice Workshop Participant",
      },
      {
        quote:
          "After community trauma, we needed more than a one-time event. GPN's healing dialogues created ongoing spaces where people could share pain and begin to move forward together.",
        name: "Samuel A.",
        role: "Community Healing Dialogue Facilitator",
      },
    ] satisfies TestimonialItem[],
  },
  ctaBanner: {
    headline: "Build Peace in Your Community",
    description: "Connect with GPN to explore programs, workshops, and partnership opportunities.",
    ctaLabel: "Book Consultation",
    ctaHref: "/contact?type=consultation&org=gpn",
    analyticsLabel: "gpn_cta_banner",
  },
} as const;
