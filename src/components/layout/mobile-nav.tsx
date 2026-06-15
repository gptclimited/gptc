"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { consultationHref, mainNav, organizationNav } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive
          ? "bg-primary/5 text-gtn-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        aria-label="Open navigation menu"
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm p-0">
        <SheetHeader className="border-b border-border px-6 py-5 text-left">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <Logo variant="compact" />
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 px-4 py-6" aria-label="Mobile">
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Our Organizations
          </p>
          {organizationNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.shortName} />
          ))}
        </nav>
        <div className="mt-auto border-t border-border p-4">
          <ButtonLink
            href={consultationHref}
            variant="accent"
            className="w-full"
            size="lg"
            analyticsLabel="mobile_nav_cta"
          >
            Book Consultation
          </ButtonLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {mainNav.slice(0, 2).map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
      <div className="group relative">
        <button
          type="button"
          className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-haspopup="true"
        >
          Organizations
        </button>
        <div className="invisible absolute left-0 top-full z-50 min-w-56 rounded-xl border border-border bg-background p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          {organizationNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span className="font-medium text-foreground">{item.shortName}</span>
              <span className="mt-0.5 block text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      {mainNav.slice(2).map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}
