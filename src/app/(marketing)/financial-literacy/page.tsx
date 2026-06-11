import { financialLiteracy } from "@/content/services/financial-literacy";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(financialLiteracy);

export default function FinancialLiteracyPage() {
  return <ServicePageTemplate service={financialLiteracy} />;
}
