import { preDepartureServices } from "@/content/services/pre-departure-services";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(preDepartureServices);

export default function PreDepartureServicesPage() {
  return <ServicePageTemplate service={preDepartureServices} />;
}
