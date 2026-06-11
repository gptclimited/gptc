import { publicSpeakingTraining } from "@/content/services/public-speaking-training";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(publicSpeakingTraining);

export default function PublicSpeakingTrainingPage() {
  return <ServicePageTemplate service={publicSpeakingTraining} />;
}
