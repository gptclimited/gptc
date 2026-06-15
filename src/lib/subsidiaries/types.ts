export type SubsidiarySlug = "gtn" | "gpn" | "acs";

export interface SubsidiaryConfig {
  slug: SubsidiarySlug;
  name: string;
  shortName: string;
  legalName?: string;
  tagline: string;
  description: string;
  primaryFocus: string;
  guidingQuestion: string;
  mainClients: string[];
  vision: string;
  contactEmail: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}
