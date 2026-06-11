import { newcomerIntegration } from "@/content/services/newcomer-integration";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(newcomerIntegration);

export default function NewcomerIntegrationPage() {
  return <ServicePageTemplate service={newcomerIntegration} />;
}
