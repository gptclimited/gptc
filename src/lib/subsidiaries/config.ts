import type { SubsidiaryConfig, SubsidiarySlug } from "./types";

export const ecosystemConfig = {
  name: "Global Peacebuilding, Training and Care Ecosystem",
  shortName: "GPTC",
  motto: "Planting Peace. Equipping Leaders. Transforming Lives.",
  description:
    "A global ecosystem that equips leaders, builds peaceful communities, and provides practical care and economic opportunities for people, families, and societies.",
  mission:
    "To promote human dignity and social transformation through peacebuilding, education, leadership development, employment services, and compassionate care.",
  vision:
    "To become a global ecosystem that equips leaders, builds peaceful communities, and provides practical care and economic opportunities for people, families, and societies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltrainingnetwork.org",
  contact: {
    address: {
      street: "19897 82 Avenue",
      city: "Langley",
      province: "BC",
      postalCode: "V2Y 1Y7",
      country: "Canada",
    },
    phone: "604-727-6553",
    email: "info@globaltrainingnetwork.org",
  },
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
  founder: {
    name: "Mutabazi Nsenga Shadrack",
    title: "Founder & Chief Executive Officer",
    quote:
      "Together we plant peace, equip leaders, and transform lives—building stronger individuals, peaceful communities, and inclusive societies for a better world.",
  },
} as const;

export const subsidiaries: Record<SubsidiarySlug, SubsidiaryConfig> = {
  gpn: {
    slug: "gpn",
    name: "Global Peacebuilding Network",
    shortName: "GPN",
    tagline: "Building Peaceful and Just Communities",
    description:
      "Peace, reconciliation, governance, social justice, conflict transformation, dialogue, and trauma healing for communities worldwide.",
    primaryFocus:
      "Peace, reconciliation, governance, social justice, conflict transformation, dialogue, trauma healing.",
    guidingQuestion: "How can communities live together peacefully?",
    mainClients: [
      "Communities",
      "Churches",
      "Schools",
      "Refugees",
      "Governments",
      "Civil society",
    ],
    vision: "Building peaceful, inclusive, and resilient communities worldwide.",
    contactEmail: "info@globaltrainingnetwork.org",
    theme: {
      primary: "#0b3c5d",
      secondary: "#1d70b8",
      accent: "#38bdf8",
    },
  },
  gtn: {
    slug: "gtn",
    name: "Global Training Network",
    shortName: "GTN",
    tagline: "Equipping Leaders and Transforming Minds",
    description:
      "Education, research, leadership development, train-the-trainer programs, student consultancy, and workshops.",
    primaryFocus:
      "Education, research, leadership development, train-the-trainer programs, student consultancy, workshops.",
    guidingQuestion: "How do we equip people with knowledge and skills?",
    mainClients: ["Students", "Leaders", "Educators", "Churches", "Professionals"],
    vision: "Creating lifelong learners and transformative leaders.",
    contactEmail: "info@globaltrainingnetwork.org",
    theme: {
      primary: "#0b3c5d",
      secondary: "#1d70b8",
      accent: "#f4b400",
    },
  },
  acs: {
    slug: "acs",
    name: "Amani Care Services Inc.",
    shortName: "ACS",
    legalName: "Amani Care Services Inc.",
    tagline: "Caring for People. Creating Opportunities.",
    description:
      "Employment, staffing, newcomer services, hospitality, settlement, language adaptation, and compassionate care.",
    primaryFocus:
      "Employment, staffing, newcomer services, hospitality, settlement, language adaptation, care services.",
    guidingQuestion:
      "How do we improve people's quality of life and economic well-being?",
    mainClients: [
      "Newcomers",
      "Immigrants",
      "Refugees",
      "Seniors",
      "Families",
      "Employers",
      "Students",
    ],
    vision:
      "To become a leading social enterprise that creates opportunities, delivers compassionate care, and supports successful integration and well-being for diverse communities.",
    contactEmail: "info@globaltrainingnetwork.org",
    theme: {
      primary: "#7c2d12",
      secondary: "#ea580c",
      accent: "#fbbf24",
    },
  },
};

export const subsidiaryList: SubsidiaryConfig[] = [
  subsidiaries.gpn,
  subsidiaries.gtn,
  subsidiaries.acs,
];

export function getSubsidiary(slug: SubsidiarySlug): SubsidiaryConfig {
  return subsidiaries[slug];
}

export function getSubsidiaryForCategory(category: string): SubsidiarySlug {
  if (category.startsWith("Peacebuilding") || category === "Peacebuilding & Reconciliation") {
    return "gpn";
  }
  if (
    category.startsWith("Care") ||
    category.startsWith("Employment") ||
    category.startsWith("Settlement") ||
    category === "Newcomer Integration"
  ) {
    return "acs";
  }
  return "gtn";
}
