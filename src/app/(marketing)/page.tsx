import { CtaBanner } from "@/components/sections/cta-banner";
import { EcosystemFlow } from "@/components/sections/ecosystem-flow";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CoreValuesSlider } from "@/components/sections/core-values-slider";
import { FounderSpotlight } from "@/components/sections/founder-spotlight";
import { Hero } from "@/components/sections/hero";
import { ProgramServicesSlider } from "@/components/sections/program-services-slider";
import { StatCounter } from "@/components/sections/stat-counter";
import { SubsidiaryCards } from "@/components/sections/subsidiary-cards";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { VisionMissionSlider } from "@/components/sections/vision-mission-slider";
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
    missionVision,
    organizations,
    programServices,
    flow,
    founder,
    whyEcosystem,
    coreValues,
    testimonials,
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

      <VisionMissionSlider
        vision={missionVision.vision}
        mission={missionVision.mission}
      />

      <SubsidiaryCards
        id="organizations"
        eyebrow={organizations.eyebrow}
        title={organizations.title}
        description={organizations.description}
        items={organizations.items}
      />

      <ProgramServicesSlider
        eyebrow={programServices.eyebrow}
        title={programServices.title}
        description={programServices.description}
        items={programServices.items}
        consultingAreas={programServices.consultingAreas}
        expectedImpact={programServices.expectedImpact}
      />

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

      <CoreValuesSlider
        eyebrow={coreValues.eyebrow}
        title={coreValues.title}
        values={coreValues.items}
      />

      <TestimonialSlider
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        description={testimonials.description}
        testimonials={[...testimonials.items]}
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
