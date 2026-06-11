import { studentRecruitment } from "@/content/services/student-recruitment";
import { collegeAdmissions } from "@/content/services/college-admissions";
import { universityAdmissions } from "@/content/services/university-admissions";
import { graduateSchoolAdmissions } from "@/content/services/graduate-school-admissions";
import { programMatching } from "@/content/services/program-matching";
import { educationPathwayPlanning } from "@/content/services/education-pathway-planning";
import { academicCounseling } from "@/content/services/academic-counseling";
import { careerPathwayDevelopment } from "@/content/services/career-pathway-development";
import { transferPathways } from "@/content/services/transfer-pathways";
import { scholarshipSupport } from "@/content/services/scholarship-support";
import { studyPermitSupport } from "@/content/services/study-permit-support";
import { preDepartureServices } from "@/content/services/pre-departure-services";
import { newcomerIntegration } from "@/content/services/newcomer-integration";
import { settlementSupport } from "@/content/services/settlement-support";
import { culturalOrientation } from "@/content/services/cultural-orientation";
import { crossCulturalTraining } from "@/content/services/cross-cultural-training";
import { employmentReadiness } from "@/content/services/employment-readiness";
import { communityEngagement } from "@/content/services/community-engagement";
import { leadershipDevelopment } from "@/content/services/leadership-development";
import { youthLeadershipAcademy } from "@/content/services/youth-leadership-academy";
import { governanceDevelopment } from "@/content/services/governance-development";
import { ethicalLeadership } from "@/content/services/ethical-leadership";
import { publicSpeakingTraining } from "@/content/services/public-speaking-training";
import { reconciliationTraining } from "@/content/services/reconciliation-training";
import { peacebuildingWorkshops } from "@/content/services/peacebuilding-workshops";
import { conflictResolutionTraining } from "@/content/services/conflict-resolution-training";
import { restorativeJustice } from "@/content/services/restorative-justice";
import { communityHealingDialogues } from "@/content/services/community-healing-dialogues";
import { personalDevelopment } from "@/content/services/personal-development";
import { emotionalIntelligenceTraining } from "@/content/services/emotional-intelligence-training";
import { mentalWellnessTraining } from "@/content/services/mental-wellness-training";
import { goalSettingLifePlanning } from "@/content/services/goal-setting-life-planning";
import { familyEnrichment } from "@/content/services/family-enrichment";
import { biblicalStudies } from "@/content/services/biblical-studies";
import { theologicalEducation } from "@/content/services/theological-education";
import { christianLeadershipDevelopment } from "@/content/services/christian-leadership-development";
import { churchLeadershipWorkshops } from "@/content/services/church-leadership-workshops";
import { digitalLiteracy } from "@/content/services/digital-literacy";
import { artificialIntelligenceAwareness } from "@/content/services/artificial-intelligence-awareness";
import { researchTechnologySkills } from "@/content/services/research-technology-skills";
import { onlineLearningSuccess } from "@/content/services/online-learning-success";
import { educationalResearch } from "@/content/services/educational-research";
import { communityNeedsAssessment } from "@/content/services/community-needs-assessment";
import { policyDevelopment } from "@/content/services/policy-development";
import { programEvaluation } from "@/content/services/program-evaluation";
import { entrepreneurshipTraining } from "@/content/services/entrepreneurship-training";
import { businessDevelopmentMentoring } from "@/content/services/business-development-mentoring";
import { financialLiteracy } from "@/content/services/financial-literacy";
import { socialEnterpriseDevelopment } from "@/content/services/social-enterprise-development";
import type { ServicePage } from "@/types/service";

export const servicesBySlug: Record<string, ServicePage> = {
  "student-recruitment": studentRecruitment,
  "college-admissions": collegeAdmissions,
  "university-admissions": universityAdmissions,
  "graduate-school-admissions": graduateSchoolAdmissions,
  "program-matching": programMatching,
  "education-pathway-planning": educationPathwayPlanning,
  "academic-counseling": academicCounseling,
  "career-pathway-development": careerPathwayDevelopment,
  "transfer-pathways": transferPathways,
  "scholarship-support": scholarshipSupport,
  "study-permit-support": studyPermitSupport,
  "pre-departure-services": preDepartureServices,
  "newcomer-integration": newcomerIntegration,
  "settlement-support": settlementSupport,
  "cultural-orientation": culturalOrientation,
  "cross-cultural-training": crossCulturalTraining,
  "employment-readiness": employmentReadiness,
  "community-engagement": communityEngagement,
  "leadership-development": leadershipDevelopment,
  "youth-leadership-academy": youthLeadershipAcademy,
  "governance-development": governanceDevelopment,
  "ethical-leadership": ethicalLeadership,
  "public-speaking-training": publicSpeakingTraining,
  "reconciliation-training": reconciliationTraining,
  "peacebuilding-workshops": peacebuildingWorkshops,
  "conflict-resolution-training": conflictResolutionTraining,
  "restorative-justice": restorativeJustice,
  "community-healing-dialogues": communityHealingDialogues,
  "personal-development": personalDevelopment,
  "emotional-intelligence-training": emotionalIntelligenceTraining,
  "mental-wellness-training": mentalWellnessTraining,
  "goal-setting-life-planning": goalSettingLifePlanning,
  "family-enrichment": familyEnrichment,
  "biblical-studies": biblicalStudies,
  "theological-education": theologicalEducation,
  "christian-leadership-development": christianLeadershipDevelopment,
  "church-leadership-workshops": churchLeadershipWorkshops,
  "digital-literacy": digitalLiteracy,
  "artificial-intelligence-awareness": artificialIntelligenceAwareness,
  "research-technology-skills": researchTechnologySkills,
  "online-learning-success": onlineLearningSuccess,
  "educational-research": educationalResearch,
  "community-needs-assessment": communityNeedsAssessment,
  "policy-development": policyDevelopment,
  "program-evaluation": programEvaluation,
  "entrepreneurship-training": entrepreneurshipTraining,
  "business-development-mentoring": businessDevelopmentMentoring,
  "financial-literacy": financialLiteracy,
  "social-enterprise-development": socialEnterpriseDevelopment,
};

export const allServices: ServicePage[] = [studentRecruitment, collegeAdmissions, universityAdmissions, graduateSchoolAdmissions, programMatching, educationPathwayPlanning, academicCounseling, careerPathwayDevelopment, transferPathways, scholarshipSupport, studyPermitSupport, preDepartureServices, newcomerIntegration, settlementSupport, culturalOrientation, crossCulturalTraining, employmentReadiness, communityEngagement, leadershipDevelopment, youthLeadershipAcademy, governanceDevelopment, ethicalLeadership, publicSpeakingTraining, reconciliationTraining, peacebuildingWorkshops, conflictResolutionTraining, restorativeJustice, communityHealingDialogues, personalDevelopment, emotionalIntelligenceTraining, mentalWellnessTraining, goalSettingLifePlanning, familyEnrichment, biblicalStudies, theologicalEducation, christianLeadershipDevelopment, churchLeadershipWorkshops, digitalLiteracy, artificialIntelligenceAwareness, researchTechnologySkills, onlineLearningSuccess, educationalResearch, communityNeedsAssessment, policyDevelopment, programEvaluation, entrepreneurshipTraining, businessDevelopmentMentoring, financialLiteracy, socialEnterpriseDevelopment];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicesBySlug[slug];
}

export function getAllServices(): ServicePage[] {
  return allServices;
}

export function getServicesByCategory(category: ServicePage["category"]): ServicePage[] {
  return allServices.filter((service) => service.category === category);
}
