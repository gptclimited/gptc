import { CtaBanner } from "@/components/sections/cta-banner";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { StatCounter } from "@/components/sections/stat-counter";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { AboutPreview } from "@/components/sections/about-preview";
import type { SubsidiarySlug } from "@/lib/subsidiaries";

type SubsidiaryHomeConfig = {
  hero: {
    eyebrow: string;
    headline: string;
    animatedPhrases?: readonly string[];
    subheadline: string;
    backgroundImage: { src: string; alt: string };
    backgroundPosition?: string;
    trustBadges: readonly string[];
    primaryCta: { label: string; href: string; analyticsLabel?: string };
    secondaryCta: { label: string; href: string; analyticsLabel?: string };
  };
  impactStats: { items: readonly { label: string; value: number | string }[] };
  missionVision: { mission: string; vision: string };
  servicesOverview: {
    eyebrow: string;
    title: string;
    description: string;
    categories: readonly { title: string; description: string; href: string }[];
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    description: string;
    features: readonly { title: string; description: string; icon?: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { quote: string; name: string; role: string }[];
  };
  ctaBanner: {
    headline: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    analyticsLabel?: string;
  };
};

type SubsidiaryHomePageProps = {
  config: SubsidiaryHomeConfig;
  subsidiary: SubsidiarySlug;
};

export function SubsidiaryHomePage({ config, subsidiary }: SubsidiaryHomePageProps) {
  const {
    hero,
    impactStats,
    missionVision,
    servicesOverview,
    whyChooseUs,
    testimonials,
    ctaBanner,
  } = config;

  return (
    <main id="main-content" className="flex flex-1 flex-col" data-subsidiary={subsidiary}>
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        animatedPhrases={hero.animatedPhrases}
        subheadline={hero.subheadline}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        backgroundImage={hero.backgroundImage}
        backgroundPosition={hero.backgroundPosition}
        trustBadges={[...hero.trustBadges]}
      />
      <StatCounter stats={[...impactStats.items]} />
      <AboutPreview mission={missionVision.mission} vision={missionVision.vision} />
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
