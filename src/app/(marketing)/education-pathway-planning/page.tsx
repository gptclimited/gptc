import { educationPathwayPlanning } from "@/content/services/education-pathway-planning";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(educationPathwayPlanning);

export default function EducationPathwayPlanningPage() {
  return <ServicePageTemplate service={educationPathwayPlanning} />;
}
