import { ethicalLeadership } from "@/content/services/ethical-leadership";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(ethicalLeadership);

export default function EthicalLeadershipPage() {
  return <ServicePageTemplate service={ethicalLeadership} />;
}
