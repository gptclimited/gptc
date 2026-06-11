import type { ImageAsset } from "./types";

/**
 * Featured images for Insights articles.
 * Update paths here when replacing assets in `/public/assets/insights`.
 */
export const insightCoverImages = {
  "how-to-study-in-canada-as-an-international-student": {
    src: "/assets/insights/international-education.jpg",
    alt: "International students studying together on a university campus",
  },
  "top-scholarship-opportunities-for-international-students": {
    src: "/assets/insights/scholarships.jpg",
    alt: "Students learning in a bright classroom, representing scholarship and educational opportunity",
  },
  "educational-pathway-planning-explained": {
    src: "/assets/insights/admissions.jpg",
    alt: "Person planning an educational pathway at a desk with a laptop and notes",
  },
  "how-newcomers-can-successfully-integrate-into-canadian-communities": {
    src: "/assets/insights/newcomer-integration.jpg",
    alt: "Diverse group of people collaborating around a table in a welcoming community setting",
  },
  "leadership-skills-every-student-needs": {
    src: "/assets/insights/leadership.jpg",
    alt: "Team members collaborating around a whiteboard during a leadership workshop",
  },
  "conflict-resolution-strategies-for-families-and-communities": {
    src: "/assets/insights/peacebuilding.jpg",
    alt: "People engaged in a constructive group discussion to resolve conflict",
  },
  "ai-skills-every-student-should-learn": {
    src: "/assets/insights/digital-skills.jpg",
    alt: "Abstract visualization representing artificial intelligence and digital technology",
  },
  "supporting-family-success-in-education": {
    src: "/assets/insights/family-development.jpg",
    alt: "Family walking together outdoors, symbolizing shared support for educational success",
  },
} as const satisfies Record<string, ImageAsset>;

export function getInsightCoverImage(slug: string): ImageAsset | undefined {
  return insightCoverImages[slug as keyof typeof insightCoverImages];
}
