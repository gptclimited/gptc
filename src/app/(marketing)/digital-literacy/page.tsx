import { digitalLiteracy } from "@/content/services/digital-literacy";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(digitalLiteracy);

export default function DigitalLiteracyPage() {
  return <ServicePageTemplate service={digitalLiteracy} />;
}
