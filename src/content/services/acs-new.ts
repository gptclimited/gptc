import {
  createServicePage,
  defaultBenefits,
  defaultFaq,
  defaultProcess,
} from "@/lib/content/service-factory";

const org = "Amani Care Services Inc.";

function acsProgram(
  slug: string,
  title: string,
  category: "Care Programs" | "Employment & Staffing" | "Settlement & Integration",
  metaDescription: string,
  subheadline: string,
  overview: string,
  whoWeServe: string[],
  relatedSlugs: string[] = [],
) {
  return createServicePage({
    slug,
    subsidiary: "acs",
    title,
    category,
    metaDescription,
    subheadline,
    overview,
    whoWeServe,
    benefits: defaultBenefits(title),
    process: defaultProcess(title),
    faq: defaultFaq(title, org),
    relatedSlugs,
  });
}

export const employmentCareerCentre = acsProgram(
  "employment-career-centre",
  "Employment and Career Centre",
  "Care Programs",
  "Amani Care Services Employment and Career Centre helps job seekers with coaching, readiness training, and pathways to meaningful employment.",
  "Comprehensive employment and career support for newcomers, refugees, and community members seeking work.",
  `The Employment and Career Centre is the heart of Amani Care Services' workforce mission. We help individuals find jobs, build careers, and achieve economic stability through personalized coaching, skills assessment, resume support, interview preparation, and employer connections.

Our centre serves newcomers navigating the Canadian job market for the first time, refugees rebuilding their careers, seniors seeking flexible work, and anyone facing barriers to employment. We understand that a job is more than income—it is dignity, belonging, and a foundation for family well-being.

Staff combine employment expertise with cultural sensitivity and trauma-informed support. We partner with employers who value diversity and inclusion, creating pathways from training to placement to long-term career growth.`,
  [
    "Newcomers and immigrants seeking employment",
    "Refugees rebuilding careers in Canada",
    "Job seekers facing barriers to employment",
    "Career changers and upskillers",
    "Employers seeking diverse talent",
  ],
  ["employment-services", "employment-readiness"],
);

export const staffingRecruitmentAgency = acsProgram(
  "staffing-recruitment-agency",
  "Staffing and Recruitment Agency",
  "Employment & Staffing",
  "Professional staffing and recruitment for temporary, permanent, industrial, hospitality, healthcare, and administrative roles across Canada.",
  "Connecting qualified candidates with employers through reliable staffing and recruitment services.",
  `Amani Care Services operates a full-service staffing and recruitment agency connecting job-ready candidates with employers across sectors. We provide temporary staffing, permanent placement, industrial and warehouse staffing, hospitality staff, administrative support, and healthcare staffing solutions.

Our agency draws from a diverse talent pool—including newcomers with international experience, community members seeking flexible work, and skilled professionals ready for their next opportunity. Employers benefit from pre-screened candidates, cultural competency, and responsive service.

For candidates, the agency opens doors to employment that might otherwise remain closed—bridging the gap between capability and opportunity.`,
  [
    "Employers needing temporary or permanent staff",
    "Industrial, warehouse, and logistics companies",
    "Hospitality and event organizations",
    "Healthcare and care facilities",
    "Job seekers registered with ACS programs",
  ],
  ["staffing-services", "employment-career-centre"],
);

export const newcomerSettlementServices = acsProgram(
  "newcomer-settlement-services",
  "Newcomer Settlement Services",
  "Settlement & Integration",
  "Settlement orientation, housing support, school registration, and community navigation for newcomers building life in Canada.",
  "Practical settlement support that helps newcomers navigate systems and build a stable foundation in Canada.",
  `Starting life in a new country involves countless practical steps—housing, banking, healthcare, schooling, government services, and community connections. Amani Care Services' Newcomer Settlement Services provides hands-on support so newcomers can focus on building their future rather than navigating bureaucracy alone.

Our settlement workers offer orientation sessions, one-on-one navigation, document assistance, housing search support, school registration help, and referrals to community resources. We work in partnership with GTN for education pathways and GPN for community integration and dialogue.

Services are available in culturally responsive formats with interpretation support where needed.`,
  [
    "Newly arrived immigrants and refugees",
    "Families with school-age children",
    "Individuals seeking housing and basic services",
    "Community sponsors and partner organizations",
    "Government-funded settlement program participants",
  ],
  ["newcomer-services", "settlement-support"],
);

