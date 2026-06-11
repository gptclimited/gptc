import { churchLeadershipWorkshops } from "@/content/services/church-leadership-workshops";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(churchLeadershipWorkshops);

export default function ChurchLeadershipWorkshopsPage() {
  return <ServicePageTemplate service={churchLeadershipWorkshops} />;
}
