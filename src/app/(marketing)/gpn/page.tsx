import type { Metadata } from "next";

import { SubsidiaryHomePage } from "@/components/templates/subsidiary-home-page";
import { gpnHomeConfig } from "@/config/gpn/home";
import { subsidiaries } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

const subsidiary = subsidiaries.gpn;

export const metadata: Metadata = generatePageMetadata({
  title: `${subsidiary.name} | ${subsidiary.tagline}`,
  description: subsidiary.description,
  path: "/gpn",
  absoluteTitle: true,
});

export default function GpnHomePage() {
  return <SubsidiaryHomePage config={gpnHomeConfig} subsidiary="gpn" />;
}
