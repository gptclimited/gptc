import { acsHomeConfig } from "@/config/acs/home";
import { gpnHomeConfig } from "@/config/gpn/home";
import { gtnHomeConfig } from "@/config/gtn/home";
import { ecosystemConfig } from "@/lib/subsidiaries";
import { siteImages } from "@/config/images";
import type { CtaLink, FeatureItem, ProgramServiceItem, StatItem, TestimonialItem, ValueItem } from "@/config/types";

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
  missionVision: {
    vision: {
      eyebrow: "Our Vision",
      title: "Empowering Through Holistic Transformation",
      description:
        "To empower students, newcomers, families, and communities through education, mentorship, leadership development, reconciliation, and holistic transformation.",
    },
    mission: {
      eyebrow: "Our Mission",
      title: "Programs That Support Lasting Change",
      description:
        "To provide consulting, training, mentorship, and educational programs that support academic success, personal growth, social integration, leadership excellence, and community development.",
    },
  },
  roots: {
    eyebrow: "Our Roots",
    title: "Values That Nourish All We Do",
    description:
      "Like a tree, our ecosystem grows from strong roots—the values, faith, and convictions that nourish peacebuilding, training, and care across everything we do.",
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
      "Sustainable transformation requires interconnected solutions. Conflict, trauma, displacement, unemployment, and social division cannot be solved by one organization alone—so each specializes in a distinct dimension of human transformation.",
    items: [
      {
        slug: "gpn" as const,
        name: "Global Peacebuilding Network",
        shortName: "GPN",
        tagline: "Healing the Past, Transforming the Present, Building the Future",
        description:
          "The roots of our ecosystem. GPN rebuilds trust and restores relationships among individuals, communities, and nations through reconciliation, dialogue, trauma healing, and leadership development.",
        href: "/gpn",
        accentClass: "border-gpn-secondary bg-gpn-secondary/5",
      },
      {
        slug: "gtn" as const,
        name: "Global Training Network",
        shortName: "GTN",
        tagline: "Equipping People Who Transform Communities",
        description:
          "The trunk of our ecosystem. GTN connects vision with action—equipping leaders, students, professionals, and organizations with the knowledge and practical skills needed for transformation.",
        href: "/gtn",
        accentClass: "border-gtn-secondary bg-gtn-secondary/5",
      },
      {
        slug: "acs" as const,
        name: "Amani Care Services Inc.",
        shortName: "ACS",
        tagline: "Turning Peace and Training Into Practical Human Support",
        description:
          "The branches and fruits of our ecosystem. “Amani” means “Peace.” ACS turns values into action—supporting newcomers, families, and workers through care, employment support, and community services.",
        href: "/acs",
        accentClass: "border-acs-secondary bg-acs-secondary/5",
      },
    ],
  },
  impact: {
    eyebrow: "Our Impact",
    title: "Leaves and Fruits",
    description:
      "Like a healthy tree, our ecosystem bears fruit: healed communities, new opportunities, transformed lives, and lasting peace.",
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
  programServices: {
    eyebrow: "What We Offer",
    title: "Programs & Services",
    description:
      "Consulting, training, and mentorship across education, integration, leadership, peacebuilding, and holistic human development.",
    items: [
      {
        title: "Student Recruitment and Educational Consulting",
        shortTitle: "Educational Consulting",
        goal: "Support students in accessing quality educational opportunities and achieving academic success.",
        activities: [
          "Student recruitment for secondary schools, colleges, and universities.",
          "Educational pathway planning.",
          "Admission guidance and application support.",
          "Scholarship and funding consultations.",
          "Career exploration and academic advising.",
          "Orientation programs for new students.",
          "Parent and family educational support sessions.",
        ],
        outcomes: [
          "Increased student enrollment.",
          "Improved student retention and success.",
          "Better educational and career decision-making.",
        ],
      },
      {
        title: "Newcomer and International Student Integration",
        shortTitle: "Newcomer Integration",
        goal: "Facilitate successful settlement and integration into society.",
        activities: [
          "Settlement and adaptation workshops.",
          "Cultural orientation programs.",
          "Cross-cultural communication training.",
          "Mentorship programs.",
          "Networking opportunities.",
          "Employment readiness coaching.",
          "Community engagement initiatives.",
        ],
        outcomes: [
          "Improved social integration.",
          "Increased confidence and belonging.",
          "Stronger community connections.",
        ],
      },
      {
        title: "Biblical and Theological Studies",
        shortTitle: "Biblical Studies",
        goal: "Promote spiritual growth, biblical literacy, and ethical leadership.",
        activities: [
          "Biblical studies courses.",
          "Theological education seminars.",
          "Leadership development from a biblical perspective.",
          "Christian discipleship programs.",
          "Faith and society discussions.",
          "Biblical conflict resolution training.",
          "Church leadership workshops.",
        ],
        outcomes: [
          "Stronger spiritual foundations.",
          "Effective servant leadership.",
          "Increased biblical understanding.",
        ],
      },
      {
        title: "Holistic Development Programs",
        shortTitle: "Holistic Development",
        goal: "Develop the whole person intellectually, emotionally, spiritually, socially, and professionally.",
        activities: [
          "Personal development workshops.",
          "Emotional intelligence training.",
          "Leadership and character development.",
          "Goal-setting and life planning sessions.",
          "Mental wellness and resilience training.",
          "Family and relationship enrichment programs.",
        ],
        outcomes: [
          "Increased personal effectiveness.",
          "Stronger leadership capacity.",
          "Enhanced well-being.",
        ],
      },
      {
        title: "Social Workshops and Community Engagement",
        shortTitle: "Community Engagement",
        goal: "Strengthen social cohesion and community participation.",
        activities: [
          "Community dialogue forums.",
          "Youth empowerment workshops.",
          "Family support programs.",
          "Civic engagement training.",
          "Volunteer development initiatives.",
          "Diversity and inclusion workshops.",
        ],
        outcomes: [
          "Greater community participation.",
          "Stronger social networks.",
          "Improved civic responsibility.",
        ],
      },
      {
        title: "Reconciliation and Peacebuilding Training",
        shortTitle: "Peacebuilding",
        goal: "Promote peaceful coexistence and constructive conflict transformation.",
        activities: [
          "Peacebuilding workshops.",
          "Mediation and negotiation training.",
          "Trauma-informed reconciliation programs.",
          "Community healing dialogues.",
          "Conflict transformation seminars.",
          "Restorative justice education.",
        ],
        outcomes: [
          "Reduced conflict.",
          "Improved relationships.",
          "Stronger community harmony.",
        ],
      },
      {
        title: "Training for Social Dynamics Change",
        shortTitle: "Social Dynamics",
        goal: "Equip individuals and organizations to navigate social transformation effectively.",
        activities: [
          "Social change leadership training.",
          "Community development strategies.",
          "Organizational change management.",
          "Public engagement and advocacy training.",
          "Social innovation workshops.",
          "Systems thinking and problem-solving seminars.",
        ],
        outcomes: [
          "Increased leadership effectiveness.",
          "Sustainable social impact.",
          "Stronger community resilience.",
        ],
      },
      {
        title: "Specialized Training & Professional Programs",
        shortTitle: "Specialized Programs",
        goal: "Expand leadership, research, entrepreneurship, and digital capacity across individuals and institutions.",
        activities: [
          "Ethical leadership and governance training.",
          "Strategic planning and organizational development consulting.",
          "Educational research and community needs assessments.",
          "Policy analysis, recommendations, and program evaluation.",
          "Entrepreneurship training and business development mentoring.",
          "Financial literacy and social enterprise development.",
          "Youth leadership academy programs.",
          "Public speaking, communication, and mentorship coaching.",
          "Cultural competence and diversity, equity, and inclusion education.",
          "Interfaith dialogue and global citizenship training.",
          "Digital literacy and artificial intelligence awareness workshops.",
          "Research, academic technology, and online learning success strategies.",
        ],
        outcomes: [
          "Stronger institutional and community leadership.",
          "Evidence-informed program and policy development.",
          "Economic opportunity and entrepreneurial growth.",
          "Youth prepared for civic and community service.",
          "Inclusive, intercultural collaboration.",
          "Digital readiness for learning and innovation.",
        ],
      },
    ] satisfies ProgramServiceItem[],
    consultingAreas: [
      "Student recruitment and enrollment management.",
      "Educational partnerships and institutional development.",
      "Newcomer integration strategies.",
      "Community development initiatives.",
      "Leadership and organizational transformation.",
      "Reconciliation and peacebuilding programs.",
      "Training design and facilitation.",
      "Biblical and theological education.",
      "Research, monitoring, and evaluation.",
    ],
    expectedImpact: [
      "Empower students for academic and professional success.",
      "Support newcomers and international students in thriving within their new communities.",
      "Develop ethical and transformative leaders.",
      "Strengthen families and communities.",
      "Promote reconciliation, peace, and social cohesion.",
      "Foster sustainable social and educational transformation.",
      "Advance holistic human development for individuals and institutions.",
    ],
  },
  flow: {
    eyebrow: "How We Work Together",
    title: "Healing → Empowerment → Service → Sustainable Change",
    description:
      "GPN restores relationships and lays the foundation of peace. GTN equips people with knowledge, skills, and leadership capacity. ACS turns peace and training into practical services that improve lives.",
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
  coreValues: {
    eyebrow: "What Guides Us",
    title: "Our Core Values",
    items: [
      {
        title: "Integrity",
        description:
          "We uphold honesty, transparency, accountability, and ethical conduct in every service we provide, building trust with students, families, institutions, and communities.",
      },
      {
        title: "Excellence",
        description:
          "We pursue the highest standards of quality, professionalism, innovation, and continuous improvement in our consulting, training, and educational programs.",
      },
      {
        title: "Compassion",
        description:
          "We serve every individual with love, empathy, dignity, and respect, recognizing the unique needs and potential of each person.",
      },
      {
        title: "Peace and Reconciliation",
        description:
          "We are committed to promoting peaceful relationships, dialogue, forgiveness, conflict transformation, and reconciliation within individuals, families, institutions, and communities.",
      },
      {
        title: "Holistic Development",
        description:
          "We believe in developing the whole person—intellectually, spiritually, emotionally, socially, ethically, and professionally—to achieve lasting transformation.",
      },
      {
        title: "Servant Leadership",
        description:
          "We lead by serving others with humility, responsibility, wisdom, and a commitment to empowering individuals and communities.",
      },
      {
        title: "Diversity and Inclusion",
        description:
          "We value cultural diversity, mutual respect, equity, and inclusion, creating welcoming environments where every person feels valued and belongs.",
      },
      {
        title: "Lifelong Learning",
        description:
          "We encourage continuous learning, critical thinking, innovation, research, and personal growth to prepare individuals for changing local and global realities.",
      },
      {
        title: "Collaboration",
        description:
          "We believe meaningful transformation is achieved through partnerships with students, families, educational institutions, churches, community organizations, governments, and international partners.",
      },
      {
        title: "Empowerment",
        description:
          "We equip individuals with knowledge, practical skills, confidence, and opportunities to become leaders and positive contributors to society.",
      },
      {
        title: "Justice and Human Dignity",
        description:
          "We uphold the inherent dignity of every person and advocate for fairness, human rights, social responsibility, and equal opportunities for all.",
      },
      {
        title: "Faith and Hope",
        description:
          "Inspired by biblical principles, we cultivate faith, hope, moral character, and spiritual maturity while encouraging people to become agents of transformation in their communities.",
      },
      {
        title: "Innovation",
        description:
          "We embrace creativity, research, technology, and evidence-based solutions to address educational, social, and community challenges.",
      },
      {
        title: "Community Impact",
        description:
          "We measure success by the positive and sustainable transformation we bring to individuals, families, institutions, and society through education, peacebuilding, and service.",
      },
      {
        title: "Global Citizenship",
        description:
          "We prepare people to become responsible global citizens who contribute to peace, sustainable development, intercultural understanding, and the common good across nations.",
      },
    ] satisfies ValueItem[],
  },
  testimonials: {
    eyebrow: "Stories Across the Ecosystem",
    title: "Testimonials",
    description:
      "Voices from communities, students, families, and partners who have walked the journey with GPN, GTN, and ACS.",
    items: [
      gpnHomeConfig.testimonials.items[0],
      gpnHomeConfig.testimonials.items[1],
      gpnHomeConfig.testimonials.items[2],
      gtnHomeConfig.testimonials.items[0],
      gtnHomeConfig.testimonials.items[1],
      gtnHomeConfig.testimonials.items[2],
      acsHomeConfig.testimonials.items[0],
      acsHomeConfig.testimonials.items[1],
    ] satisfies TestimonialItem[],
  },
  ctaBanner: {
    headline: "Join the Ecosystem",
    description: "Connect with GPTC to explore training, peacebuilding, or care services for your community.",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    analyticsLabel: "ecosystem_cta_banner",
  },
} as const;
