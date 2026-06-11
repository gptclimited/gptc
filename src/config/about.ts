import { siteImages } from "./images";
import type { LeaderProfile, ValueItem } from "./types";

export const aboutConfig = {
  pageHeader: {
    title: "About GTN",
    description:
      "Global Training Network exists to guide learners and leaders from aspiration to achievement through consulting, training, mentorship, and educational pathways.",
  },

  ourStory: `Global Training Network was founded to bridge the gap between aspiration and achievement for learners, newcomers, families, and communities. From educational consulting and newcomer integration to leadership development and peacebuilding, GTN exists to provide trusted guidance at every stage of the journey.

What began as a commitment to support students navigating complex education systems has grown into a comprehensive network serving domestic and international learners, families, educational institutions, community organizations, and faith-based partners across Canada and beyond.`,

  vision:
    "A world where every learner and leader—regardless of background—has the guidance, skills, and support to thrive in education, work, and community life.",

  mission:
    "To empower students, newcomers, families, and communities through accessible consulting, training, mentorship, and educational pathways that turn aspiration into achievement.",

  strategicObjectives: [
    "Expand access to quality educational pathways for domestic and international students.",
    "Support newcomers with settlement, cultural orientation, and employment readiness.",
    "Develop ethical, capable leaders in youth, community, and faith-based contexts.",
    "Strengthen families and communities through holistic development and peacebuilding programs.",
    "Partner with institutions and organizations to deliver measurable, sustainable impact.",
  ],

  coreValues: [
    {
      title: "Integrity",
      description: "We act with honesty, transparency, and accountability in every relationship.",
    },
    {
      title: "Excellence",
      description: "We pursue high standards in consulting, training, and mentorship delivery.",
    },
    {
      title: "Compassion",
      description: "We meet people where they are with empathy, respect, and cultural sensitivity.",
    },
    {
      title: "Collaboration",
      description: "We work alongside clients, families, and partners—not above them.",
    },
    {
      title: "Empowerment",
      description: "We build capacity so individuals and communities can lead their own success.",
    },
    {
      title: "Service",
      description: "We exist to serve learners, leaders, and communities with purpose and impact.",
    },
  ] satisfies ValueItem[],

  expectedImpact: `Through our programs and partnerships, GTN aims to increase student success rates, accelerate newcomer integration, develop community leaders, and strengthen institutions serving diverse populations. Our impact is measured not only in outcomes achieved, but in lives transformed, families strengthened, and communities renewed.

We envision graduates who are confident in their pathways, newcomers who feel at home in their communities, and leaders equipped to guide others with wisdom and integrity.`,

  leadershipTeam: [
    {
      name: "Mutabazi Nsenga Shadrack",
      title: "Chief Executive Officer",
      bio: "Mutabazi Nsenga Shadrack leads Global Training Network with a focus on educational consulting, community development, and leadership formation. He is committed to helping students, newcomers, and organizations turn aspiration into measurable achievement.",
      image: siteImages.ceoPortrait,
    },
    {
      name: "Patricia Okonkwo",
      title: "Director of Programs",
      bio: "Patricia oversees program design and delivery across GTN’s consulting, training, and mentorship services. She brings experience in curriculum development, community partnerships, and outcomes-focused program management.",
    },
    {
      name: "David Chen",
      title: "Senior Education Advisor",
      bio: "David supports students and families with admissions strategy, pathway planning, and academic counseling. His background spans international education advising, scholarship guidance, and learner success coaching.",
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
