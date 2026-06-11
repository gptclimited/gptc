export function slugToExportName(slug: string): string {
  return slug
    .split("-")
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join("");
}

export function slugToComponentName(slug: string): string {
  const exportName = slugToExportName(slug);
  return exportName.charAt(0).toUpperCase() + exportName.slice(1) + "Page";
}

export function categoryToAnchor(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
