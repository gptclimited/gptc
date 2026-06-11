import { ButtonLink } from "@/components/ui/button-link";
import { DesktopNav, MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "@/components/layout/logo";
import { consultationHref } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <ButtonLink
            href={consultationHref}
            variant="accent"
            className="hidden sm:inline-flex"
            size="lg"
            analyticsLabel="header_cta"
          >
            Book Consultation
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
