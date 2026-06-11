import { businessDevelopmentMentoring } from "@/content/services/business-development-mentoring";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(businessDevelopmentMentoring);

export default function BusinessDevelopmentMentoringPage() {
  return <ServicePageTemplate service={businessDevelopmentMentoring} />;
}
