import { ImageResponse } from "next/og";
export const alt = "Sina Qasempour — Software Engineer. Systems & Computing.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#101413",
          color: "#f0f0eb",
          padding: "64px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#a8cfbe",
            fontSize: 18,
            letterSpacing: 4,
          }}
        >
          ENGINEER / SYSTEMS & COMPUTING
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 106,
            letterSpacing: -6,
            marginTop: 60,
            lineHeight: 1,
          }}
        >
          Sina Qasempour.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 35,
            marginTop: 32,
            color: "#b2b9b4",
          }}
        >
          Building systems. Exploring computing.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            paddingTop: 26,
            borderTop: "1px solid #37403b",
            justifyContent: "space-between",
            fontSize: 20,
          }}
        >
          <span>Production engineering / Startup leadership</span>
          <span style={{ color: "#a8cfbe" }}>github.com/SinaQP ↗</span>
        </div>
      </div>
    ),
    size,
  );
}
