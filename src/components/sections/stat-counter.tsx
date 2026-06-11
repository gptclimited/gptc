import { CountUp } from "@/components/motion/count-up";
import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type StatCounterProps = {
  stats: { label: string; value: number | string }[];
  note?: string;
  title?: string;
  eyebrow?: string;
};

export function StatCounter({
  stats,
  note,
  title = "Our Impact",
  eyebrow = "By the Numbers",
}: StatCounterProps) {
  return (
    <Section background="white" spacing="compact" className="bg-gtn-primary text-white">
      <Container>
        <FadeInView className="mb-10 text-center">
          <h2 className="text-white">{title}</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gtn-accent">
            {eyebrow}
          </p>
        </FadeInView>

        <FadeInView>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/10">
                  <p className="text-3xl font-semibold text-white lg:text-4xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeInView>

        {note ? (
          <p className="mt-6 text-center text-xs text-white/50">{note}</p>
        ) : null}
      </Container>
    </Section>
  );
}
