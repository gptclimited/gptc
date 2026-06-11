import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  spacing?: "default" | "compact" | "none";
  background?: "default" | "muted" | "white";
};

const spacingClasses = {
  default: "py-16 lg:py-24",
  compact: "py-12 lg:py-16",
  none: "",
};

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-gtn-neutral-50",
  white: "bg-white",
};

export function Section({
  className,
  spacing = "default",
  background = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], backgroundClasses[background], className)}
      {...props}
    />
  );
}
