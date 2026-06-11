/** Shared content types for page/section configs. */

export type ImageAsset = {
  /** Path under `/public`, e.g. `/assets/ceo-portrait.jpg` */
  src: string;
  alt: string;
};

export type CtaLink = {
  label: string;
  href: string;
  analyticsLabel?: string;
};

export type StatItem = {
  label: string;
  /** Use a number for animated count-up, or a string like "15+" or "—" for placeholders */
  value: number | string;
};

export type FeatureItem = {
  title: string;
  description: string;
  /** Lucide icon name — see `FeatureGrid` for supported values */
  icon?: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type ServiceCategoryCard = {
  title: string;
  description: string;
  href: string;
};

export type LeaderProfile = {
  name: string;
  title: string;
  bio: string;
  image?: ImageAsset;
};

export type ValueItem = {
  title: string;
  description: string;
};
