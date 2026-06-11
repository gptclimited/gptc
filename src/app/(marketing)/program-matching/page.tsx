import { programMatching } from "@/content/services/program-matching";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(programMatching);

export default function ProgramMatchingPage() {
  return <ServicePageTemplate service={programMatching} />;
}
