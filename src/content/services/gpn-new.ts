import {
  createServicePage,
  defaultBenefits,
  defaultFaq,
  defaultProcess,
} from "@/lib/content/service-factory";

const org = "Global Peacebuilding Network";

function gpnProgram(
  slug: string,
  title: string,
  metaDescription: string,
  subheadline: string,
  overview: string,
  whoWeServe: string[],
  relatedSlugs: string[] = [],
) {
  return createServicePage({
    slug,
    subsidiary: "gpn",
    title,
    category: "Peacebuilding Programs",
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

export const peacebuildingReconciliationInstitute = gpnProgram(
  "peacebuilding-reconciliation-institute",
  "Peacebuilding and Reconciliation Institute",
  "The Peacebuilding and Reconciliation Institute equips communities, leaders, and institutions with tools for conflict transformation, dialogue, and lasting reconciliation.",
  "Building capacity for peacebuilding, reconciliation, and community transformation at every level of society.",
  `The Peacebuilding and Reconciliation Institute is the flagship program of the Global Peacebuilding Network. It brings together practitioners, community leaders, faith leaders, educators, and civil society actors to develop practical skills in conflict analysis, dialogue facilitation, reconciliation processes, and trauma-informed peacebuilding.

Our institute combines academic rigour with field-tested methodologies. Participants learn how to move communities from division toward shared humanity—addressing root causes of conflict while building bridges across differences. Programs are designed for micro (individual and family), meso (community and organizational), and macro (systems and policy) levels of transformation.

Whether you serve in a post-conflict setting, a diverse urban neighbourhood, or an institution seeking greater cohesion, the Institute provides the frameworks, tools, and peer community to sustain your peacebuilding work.`,
  [
    "Community leaders and facilitators",
    "Faith leaders and pastors",
    "Educators and school administrators",
    "Civil society and NGO practitioners",
    "Government and policy advisors",
  ],
  ["conflict-resolution-training", "reconciliation-training"],
);

export const conflictTransformationCentre = gpnProgram(
  "conflict-transformation-centre",
  "Conflict Transformation Centre",
  "The Conflict Transformation Centre provides mediation, dialogue, and conflict analysis services for communities, organizations, and institutions seeking peaceful resolution.",
  "Transforming conflict into opportunities for understanding, healing, and stronger relationships.",
  `Conflict is a natural part of human relationships—but how we respond determines whether it destroys or strengthens communities. The Conflict Transformation Centre helps individuals, groups, and institutions navigate disputes with dignity, clarity, and a commitment to shared solutions.

Our centre offers conflict analysis, mediation services, facilitated dialogue, and training for internal dispute resolution teams. We work with schools facing bullying and exclusion, workplaces managing cultural tensions, faith communities healing from division, and neighbourhoods recovering from violence.

The Centre's approach integrates restorative principles, active listening, interest-based negotiation, and trauma awareness. We do not simply manage conflict—we help parties understand underlying needs, rebuild trust, and co-create pathways forward.`,
  [
    "Communities experiencing division or tension",
    "Schools and educational institutions",
    "Churches and faith-based organizations",
    "Workplaces and professional teams",
    "Families and neighbourhood groups",
  ],
  ["community-mediation-services", "conflict-resolution-training"],
);

export const traumaHealingStorytelling = gpnProgram(
  "trauma-healing-storytelling",
  "Trauma Healing and Storytelling Program",
  "Heal from trauma and rebuild identity through storytelling, narrative therapy, and community-supported recovery with GPN's Trauma Healing Program.",
  "Healing individuals and communities through the power of story, witness, and compassionate accompaniment.",
  `Trauma leaves deep wounds—in individuals, families, and entire communities. The Trauma Healing and Storytelling Program creates safe spaces where people can name their pain, share their stories, and begin the journey toward healing and wholeness.

Drawing on narrative therapy, restorative practices, and community-based healing traditions, this program helps participants process loss, violence, displacement, and intergenerational trauma. Storytelling becomes a bridge—from isolation to connection, from silence to voice, from survival to resilience.

Facilitators are trained in trauma-informed care and create environments of safety, confidentiality, and respect. Programs can be adapted for refugees, survivors of conflict, youth affected by violence, and communities seeking collective healing after crisis.`,
  [
    "Survivors of conflict and violence",
    "Refugees and displaced persons",
    "Youth affected by trauma",
    "Families seeking healing and reconciliation",
    "Communities recovering from crisis",
  ],
  ["community-healing-dialogues", "reconciliation-training"],
);

export const peaceEducationSchools = gpnProgram(
  "peace-education-schools",
  "Peace Education for Schools",
  "Peace education programs for schools that teach conflict resolution, empathy, inclusion, and leadership for students and educators.",
  "Equipping the next generation with skills for peace, empathy, and responsible citizenship.",
  `Schools are laboratories for society—where young people learn not only academic subjects but how to live together. Peace Education for Schools integrates conflict resolution, empathy building, anti-bullying strategies, intercultural dialogue, and youth leadership into school culture and curriculum.

Global Peacebuilding Network partners with schools to design age-appropriate programs for elementary, secondary, and post-secondary settings. We train teachers as peace educators, support student peace ambassador programs, and help administrators build inclusive, restorative discipline policies.

Our approach aligns with social-emotional learning frameworks and supports safer, more cohesive school communities where every student can thrive.`,
  [
    "Elementary and secondary schools",
    "Teachers and school counsellors",
    "School administrators and boards",
    "Student leaders and peace ambassadors",
    "Parents and school community groups",
  ],
  ["youth-peace-ambassador", "conflict-resolution-training"],
);

export const interculturalDialogue = gpnProgram(
  "intercultural-dialogue",
  "Intercultural Dialogue Program",
  "Build bridges across cultures through facilitated dialogue, cultural competency training, and programs that celebrate diversity while fostering unity.",
  "Creating spaces where cultural differences become strengths for learning, belonging, and shared community.",
  `In an increasingly diverse world, communities need more than tolerance—they need skills for genuine intercultural dialogue. This program brings people from different cultural, ethnic, and faith backgrounds together for structured conversations that build understanding, challenge stereotypes, and foster belonging.

Facilitators guide participants through exercises in active listening, cultural humility, perspective-taking, and collaborative problem-solving. Programs can address specific community tensions or proactively strengthen cohesion in diverse neighbourhoods, workplaces, and institutions.

The Intercultural Dialogue Program supports Canada's multicultural reality while addressing the challenges of integration, prejudice, and social exclusion.`,
  [
    "Multicultural communities and neighbourhoods",
    "Workplaces with diverse teams",
    "Faith communities seeking interfaith dialogue",
    "Newcomer and host community bridge-building",
    "Educational and civic institutions",
  ],
  ["peacebuilding-workshops", "community-healing-dialogues"],
);

export const governanceLegitimacyStudies = gpnProgram(
  "governance-legitimacy-studies",
  "Governance and Legitimacy Studies",
  "Research and training in governance, legitimacy, and leadership for institutions seeking trust, accountability, and effective community representation.",
  "Strengthening leadership, governance, and legitimacy for institutions that serve the common good.",
  `Trust in institutions is essential for peaceful societies. The Governance and Legitimacy Studies program explores how leaders and organizations earn legitimacy, practice accountable governance, and represent diverse community interests fairly.

Through workshops, research partnerships, and consulting, GPN supports churches, community organizations, civil society groups, and local governance bodies. Topics include ethical leadership, participatory decision-making, transparency, conflict of interest, and building institutions that communities trust.

This program connects peacebuilding with the structural dimensions of social cohesion—because sustainable peace requires institutions people believe in.`,
  [
    "Community and faith-based organizations",
    "Local governance and civic leaders",
    "NGO boards and executive teams",
    "Youth leadership programs",
    "Researchers and policy practitioners",
  ],
  ["ethical-leadership", "governance-development"],
);

export const migrationIdentityStudies = gpnProgram(
  "migration-identity-studies",
  "Migration and Identity Studies",
  "Explore migration, identity, and belonging through research, dialogue, and programs that support inclusive communities and policy understanding.",
  "Understanding migration and identity to build inclusive communities where everyone belongs.",
  `Migration reshapes communities, identities, and social dynamics. Migration and Identity Studies examines these transformations through research, community dialogue, and practical programs that support both newcomers and receiving communities.

GPN facilitates conversations about belonging, cultural identity, integration challenges, and the policies that shape migration experiences. We work with refugees, immigrants, diaspora communities, service providers, and policymakers to build evidence-based, human-centred approaches.

This program bridges the peacebuilding mission of GPN with the lived realities of migration—addressing prejudice, fostering inclusion, and strengthening social cohesion.`,
  [
    "Refugees and immigrant communities",
    "Settlement and integration service providers",
    "Researchers and academic partners",
    "Policy advocates and civic leaders",
    "Communities experiencing demographic change",
  ],
  ["intercultural-dialogue", "trauma-healing-storytelling"],
);

export const communityMediationServices = gpnProgram(
  "community-mediation-services",
  "Community Mediation Services",
  "Professional community mediation for disputes between neighbours, families, organizations, and groups seeking fair, lasting resolution.",
  "Impartial mediation that helps parties find their own solutions and restore relationships.",
  `When disputes escalate, communities need skilled mediators who can create space for dialogue and guide parties toward mutually acceptable solutions. GPN's Community Mediation Services provides trained, impartial mediators for neighbourhood conflicts, organizational disputes, inter-group tensions, and family/community matters.

Our mediators follow established standards of confidentiality, neutrality, and voluntary participation. The process focuses on interests rather than positions, helping parties understand each other and co-create agreements they can uphold.

Mediation is often faster, less costly, and more relationship-preserving than adversarial approaches—and it builds community capacity for handling future conflicts constructively.`,
  [
    "Neighbours in dispute",
    "Community organizations",
    "Families and extended kin networks",
    "Tenant and housing communities",
    "Small businesses and local groups",
  ],
  ["conflict-transformation-centre", "restorative-justice"],
);

export const womenPeaceInitiative = gpnProgram(
  "women-peace-initiative",
  "Women and Peace Initiative",
  "Empowering women as leaders in peacebuilding, reconciliation, and community transformation through training, networks, and advocacy.",
  "Women at the centre of peacebuilding—leading, healing, and transforming communities.",
  `Women are often the first to suffer in conflict and the first to work for peace—yet their leadership is frequently underrecognized. The Women and Peace Initiative equips women with skills in mediation, advocacy, trauma healing, community organizing, and leadership for peace.

Programs include leadership academies, peer support networks, storytelling circles, and advocacy training. We create spaces where women's voices, experiences, and wisdom shape peacebuilding strategies at every level.

The Initiative aligns with global recognition that sustainable peace requires women's full participation in decision-making, reconciliation processes, and community leadership.`,
  [
    "Women community leaders and activists",
    "Survivors seeking leadership pathways",
    "Faith and civic women leaders",
    "Women's organizations and networks",
    "Young women aspiring to peacebuilding careers",
  ],
  ["trauma-healing-storytelling", "youth-peace-ambassador"],
);

export const youthPeaceAmbassador = gpnProgram(
  "youth-peace-ambassador",
  "Youth Peace Ambassador Program",
  "Train young leaders as peace ambassadors equipped to promote dialogue, inclusion, and conflict resolution in schools and communities.",
  "Developing the next generation of peacebuilders, leaders, and community changemakers.",
  `Young people are not just the future—they are peacebuilders today. The Youth Peace Ambassador Program identifies, trains, and supports youth who want to lead peace initiatives in their schools, neighbourhoods, and peer groups.

Ambassadors learn conflict resolution, public speaking, project design, social media for social good, and facilitation skills. They design and lead initiatives—from anti-bullying campaigns to intercultural events to dialogue circles—supported by GPN mentors.

The program creates a pipeline of ethical, skilled young leaders who carry peacebuilding values into every sector of society.`,
  [
    "High school and post-secondary students",
    "Youth group and church youth leaders",
    "Student council and club leaders",
    "Young newcomers building community connections",
    "Educators supporting youth leadership",
  ],
  ["peace-education-schools", "women-peace-initiative"],
);

export const fromDivisionToSharedHumanity = createServicePage({
  slug: "from-division-to-shared-humanity",
  subsidiary: "gpn",
  title: "From Division to Shared Humanity",
  category: "Peacebuilding Initiatives",
  metaDescription:
    "GPN's flagship peacebuilding initiative addressing division at micro, meso, and macro levels—from healing individuals to transforming systems.",
  subheadline:
    "A comprehensive peacebuilding initiative moving communities from division toward shared humanity.",
  overview: `From Division to Shared Humanity is the Global Peacebuilding Network's signature initiative—a integrated approach to peacebuilding that works simultaneously at three levels of analysis.

At the micro level, we focus on healing individuals and families—addressing trauma, restoring relationships, and rebuilding personal identity and dignity. At the meso level, we strengthen communities and organizations through dialogue, mediation, governance training, and inclusive leadership. At the macro level, we engage systems, policies, and institutions to address structural drivers of conflict and exclusion.

This initiative connects GPN's programs into a coherent framework: trauma healing and storytelling for individuals, community mediation and dialogue for groups, and governance and advocacy work for systemic change. Participants can enter at any level and connect to pathways across the ecosystem.

Together with Global Training Network and Amani Care Services, this initiative embodies the GPTC vision—education, peacebuilding, and care working together for holistic human transformation.`,
  whoWeServe: [
    "Communities experiencing division or post-conflict recovery",
    "Institutions seeking systemic change",
    "Leaders working across micro, meso, and macro levels",
    "Partners in the GPTC ecosystem",
    "Funders and collaborators in peacebuilding",
  ],
  benefits: [
    {
      title: "Integrated Approach",
      description:
        "Connect individual healing, community dialogue, and systemic change in one coherent framework.",
    },
    {
      title: "Multi-Level Impact",
      description:
        "Address root causes at personal, community, and institutional levels simultaneously.",
    },
    {
      title: "Ecosystem Partnership",
      description:
        "Leverage training from GTN and practical services from ACS for comprehensive transformation.",
    },
  ],
  process: defaultProcess("From Division to Shared Humanity"),
  faq: defaultFaq("From Division to Shared Humanity", org),
  relatedSlugs: [
    "peacebuilding-reconciliation-institute",
    "conflict-transformation-centre",
    "trauma-healing-storytelling",
  ],
});

export const gpnNewServices = [
  peacebuildingReconciliationInstitute,
  conflictTransformationCentre,
  traumaHealingStorytelling,
  peaceEducationSchools,
  interculturalDialogue,
  governanceLegitimacyStudies,
  migrationIdentityStudies,
  communityMediationServices,
  womenPeaceInitiative,
  youthPeaceAmbassador,
  fromDivisionToSharedHumanity,
];
