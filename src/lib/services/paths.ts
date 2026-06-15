import type { SubsidiarySlug } from "@/lib/subsidiaries";
import type { ServicePage } from "@/types/service";

export function getServicePath(service: Pick<ServicePage, "subsidiary" | "slug">): string {
  return `/${service.subsidiary}/${service.slug}`;
}

export function getSubsidiaryServicesPath(subsidiary: SubsidiarySlug): string {
  return `/${subsidiary}/services`;
}
