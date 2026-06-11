import Link from "next/link";

import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "footer" | "inverted";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  const isInverted = variant === "inverted" || variant === "footer";

  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col gap-0.5 focus-visible:outline-none", className)}
    >
      <span
        className={cn(
          "font-semibold tracking-tight transition-colors",
          isInverted
            ? "text-white group-hover:text-white/90"
            : "text-gtn-primary group-hover:text-gtn-secondary",
          variant === "default" ? "text-lg sm:text-xl" : "text-base",
        )}
      >
        {siteConfig.shortName}
      </span>
      <span
        className={cn(
          "font-medium",
          isInverted ? "text-white/70" : "text-muted-foreground",
          variant === "default" ? "hidden text-xs sm:block sm:text-sm" : "text-xs",
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
