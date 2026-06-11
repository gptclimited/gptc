import { policyDevelopment } from "@/content/services/policy-development";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(policyDevelopment);

export default function PolicyDevelopmentPage() {
  return <ServicePageTemplate service={policyDevelopment} />;
}
