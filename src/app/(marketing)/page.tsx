import { CtaBanner } from "@/components/sections/cta-banner";
import { EcosystemFlow } from "@/components/sections/ecosystem-flow";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FounderSpotlight } from "@/components/sections/founder-spotlight";
import { Hero } from "@/components/sections/hero";
import { StatCounter } from "@/components/sections/stat-counter";
import { SubsidiaryCards } from "@/components/sections/subsidiary-cards";
import { EcosystemValuesSlider } from "@/components/sections/ecosystem-values-slider";
import { ecosystemHomeConfig } from "@/config/ecosystem/home";
import { ecosystemConfig } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: `${ecosystemConfig.shortName} | ${ecosystemConfig.motto}`,
  description: ecosystemConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const {
    hero,
    impactStats,
    roots,
    trunk,
    organizations,
    impact,
    flow,
    founder,
    whyEcosystem,
    ctaBanner,
  } = ecosystemHomeConfig;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        animatedPhrases={hero.animatedPhrases}
        subheadline={hero.subheadline}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        backgroundSlides={hero.backgroundSlides}
        trustBadges={[...hero.trustBadges]}
      />

      <StatCounter stats={[...impactStats.items]} />

      <FounderSpotlight
        name={founder.name}
        title={founder.title}
        quote={founder.quote}
        animatedPhrases={founder.animatedPhrases}
        image={founder.image}
      />

      <SubsidiaryCards
        id="organizations"
        eyebrow={organizations.eyebrow}
        title={organizations.title}
        description={organizations.description}
        items={organizations.items}
      />

      <EcosystemValuesSlider roots={roots} trunk={trunk} impact={impact} />

      <EcosystemFlow
        eyebrow={flow.eyebrow}
        title={flow.title}
        description={flow.description}
        steps={flow.steps}
      />

      <FeatureGrid
        eyebrow={whyEcosystem.eyebrow}
        title={whyEcosystem.title}
        description={whyEcosystem.description}
        features={[...whyEcosystem.features]}
      />

      <CtaBanner
        headline={ctaBanner.headline}
        description={ctaBanner.description}
        ctaLabel={ctaBanner.ctaLabel}
        ctaHref={ctaBanner.ctaHref}
        analyticsLabel={ctaBanner.analyticsLabel}
      />
    </main>
  );
}
