import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import {
  consultationHref,
  footerQuickLinks,
  footerServiceLinks,
  formatAddress,
  siteConfig,
} from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/icons/social-icons";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedInIcon },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YouTubeIcon },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gtn-primary text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
            <Logo variant="inverted" />
            <p className="max-w-xs text-sm leading-relaxed text-white/80">{siteConfig.tagline}</p>
            <div className="flex justify-center gap-3 md:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h2>
            <ul className="space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h2>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex justify-center gap-3 md:justify-start">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-gtn-accent" aria-hidden />
                <span>{formatAddress()}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
                >
                  <PhoneIcon className="size-4 shrink-0 text-gtn-accent" aria-hidden />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
                >
                  <MailIcon className="size-4 shrink-0 text-gtn-accent" aria-hidden />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/15" />

        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-center sm:text-left">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ButtonLink
            href={consultationHref}
            variant="accent"
            size="lg"
            analyticsLabel="footer_cta"
          >
            Book Your Consultation
          </ButtonLink>
        </div>
      </Container>
    </footer>
  );
}
