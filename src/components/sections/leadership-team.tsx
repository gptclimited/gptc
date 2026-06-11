import Image from "next/image";

import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { LeaderProfile } from "@/config/types";

type LeadershipTeamProps = {
  members: readonly LeaderProfile[];
};

function getInitials(name: string) {
  return (
    name
      .replace(/\[.*?\]/g, "")
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?"
  );
}

export function LeadershipTeam({ members }: LeadershipTeamProps) {
  return (
    <Section background="muted">
      <Container className="space-y-10">
        <FadeInView className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            Our Team
          </p>
          <h2 className="text-gtn-primary">Leadership Team</h2>
          <p className="text-muted-foreground">
            Meet the people guiding GTN&apos;s mission to empower learners, newcomers, and
            communities.
          </p>
        </FadeInView>
        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <StaggerItem key={member.name + member.title}>
              <Card className="h-full overflow-hidden transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md">
                {member.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gtn-neutral-50">
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <CardHeader className="items-center pt-8 text-center">
                    <div
                      className="mb-2 flex size-20 items-center justify-center rounded-full bg-gtn-primary text-xl font-semibold text-white ring-4 ring-gtn-neutral-50"
                      role="img"
                      aria-label={`${member.name} avatar`}
                    >
                      {getInitials(member.name)}
                    </div>
                  </CardHeader>
                )}
                <CardHeader className={member.image ? "text-center" : "items-center text-center"}>
                  <CardTitle className="text-gtn-primary">{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
