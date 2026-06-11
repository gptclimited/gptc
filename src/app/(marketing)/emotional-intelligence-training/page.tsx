import { emotionalIntelligenceTraining } from "@/content/services/emotional-intelligence-training";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(emotionalIntelligenceTraining);

export default function EmotionalIntelligenceTrainingPage() {
  return <ServicePageTemplate service={emotionalIntelligenceTraining} />;
}
