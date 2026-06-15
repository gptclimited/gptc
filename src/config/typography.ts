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
      path: "/assets/gptc_logo2.png",
      dimensions: "1254 × 1254 px",
      notes: "Vertical lockup — emblem on top, wordmark below. Best for footer, print, and large brand surfaces.",
    },
    horizontal: {
      path: "/assets/gptc_logo.png",
      dimensions: "1774 × 887 px",
      notes: "Horizontal lockup — best format for website headers and nav bars.",
    },
    emblem: {
      path: "/assets/gptc_emblem_square.png",
      dimensions: "Square crop of the circular emblem",
      notes: "Used in the header and favicon when the full lockup is too small to read.",
    },
  },
  display: {
    headerEmblem: {
      height: "44–48 px (h-11 – h-12)",
      width: "Auto (square)",
      asset: "gptc_emblem_square.png",
      notes: "Circular emblem only — readable at nav-bar scale. Standard practice for stacked logos.",
    },
    headerHorizontal: {
      height: "48–64 px",
      width: "180–240 px",
      asset: "gptc_logo_horizontal_header.png",
      notes: "Alternative when using the horizontal logo file (motto cropped).",
    },
    footer: {
      width: "176–208 px (11–13 rem)",
      height: "Auto",
      asset: "gptc_logo2.png",
      notes: "Full vertical lockup with motto.",
    },
    favicon: {
      sizes: [
        { label: "Browser tab", pixels: "32 × 32", file: "src/app/icon.png" },
        { label: "Apple touch icon", pixels: "180 × 180", file: "src/app/apple-icon.png" },
      ],
      notes: "Favicons use the emblem only — never the full wordmark. Export at 2× (64 px) and downscale for sharpness.",
    },
  },
} as const;
