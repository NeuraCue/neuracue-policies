import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 80,
                    background: "#0B1B3A",
                    color: "white",
                    fontSize: 64,
                    fontWeight: 700,
                }}
            >
                <div style={{ fontSize: 72 }}>NeuraCue</div>
                <div style={{ marginTop: 20, fontSize: 40, opacity: 0.9 }}>
                    About
                </div>
                <div style={{ marginTop: 30, fontSize: 32, opacity: 0.75 }}>
                    Location reminders that actually work
                </div>

                <div
                    style={{
                        position: "absolute",
                        right: 80,
                        bottom: 80,
                        width: 140,
                        height: 140,
                        borderRadius: 32,
                        background: "#FF6A00", // orange accent
                    }}
                />
            </div>
        ),
        size
    );
}
