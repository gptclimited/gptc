import { onlineLearningSuccess } from "@/content/services/online-learning-success";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(onlineLearningSuccess);

export default function OnlineLearningSuccessPage() {
  return <ServicePageTemplate service={onlineLearningSuccess} />;
}
