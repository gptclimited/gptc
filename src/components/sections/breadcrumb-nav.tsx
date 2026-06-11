import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbNavProps = {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "default" | "inverse";
};

export function BreadcrumbNav({ items, className, variant = "default" }: BreadcrumbNavProps) {
  const isInverse = variant === "inverse";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "text-sm",
        isInverse ? "text-white/70" : "text-muted-foreground",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <ChevronRightIcon
                  className={cn(
                    "size-3.5",
                    isInverse ? "text-white/50" : "text-muted-foreground/70",
                  )}
                  aria-hidden
                />
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors focus-visible:outline-none focus-visible:underline",
                    isInverse
                      ? "text-white/80 hover:text-white"
                      : "hover:text-gtn-secondary",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    isLast && (isInverse ? "font-medium text-white" : "font-medium text-foreground"),
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
