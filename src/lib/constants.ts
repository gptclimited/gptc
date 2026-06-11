export const siteConfig = {
  name: "Global Training Network",
  shortName: "GTN",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://globaltrainingnetwork.org",
  description:
    "Guiding learners and leaders from aspiration to achievement through consulting, training, mentorship, and educational pathways.",
  tagline:
    "Empowering students, newcomers, families, and communities through education and transformation.",
  contact: {
    address: {
      street: "19897 82 Avenue",
      city: "Langley",
      province: "BC",
      postalCode: "V2Y 1Y7",
      country: "Canada",
    },
    phone: "604-727-6553",
    email: "info@globaltrainingnetwork.org",
  },
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
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
  { label: "Design System", href: "/design-system" },
] as const;

export const footerServiceLinks = [
  { label: "College Admissions", href: "/college-admissions" },
  { label: "Newcomer Integration", href: "/newcomer-integration" },
  { label: "Leadership Development", href: "/leadership-development" },
  { label: "Digital Literacy", href: "/digital-literacy" },
  { label: "Educational Research", href: "/educational-research" },
  { label: "Entrepreneurship Training", href: "/entrepreneurship-training" },
] as const;

export type MainNavItem = (typeof mainNav)[number];

export function formatAddress() {
  const { street, city, province, postalCode } = siteConfig.contact.address;
  return `${street}, ${city}, ${province} ${postalCode}`;
}
