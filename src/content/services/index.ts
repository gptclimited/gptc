import { academicCounseling } from "@/content/services/academic-counseling";
import { artificialIntelligenceAwareness } from "@/content/services/artificial-intelligence-awareness";
import { biblicalStudies } from "@/content/services/biblical-studies";
import { businessDevelopmentMentoring } from "@/content/services/business-development-mentoring";
import { careerPathwayDevelopment } from "@/content/services/career-pathway-development";
import { christianLeadershipDevelopment } from "@/content/services/christian-leadership-development";
import { churchLeadershipWorkshops } from "@/content/services/church-leadership-workshops";
import { collegeAdmissions } from "@/content/services/college-admissions";
import { communityEngagement } from "@/content/services/community-engagement";
import { communityHealingDialogues } from "@/content/services/community-healing-dialogues";
import { communityNeedsAssessment } from "@/content/services/community-needs-assessment";
import { conflictResolutionTraining } from "@/content/services/conflict-resolution-training";
import { crossCulturalTraining } from "@/content/services/cross-cultural-training";
import { culturalOrientation } from "@/content/services/cultural-orientation";
import { digitalLiteracy } from "@/content/services/digital-literacy";
import { educationPathwayPlanning } from "@/content/services/education-pathway-planning";
import { educationalResearch } from "@/content/services/educational-research";
import { emotionalIntelligenceTraining } from "@/content/services/emotional-intelligence-training";
import { employmentReadiness } from "@/content/services/employment-readiness";
import { entrepreneurshipTraining } from "@/content/services/entrepreneurship-training";
import { ethicalLeadership } from "@/content/services/ethical-leadership";
import { familyEnrichment } from "@/content/services/family-enrichment";
import { financialLiteracy } from "@/content/services/financial-literacy";
import { goalSettingLifePlanning } from "@/content/services/goal-setting-life-planning";
import { governanceDevelopment } from "@/content/services/governance-development";
import { graduateSchoolAdmissions } from "@/content/services/graduate-school-admissions";
import { leadershipDevelopment } from "@/content/services/leadership-development";
import { mentalWellnessTraining } from "@/content/services/mental-wellness-training";
import { newcomerIntegration } from "@/content/services/newcomer-integration";
import { onlineLearningSuccess } from "@/content/services/online-learning-success";
import { peacebuildingWorkshops } from "@/content/services/peacebuilding-workshops";
import { personalDevelopment } from "@/content/services/personal-development";
import { policyDevelopment } from "@/content/services/policy-development";
import { preDepartureServices } from "@/content/services/pre-departure-services";
import { programEvaluation } from "@/content/services/program-evaluation";
import { programMatching } from "@/content/services/program-matching";
import { publicSpeakingTraining } from "@/content/services/public-speaking-training";
import { reconciliationTraining } from "@/content/services/reconciliation-training";
import { researchTechnologySkills } from "@/content/services/research-technology-skills";
import { restorativeJustice } from "@/content/services/restorative-justice";
import { scholarshipSupport } from "@/content/services/scholarship-support";
import { settlementSupport } from "@/content/services/settlement-support";
import { socialEnterpriseDevelopment } from "@/content/services/social-enterprise-development";
import { studentRecruitment } from "@/content/services/student-recruitment";
import { studyPermitSupport } from "@/content/services/study-permit-support";
import { theologicalEducation } from "@/content/services/theological-education";
import { transferPathways } from "@/content/services/transfer-pathways";
import { universityAdmissions } from "@/content/services/university-admissions";
import { youthLeadershipAcademy } from "@/content/services/youth-leadership-academy";
import { gpnNewServices } from "@/content/services/gpn-new";
import { acsNewServices } from "@/content/services/acs-new";
import { gtnNewServices } from "@/content/services/gtn-new";
import type { ServicePage } from "@/types/service";
import type { SubsidiarySlug } from "@/lib/subsidiaries";

const individualServices: ServicePage[] = [
  academicCounseling,
  artificialIntelligenceAwareness,
  biblicalStudies,
  businessDevelopmentMentoring,
  careerPathwayDevelopment,
  christianLeadershipDevelopment,
  churchLeadershipWorkshops,
  collegeAdmissions,
  communityEngagement,
  communityHealingDialogues,
  communityNeedsAssessment,
  conflictResolutionTraining,
  crossCulturalTraining,
  culturalOrientation,
  digitalLiteracy,
  educationPathwayPlanning,
  educationalResearch,
  emotionalIntelligenceTraining,
  employmentReadiness,
  entrepreneurshipTraining,
  ethicalLeadership,
  familyEnrichment,
  financialLiteracy,
  goalSettingLifePlanning,
  governanceDevelopment,
  graduateSchoolAdmissions,
  leadershipDevelopment,
  mentalWellnessTraining,
  newcomerIntegration,
  onlineLearningSuccess,
  peacebuildingWorkshops,
  personalDevelopment,
  policyDevelopment,
  preDepartureServices,
  programEvaluation,
  programMatching,
  publicSpeakingTraining,
  reconciliationTraining,
  researchTechnologySkills,
  restorativeJustice,
  scholarshipSupport,
  settlementSupport,
  socialEnterpriseDevelopment,
  studentRecruitment,
  studyPermitSupport,
  theologicalEducation,
  transferPathways,
  universityAdmissions,
  youthLeadershipAcademy,
];

const batchServices: ServicePage[] = [
  ...gpnNewServices,
  ...acsNewServices,
  ...gtnNewServices,
];

export const allServices: ServicePage[] = [...individualServices, ...batchServices];

export const servicesBySlug: Record<string, ServicePage> = Object.fromEntries(
  allServices.map((service) => [service.slug, service]),
);

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicesBySlug[slug];
}

export function getAllServices(): ServicePage[] {
  return allServices;
}

export function getServicesByCategory(category: ServicePage["category"]): ServicePage[] {
  return allServices.filter((service) => service.category === category);
}

export function getServicesBySubsidiary(subsidiary: SubsidiarySlug): ServicePage[] {
  return allServices.filter((service) => service.subsidiary === subsidiary);
}
