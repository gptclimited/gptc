import { researchTechnologySkills } from "@/content/services/research-technology-skills";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(researchTechnologySkills);

export default function ResearchTechnologySkillsPage() {
  return <ServicePageTemplate service={researchTechnologySkills} />;
}
