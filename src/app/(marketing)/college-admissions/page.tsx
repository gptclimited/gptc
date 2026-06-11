import { collegeAdmissions } from "@/content/services/college-admissions";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(collegeAdmissions);

export default function CollegeAdmissionsPage() {
  return <ServicePageTemplate service={collegeAdmissions} />;
}
