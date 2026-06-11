import { studyPermitSupport } from "@/content/services/study-permit-support";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(studyPermitSupport);

export default function StudyPermitSupportPage() {
  return <ServicePageTemplate service={studyPermitSupport} />;
}
