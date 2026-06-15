import Link from "next/link";

import { ecosystemConfig } from "@/lib/subsidiaries";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "footer" | "inverted" | "compact" | "full";
  /** Kept for API compatibility while the site uses a text mark. */
  priority?: boolean;
};

const wordmarkStyles = {
  default: "text-xl font-semibold tracking-tight sm:text-2xl",
  compact: "text-xl font-semibold tracking-tight",
  footer: "text-2xl font-semibold tracking-tight",
  inverted: "text-2xl font-semibold tracking-tight",
  full: "text-3xl font-semibold tracking-tight",
} as const;

export function Logo({ className, variant = "default" }: LogoProps) {
  const isInverted = variant === "inverted" || variant === "footer";
  const showDescriptor = variant === "inverted" || variant === "footer" || variant === "full";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-w-0 shrink-0 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      aria-label={`${ecosystemConfig.shortName} — ${ecosystemConfig.name} home`}
    >
      <span
        className={cn(
          "transition-opacity group-hover:opacity-90",
          isInverted ? "text-white" : "text-gtn-primary",
          wordmarkStyles[variant],
        )}
      >
        {ecosystemConfig.shortName}
      </span>
      {showDescriptor ? (
        <span
          className={cn(
            "mt-1 max-w-[13rem] text-[0.625rem] font-medium uppercase leading-snug tracking-wide sm:max-w-none sm:text-xs",
            isInverted ? "text-white/75" : "text-muted-foreground",
          )}
        >
          Global Peacebuilding, Training &amp; Care
        </span>
      ) : null}
    </Link>
  );
}
