import { personalDevelopment } from "@/content/services/personal-development";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(personalDevelopment);

export default function PersonalDevelopmentPage() {
  return <ServicePageTemplate service={personalDevelopment} />;
}
