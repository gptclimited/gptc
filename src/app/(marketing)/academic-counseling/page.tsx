import { academicCounseling } from "@/content/services/academic-counseling";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(academicCounseling);

export default function AcademicCounselingPage() {
  return <ServicePageTemplate service={academicCounseling} />;
}
