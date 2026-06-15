import type { ImageAsset } from "./types";

/**
 * Central registry for site images.
 * Update paths here when replacing assets in `/public`.
 */
export const siteImages = {
  /** Primary GPTC wordmark — footer, design system, and large brand surfaces */
  logo: {
    src: "/assets/gptc_logo2.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network. Planting Peace. Equipping Leaders. Transforming Lives.",
    width: 1254,
    height: 1254,
  } satisfies ImageAsset & { width: number; height: number },

  /** Header lockup — logo with the motto line cropped for a shorter nav footprint */
  logoHeader: {
    src: "/assets/gptc_logo_header.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network",
    width: 1254,
    height: 1091,
  } satisfies ImageAsset & { width: number; height: number },

  /** Emblem mark from the primary logo — favicons and compact placements */
  logoEmblem: {
    src: "/assets/gptc_emblem.png",
    alt: "GPTC emblem — tree, globe, dove, and three subsidiary figures",
    width: 1254,
    height: 727,
  } satisfies ImageAsset & { width: number; height: number },

  /** Square emblem crop — header nav and favicons */
  logoEmblemSquare: {
    src: "/assets/gptc_emblem_square.png",
    alt: "GPTC emblem",
    width: 602,
    height: 602,
  } satisfies ImageAsset & { width: number; height: number },

  /** Horizontal header lockup from gptc_logo.png (motto cropped) */
  logoHorizontalHeader: {
    src: "/assets/gptc_logo_horizontal_header.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network",
    width: 1774,
    height: 692,
  } satisfies ImageAsset & { width: number; height: number },

  /** CEO portrait — used on about page leadership */
  ceoPortrait: {
    src: "/assets/IMG-20260609-WA0009.jpg",
    alt: "Mutabazi Nsenga Shadrack, Founder and Chief Executive Officer of the GPTC Ecosystem",
  } satisfies ImageAsset,

  /** Homepage hero background */
  heroBackground: {
    src: "/assets/hero-education-journey.jpg",
    alt: "Airplane wing above the clouds, symbolizing the journey of education and global opportunity",
  } satisfies ImageAsset,

  /** Subsidiary homepage hero backgrounds — one per org, aligned with mission and services */
  subsidiaryHeroBackgrounds: {
    gpn: {
      src: "/assets/insights/family-development.jpg",
      alt: "Diverse community standing together at sunset, symbolizing peace, inclusion, and resilience",
    },
    gtn: {
      src: "/assets/insights/international-education.jpg",
      alt: "Students collaborating in a library, pursuing education and leadership development",
    },
    acs: {
      src: "/assets/insights/newcomer-integration.jpg",
      alt: "Welcoming diverse community in collaboration, representing care and integration services",
    },
  } satisfies Record<"gpn" | "gtn" | "acs", ImageAsset>,

  /**
   * Ecosystem homepage hero slider — up to 4 images aligned with GPTC themes:
   * training, leadership, peacebuilding, and community care.
   */
  heroSlides: [
    {
      src: "/assets/hero-education-journey.jpg",
      alt: "Global journey of education, training, and opportunity",
      backgroundPosition: "center center",
    },
    {
      src: "/assets/insights/leadership.jpg",
      alt: "Leaders collaborating in a workshop, equipping minds for transformation",
      backgroundPosition: "center center",
    },
    {
      src: "/assets/insights/peacebuilding.jpg",
      alt: "Community members in dialogue, building peace and reconciliation",
      backgroundPosition: "center center",
    },
    {
      src: "/assets/insights/newcomer-integration.jpg",
      alt: "Welcoming diverse community, representing care and integration services",
      backgroundPosition: "center center",
    },
  ] as const,
} as const;
