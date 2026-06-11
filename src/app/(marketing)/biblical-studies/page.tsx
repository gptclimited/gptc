import { biblicalStudies } from "@/content/services/biblical-studies";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(biblicalStudies);

export default function BiblicalStudiesPage() {
  return <ServicePageTemplate service={biblicalStudies} />;
}
