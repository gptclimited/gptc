import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { typographyConfig } from "@/config/typography";

export function TypographySection() {
  const { families, scale, features } = typographyConfig;

  return (
    <Section background="white">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary">Typography</Badge>
          <h2 className="text-gtn-primary">Fonts &amp; Type Scale</h2>
          <p className="text-muted-foreground">
            The site uses a single sans-serif family across all UI. Heading and body tokens are
            defined in <code className="text-sm">src/app/layout.tsx</code> and{" "}
            <code className="text-sm">src/app/globals.css</code>.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(families).map(([key, family]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="font-sans text-gtn-primary">{family.name}</CardTitle>
                <CardDescription>
                  Token: <span className="font-mono text-xs">{family.tailwindToken}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Source:</span> {family.source}
                </p>
                {"cssVariable" in family && family.cssVariable ? (
                  <p>
                    <span className="font-medium text-foreground">CSS variable:</span>{" "}
                    <span className="font-mono text-xs">{family.cssVariable}</span>
                  </p>
                ) : null}
                <p>{family.usage}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="mb-6 text-gtn-primary">Type Scale</h3>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-4 py-3 font-medium">Element</th>
                  <th className="px-4 py-3 font-medium">Size</th>
                  <th className="px-4 py-3 font-medium">Weight</th>
                  <th className="hidden px-4 py-3 font-medium sm:table-cell">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {scale.map((row) => (
                  <tr key={row.element}>
                    <td className="px-4 py-3 font-mono text-xs">{row.element}</td>
                    <td className="px-4 py-3">{row.sizes}</td>
                    <td className="px-4 py-3">{row.weight}</td>
                    <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
          <h3 className="text-gtn-primary">Live Preview</h3>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Heading 1
              </p>
              <p className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
                Planting Peace. Equipping Leaders.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Heading 2
              </p>
              <p className="text-2xl font-semibold tracking-tight text-balance lg:text-4xl">
                Transforming Lives Through Education
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Lead paragraph (.text-lead)
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
                A global ecosystem that equips leaders, builds peaceful communities, and provides
                practical care for people, families, and societies.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Body (p)
              </p>
              <p className="text-base leading-relaxed">
                Inter at 16 px with relaxed line-height is the default for paragraphs, service
                descriptions, and long-form content across the site.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Caption (text-sm)
              </p>
              <p className="text-sm text-muted-foreground">
                Used for breadcrumbs, footer links, form hints, and metadata labels.
              </p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-gtn-primary">Rendering</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <p>Antialiasing: {features.antialiasing ? "enabled" : "off"}</p>
            <p>Scroll: {features.scrollBehavior}</p>
            <p className="sm:col-span-2">{features.textBalance}</p>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
