import { communityNeedsAssessment } from "@/content/services/community-needs-assessment";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(communityNeedsAssessment);

export default function CommunityNeedsAssessmentPage() {
  return <ServicePageTemplate service={communityNeedsAssessment} />;
}
