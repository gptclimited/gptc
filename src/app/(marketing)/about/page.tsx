import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import {
  ContentGrid,
  ContentSection,
  ObjectivesList,
} from "@/components/sections/content-section";
import { LeadershipTeam } from "@/components/sections/leadership-team";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { aboutConfig } from "@/config/about";
import { ecosystemConfig } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description: `Learn about the ${ecosystemConfig.name} — our story, mission, vision, values, and leadership.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <PageHeader
        title={aboutConfig.pageHeader.title}
        description={aboutConfig.pageHeader.description}
        breadcrumb={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        }
      />

      <ContentSection eyebrow="Our Story" title="Who We Are">
        {aboutConfig.ourStory.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </ContentSection>

      <ContentSection eyebrow="Where We Are Headed" title="Vision" background="muted">
        <p>{aboutConfig.vision}</p>
      </ContentSection>

      <ContentSection eyebrow="Why We Exist" title="Mission">
        <p>{aboutConfig.mission}</p>
      </ContentSection>

      <ObjectivesList
        title="Strategic Objectives"
        objectives={aboutConfig.strategicObjectives}
      />

      <ContentGrid
        eyebrow="What Guides Us"
        title="Core Values"
        items={[...aboutConfig.coreValues]}
      />

      <ContentSection eyebrow="The Difference We Make" title="Expected Impact" background="white">
        {aboutConfig.expectedImpact.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </ContentSection>

      <LeadershipTeam members={aboutConfig.leadershipTeam} />

      <CtaBanner />
    </main>
  );
}
