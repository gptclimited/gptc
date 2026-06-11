import { entrepreneurshipTraining } from "@/content/services/entrepreneurship-training";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(entrepreneurshipTraining);

export default function EntrepreneurshipTrainingPage() {
  return <ServicePageTemplate service={entrepreneurshipTraining} />;
}
