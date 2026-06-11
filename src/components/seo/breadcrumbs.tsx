import { BreadcrumbNav } from "@/components/sections/breadcrumb-nav";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/lib/constants";
import { buildBreadcrumbList } from "@/lib/seo/json-ld";
import type { BreadcrumbItem } from "@/lib/seo/types";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "default" | "inverse";
};

export function Breadcrumbs({ items, className, variant }: BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbNav items={items} className={className} variant={variant} />
      <JsonLdScript data={buildBreadcrumbList(items, siteConfig.url)} />
    </>
  );
}
