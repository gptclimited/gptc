import { graduateSchoolAdmissions } from "@/content/services/graduate-school-admissions";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(graduateSchoolAdmissions);

export default function GraduateSchoolAdmissionsPage() {
  return <ServicePageTemplate service={graduateSchoolAdmissions} />;
}
