import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInView } from "@/components/motion/fade-in-view";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceFaqProps = {
  title: string;
  faq: FaqItem[];
};

export function ServiceFaq({ title, faq }: ServiceFaqProps) {
  return (
    <Section background="white">
      <Container className="space-y-10">
        <FadeInView className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-gtn-secondary">
            Common Questions
          </p>
          <h2 className="text-gtn-primary">Frequently Asked Questions</h2>
          <div
            aria-hidden
            className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-gtn-secondary to-gtn-accent"
          />
          <p className="text-lead">
            Answers to the questions we hear most often about {title.toLowerCase()}.
          </p>
        </FadeInView>

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-gtn-neutral-50 via-white to-gtn-secondary/5 p-6 shadow-sm lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gtn-secondary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-gtn-accent/10 blur-3xl"
          />

          <StaggerChildren>
            <Accordion className="relative mx-auto max-w-3xl gap-3">
              {faq.map((item, index) => {
                const accent = index % 2 === 1 ? "accent" : "secondary";

                return (
                  <StaggerItem key={item.question}>
                    <AccordionItem
                      value={`faq-${index}`}
                      className="overflow-hidden rounded-2xl border border-border/80 bg-white/90 shadow-sm not-last:border-b-0"
                    >
                      <AccordionTrigger
                        className={cn(
                          "items-center gap-4 px-5 py-4 text-base font-semibold text-gtn-primary hover:bg-gtn-neutral-50/80 hover:no-underline sm:px-6 sm:py-5",
                          "focus-visible:rounded-2xl [&_[data-slot=accordion-trigger-icon]]:flex [&_[data-slot=accordion-trigger-icon]]:size-8 [&_[data-slot=accordion-trigger-icon]]:items-center [&_[data-slot=accordion-trigger-icon]]:justify-center [&_[data-slot=accordion-trigger-icon]]:rounded-full",
                          accent === "accent"
                            ? "[&_[data-slot=accordion-trigger-icon]]:bg-gtn-accent/15 [&_[data-slot=accordion-trigger-icon]]:text-gtn-primary"
                            : "[&_[data-slot=accordion-trigger-icon]]:bg-gtn-secondary/10 [&_[data-slot=accordion-trigger-icon]]:text-gtn-secondary",
                        )}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="text-justify leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </StaggerItem>
                );
              })}
            </Accordion>
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
