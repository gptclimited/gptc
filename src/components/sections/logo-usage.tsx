import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteImages } from "@/config/images";
import { logoUsageConfig } from "@/config/typography";

export function LogoUsageSection() {
  const { sourceFiles, display } = logoUsageConfig;

  return (
    <Section background="muted">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary">Logo Sizing</Badge>
          <h2 className="text-gtn-primary">Logo Dimensions &amp; Placement</h2>
          <p className="text-muted-foreground">
            Website headers pair the emblem SVG with HTML text for a sharp wordmark. Below{" "}
            <code className="text-sm">sm</code>, only the emblem shows to save space.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-gtn-primary">Header (current)</CardTitle>
              <CardDescription>{display.headerHorizontal.height}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="flex h-16 items-center gap-3 rounded-lg border border-border bg-background px-4">
                <Image
                  src={siteImages.logoEmblem.src}
                  alt=""
                  aria-hidden
                  width={siteImages.logoEmblem.width}
                  height={siteImages.logoEmblem.height}
                  unoptimized
                  className="h-14 w-14 object-contain"
                />
                <div className="hidden flex-col text-left leading-tight sm:flex">
                  <span className="text-sm font-semibold text-gtn-primary">
                    Global Peacebuilding,
                  </span>
                  <span className="text-sm font-semibold text-gtn-primary">
                    Training &amp; Care Network
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {display.headerEmblem.notes} {display.headerHorizontal.notes}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base text-gtn-primary">Footer (current)</CardTitle>
              <CardDescription>{display.footer.width}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="flex max-w-xs items-center gap-3 rounded-xl bg-gtn-primary p-4 shadow-sm">
                <span className="inline-flex size-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-sm">
                  <Image
                    src={siteImages.logoEmblem.src}
                    alt={siteImages.logoEmblem.alt}
                    width={siteImages.logoEmblem.width}
                    height={siteImages.logoEmblem.height}
                    unoptimized
                    className="size-14 object-contain"
                  />
                </span>
                <div className="flex h-20 max-h-20 flex-col justify-center gap-0.5 text-left leading-tight">
                  <span className="text-[0.6875rem] font-semibold leading-[1.15] text-white">
                    Global Peacebuilding,
                  </span>
                  <span className="whitespace-nowrap text-[0.6875rem] font-semibold leading-[1.15] text-white">
                    Training &amp; Care&nbsp;Network
                  </span>
                  <span className="line-clamp-3 text-[0.5625rem] leading-[1.2] text-gtn-accent">
                    Planting Peace. Equipping Leaders. Transforming Lives.
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{display.footer.notes}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base text-gtn-primary">Favicon</CardTitle>
              <CardDescription>{display.favicon.sizes[0].pixels}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="flex items-end gap-4">
                <Image
                  src={siteImages.favicon.src}
                  alt="Favicon preview"
                  width={32}
                  height={32}
                  className="size-8 object-contain"
                />
                <Image
                  src={siteImages.favicon.src}
                  alt="Apple icon preview"
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {display.favicon.sizes.map((size) => (
                  <li key={size.label}>
                    <span className="font-medium text-foreground">{size.label}:</span>{" "}
                    {size.pixels}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">{display.favicon.notes}</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="mb-4 text-gtn-primary">Source Files</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(sourceFiles).map(([key, file]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="text-base capitalize text-gtn-primary">{key}</CardTitle>
                  <CardDescription className="font-mono text-xs">{file.path}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Dimensions:</span>{" "}
                    {file.dimensions}
                  </p>
                  <p>{file.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-gtn-primary">Full logo with motto</CardTitle>
            <CardDescription>Light backgrounds, print, and social sharing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-border bg-background p-6">
              <Image
                src={siteImages.logoHorizontalMotto.src}
                alt="Full horizontal logo with motto preview"
                width={siteImages.logoHorizontalMotto.width}
                height={siteImages.logoHorizontalMotto.height}
                className="h-auto w-full max-w-lg object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">{logoUsageConfig.sourceFiles.full.notes}</p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
