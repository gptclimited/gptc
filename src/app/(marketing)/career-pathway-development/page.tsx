import { careerPathwayDevelopment } from "@/content/services/career-pathway-development";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(careerPathwayDevelopment);

export default function CareerPathwayDevelopmentPage() {
  return <ServicePageTemplate service={careerPathwayDevelopment} />;
}
