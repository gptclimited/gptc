import { communityEngagement } from "@/content/services/community-engagement";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(communityEngagement);

export default function CommunityEngagementPage() {
  return <ServicePageTemplate service={communityEngagement} />;
}
