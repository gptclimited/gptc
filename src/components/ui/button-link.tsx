"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics/events";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> &
  Parameters<typeof buttonVariants>[0] & {
    analyticsLabel?: string;
  };

export function ButtonLink({
  className,
  variant,
  size,
  analyticsLabel,
  onClick,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={(event) => {
        if (analyticsLabel) {
          trackCtaClick(analyticsLabel);
        }
        onClick?.(event);
      }}
      {...props}
    />
  );
}