export const languageAdaptationCentre = acsProgram(
  "language-adaptation-centre",
  "Language Adaptation and Cultural Integration Centre",
  "Settlement & Integration",
  "English conversation circles, workplace communication, business English, and cultural orientation for newcomers and professionals.",
  "Language and cultural skills for workplace success, community belonging, and confident daily life in Canada.",
  `Language is the gateway to employment, education, and community belonging. The Language Adaptation and Cultural Integration Centre offers programs tailored to real-life needs—not textbook English alone, but workplace communication, business English, conversation circles, cultural orientation, and cross-cultural communication skills.

Programs include English conversation groups, workplace language coaching, business English for entrepreneurs, French language support, and Swahili interpretation services for community members. Facilitators create welcoming environments where learners build confidence through practice, peer support, and practical scenarios.

The Centre complements GTN's educational consulting and ACS employment services—language skills directly support job readiness and career advancement.`,
  [
    "Newcomers at all English proficiency levels",
    "Professionals seeking workplace communication skills",
    "Entrepreneurs needing business English",
    "Seniors and community members seeking social connection",
    "Employers supporting employee language development",
  ],
  ["language-adaptation-programs", "cultural-orientation"],
);

export const hospitalityCommunityServices = acsProgram(
  "hospitality-community-services",
  "Hospitality and Community Services",
  "Care Programs",
  "Event support, conference services, reception, visitor orientation, and volunteer coordination for community organizations.",
  "Professional hospitality and community event support that creates welcoming experiences for all.",
  `Community events, conferences, and gatherings require skilled hospitality support—from reception and visitor orientation to event logistics and volunteer coordination. Amani Care Services provides trained hospitality staff and community service teams for organizations hosting events, welcoming newcomers, or running community programs.

Our teams bring professionalism, cultural awareness, and a spirit of welcome. Services include conference support, community event staffing, reception services, visitor orientation for newcomers, and volunteer program coordination.

This program also creates employment pathways—training community members in hospitality skills while serving organizations that need reliable event support.`,
  [
    "Community organizations hosting events",
    "Conferences and faith-based gatherings",
    "Newcomer welcome events and orientations",
    "Nonprofits needing reception and event support",
    "Individuals seeking hospitality employment experience",
  ],
  ["hospitality-services", "community-outreach-volunteer"],
);

export const seniorDisabilitySupport = acsProgram(
  "senior-disability-support",
  "Senior and Disability Support Services",
  "Care Programs",
  "Compassionate care and support services for seniors and people with disabilities, promoting dignity, independence, and community connection.",
  "Person-centred care that honours dignity and supports independence for seniors and people with disabilities.",
  `Amani Care Services provides compassionate support for seniors and people with disabilities—helping individuals live with dignity, maintain independence where possible, and stay connected to community. Services include companion support, respite for family caregivers, assistance with daily activities, and community engagement programs.

Our approach is person-centred and culturally responsive. We recognize that care is not one-size-fits-all—each individual and family has unique needs, preferences, and cultural contexts. Staff are trained in sensitivity, safety, and respectful communication.

This program reflects ACS's mission to improve quality of life through practical, compassionate care.`,
  [
    "Seniors seeking companionship and daily support",
    "People with disabilities and their families",
    "Family caregivers needing respite",
    "Community organizations serving vulnerable populations",
    "Healthcare partners seeking community-based support",
  ],
  ["family-youth-support", "refugee-immigrant-support"],
);

export const refugeeImmigrantSupport = acsProgram(
  "refugee-immigrant-support",
  "Refugee and Immigrant Support Services",
  "Settlement & Integration",
  "Dedicated support for refugees and immigrants including orientation, advocacy, trauma-informed care, and community integration.",
  "Specialized support for refugees and immigrants navigating resettlement, healing, and community belonging.",
  `Refugees and immigrants face unique challenges—trauma from displacement, credential recognition barriers, language gaps, and the stress of rebuilding life in a new country. Amani Care Services offers specialized support that combines settlement navigation, trauma-informed care, employment pathways, and community integration.

We work alongside GPN for trauma healing and dialogue, and GTN for education and training—creating a holistic support system within the GPTC ecosystem. Services include case management, advocacy, group support, and referrals to specialized resources.

Our team understands the refugee journey and commits to walking alongside individuals and families with patience, respect, and practical help.`,
  [
    "Refugees in initial and ongoing resettlement",
    "Immigrant families facing integration challenges",
    "Survivors of trauma and displacement",
    "Sponsor groups and community partners",
    "Service providers seeking referral partners",
  ],
  ["newcomer-settlement-services", "trauma-healing-storytelling"],
);

export const familyYouthSupport = acsProgram(
  "family-youth-support",
  "Family and Youth Support Services",
  "Care Programs",
  "Support programs for families and youth including mentoring, parenting support, youth employment pathways, and family enrichment.",
  "Strengthening families and empowering youth through practical support, mentoring, and community connection.",
  `Strong families and supported youth are the foundation of resilient communities. Amani Care Services offers family and youth support including parenting programs, youth mentoring, after-school support, employment pathways for young people, and family enrichment activities.

Programs address the specific needs of newcomer families, single parents, youth at risk of disconnection, and families navigating cultural transitions. We connect youth to GTN leadership programs and employment opportunities through ACS's career centre.

Family support is holistic—we address practical needs, emotional well-being, and community belonging together.`,
  [
    "Newcomer and immigrant families",
    "Youth seeking mentoring and employment pathways",
    "Parents needing parenting support and resources",
    "Single-parent families",
    "Community organizations serving youth",
  ],
  ["youth-peace-ambassador", "employment-career-centre"],
);

