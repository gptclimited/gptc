export type LogoSymbol = {
  id: string;
  emoji: string;
  title: string;
  represents: string[];
  message: string;
  subsidiary?: {
    name: string;
    shortName: string;
    focusAreas: string[];
    symbolMeaning: string;
  };
};

export type LogoColor = {
  name: string;
  hex: string;
  represents: string[];
  associatedWith: string;
  message: string;
  className: string;
};

export const logoBrandStory = {
  overall:
    "The GPTC logo represents a complete ecosystem of transformation where education, peacebuilding, leadership, care, and opportunity work together to help individuals, families, and communities thrive.",
  journey:
    "Knowledge → Leadership → Peacebuilding → Employment → Community Well-being → Sustainable Transformation",
  oneSentence:
    "The GPTC logo tells the story of a global ecosystem where strong values (roots), a shared mission (trunk), specialized organizations (branches), and empowered people (leaves and fruit) work together to plant peace, equip leaders, and transform lives.",
} as const;

export const logoAbbreviation = {
  letters: "GPTC",
  fullName: "Global Peacebuilding, Training & Care Network",
  pillars: [
    {
      title: "Peacebuilding",
      description: "Creating reconciliation, healing, justice, and social cohesion.",
    },
    {
      title: "Training",
      description: "Equipping individuals with knowledge, leadership, and practical skills.",
    },
    {
      title: "Care",
      description:
        "Providing support, employment pathways, integration services, and compassionate assistance.",
    },
  ],
} as const;

export const logoMotto = {
  text: "Planting Peace. Equipping Leaders. Transforming Lives.",
  meanings: [
    {
      phrase: "Planting Peace",
      description: "Through reconciliation, dialogue, healing, and community building.",
    },
    {
      phrase: "Equipping Leaders",
      description: "Through education, mentorship, training, and leadership development.",
    },
    {
      phrase: "Transforming Lives",
      description:
        "Through employment, care services, opportunity creation, and holistic support.",
    },
  ],
} as const;

export const logoSymbols: LogoSymbol[] = [
  {
    id: "dove",
    emoji: "🕊",
    title: "The Dove",
    represents: ["Peace", "Reconciliation", "Hope", "Healing", "Unity"],
    message: "Peace is not simply the absence of conflict; it is the foundation for human flourishing.",
  },
  {
    id: "globe",
    emoji: "🌎",
    title: "The Globe",
    represents: [
      "Global impact",
      "International partnerships",
      "Cultural diversity",
      "Worldwide reach",
    ],
    message: "Our mission extends beyond borders to create positive change worldwide.",
  },
  {
    id: "tree",
    emoji: "🌳",
    title: "The Tree",
    represents: ["Growth", "Transformation", "Lifelong learning", "Sustainable development"],
    message: "Transformation grows when people are nurtured, empowered, and connected.",
  },
  {
    id: "roots",
    emoji: "🌱",
    title: "The Roots",
    represents: [
      "Peace",
      "Knowledge",
      "Human Dignity",
      "Justice",
      "Reconciliation",
      "Service",
      "Compassion",
      "Diversity",
      "Inclusion",
      "Faith",
      "Hope",
    ],
    message: "Strong roots create lasting impact.",
  },
  {
    id: "trunk",
    emoji: "🌲",
    title: "The Trunk",
    represents: [
      "Education",
      "Peacebuilding",
      "Leadership Development",
      "Compassionate Care",
    ],
    message: "Different programs. One mission.",
  },
  {
    id: "blue-figure",
    emoji: "👤",
    title: "Blue Figure — GTN",
    represents: ["Knowledge and capacity building"],
    message: "Equipping people with knowledge and skills.",
    subsidiary: {
      name: "Global Training Network",
      shortName: "GTN",
      focusAreas: [
        "Education",
        "Leadership",
        "Research",
        "Training",
        "Student Success",
      ],
      symbolMeaning: "Knowledge and capacity building.",
    },
  },
  {
    id: "green-figure",
    emoji: "👤",
    title: "Green Figure — GPN",
    represents: ["Peace and social transformation"],
    message: "Building peaceful and resilient communities.",
    subsidiary: {
      name: "Global Peacebuilding Network",
      shortName: "GPN",
      focusAreas: [
        "Peacebuilding",
        "Reconciliation",
        "Dialogue",
        "Conflict Resolution",
        "Community Healing",
      ],
      symbolMeaning: "Peace and social transformation.",
    },
  },
  {
    id: "gold-figure",
    emoji: "👤",
    title: "Gold Figure — ACS",
    represents: ["Opportunity and practical support"],
    message: "Transforming lives through care and opportunity.",
    subsidiary: {
      name: "Amani Care Services",
      shortName: "ACS",
      focusAreas: [
        "Employment",
        "Settlement Services",
        "Care Services",
        "Economic Empowerment",
        "Newcomer Support",
      ],
      symbolMeaning: "Opportunity and practical support.",
    },
  },
  {
    id: "leaves",
    emoji: "🌿",
    title: "The Leaves",
    represents: [
      "Trained leaders",
      "Educated students",
      "Peaceful communities",
      "Economic empowerment",
      "Employment opportunities",
      "Social inclusion",
      "Strong families",
      "Community resilience",
      "Reconciliation",
      "Improved quality of life",
    ],
    message: "Healthy roots produce meaningful results.",
  },
];

export const logoColors: LogoColor[] = [
  {
    name: "Blue",
    hex: "#0B3C5D",
    represents: ["Knowledge", "Leadership", "Excellence", "Trust"],
    associatedWith: "GTN",
    message: "Equipping leaders.",
    className: "bg-gtn-primary",
  },
  {
    name: "Green",
    hex: "#2D6A4F",
    represents: ["Peace", "Growth", "Renewal", "Community"],
    associatedWith: "GPN",
    message: "Planting peace.",
    className: "bg-emerald-700",
  },
  {
    name: "Gold",
    hex: "#F4B400",
    represents: ["Opportunity", "Prosperity", "Human potential", "Transformation"],
    associatedWith: "ACS",
    message: "Transforming lives.",
    className: "bg-gtn-accent text-gtn-neutral-800",
  },
];
