import { socialEnterpriseDevelopment } from "@/content/services/social-enterprise-development";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(socialEnterpriseDevelopment);

export default function SocialEnterpriseDevelopmentPage() {
  return <ServicePageTemplate service={socialEnterpriseDevelopment} />;
}
