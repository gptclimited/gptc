import { getAllServices, getServiceBySlug } from "@/content/services";
import type { ServicePage } from "@/types/service";

export function getRelatedServices(current: ServicePage): ServicePage[] {
  const all = getAllServices();

  const explicit = current.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is ServicePage => !!service && service.slug !== current.slug);

  if (explicit.length >= 3) {
    return explicit.slice(0, 3);
  }

  const fallback = all
    .filter(
      (service) =>
        service.category === current.category &&
        service.slug !== current.slug &&
        !explicit.some((item) => item.slug === service.slug),
    )
    .slice(0, 3 - explicit.length);

  return [...explicit, ...fallback].slice(0, 3);
}
