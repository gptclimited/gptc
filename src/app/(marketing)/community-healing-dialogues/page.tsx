import { communityHealingDialogues } from "@/content/services/community-healing-dialogues";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(communityHealingDialogues);

export default function CommunityHealingDialoguesPage() {
  return <ServicePageTemplate service={communityHealingDialogues} />;
}
