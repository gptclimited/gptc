import { familyEnrichment } from "@/content/services/family-enrichment";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(familyEnrichment);

export default function FamilyEnrichmentPage() {
  return <ServicePageTemplate service={familyEnrichment} />;
}
