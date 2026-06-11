import { peacebuildingWorkshops } from "@/content/services/peacebuilding-workshops";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(peacebuildingWorkshops);

export default function PeacebuildingWorkshopsPage() {
  return <ServicePageTemplate service={peacebuildingWorkshops} />;
}
