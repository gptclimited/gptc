import type { ImageAsset } from "./types";

/**
 * Central registry for site images.
 * Update paths here when replacing assets in `/public`.
 */
export const siteImages = {
  /** CEO portrait — used on about page leadership */
  ceoPortrait: {
    src: "/assets/IMG-20260609-WA0009.jpg",
    alt: "Mutabazi Nsenga Shadrack, Chief Executive Officer of Global Training Network",
  } satisfies ImageAsset,

  /** Homepage hero background */
  heroBackground: {
    src: "/assets/hero-education-journey.jpg",
    alt: "Airplane wing above the clouds, symbolizing the journey of education and global opportunity",
  } satisfies ImageAsset,
} as const;
