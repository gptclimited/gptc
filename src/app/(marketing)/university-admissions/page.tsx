import { universityAdmissions } from "@/content/services/university-admissions";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(universityAdmissions);

export default function UniversityAdmissionsPage() {
  return <ServicePageTemplate service={universityAdmissions} />;
}
