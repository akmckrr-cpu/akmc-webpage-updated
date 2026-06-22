import { ImageResponse } from "next/og";

export const alt = "A Karur Metal Co.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 20 }}>AKMC</div>
        <div style={{ fontSize: 36, marginBottom: 16 }}>Bus Body Building Materials</div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>Aluminium Extrusions · ACP Sheets · Plywood · Paints · Hardware</div>
      </div>
    ),
    { ...size }
  );
}
