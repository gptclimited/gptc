import { programEvaluation } from "@/content/services/program-evaluation";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(programEvaluation);

export default function ProgramEvaluationPage() {
  return <ServicePageTemplate service={programEvaluation} />;
}
