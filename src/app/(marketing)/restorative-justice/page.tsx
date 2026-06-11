import { restorativeJustice } from "@/content/services/restorative-justice";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(restorativeJustice);

export default function RestorativeJusticePage() {
  return <ServicePageTemplate service={restorativeJustice} />;
}
