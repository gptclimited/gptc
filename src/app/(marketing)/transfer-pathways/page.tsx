import { transferPathways } from "@/content/services/transfer-pathways";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(transferPathways);

export default function TransferPathwaysPage() {
  return <ServicePageTemplate service={transferPathways} />;
}
