import { aiSkillsEveryStudent } from "@/content/insights/ai-skills-every-student";
import { conflictResolutionStrategies } from "@/content/insights/conflict-resolution-strategies";
import { educationalPathwayPlanningExplained } from "@/content/insights/educational-pathway-planning-explained";
import { howToStudyInCanada } from "@/content/insights/how-to-study-in-canada";
import { leadershipSkillsEveryStudent } from "@/content/insights/leadership-skills-every-student";
import { newcomerIntegrationCommunities } from "@/content/insights/newcomer-integration-communities";
import { supportingFamilySuccessInEducation } from "@/content/insights/supporting-family-success-in-education";
import { topScholarshipOpportunities } from "@/content/insights/top-scholarship-opportunities";
import { sortArticlesByDate } from "@/lib/insights/utils";
import type { InsightArticle } from "@/types/insight";

export const insightsBySlug: Record<string, InsightArticle> = {
  [howToStudyInCanada.slug]: howToStudyInCanada,
  [topScholarshipOpportunities.slug]: topScholarshipOpportunities,
  [educationalPathwayPlanningExplained.slug]: educationalPathwayPlanningExplained,
  [newcomerIntegrationCommunities.slug]: newcomerIntegrationCommunities,
  [leadershipSkillsEveryStudent.slug]: leadershipSkillsEveryStudent,
  [conflictResolutionStrategies.slug]: conflictResolutionStrategies,
  [aiSkillsEveryStudent.slug]: aiSkillsEveryStudent,
  [supportingFamilySuccessInEducation.slug]: supportingFamilySuccessInEducation,
};

export const allInsights: InsightArticle[] = sortArticlesByDate([
  howToStudyInCanada,
  topScholarshipOpportunities,
  educationalPathwayPlanningExplained,
  newcomerIntegrationCommunities,
  leadershipSkillsEveryStudent,
  conflictResolutionStrategies,
  aiSkillsEveryStudent,
  supportingFamilySuccessInEducation,
]);

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightsBySlug[slug];
}

export function getAllInsights(): InsightArticle[] {
  return allInsights;
}
