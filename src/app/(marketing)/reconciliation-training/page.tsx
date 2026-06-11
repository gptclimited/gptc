import { reconciliationTraining } from "@/content/services/reconciliation-training";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(reconciliationTraining);

export default function ReconciliationTrainingPage() {
  return <ServicePageTemplate service={reconciliationTraining} />;
}
