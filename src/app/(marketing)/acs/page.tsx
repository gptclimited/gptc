import type { Metadata } from "next";

import { SubsidiaryHomePage } from "@/components/templates/subsidiary-home-page";
import { acsHomeConfig } from "@/config/acs/home";
import { subsidiaries } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

const subsidiary = subsidiaries.acs;

export const metadata: Metadata = generatePageMetadata({
  title: `${subsidiary.name} | ${subsidiary.tagline}`,
  description: subsidiary.description,
  path: "/acs",
  absoluteTitle: true,
});

export default function AcsHomePage() {
  return <SubsidiaryHomePage config={acsHomeConfig} subsidiary="acs" />;
}
