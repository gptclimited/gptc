import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { siteImages } from "@/config/images";
import { logoBrandStory } from "@/config/logo";

export function LogoMeaningSection() {
  return (
    <Section background="white">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary">Brand Identity</Badge>
          <h2 className="text-gtn-primary">Logo &amp; Brand Story</h2>
          <p className="max-w-2xl text-muted-foreground">{logoBrandStory.overall}</p>
          <p className="max-w-2xl text-sm font-medium text-gtn-primary">
            {logoBrandStory.journey}
          </p>
          <blockquote className="max-w-2xl border-l-4 border-gtn-accent pl-4 text-sm italic text-muted-foreground">
            {logoBrandStory.oneSentence}
          </blockquote>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <Image
              src={siteImages.logoHorizontalMotto.src}
              alt={siteImages.logoHorizontalMotto.alt}
              width={siteImages.logoHorizontalMotto.width}
              height={siteImages.logoHorizontalMotto.height}
              className="h-auto w-full object-contain"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Primary horizontal lockup with motto — use on light backgrounds with clear space
              around the mark.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-border bg-gtn-primary p-8">
            <Image
              src={siteImages.logoEmblemVertical.src}
              alt={siteImages.logoEmblemVertical.alt}
              width={siteImages.logoEmblemVertical.width}
              height={siteImages.logoEmblemVertical.height}
              className="h-auto w-48 object-contain"
            />
          </div>
        </div>

        {/*
        Logo imagery and detailed symbolism — commented out while a professional designer
        develops the final mark. Restore when logo assets are ready.

        import Image from "next/image";
        import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
        import { siteImages } from "@/config/images";
        import {
          logoAbbreviation,
          logoColors,
          logoMotto,
          logoSymbols,
        } from "@/config/logo";
        import { cn } from "@/lib/utils";

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <Image
              src={siteImages.logo.src}
              alt={siteImages.logo.alt}
              width={siteImages.logo.width}
              height={siteImages.logo.height}
              className="h-auto w-full"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Primary wordmark — use on light backgrounds with clear space around the mark.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-gtn-primary">{logoAbbreviation.letters}</CardTitle>
              <CardDescription>{logoAbbreviation.fullName}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {logoAbbreviation.pillars.map((pillar) => (
                <div key={pillar.title}>
                  <p className="font-medium text-foreground">{pillar.title}</p>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-gtn-primary">Motto</CardTitle>
              <CardDescription>{logoMotto.text}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              {logoMotto.meanings.map((item) => (
                <div key={item.phrase} className="space-y-1 text-sm">
                  <p className="font-medium text-foreground">{item.phrase}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="mb-6 text-gtn-primary">Logo Symbolism</h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {logoSymbols.map((symbol) => (
              <Card key={symbol.id} className="h-full">
                <CardHeader className="space-y-2">
                  <CardTitle className="flex items-center gap-2 text-base text-gtn-primary">
                    <span aria-hidden>{symbol.emoji}</span>
                    {symbol.title}
                  </CardTitle>
                  {symbol.subsidiary ? (
                    <CardDescription>
                      {symbol.subsidiary.name} ({symbol.subsidiary.shortName})
                    </CardDescription>
                  ) : null}
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <ul className="flex flex-wrap gap-2">
                    {(symbol.subsidiary?.focusAreas ?? symbol.represents).map((item) => (
                      <li key={item}>
                        <Badge variant="outline">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                  <p className="italic text-muted-foreground">&ldquo;{symbol.message}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-gtn-primary">Logo Colors</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {logoColors.map((color) => (
              <div
                key={color.name}
                className={cn(
                  "flex flex-col justify-between rounded-xl p-6 shadow-sm",
                  color.className,
                  color.name === "Gold" ? "text-gtn-neutral-800" : "text-white",
                )}
              >
                <div className="space-y-2">
                  <p className="text-lg font-semibold">{color.name}</p>
                  <p className="text-sm opacity-90">Associated with {color.associatedWith}</p>
                  <p className="text-sm italic opacity-90">&ldquo;{color.message}&rdquo;</p>
                </div>
                <div className="mt-6 space-y-2 text-sm">
                  <p className="font-mono opacity-90">{color.hex}</p>
                  <p className="opacity-90">{color.represents.join(" · ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}
      </Container>
    </Section>
  );
}
