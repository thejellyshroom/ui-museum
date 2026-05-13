"use client";

import { useEffect, useState } from "react";

type AtmosphereTier = "css" | "poster" | "webgl";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function prefersReducedData(): boolean {
  if (typeof window === "undefined") return false;
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean };
    }
  ).connection;

  return Boolean(connection?.saveData);
}

function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) ??
      canvas.getContext("experimental-webgl", {
        failIfMajorPerformanceCaveat: true,
      });

    return Boolean(context);
  } catch {
    return false;
  }
}

export function AtmosphereBackground() {
  const [tier, setTier] = useState<AtmosphereTier>("css");

  useEffect(() => {
    if (prefersReducedMotion() || prefersReducedData()) {
      setTier("poster");
      return;
    }

    if (!canUseWebGL() || document.visibilityState !== "visible") {
      setTier("css");
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void import("./atmosphere-webgl").then(({ mountAtmosphereWebGL }) => {
      if (cancelled) return;

      const canvas = document.getElementById(
        "webgl-canvas",
      ) as HTMLCanvasElement | null;

      if (!canvas) {
        setTier("css");
        return;
      }

      cleanup = mountAtmosphereWebGL(canvas);
      setTier("webgl");
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-museum ${
          tier === "css" || tier === "webgl" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(150,173,133,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(244,244,244,0.08),transparent_35%),linear-gradient(180deg,rgba(45,45,45,0.35),rgba(162,158,133,0.15))]" />
        <div className="museum-dots absolute inset-0 opacity-40 mix-blend-screen motion-safe:animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-museum ${
          tier === "poster" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(150,173,133,0.2),rgba(45,45,45,0.85))]" />
        <div className="museum-dots absolute inset-0 opacity-25" />
      </div>

      <canvas
        id="webgl-canvas"
        className={`absolute inset-0 h-full w-full mix-blend-screen motion-safe:transition-opacity motion-safe:duration-700 motion-safe:ease-museum ${
          tier === "webgl" ? "opacity-40" : "opacity-0"
        }`}
      />
    </div>
  );
}
