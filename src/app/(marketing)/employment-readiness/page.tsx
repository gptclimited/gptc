import { employmentReadiness } from "@/content/services/employment-readiness";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(employmentReadiness);

export default function EmploymentReadinessPage() {
  return <ServicePageTemplate service={employmentReadiness} />;
}
