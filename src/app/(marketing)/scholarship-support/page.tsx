import { scholarshipSupport } from "@/content/services/scholarship-support";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(scholarshipSupport);

export default function ScholarshipSupportPage() {
  return <ServicePageTemplate service={scholarshipSupport} />;
}
