import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/constants";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0B3C5D 0%, #1D70B8 100%)",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "#F4B400",
              color: "#1F2937",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            GTN
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ fontSize: 28, lineHeight: 1.4, color: "rgba(255,255,255,0.88)", maxWidth: 920 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
