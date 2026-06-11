import { leadershipDevelopment } from "@/content/services/leadership-development";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(leadershipDevelopment);

export default function LeadershipDevelopmentPage() {
  return <ServicePageTemplate service={leadershipDevelopment} />;
}
