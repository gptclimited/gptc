import { christianLeadershipDevelopment } from "@/content/services/christian-leadership-development";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(christianLeadershipDevelopment);

export default function ChristianLeadershipDevelopmentPage() {
  return <ServicePageTemplate service={christianLeadershipDevelopment} />;
}
