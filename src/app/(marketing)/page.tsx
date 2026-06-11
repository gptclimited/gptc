import { CtaBanner } from "@/components/sections/cta-banner";
import { AboutPreview } from "@/components/sections/about-preview";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { StatCounter } from "@/components/sections/stat-counter";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { homeConfig } from "@/config/home";
import { generateHomeMetadata } from "@/lib/seo/metadata";

export const metadata = generateHomeMetadata();

export default function HomePage() {
  const {
    hero,
    impactStats,
    missionVision,
    founderQuote,
    servicesOverview,
    whyChooseUs,
    testimonials,
    ctaBanner,
  } = homeConfig;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        backgroundImage={hero.backgroundImage}
        backgroundPosition={hero.backgroundPosition}
        trustBadges={hero.trustBadges}
      />

      <StatCounter stats={[...impactStats.items]} />

      <AboutPreview
        mission={missionVision.mission}
        vision={missionVision.vision}
        founderQuote={founderQuote}
      />

      <ServicesOverview
        eyebrow={servicesOverview.eyebrow}
        title={servicesOverview.title}
        description={servicesOverview.description}
        categories={[...servicesOverview.categories]}
      />

      <FeatureGrid
        eyebrow={whyChooseUs.eyebrow}
        title={whyChooseUs.title}
        description={whyChooseUs.description}
        features={[...whyChooseUs.features]}
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
