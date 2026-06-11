import { culturalOrientation } from "@/content/services/cultural-orientation";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(culturalOrientation);

export default function CulturalOrientationPage() {
  return <ServicePageTemplate service={culturalOrientation} />;
}
