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
            Website headers need a compact, readable mark. Stacked/vertical logos (like{" "}
            <code className="text-sm">gptc_logo2.png</code>) cannot show readable text at nav-bar
            scale — industry standard is to use the emblem only in the header and the full
            the full lockup in the footer.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-gtn-primary">Header (current)</CardTitle>
              <CardDescription>{display.headerEmblem.height}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="flex h-16 items-center rounded-lg border border-border bg-background px-4">
                <Image
                  src={siteImages.logoEmblemSquare.src}
                  alt="Header emblem preview"
                  width={siteImages.logoEmblemSquare.width}
                  height={siteImages.logoEmblemSquare.height}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">{display.headerEmblem.notes}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base text-gtn-primary">Footer (current)</CardTitle>
              <CardDescription>{display.footer.width}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <Image
                  src={siteImages.logo.src}
                  alt="Footer logo preview"
                  width={siteImages.logo.width}
                  height={siteImages.logo.height}
                  className="h-auto w-40 object-contain"
                />
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
                  src={siteImages.logoEmblemSquare.src}
                  alt="Favicon preview"
                  width={32}
                  height={32}
                  className="size-8 object-contain"
                />
                <Image
                  src={siteImages.logoEmblemSquare.src}
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
            <CardTitle className="text-gtn-primary">Horizontal logo alternative</CardTitle>
            <CardDescription>{display.headerHorizontal.height}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex h-16 items-center rounded-lg border border-border bg-background px-4">
              <Image
                src={siteImages.logoHorizontalHeader.src}
                alt="Horizontal header logo preview"
                width={siteImages.logoHorizontalHeader.width}
                height={siteImages.logoHorizontalHeader.height}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">{display.headerHorizontal.notes}</p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
