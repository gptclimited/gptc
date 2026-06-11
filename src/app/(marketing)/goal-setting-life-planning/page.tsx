import { goalSettingLifePlanning } from "@/content/services/goal-setting-life-planning";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(goalSettingLifePlanning);

export default function GoalSettingLifePlanningPage() {
  return <ServicePageTemplate service={goalSettingLifePlanning} />;
}
