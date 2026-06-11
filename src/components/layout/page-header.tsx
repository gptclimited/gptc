import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumb?: ReactNode;
  className?: string;
};

export function PageHeader({ title, description, breadcrumb, className }: PageHeaderProps) {
  return (
    <div className={cn("border-b border-border bg-white", className)}>
      <Container className="flex flex-col gap-4 py-12 lg:py-16">
        {breadcrumb}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-gtn-primary">{title}</h1>
          {description ? <p className="text-lead">{description}</p> : null}
        </div>
        <div id="hero-sentinel" className="h-px w-full" aria-hidden />
      </Container>
    </div>
  );
}
