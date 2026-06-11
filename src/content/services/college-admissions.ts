import type { ServicePage } from "@/types/service";

export const collegeAdmissions: ServicePage = {
  slug: "college-admissions",
  title: "College Admissions",
  category: "Educational Consulting",
  metaTitle: "College Admissions Support in Canada | Global Training Network",
  metaDescription:
    "Expert college admissions consulting for domestic and international students. GTN helps you choose programs, prepare applications, and secure your place in college.",
  hero: {
    headline: "College Admissions Support",
    subheadline:
      "Personalized guidance to help students identify the right college programs, prepare strong applications, and move confidently toward their educational goals in Canada.",
  },
  overview: `Navigating college admissions can be complex—especially for international students and families unfamiliar with Canadian post-secondary pathways. Global Training Network provides expert college admissions consulting tailored to each student's academic background, career goals, and personal circumstances.

Our advisors help you understand program options, admission requirements, deadlines, and documentation expectations. Whether you are applying to a community college, technical institute, or university transfer pathway, we guide you through every stage of the process with clarity and confidence.

From initial program research to application submission and follow-up, GTN ensures you present your strongest candidacy while choosing a pathway aligned with your long-term success.`,
  whoWeServe: [
    "Domestic students exploring college options in Canada",
    "International students applying to Canadian colleges",
    "Parents and families supporting college-bound students",
    "Students transferring between institutions",
    "Graduates seeking career-focused college programs",
  ],
  benefits: [
    {
      title: "Program Matching",
      description:
        "Identify college programs aligned with your academic profile, interests, and career aspirations.",
    },
    {
      title: "Application Strategy",
      description:
        "Develop a clear plan for deadlines, documents, personal statements, and supporting materials.",
    },
    {
      title: "Document Review",
      description:
        "Receive feedback on application components to ensure completeness, accuracy, and impact.",
    },
    {
      title: "International Student Support",
      description:
        "Understand study permit requirements and how college admission fits your broader pathway in Canada.",
    },
    {
      title: "Confidence & Clarity",
      description:
        "Reduce stress with step-by-step guidance from experienced educational advisors.",
    },
  ],
  process: [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We assess your academic history, goals, and timeline to understand your admissions needs.",
    },
    {
      step: 2,
      title: "Program Research & Selection",
      description:
        "Together we identify college programs that match your profile and long-term objectives.",
    },
    {
      step: 3,
      title: "Application Preparation",
      description:
        "We guide document gathering, personal statements, and submission requirements.",
    },
    {
      step: 4,
      title: "Submission & Follow-Up",
      description:
        "Support through application submission, status tracking, and next-step planning.",
    },
    {
      step: 5,
      title: "Enrollment Planning",
      description:
        "Prepare for acceptance, registration, and transition into your chosen college program.",
    },
  ],
  faq: [
    {
      question: "When should I start my college application process?",
      answer:
        "We recommend starting 12–18 months before your intended start date. Early planning gives you time to research programs, prepare documents, and meet competitive deadlines—especially for international applicants.",
    },
    {
      question: "Can GTN help international students apply to Canadian colleges?",
      answer:
        "Yes. We specialize in supporting international students with program selection, application preparation, and understanding how college admission connects to study permit and pre-departure planning.",
    },
    {
      question: "Do you help with personal statements and application essays?",
      answer:
        "We provide guidance on structure, content, and messaging to help you communicate your strengths authentically. Our focus is on helping you tell your story effectively within each institution's requirements.",
    },
    {
      question: "What is the difference between college and university pathways?",
      answer:
        "College programs often emphasize applied skills and career-ready training, while universities typically focus on broader academic degrees. We help you understand both pathways and choose the option best suited to your goals.",
    },
    {
      question: "How do I book a college admissions consultation?",
      answer:
        "Contact us through our consultation form or call our Langley office. We will schedule an initial meeting to discuss your goals and outline a personalized admissions plan.",
    },
  ],
  relatedSlugs: ["university-admissions", "program-matching", "scholarship-support"],
};
