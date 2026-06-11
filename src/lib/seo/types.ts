export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export type JsonLdObject = Record<string, unknown>;
