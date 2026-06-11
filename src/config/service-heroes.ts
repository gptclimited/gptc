import { siteImages } from "./images";
import type { ImageAsset } from "./types";
import type { ServiceCategory } from "@/types/service";

type ServiceHeroVisual = {
  backgroundImage: ImageAsset;
  backgroundPosition: string;
};

const defaultVisual: ServiceHeroVisual = {
  backgroundImage: siteImages.heroBackground,
  backgroundPosition: "right center",
};

/** Per-category focal points on the shared hero image for subtle visual variety. */
const categoryOverrides: Partial<Record<ServiceCategory, Partial<ServiceHeroVisual>>> = {
  "Educational Consulting": { backgroundPosition: "70% 35%" },
  "Newcomer Integration": { backgroundPosition: "60% 40%" },
  "Leadership Development": { backgroundPosition: "75% 30%" },
  "Peacebuilding & Reconciliation": { backgroundPosition: "65% 45%" },
  "Holistic Development": { backgroundPosition: "55% 35%" },
  "Biblical & Theological Studies": { backgroundPosition: "80% 40%" },
  "Digital Skills": { backgroundPosition: "72% 25%" },
  "Research & Policy": { backgroundPosition: "68% 38%" },
  Entrepreneurship: { backgroundPosition: "62% 32%" },
};

export function getServiceHeroVisual(category: ServiceCategory): ServiceHeroVisual {
  const override = categoryOverrides[category];
  return {
    ...defaultVisual,
    ...override,
  };
}
