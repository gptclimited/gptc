import { mentalWellnessTraining } from "@/content/services/mental-wellness-training";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(mentalWellnessTraining);

export default function MentalWellnessTrainingPage() {
  return <ServicePageTemplate service={mentalWellnessTraining} />;
}
