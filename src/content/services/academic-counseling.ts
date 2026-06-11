import type { ServicePage } from "@/types/service";

export const academicCounseling: ServicePage = {
  slug: "academic-counseling",
  title: "Academic Counseling",
  category: "Educational Consulting",
  metaTitle: "Academic Counseling for Students | GTN Canada",
  metaDescription:
    "Academic counseling for students in Canada. GTN supports course selection, study strategies, performance improvement, and informed educational decisions.",
  hero: {
    headline: "Academic Counseling",
    subheadline:
      "One-on-one academic counseling that helps students strengthen performance, make informed course decisions, and build the habits and confidence needed for long-term educational success.",
  },
  overview: `Academic success depends on more than intelligence—it requires effective study habits, thoughtful course selection, time management, and the confidence to navigate challenges when they arise. Many capable students underperform not because they lack ability, but because they have never been taught how to learn strategically within Canadian academic systems. The transition from high school to post-secondary, or from one institution to another, often exposes gaps in these foundational skills that counseling can address effectively. Global Training Network provides academic counseling for students at the secondary and post-secondary levels who want structured support to improve performance, overcome obstacles, and make informed educational decisions.

Our counselors work with you to assess current academic standing, identify areas for improvement, and develop personalized strategies for coursework, exam preparation, and assignment management. We also guide course and program selection decisions that affect graduation timelines, university admission eligibility, and career readiness. Support is tailored to each learner's strengths, learning style, and personal circumstances—including the adjustment challenges faced by international students encountering new grading systems, classroom norms, and academic integrity expectations for the first time. Sessions are structured to produce measurable improvement, not just temporary fixes.

Whether you are struggling with a particular subject, preparing for a competitive program, or seeking accountability during a demanding academic term, GTN offers compassionate, practical counseling grounded in evidence-based approaches. Our goal is to help you become a more effective, self-directed learner while achieving your immediate academic objectives. Regular counseling sessions provide accountability, celebrate progress, and adjust strategies as your courses and goals evolve. Academic counseling with GTN builds skills that serve you well beyond any single semester or program, including note-taking systems, exam anxiety management, and communication with instructors when you need additional support. Our counselors are committed to your sustained academic growth and long-term success in Canadian and international education settings.`,
  whoWeServe: [
    "High school students seeking academic performance support",
    "University and college students facing coursework challenges",
    "International students adjusting to Canadian academic expectations",
    "Students on academic probation seeking recovery strategies",
    "Parents seeking guidance on supporting their child's academic growth",
  ],
  benefits: [
    {
      title: "Personalized Study Strategies",
      description:
        "Develop study techniques, note-taking methods, and exam preparation approaches matched to your learning style.",
    },
    {
      title: "Course Selection Guidance",
      description:
        "Choose courses strategically to meet graduation, prerequisite, and admission requirements on schedule.",
    },
    {
      title: "Performance Improvement Plans",
      description:
        "Identify root causes of academic difficulty and implement targeted action plans with measurable goals.",
    },
    {
      title: "Time & Stress Management",
      description:
        "Build organizational skills and coping strategies to manage workload, deadlines, and academic pressure.",
    },
    {
      title: "Accountability & Motivation",
      description:
        "Regular check-ins that keep you on track, celebrate progress, and adjust strategies as needed.",
    },
  ],
  process: [
    {
      step: 1,
      title: "Academic Assessment",
      description:
        "We review transcripts, current courses, study habits, and challenges to understand your academic profile.",
    },
    {
      step: 2,
      title: "Goal Setting",
      description:
        "Together we define clear, achievable academic goals for the current term and beyond.",
    },
    {
      step: 3,
      title: "Strategy Development",
      description:
        "We create a personalized plan covering study routines, resource use, and course decisions.",
    },
    {
      step: 4,
      title: "Ongoing Counseling Sessions",
      description:
        "Regular meetings to monitor progress, troubleshoot difficulties, and refine your approach.",
    },
    {
      step: 5,
      title: "Progress Evaluation",
      description:
        "Review outcomes at term end and plan next steps for continued academic growth.",
    },
  ],
  faq: [
    {
      question: "What is the difference between academic counseling and tutoring?",
      answer:
        "Tutoring focuses on specific subject content, while academic counseling addresses broader skills such as study strategies, time management, course planning, and performance habits. GTN offers counseling that complements subject-specific tutoring.",
    },
    {
      question: "Can academic counseling help students on academic probation?",
      answer:
        "Yes. We work with students facing academic standing concerns to develop recovery plans, improve study habits, and meet institutional requirements for returning to good standing.",
    },
    {
      question: "Do you counsel international students adjusting to Canadian schools?",
      answer:
        "Absolutely. We help international students understand Canadian grading systems, classroom expectations, academic integrity standards, and effective participation strategies.",
    },
    {
      question: "How often are academic counseling sessions scheduled?",
      answer:
        "Frequency depends on your needs—weekly during challenging terms, biweekly for ongoing support, or as-needed for specific decisions. We tailor the schedule during your initial consultation.",
    },
    {
      question: "How do I book an academic counseling session?",
      answer:
        "Contact GTN through our consultation form or Langley office. We will schedule an initial assessment to understand your academic needs and recommend a counseling plan.",
    },
  ],
  relatedSlugs: ["education-pathway-planning", "career-pathway-development", "graduate-school-admissions"],
};
