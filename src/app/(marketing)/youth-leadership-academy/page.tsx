import { youthLeadershipAcademy } from "@/content/services/youth-leadership-academy";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(youthLeadershipAcademy);

export default function YouthLeadershipAcademyPage() {
  return <ServicePageTemplate service={youthLeadershipAcademy} />;
}
