import { theologicalEducation } from "@/content/services/theological-education";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(theologicalEducation);

export default function TheologicalEducationPage() {
  return <ServicePageTemplate service={theologicalEducation} />;
}
