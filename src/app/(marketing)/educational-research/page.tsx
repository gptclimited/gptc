import { educationalResearch } from "@/content/services/educational-research";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(educationalResearch);

export default function EducationalResearchPage() {
  return <ServicePageTemplate service={educationalResearch} />;
}
