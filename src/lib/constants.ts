import { ecosystemConfig, subsidiaries } from "@/lib/subsidiaries";

/** @deprecated Use ecosystemConfig for root-level branding */
export const siteConfig = {
  name: ecosystemConfig.name,
  shortName: ecosystemConfig.shortName,
  url: ecosystemConfig.url,
  description: ecosystemConfig.description,
  tagline: ecosystemConfig.motto,
  contact: ecosystemConfig.contact,
  social: ecosystemConfig.social,
} as const;

export { ecosystemConfig, subsidiaries, subsidiaryList } from "@/lib/subsidiaries";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const organizationNav = [
  { label: "Global Peacebuilding Network", href: "/gpn", shortName: "GPN" },
  { label: "Global Training Network", href: "/gtn", shortName: "GTN" },
  { label: "Amani Care Services", href: "/acs", shortName: "ACS" },
] as const;

export const consultationHref = "/contact?type=consultation";
export const informationHref = "/contact?type=information";
export const partnershipHref = "/contact?type=partnership";

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Partner With Us", href: partnershipHref },
] as const;

export const footerOrganizationLinks = [
  { label: "Global Peacebuilding Network", href: "/gpn" },
  { label: "Global Training Network", href: "/gtn" },
  { label: "Amani Care Services", href: "/acs" },
] as const;

export const footerServiceLinks = [
  { label: "College Admissions", href: "/gtn/college-admissions" },
  { label: "Peacebuilding Workshops", href: "/gpn/peacebuilding-workshops" },
  { label: "Newcomer Integration", href: "/acs/newcomer-integration" },
  { label: "Leadership Development", href: "/gtn/leadership-development" },
  { label: "Employment Services", href: "/acs/employment-services" },
  { label: "Train-the-Trainer Academy", href: "/gtn/train-the-trainer-academy" },
] as const;

export type MainNavItem = (typeof mainNav)[number];

export function formatAddress() {
  const { street, city, province, postalCode } = ecosystemConfig.contact.address;
  return `${street}, ${city}, ${province} ${postalCode}`;
}

export function getConsultationHref(subsidiary?: keyof typeof subsidiaries) {
  if (!subsidiary) return consultationHref;
  return `/contact?type=consultation&org=${subsidiary}`;
}
