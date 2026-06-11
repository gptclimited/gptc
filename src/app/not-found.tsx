import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { MarketingShell } from "@/components/layout/marketing-shell";

export default function NotFound() {
  return (
    <MarketingShell>
      <main id="main-content" className="flex flex-1 flex-col">
        <Container className="flex flex-1 flex-col items-start justify-center gap-6 py-24 lg:py-32">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            404
          </p>
          <div className="max-w-2xl space-y-4">
            <h1 className="text-gtn-primary">Page not found</h1>
            <p className="text-lead">
              The page you are looking for may have moved or is not yet available. Let us help
              you find the right path forward.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/" size="lg">
              Back to Home
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              Explore Services
            </ButtonLink>
          </div>
        </Container>
      </main>
    </MarketingShell>
  );
}
