import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0B3C5D",
          borderRadius: 8,
          color: "#F4B400",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        G
      </div>
    ),
    size,
  );
}
