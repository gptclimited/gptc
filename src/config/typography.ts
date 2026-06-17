/**
 * Site typography tokens — mirrors `globals.css` and `layout.tsx`.
 */
export const typographyConfig = {
  families: {
    sans: {
      name: "Inter",
      source: "Google Fonts (next/font)",
      cssVariable: "--font-inter",
      tailwindToken: "font-sans",
      usage: "All UI text, headings, and body copy across the site",
    },
    heading: {
      name: "Inter",
      source: "Same as sans — no separate display font yet",
      cssVariable: "--font-heading",
      tailwindToken: "font-heading",
      usage: "Headings (currently identical to body font)",
    },
    mono: {
      name: "System monospace",
      source: "Tailwind default stack",
      tailwindToken: "font-mono",
      usage: "Hex codes, technical labels (design system swatches)",
    },
  },
  scale: [
    {
      element: "h1",
      sizes: "text-4xl → lg:text-5xl",
      weight: "font-semibold (600)",
      notes: "Page titles, hero headlines",
    },
    {
      element: "h2",
      sizes: "text-2xl → lg:text-4xl",
      weight: "font-semibold (600)",
      notes: "Section headings",
    },
    {
      element: "h3",
      sizes: "text-xl → lg:text-2xl",
      weight: "font-semibold (600)",
      notes: "Sub-section headings, card titles",
    },
    {
      element: "h4",
      sizes: "text-lg",
      weight: "font-medium (500)",
      notes: "Minor headings",
    },
    {
      element: "p / body",
      sizes: "text-base",
      weight: "font-normal (400)",
      notes: "Default paragraph text, leading-relaxed",
    },
    {
      element: ".text-lead",
      sizes: "text-lg → lg:text-xl",
      weight: "font-normal (400)",
      notes: "Intro paragraphs, hero subheadlines — muted foreground",
    },
    {
      element: "small / captions",
      sizes: "text-sm / text-xs",
      weight: "font-normal – font-medium",
      notes: "Labels, breadcrumbs, footer links, badges",
    },
  ],
  features: {
    antialiasing: true,
    scrollBehavior: "smooth (html)",
    textBalance: "Applied to h1–h3 via text-balance",
  },
} as const;

/**
 * Recommended logo display dimensions for this site.
 * Source files should be much larger (2×–4×) for retina clarity.
 */
export const logoUsageConfig = {
  sourceFiles: {
    full: {
      path: "/assets/gptc_logo_horizontal_motto.png",
      dimensions: "666 × 375 px",
      notes: "Horizontal lockup with motto — best for light backgrounds, print, and social sharing.",
    },
    horizontal: {
      path: "/assets/newset_logos/slazzer-preview-w72js.png",
      dimensions: "835 × 299 px",
      notes: "Primary header lockup — globe emblem with wordmark, transparent background.",
    },
    emblem: {
      path: "/assets/canva_logos/gptc_emblem.png",
      dimensions: "233 × 197 px (transparent PNG)",
      notes: "Exported from the Canva SVG with background removed — paired with HTML wordmark in the header.",
    },
    vertical: {
      path: "/assets/gptc_emblem_vertical.jpg",
      dimensions: "832 × 1248 px",
      notes: "Tall emblem portrait — footer on dark backgrounds and large brand surfaces.",
    },
  },
  display: {
    headerEmblem: {
      height: "56–60 px (h-14 – 3.75rem)",
      width: "Auto (square)",
      asset: "canva_logos/gptc_emblem.png",
      notes: "Emblem SVG with HTML wordmark beside it on all breakpoints.",
    },
    headerHorizontal: {
      height: "Text at sm:text-sm",
      width: "Emblem + two-line name",
      asset: "canva_logos/gptc_emblem.png + HTML",
      notes: "Header lockup — emblem image plus manually set company name text.",
    },
    footer: {
      width: "Emblem + wordmark + tagline",
      height: "64 px emblem (h-16)",
      asset: "canva_logos/gptc_emblem.png + HTML",
      notes: "Emblem on a white badge with company name and gold tagline below — readable on the dark footer.",
    },
    favicon: {
      sizes: [
        { label: "Browser tab", pixels: "32 × 32", file: "src/app/icon.png" },
        { label: "Apple touch icon", pixels: "180 × 180", file: "src/app/apple-icon.png" },
      ],
      notes: "Favicons derived from newset_logos/x4OHJ.jpg — exported to src/app/icon.png and apple-icon.png.",
    },
  },
} as const;
