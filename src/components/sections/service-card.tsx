import Link from "next/link";
import { ArrowRightIcon, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  category?: string;
  icon?: LucideIcon;
  variant?: "default" | "featured";
  accent?: "secondary" | "accent";
};

export function ServiceCard({
  title,
  description,
  href,
  category,
  icon: Icon,
  variant = "default",
  accent = "secondary",
}: ServiceCardProps) {
  if (variant === "featured") {
    return (
      <Link href={href} className="group block h-full focus-visible:outline-none">
        <article
          className={cn(
            "relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
            accent === "accent"
              ? "hover:border-gtn-accent/40"
              : "hover:border-gtn-secondary/30",
          )}
        >
          <div
            aria-hidden
            className={cn(
              "absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80 transition-opacity group-hover:opacity-100",
              accent === "accent"
                ? "from-gtn-accent to-gtn-secondary"
                : "from-gtn-secondary to-gtn-primary",
            )}
          />
          {Icon ? (
            <div
              className={cn(
                "mb-5 inline-flex w-fit rounded-xl p-3 transition-colors duration-300",
                accent === "accent"
                  ? "bg-gtn-accent/15 text-gtn-primary group-hover:bg-gtn-accent group-hover:text-gtn-neutral-800"
                  : "bg-gtn-secondary/10 text-gtn-secondary group-hover:bg-gtn-secondary group-hover:text-white",
              )}
            >
              <Icon className="size-5" aria-hidden />
            </div>
          ) : null}
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-gtn-primary transition-colors group-hover:text-gtn-secondary">
            {title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-gtn-secondary transition-all duration-300 group-hover:gap-2.5 group-hover:text-gtn-primary">
            Learn more
            <ArrowRightIcon
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </article>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block h-full focus-visible:outline-none">
      <Card className="h-full transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader>
          {category ? <Badge variant="secondary">{category}</Badge> : null}
          <CardTitle className="text-gtn-primary group-hover:text-gtn-secondary">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="text-sm font-medium text-gtn-secondary transition-colors group-hover:text-gtn-primary">
            Learn more →
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
