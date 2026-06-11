import { studentRecruitment } from "@/content/services/student-recruitment";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(studentRecruitment);

export default function StudentRecruitmentPage() {
  return <ServicePageTemplate service={studentRecruitment} />;
}
