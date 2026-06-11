import { artificialIntelligenceAwareness } from "@/content/services/artificial-intelligence-awareness";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(artificialIntelligenceAwareness);

export default function ArtificialIntelligenceAwarenessPage() {
  return <ServicePageTemplate service={artificialIntelligenceAwareness} />;
}
