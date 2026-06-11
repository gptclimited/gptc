import { settlementSupport } from "@/content/services/settlement-support";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(settlementSupport);

export default function SettlementSupportPage() {
  return <ServicePageTemplate service={settlementSupport} />;
}
