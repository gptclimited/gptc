import type { JsonLdObject } from "@/lib/seo/types";

type JsonLdScriptProps = {
  data: JsonLdObject | JsonLdObject[];
};

export function JsonLdScript({ data }: JsonLdScriptProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={JSON.stringify(schema["@type"] ?? schema)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
