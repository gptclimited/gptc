import Image from "next/image";
import Link from "next/link";

import { siteImages } from "@/config/images";
import { ecosystemConfig } from "@/lib/subsidiaries";
import { cn } from "@/lib/utils";

const companyDisplayName = "Global Peacebuilding, Training & Care Network" as const;

type LogoProps = {
  className?: string;
  variant?: "default" | "footer" | "inverted" | "compact" | "full";
  priority?: boolean;
};

const linkClassName =
  "group inline-flex min-w-0 shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function CompanyWordmark({
  className,
  nameClassName,
  secondLineClassName,
  taglineClassName,
  showTagline = false,
}: {
  className?: string;
  nameClassName: string;
  secondLineClassName?: string;
  taglineClassName?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 flex-col text-left leading-tight", className)}>
      <span className={nameClassName}>Global Peacebuilding,</span>
      <span className={cn(nameClassName, secondLineClassName)}>
        Training &amp; Care&nbsp;Network
      </span>
      {showTagline ? (
        <span className={taglineClassName}>{ecosystemConfig.motto}</span>
      ) : null}
    </span>
  );
}

export function Logo({ className, variant = "default", priority = false }: LogoProps) {
  const label = `${ecosystemConfig.shortName} — ${companyDisplayName} home`;

  if (variant === "compact") {
    return (
      <Link href="/" className={cn(linkClassName, className)} aria-label={label}>
        <Image
          src={siteImages.logoEmblem.src}
          alt={siteImages.logoEmblem.alt}
          width={siteImages.logoEmblem.width}
          height={siteImages.logoEmblem.height}
          priority={priority}
          unoptimized
          className="h-11 w-11 object-contain transition-opacity group-hover:opacity-90"
        />
      </Link>
    );
  }

  if (variant === "inverted" || variant === "footer") {
    return (
      <Link
        href="/"
        className={cn(linkClassName, "max-w-[17rem] items-center gap-3 sm:max-w-xs", className)}
        aria-label={label}
      >
        <span className="inline-flex size-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-white/20">
          <Image
            src={siteImages.logoEmblem.src}
            alt={siteImages.logoEmblem.alt}
            width={siteImages.logoEmblem.width}
            height={siteImages.logoEmblem.height}
            priority={priority}
            unoptimized
            className="size-14 object-contain transition-opacity group-hover:opacity-90"
          />
        </span>
        <CompanyWordmark
          className="h-20 max-h-20 justify-center gap-0.5"
          nameClassName="text-[0.6875rem] font-semibold leading-[1.15] text-white"
          secondLineClassName="whitespace-nowrap"
          taglineClassName="text-[0.5625rem] leading-[1.2] text-gtn-accent line-clamp-3"
          showTagline
        />
      </Link>
    );
  }

  if (variant === "full") {
    return (
      <Link href="/" className={cn(linkClassName, className)} aria-label={label}>
        <Image
          src={siteImages.logoHorizontalMotto.src}
          alt={siteImages.logoHorizontalMotto.alt}
          width={siteImages.logoHorizontalMotto.width}
          height={siteImages.logoHorizontalMotto.height}
          priority={priority}
          className="h-auto w-full max-w-md object-contain transition-opacity group-hover:opacity-90"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(linkClassName, "items-center gap-2.5 sm:gap-3", className)}
      aria-label={label}
    >
      <Image
        src={siteImages.logoEmblem.src}
        alt=""
        aria-hidden
        width={siteImages.logoEmblem.width}
        height={siteImages.logoEmblem.height}
        priority={priority}
        unoptimized
        className="h-14 w-14 shrink-0 object-contain object-center transition-opacity group-hover:opacity-90 sm:h-[3.75rem] sm:w-[3.75rem]"
      />
      <CompanyWordmark
        className="max-w-[9rem] sm:max-w-none"
        nameClassName="text-[0.6875rem] font-semibold tracking-tight text-gtn-primary sm:text-sm md:text-[0.9375rem]"
      />
    </Link>
  );
}
