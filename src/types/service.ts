export const serviceCategories = [
  "Educational Consulting",
  "Newcomer Integration",
  "Leadership Development",
  "Peacebuilding & Reconciliation",
  "Holistic Development",
  "Biblical & Theological Studies",
  "Digital Skills",
  "Research & Policy",
  "Entrepreneurship",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export interface ServicePage {
  slug: string;
  title: string;
  category: ServiceCategory;
  metaTitle: string;
  metaDescription: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  overview: string;
  whoWeServe: string[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
}
