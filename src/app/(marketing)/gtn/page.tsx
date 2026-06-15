import type { Metadata } from "next";

import { SubsidiaryHomePage } from "@/components/templates/subsidiary-home-page";
import { gtnHomeConfig } from "@/config/gtn/home";
import { subsidiaries } from "@/lib/subsidiaries";
import { generatePageMetadata } from "@/lib/seo/metadata";

const subsidiary = subsidiaries.gtn;

export const metadata: Metadata = generatePageMetadata({
  title: `${subsidiary.name} | ${subsidiary.tagline}`,
  description: subsidiary.description,
  path: "/gtn",
  absoluteTitle: true,
});

export default function GtnHomePage() {
  return <SubsidiaryHomePage config={gtnHomeConfig} subsidiary="gtn" />;
}
