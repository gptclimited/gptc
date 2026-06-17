import { siteImages } from "./images";
import { ecosystemConfig } from "@/lib/subsidiaries";
import type { LeaderProfile, ValueItem } from "./types";

export const aboutConfig = {
  pageHeader: {
    title: "About the GPTC Ecosystem",
    description:
      "Global Peacebuilding, Training and Care Ecosystem—three organizations united by one mission to promote human dignity and social transformation.",
  },

  ourStory: `The Global Peacebuilding, Training and Care Ecosystem (GPTC) is built on a simple truth: sustainable transformation requires interconnected solutions. Human challenges such as conflict, trauma, displacement, unemployment, social division, and inequality cannot be solved by one organization alone.

That is why three specialized organizations work together as one ecosystem. Like a tree, our ecosystem has strong roots, a growing trunk, expanding branches, and fruits that bring hope and transformation to communities. Global Peacebuilding Network (GPN) forms the roots—rebuilding trust and restoring relationships through reconciliation, dialogue, and trauma healing. Global Training Network (GTN) is the trunk—connecting vision with action by equipping leaders with knowledge and practical skills. Amani Care Services Inc. (ACS) represents the branches and fruits—turning peace and training into practical care, employment support, and community services.

Together, these three branches form a complete pathway: Education → Leadership → Peacebuilding → Employment → Community Well-being → Sustainable Development. Lasting change does not come from one person or one organization alone; it comes when many connected parts work together in a healthy relationship.`,

  vision: ecosystemConfig.vision,

  mission: ecosystemConfig.mission,

  strategicObjectives: [
    "Equip leaders and learners through accessible education and training programs.",
    "Build peaceful, inclusive communities through reconciliation and dialogue.",
    "Provide employment, care, and settlement services for newcomers and vulnerable populations.",
    "Foster inclusion, diversity, and lifelong learning across all programs.",
    "Partner with communities, institutions, and organizations for sustainable transformation.",
  ],

  coreValues: [
    { title: "Human Dignity", description: "Every person deserves respect, opportunity, and belonging." },
    { title: "Peace", description: "We pursue reconciliation and non-violent transformation." },
    { title: "Compassion", description: "We meet people where they are with empathy and care." },
    { title: "Inclusion", description: "We celebrate diversity and build bridges across differences." },
    { title: "Learning", description: "We commit to lifelong education and knowledge sharing." },
    { title: "Service", description: "We exist to serve individuals, families, and communities." },
  ] satisfies ValueItem[],

  expectedImpact: `Through our integrated ecosystem, GPTC aims to develop trained and ethical leaders, build peaceful and reconciled communities, create employment and economic growth, and support social inclusion and holistic development.

We envision empowered individuals and families, stronger institutions, and sustainable, resilient societies—transformed through the combined work of GPN, GTN, and ACS.

We believe transformation begins with one person, grows through communities, and changes systems—turning wounded individuals into healers, trained leaders into changemakers, and divided communities into places of peace, dignity, and opportunity.`,

  leadershipTeam: [
    {
      name: ecosystemConfig.founder.name,
      title: `${ecosystemConfig.founder.title}, GPTC Ecosystem`,
      bio: "Mutabazi Nsenga Shadrack founded and leads the GPTC ecosystem with a vision for holistic human transformation—integrating peacebuilding, education, and compassionate care to serve communities across Canada and beyond.",
      image: siteImages.ceoPortrait,
    },
    {
      name: "Patricia Okonkwo",
      title: "Director of Programs, GTN",
      bio: "Patricia oversees program design and delivery across GTN's consulting, training, and mentorship services.",
    },
    {
      name: "David Chen",
      title: "Senior Education Advisor, GTN",
      bio: "David supports students and families with admissions strategy, pathway planning, and academic counseling.",
    },
  ] satisfies LeaderProfile[],
} as const;

export const contactConfig = {
  officeInfo: {
    hours: "Monday–Friday, 9:00 AM – 5:00 PM PST",
    directions:
      "Our office is located at 19897 82 Avenue in Langley, British Columbia. We welcome in-person consultations by appointment.",
    parking:
      "Free parking is available on-site. The building is wheelchair accessible with ramp access at the main entrance.",
  },

  mapEmbedUrl:
    "https://maps.google.com/maps?q=19897+82+Avenue,+Langley,+BC+V2Y+1Y7&hl=en&z=15&output=embed",

  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=19897+82+Avenue,+Langley,+BC+V2Y+1Y7",
} as const;
