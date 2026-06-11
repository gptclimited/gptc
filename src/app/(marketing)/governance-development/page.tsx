import { governanceDevelopment } from "@/content/services/governance-development";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(governanceDevelopment);

export default function GovernanceDevelopmentPage() {
  return <ServicePageTemplate service={governanceDevelopment} />;
}
