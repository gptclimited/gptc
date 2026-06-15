import type { SubsidiarySlug } from "@/lib/subsidiaries";
import { subsidiaries } from "@/lib/subsidiaries";
import type { ServiceCategory, ServicePage } from "@/types/service";

type ServiceInput = {
  slug: string;
  subsidiary: SubsidiarySlug;
  title: string;
  category: ServiceCategory;
  metaDescription: string;
  subheadline: string;
  overview: string;
  whoWeServe: string[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedSlugs?: string[];
};

export function createServicePage(input: ServiceInput): ServicePage {
  const org = subsidiaries[input.subsidiary];

  return {
    slug: input.slug,
    subsidiary: input.subsidiary,
    title: input.title,
    category: input.category,
    metaTitle: `${input.title} | ${org.name}`,
    metaDescription: input.metaDescription,
    hero: {
      headline: input.title,
      subheadline: input.subheadline,
    },
    overview: input.overview,
    whoWeServe: input.whoWeServe,
    benefits: input.benefits,
    process: input.process,
    faq: input.faq,
    relatedSlugs: input.relatedSlugs ?? [],
  };
}

export function defaultProcess(title: string) {
  return [
    {
      step: 1,
      title: "Initial Consultation",
      description: `We begin with a conversation to understand your goals, context, and how ${title.toLowerCase()} can support your journey.`,
    },
    {
      step: 2,
      title: "Personalized Plan",
      description:
        "Our team develops a tailored approach aligned with your needs, timeline, and the outcomes you want to achieve.",
    },
    {
      step: 3,
      title: "Delivery & Support",
      description:
        "We deliver programs, coaching, or services with practical tools, ongoing guidance, and measurable progress.",
    },
    {
      step: 4,
      title: "Sustainable Outcomes",
      description:
        "We help you build skills, connections, and confidence that continue beyond the program for lasting transformation.",
    },
  ];
}

export function defaultBenefits(title: string) {
  return [
    {
      title: "Expert Guidance",
      description: `Experienced facilitators and advisors who understand the realities of ${title.toLowerCase()}.`,
    },
    {
      title: "Practical Approach",
      description:
        "Programs designed for real-world application—not theory alone, but tools you can use immediately.",
    },
    {
      title: "Community Connection",
      description:
        "Access to networks, peers, and partners who support your growth and shared goals.",
    },
  ];
}

export function defaultFaq(title: string, orgName: string) {
  return [
    {
      question: `Who is ${title} designed for?`,
      answer: `${title} serves individuals, families, and organizations seeking structured support. Contact ${orgName} to discuss whether this program fits your situation.`,
    },
    {
      question: "How do I get started?",
      answer:
        "Book a consultation through our contact page. We will discuss your goals and recommend the best next steps.",
    },
    {
      question: "Are programs available online or in person?",
      answer:
        "Many programs are offered in hybrid formats—online, in person, or both—depending on the program and your location.",
    },
    {
      question: "What outcomes can I expect?",
      answer:
        "Outcomes vary by program, but our focus is always on practical skills, confidence, and sustainable progress toward your goals.",
    },
  ];
}