export const entrepreneurshipSmallBusinessCentre = acsProgram(
  "entrepreneurship-small-business-centre",
  "Entrepreneurship and Small Business Development Centre",
  "Care Programs",
  "Business start-up support, financial literacy, business planning, and cooperative development for aspiring entrepreneurs.",
  "Launch and grow small businesses with coaching, planning tools, and community-based entrepreneurial support.",
  `Economic empowerment often means entrepreneurship—especially for newcomers whose credentials may not transfer easily to Canadian employment. The Entrepreneurship and Small Business Development Centre provides start-up coaching, business plan development, financial literacy, marketing basics, and cooperative development support.

We help aspiring entrepreneurs move from idea to launch, with particular focus on social enterprises, home-based businesses, and cooperative models that build community wealth. The Centre connects to GTN's entrepreneurship training and ACS employment services for a full economic pathway.

Programs include workshops, one-on-one mentoring, peer learning circles, and connections to microfinance and community resources.`,
  [
    "Newcomer entrepreneurs",
    "Small business owners seeking growth",
    "Social enterprise founders",
    "Cooperative and community business developers",
    "Youth exploring entrepreneurship",
  ],
  ["entrepreneurship-services", "financial-literacy"],
);

export const communityOutreachVolunteer = acsProgram(
  "community-outreach-volunteer",
  "Community Outreach and Volunteer Services",
  "Care Programs",
  "Community outreach, volunteer coordination, and neighbourhood engagement programs connecting people to opportunities and support.",
  "Building community connection through outreach, volunteering, and neighbourhood engagement.",
  `Community Outreach and Volunteer Services connects people to opportunities—whether as volunteers giving back or community members accessing support. We coordinate volunteer programs, organize neighbourhood outreach, facilitate community events, and bridge gaps between service providers and those who need them.

Volunteering builds skills, networks, and belonging—especially valuable for newcomers building their Canadian experience. Our outreach ensures vulnerable community members know about available services and feel welcomed.

This program embodies ACS's commitment to caring for people while creating opportunities for collective community strength.`,
  [
    "Community members seeking volunteer opportunities",
    "Newcomers building Canadian experience",
    "Organizations needing volunteer coordination",
    "Neighbourhood groups and community associations",
    "Individuals seeking community connection",
  ],
  ["hospitality-community-services", "newcomer-settlement-services"],
);

export const employmentServices = acsProgram(
  "employment-services",
  "Employment Services",
  "Employment & Staffing",
  "Resume writing, interview preparation, job search coaching, career counselling, and employment readiness from Amani Care Services.",
  "Full-spectrum employment services from resume to interview to job placement and career growth.",
  `Amani Care Services Employment Services provides end-to-end support for job seekers: resume and cover letter writing, interview preparation and mock interviews, job search strategy, career counselling, and employment readiness training.

Our coaches understand the Canadian labour market and the specific barriers newcomers face—from credential recognition to lack of local references to cultural differences in hiring practices. We help clients present their experience confidently and connect with employers who value their skills.

Employment Services works seamlessly with the Employment and Career Centre and Staffing Agency for a complete workforce development pathway.`,
  [
    "Job seekers at any career stage",
    "Newcomers entering the Canadian job market",
    "Career changers and upskillers",
    "Clients referred from settlement programs",
    "Graduates of GTN training programs",
  ],
  ["employment-career-centre", "employment-readiness"],
);

export const staffingServices = acsProgram(
  "staffing-services",
  "Staffing Services",
  "Employment & Staffing",
  "Temporary, permanent, industrial, hospitality, warehouse, administrative, and healthcare staffing solutions for employers.",
  "Flexible staffing solutions across industries—temporary, permanent, and specialized placements.",
  `Our Staffing Services division provides employers with reliable access to pre-screened candidates for temporary, permanent, and contract roles. Specializations include industrial and warehouse staffing, hospitality and events, administrative support, healthcare staffing, and general labour.

We prioritize fit—matching skills, availability, and workplace culture. Candidates from ACS training and employment programs enter our talent pool with supported preparation. Employers gain access to diverse, motivated workers while supporting community economic inclusion.

Contact us for staffing requests, volume hiring, and ongoing workforce partnerships.`,
  [
    "Employers with temporary staffing needs",
    "Industrial, warehouse, and logistics operations",
    "Hospitality and event companies",
    "Healthcare and care facilities",
    "Administrative and office-based employers",
  ],
  ["staffing-recruitment-agency", "employment-services"],
);

