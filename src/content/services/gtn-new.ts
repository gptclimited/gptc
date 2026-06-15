import {
  createServicePage,
  defaultBenefits,
  defaultFaq,
  defaultProcess,
} from "@/lib/content/service-factory";

const org = "Global Training Network";

export const trainTheTrainerAcademy = createServicePage({
  slug: "train-the-trainer-academy",
  subsidiary: "gtn",
  title: "Train-the-Trainer Academy",
  category: "Leadership Development",
  metaDescription:
    "GTN's Train-the-Trainer Academy certifies community facilitators, church leaders, peace educators, and youth leaders to multiply knowledge sustainably.",
  subheadline:
    "Certifying trainers who multiply knowledge in communities, churches, schools, and organizations worldwide.",
  overview: `The Train-the-Trainer Academy is Global Training Network's flagship multiplication program. We train community facilitators, church leaders, peace educators, youth leaders, and newcomer support workers to deliver high-quality education in their own contexts.

Participants learn adult learning principles, curriculum design, facilitation skills, assessment methods, and coaching techniques. Graduates receive certification and join a network of trainers who extend GTN's impact far beyond any single classroom.

The Academy connects directly to GPN's peacebuilding work and ACS's newcomer services—trainers emerge equipped to serve across the GPTC ecosystem. Expected outcomes include certified trainers, multiplication of knowledge, and sustainable community education systems.`,
  whoWeServe: [
    "Community facilitators and educators",
    "Church and faith leaders",
    "Peace educators and youth leaders",
    "Newcomer support workers",
    "Organizational training coordinators",
  ],
  benefits: [
    {
      title: "Certified Credentials",
      description:
        "Graduates receive recognized certification as trainers within the GTN network.",
    },
    {
      title: "Multiplication Impact",
      description:
        "Train others in your community—extending reach exponentially beyond direct teaching.",
    },
    {
      title: "Cross-Ecosystem Skills",
      description:
        "Training applicable across education, peacebuilding, and community care contexts.",
    },
  ],
  process: defaultProcess("Train-the-Trainer Academy"),
  faq: defaultFaq("Train-the-Trainer Academy", org),
  relatedSlugs: ["leadership-development", "youth-leadership-academy", "public-speaking-training"],
});

export const academicWritingResearchCentre = createServicePage({
  slug: "academic-writing-research-centre",
  subsidiary: "gtn",
  title: "Academic Writing and Research Centre",
  category: "Research & Policy",
  metaDescription:
    "Academic writing support, research methodology training, and publication guidance for students, scholars, and professionals from GTN.",
  subheadline:
    "Expert support for academic writing, research design, and scholarly publication.",
  overview: `The Academic Writing and Research Centre supports students, scholars, and professionals in producing high-quality academic work. Services include thesis and dissertation coaching, research methodology training, literature review guidance, citation and formatting support, and publication preparation.

Our advisors combine academic expertise with practical mentorship—helping learners navigate the often overwhelming demands of graduate-level writing and research. Whether you are completing a master's thesis, preparing a journal article, or designing a community research project, the Centre provides structured support at every stage.

The Centre complements GTN's educational consulting and connects to GPN's research on peacebuilding and ACS's community needs assessments.`,
  whoWeServe: [
    "Graduate and postgraduate students",
    "Academic researchers and faculty",
    "Community-based researchers",
    "International students writing in English",
    "Professionals preparing scholarly publications",
  ],
  benefits: defaultBenefits("Academic Writing and Research Centre"),
  process: defaultProcess("Academic Writing and Research Centre"),
  faq: defaultFaq("Academic Writing and Research Centre", org),
  relatedSlugs: ["educational-research", "graduate-school-admissions", "research-technology-skills"],
});

export const womenLeadershipAcademy = createServicePage({
  slug: "women-leadership-academy",
  subsidiary: "gtn",
  title: "Women Leadership Academy",
  category: "Leadership Development",
  metaDescription:
    "GTN's Women Leadership Academy develops ethical, confident women leaders through training, mentoring, and community for professional and community impact.",
  subheadline:
    "Developing women leaders equipped for professional excellence, community impact, and ethical governance.",
  overview: `The Women Leadership Academy empowers women to lead with confidence, integrity, and impact—in workplaces, communities, churches, and civic life. Programs combine leadership theory, practical skills, mentoring, peer networks, and coaching tailored to the unique challenges women leaders often face.

Topics include strategic leadership, public speaking, governance, negotiation, work-life integration, and building supportive networks. The Academy creates space for women to learn from one another, share experiences, and grow together.

Graduates join a community of women leaders connected across the GPTC ecosystem—including pathways to GPN's Women and Peace Initiative and ACS community programs.`,
  whoWeServe: [
    "Emerging and mid-career women leaders",
    "Professionals seeking leadership advancement",
    "Community and faith-based women leaders",
    "Entrepreneurs and social enterprise founders",
    "Young women preparing for leadership roles",
  ],
  benefits: defaultBenefits("Women Leadership Academy"),
  process: defaultProcess("Women Leadership Academy"),
  faq: defaultFaq("Women Leadership Academy", org),
  relatedSlugs: ["leadership-development", "ethical-leadership", "governance-development"],
});

export const socialDynamicsCommunityDevelopment = createServicePage({
  slug: "social-dynamics-community-development",
  subsidiary: "gtn",
  title: "Social Dynamics and Community Development Studies",
  category: "Research & Policy",
  metaDescription:
    "Study social dynamics and community development with GTN—research, training, and practical tools for building stronger, more inclusive communities.",
  subheadline:
    "Understanding social dynamics to design effective community development strategies and programs.",
  overview: `Social Dynamics and Community Development Studies examines how communities function, change, and thrive. This program combines research, training, and practical tools for community developers, NGO staff, faith leaders, and civic actors who want to understand and influence social dynamics effectively.

Topics include community needs assessment, asset-based community development, social capital, inclusion and exclusion dynamics, program design, and evaluation. Participants learn to read community contexts accurately and design interventions that build on local strengths.

The program bridges GTN's research capacity with GPN's peacebuilding and ACS's community services—preparing leaders who understand communities holistically.`,
  whoWeServe: [
    "Community development practitioners",
    "NGO and nonprofit staff",
    "Faith and civic leaders",
    "Researchers and graduate students",
    "Policy and program designers",
  ],
  benefits: defaultBenefits("Social Dynamics and Community Development Studies"),
  process: defaultProcess("Social Dynamics and Community Development Studies"),
  faq: defaultFaq("Social Dynamics and Community Development Studies", org),
  relatedSlugs: ["community-needs-assessment", "program-evaluation", "policy-development"],
});

export const gtnNewServices = [
  trainTheTrainerAcademy,
  academicWritingResearchCentre,
  womenLeadershipAcademy,
  socialDynamicsCommunityDevelopment,
];
