import { ecosystemConfig } from "@/lib/subsidiaries";
import { siteImages } from "@/config/images";
import type { CtaLink, FeatureItem, StatItem } from "@/config/types";

export const ecosystemHomeConfig = {
  hero: {
    eyebrow: "Global Peacebuilding, Training and Care Ecosystem",
    headline: "Planting Peace. Equipping Leaders. Transforming Lives.",
    animatedPhrases: [
      "Planting Peace.",
      "Equipping Leaders.",
      "Transforming Lives.",
    ],
    subheadline: ecosystemConfig.description,
    backgroundSlides: siteImages.heroSlides,
    trustBadges: ["Three Organizations", "One Mission", "Global Impact"],
    primaryCta: {
      label: "Explore Our Organizations",
      href: "#organizations",
      analyticsLabel: "ecosystem_hero_organizations",
    } satisfies CtaLink,
    secondaryCta: {
      label: "About the Ecosystem",
      href: "/about",
      analyticsLabel: "ecosystem_hero_about",
    } satisfies CtaLink,
  },
  impactStats: {
    items: [
      { label: "Organizations", value: 3 },
      { label: "Programs & Services", value: 80 },
      { label: "Community Partnerships", value: 25 },
      { label: "Countries Served", value: 12 },
    ] satisfies StatItem[],
  },
  roots: {
    eyebrow: "Our Roots",
    title: "Values That Nourish All We Do",
    description: "The foundations that sustain peacebuilding, training, and care across our ecosystem.",
    values: [
      "Peace",
      "Human Dignity",
      "Justice",
      "Reconciliation",
      "Knowledge",
      "Service",
      "Compassion",
      "Inclusion",
      "Faith & Hope",
    ],
  },
  trunk: {
    eyebrow: "Our Shared Trunk",
    title: "One Mission, Shared Values",
    mission: ecosystemConfig.mission,
    values: [
      "Human Dignity",
      "Justice",
      "Compassion",
      "Inclusion",
      "Leadership",
      "Truth",
      "Reconciliation",
      "Service",
      "Learning",
    ],
  },
  organizations: {
    eyebrow: "Our Organizations",
    title: "Three Branches, One Vision",
    description:
      "Each organization specializes in a distinct dimension of human transformation—together forming a complete ecosystem.",
    items: [
      {
        slug: "gpn" as const,
        name: "Global Peacebuilding Network",
        shortName: "GPN",
        tagline: "Building Peaceful and Just Communities",
        description:
          "Peace, reconciliation, governance, social justice, conflict transformation, dialogue, and trauma healing.",
        href: "/gpn",
        accentClass: "border-gpn-secondary bg-gpn-secondary/5",
      },
      {
        slug: "gtn" as const,
        name: "Global Training Network",
        shortName: "GTN",
        tagline: "Equipping Leaders and Transforming Minds",
        description:
          "Education, research, leadership development, train-the-trainer programs, student consultancy, and workshops.",
        href: "/gtn",
        accentClass: "border-gtn-secondary bg-gtn-secondary/5",
      },
      {
        slug: "acs" as const,
        name: "Amani Care Services Inc.",
        shortName: "ACS",
        tagline: "Caring for People. Creating Opportunities.",
        description:
          "Employment, staffing, newcomer services, hospitality, settlement, language adaptation, and compassionate care.",
        href: "/acs",
        accentClass: "border-acs-secondary bg-acs-secondary/5",
      },
    ],
  },
  impact: {
    eyebrow: "Our Impact",
    title: "Leaves and Fruits",
    description: "The outcomes we pursue together across communities worldwide.",
    outcomes: [
      "Peaceful communities",
      "Trained leaders",
      "Employment opportunities",
      "Economic empowerment",
      "Social inclusion",
      "Community resilience",
      "Reconciliation",
      "Improved quality of life",
    ],
  },
  flow: {
    eyebrow: "How We Work Together",
    title: "Education → Leadership → Peacebuilding → Employment → Well-being",
    description:
      "GTN trains people. GPN helps them become peacebuilders and community leaders. ACS provides employment, care, and practical opportunities.",
    steps: [
      {
        title: "Training (GTN)",
        description:
          "We train leaders, professionals, educators, and community facilitators with knowledge and skills.",
        href: "/gtn",
      },
      {
        title: "Peacebuilding (GPN)",
        description:
          "They become peacebuilders and community transformation agents in their contexts.",
        href: "/gpn",
      },
      {
        title: "Care & Services (ACS)",
        description:
          "We provide employment, care, settlement, staffing, and practical opportunities.",
        href: "/acs",
      },
      {
        title: "Transformation (Together)",
        description:
          "Stronger individuals, peaceful communities, and inclusive societies for a better world.",
        href: "/about",
      },
    ],
  },
  founder: {
    name: ecosystemConfig.founder.name,
    title: `${ecosystemConfig.founder.title}, GPTC Ecosystem`,
    quote: ecosystemConfig.founder.quote,
    animatedPhrases: [
      "Together we plant peace,",
      "equip leaders,",
      "and transform lives—",
      "building stronger individuals, peaceful communities, and inclusive societies for a better world.",
    ],
    image: siteImages.ceoPortrait,
  },
  whyEcosystem: {
    eyebrow: "Why GPTC",
    title: "Holistic Human Transformation",
    description:
      "All three organizations promote human dignity, empower vulnerable populations, and foster inclusion and lifelong learning.",
    features: [
      {
        title: "Integrated Approach",
        description:
          "Education, peacebuilding, and care services designed to work together—not in isolation.",
        icon: "globe",
      },
      {
        title: "Community-Centred",
        description:
          "Programs shaped by the real needs of communities, families, and individuals we serve.",
        icon: "users",
      },
      {
        title: "Sustainable Impact",
        description:
          "Train-the-trainer models and community partnerships that multiply transformation over time.",
        icon: "heart-handshake",
      },
    ] satisfies FeatureItem[],
  },
  ctaBanner: {
    headline: "Join the Ecosystem",
    description: "Connect with GPTC to explore training, peacebuilding, or care services for your community.",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    analyticsLabel: "ecosystem_cta_banner",
  },
} as const;