export const newcomerServices = acsProgram(
  "newcomer-services",
  "Newcomer Services",
  "Settlement & Integration",
  "Settlement orientation, translation, interpretation, housing support, school registration, and government services assistance.",
  "One-stop newcomer support for the practical steps of building life in Canada.",
  `Newcomer Services provides comprehensive support for the practical dimensions of settlement: orientation to Canadian systems, translation and interpretation, housing search assistance, school registration support, community navigation, and help accessing government services.

Our team serves as a trusted guide—reducing the overwhelm that newcomers often experience. We coordinate with other ACS programs and GPTC partners so clients receive holistic support rather than fragmented referrals.

Services are available by appointment, in group sessions, and through community outreach events.`,
  [
    "Newly arrived immigrants and refugees",
    "Families with children entering school",
    "Individuals seeking housing and basic services",
    "Community sponsors",
    "Partner organizations making referrals",
  ],
  ["newcomer-settlement-services", "settlement-support"],
);

export const languageAdaptationPrograms = acsProgram(
  "language-adaptation-programs",
  "Language Adaptation Programs",
  "Settlement & Integration",
  "English conversation circles, workplace communication, business English, cultural orientation, and French and Swahili language support.",
  "Practical language programs for daily life, work, and community belonging.",
  `Language Adaptation Programs offer structured and informal language learning for real-world contexts. Options include English conversation circles, workplace communication training, business English for entrepreneurs, cultural orientation sessions, cross-cultural communication workshops, French language support, and Swahili interpretation services.

Unlike generic language classes, our programs focus on the situations newcomers actually face—job interviews, parent-teacher meetings, medical appointments, workplace teamwork, and community participation. Facilitators create supportive environments where mistakes are part of learning.

Programs run at various times and formats to accommodate work schedules and family responsibilities.`,
  [
    "Newcomers at all proficiency levels",
    "Workers needing workplace English",
    "Entrepreneurs and business owners",
    "Community members seeking social connection",
    "Organizations requesting workplace language training",
  ],
  ["language-adaptation-centre", "cross-cultural-training"],
);

export const hospitalityServices = acsProgram(
  "hospitality-services",
  "Hospitality Services",
  "Care Programs",
  "Community events, conference support, reception services, visitor orientation, and volunteer coordination for organizations.",
  "Professional hospitality teams for events, conferences, and community welcome experiences.",
  `Hospitality Services provides trained staff for community events, conferences, receptions, visitor orientation, and volunteer coordination. Our teams deliver professional, welcoming service that reflects the values of the organizations we support.

Services include event setup and support, guest reception, registration desk staffing, visitor tours and orientation, and coordination of volunteer teams. We also train community members in hospitality skills, creating employment pathways alongside service delivery.

Book our team for your next community event, conference, or newcomer welcome gathering.`,
  [
    "Community and faith-based organizations",
    "Conference and event planners",
    "Newcomer welcome programs",
    "Nonprofits and civic institutions",
    "Individuals seeking hospitality employment training",
  ],
  ["hospitality-community-services", "community-outreach-volunteer"],
);

export const entrepreneurshipServices = acsProgram(
  "entrepreneurship-services",
  "Entrepreneurship Services",
  "Care Programs",
  "Business start-up support, financial literacy, business planning, cooperative development, and social enterprise development.",
  "From idea to launch—entrepreneurship support for small business and social enterprise founders.",
  `Entrepreneurship Services helps aspiring business owners turn ideas into viable enterprises. Support includes business plan development, financial literacy training, market research basics, registration and compliance guidance, cooperative development, and social enterprise coaching.

We specialize in serving newcomers, women entrepreneurs, and community-based ventures that create both income and social impact. Connections to GTN's entrepreneurship training and ACS employment services ensure a comprehensive economic pathway.

Whether you are starting a home-based business, launching a social enterprise, or exploring cooperative models, our coaches walk with you from concept to launch.`,
  [
    "Aspiring entrepreneurs and small business owners",
    "Newcomers with business ideas or international experience",
    "Social enterprise founders",
    "Cooperative developers",
    "Graduates of GTN entrepreneurship programs",
  ],
  ["entrepreneurship-small-business-centre", "business-development-mentoring"],
);

export const acsNewServices = [
  employmentCareerCentre,
  staffingRecruitmentAgency,
  newcomerSettlementServices,
  languageAdaptationCentre,
  hospitalityCommunityServices,
  seniorDisabilitySupport,
  refugeeImmigrantSupport,
  familyYouthSupport,
  entrepreneurshipSmallBusinessCentre,
  communityOutreachVolunteer,
  employmentServices,
  staffingServices,
  newcomerServices,
  languageAdaptationPrograms,
  hospitalityServices,
  entrepreneurshipServices,
];
