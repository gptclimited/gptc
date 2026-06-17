import type { ImageAsset } from "./types";

/**
 * Central registry for site images.
 * Update paths here when replacing assets in `/public`.
 */
export const siteImages = {
  /** Favicon source — square emblem mark (exported to src/app/icon.png) */
  favicon: {
    src: "/assets/newset_logos/x4OHJ.jpg",
    alt: "GPTC emblem",
    width: 1024,
    height: 1024,
  } satisfies ImageAsset & { width: number; height: number },

  /** Square emblem — header, mobile nav, compact placements */
  logoEmblem: {
    src: "/assets/canva_logos/gptc_emblem.png",
    alt: "GPTC emblem — globe, dove, and laurel wreath",
    width: 233,
    height: 197,
  } satisfies ImageAsset & { width: number; height: number },

  /** Primary website header lockup — emblem and wordmark (transparent) */
  logoHeader: {
    src: "/assets/newset_logos/slazzer-preview-w72js.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network",
    width: 835,
    height: 299,
  } satisfies ImageAsset & { width: number; height: number },

  /** Horizontal header lockup — emblem + wordmark, no motto */
  logoHorizontal: {
    src: "/assets/gptc_logo_horizontal.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network",
    width: 874,
    height: 286,
  } satisfies ImageAsset & { width: number; height: number },

  /** @deprecated Footer uses logoEmblem + HTML wordmark and tagline */
  logoFooter: {
    src: "/assets/canva_logos/gptc_emblem.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network. Planting Peace. Equipping Leaders. Transforming Lives.",
    width: 233,
    height: 197,
  } satisfies ImageAsset & { width: number; height: number },

  /** Full horizontal lockup with motto — light backgrounds, OG, and print */
  logoHorizontalMotto: {
    src: "/assets/gptc_logo_horizontal_motto.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network. Planting Peace. Equipping Leaders. Transforming Lives.",
    width: 666,
    height: 375,
  } satisfies ImageAsset & { width: number; height: number },

  /** Tall emblem portrait — dark footer and large brand surfaces */
  logoEmblemVertical: {
    src: "/assets/gptc_emblem_vertical.jpg",
    alt: "GPTC emblem — tree, globe, dove, and three subsidiary figures",
    width: 832,
    height: 1248,
  } satisfies ImageAsset & { width: number; height: number },

  /** Primary logo — vertical emblem for footer previews and brand sections */
  logo: {
    src: "/assets/gptc_emblem_vertical.jpg",
    alt: "GPTC — Global Peacebuilding, Training & Care Network. Planting Peace. Equipping Leaders. Transforming Lives.",
    width: 832,
    height: 1248,
  } satisfies ImageAsset & { width: number; height: number },

  /** @deprecated Use logoEmblem */
  logoEmblemSquare: {
    src: "/assets/gptc_emblem.png",
    alt: "GPTC emblem",
    width: 500,
    height: 500,
  } satisfies ImageAsset & { width: number; height: number },

  /** @deprecated Use logoHeader */
  logoHorizontalHeader: {
    src: "/assets/newset_logos/slazzer-preview-w72js.png",
    alt: "GPTC — Global Peacebuilding, Training & Care Network",
    width: 835,
    height: 299,
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
