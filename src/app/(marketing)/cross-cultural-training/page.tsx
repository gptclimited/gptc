import { crossCulturalTraining } from "@/content/services/cross-cultural-training";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(crossCulturalTraining);

export default function CrossCulturalTrainingPage() {
  return <ServicePageTemplate service={crossCulturalTraining} />;
}
