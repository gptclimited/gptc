import { conflictResolutionTraining } from "@/content/services/conflict-resolution-training";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(conflictResolutionTraining);

export default function ConflictResolutionTrainingPage() {
  return <ServicePageTemplate service={conflictResolutionTraining} />;
}
