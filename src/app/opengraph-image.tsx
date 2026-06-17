import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { ecosystemConfig } from "@/lib/subsidiaries";

export const alt = ecosystemConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/assets/gptc_logo_horizontal_motto.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "48px 64px",
          background: "linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 980,
            padding: "32px 40px",
            borderRadius: 24,
            background: "white",
            boxShadow: "0 20px 50px rgba(11, 60, 93, 0.12)",
          }}
        >
          <img
            src={logoSrc}
            alt={ecosystemConfig.shortName}
            width={666}
            height={375}
            style={{ width: "100%", height: "auto", maxHeight: 420, objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
