import React, { useEffect, useRef } from "react";
import "./knot-animation.css";

const SHADE_CHARS = ".,-~:;=!*#$@";
const TWO_PI = Math.PI * 2;

const addMediaListener = (query, handler) => {
  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }

  query.addListener(handler);
  return () => query.removeListener(handler);
};

const getCanvasSize = (isCompact, isTiny) => {
  if (isTiny) {
    return { width: 24, height: 12 };
  }

  if (isCompact) {
    return { width: 30, height: 14 };
  }

  return { width: 38, height: 18 };
};

const normalizeSpeed = (value, fallback) => {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
};

const renderKnotFrame = ({ width, height, angleA, angleB, compact }) => {
  const buffer = new Array(width * height).fill(" ");
  const depthBuffer = new Float32Array(width * height);

  const phiStep = compact ? 0.11 : 0.07;
  const thetaStep = compact ? 0.34 : 0.27;
  const xScale = compact ? 13 : 18;
  const yScale = compact ? 6 : 10;

  const cosA = Math.cos(angleA);
  const sinA = Math.sin(angleA);
  const cosB = Math.cos(angleB);
  const sinB = Math.sin(angleB);

  for (let theta = 0; theta < TWO_PI; theta += thetaStep) {
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    for (let phi = 0; phi < TWO_PI; phi += phiStep) {
      const cosPhi = Math.cos(phi);
      const sinPhi = Math.sin(phi);

      const ringX = 2 + cosTheta;
      const ringY = sinTheta;

      const x =
        ringX * (cosB * cosPhi + sinA * sinB * sinPhi) -
        ringY * cosA * sinB;
      const y =
        ringX * (sinB * cosPhi - sinA * cosB * sinPhi) +
        ringY * cosA * cosB;
      const z = 5 + cosA * ringX * sinPhi + ringY * sinA;
      const inverseZ = 1 / z;

      const screenX = Math.floor(width / 2 + xScale * inverseZ * x);
      const screenY = Math.floor(height / 2 - yScale * inverseZ * y);

      if (
        screenX < 0 ||
        screenX >= width ||
        screenY < 0 ||
        screenY >= height
      ) {
        continue;
      }

      const index = screenX + screenY * width;
      if (inverseZ <= depthBuffer[index]) {
        continue;
      }
      depthBuffer[index] = inverseZ;

      const luminance =
        cosPhi * cosTheta * sinB -
        cosA * cosTheta * sinPhi -
        sinA * sinTheta +
        cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);

      const shadeIndex = Math.max(
        0,
        Math.min(
          SHADE_CHARS.length - 1,
          Math.floor(((luminance + 1.1) / 2.2) * (SHADE_CHARS.length - 1))
        )
      );
      buffer[index] = SHADE_CHARS[shadeIndex];
    }
  }

  let frame = "";
  for (let row = 0; row < height; row += 1) {
    const start = row * width;
    frame += buffer.slice(start, start + width).join("") + "\n";
  }

  return frame;
};

const KnotAnimation = ({ color = false, speedA = 0.9, speedB = 0.55 }) => {
  const preRef = useRef(null);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const angleARef = useRef(0.9);
  const angleBRef = useRef(0.2);

  const reducedMotionRef = useRef(false);
  const compactRef = useRef(false);
  const tinyRef = useRef(false);

  const velocityA = normalizeSpeed(speedA, 0.9);
  const velocityB = normalizeSpeed(speedB, 0.55);

  useEffect(() => {
    if (typeof window === "undefined" || !preRef.current) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const compactQuery = window.matchMedia("(max-width: 900px)");
    const tinyQuery = window.matchMedia("(max-width: 480px)");

    const stopAnimation = () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };

    const drawFrame = () => {
      if (!preRef.current) {
        return;
      }

      const { width, height } = getCanvasSize(compactRef.current, tinyRef.current);
      preRef.current.textContent = renderKnotFrame({
        width,
        height,
        angleA: angleARef.current,
        angleB: angleBRef.current,
        compact: compactRef.current || tinyRef.current,
      });
    };

    const tick = (timestamp) => {
      if (reducedMotionRef.current || tinyRef.current) {
        stopAnimation();
        drawFrame();
        return;
      }

      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const deltaSeconds = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = timestamp;

      angleARef.current += velocityA * deltaSeconds;
      angleBRef.current += velocityB * deltaSeconds;

      drawFrame();

      if (color && preRef.current) {
        const hue = ((angleARef.current + angleBRef.current) * 92) % 360;
        preRef.current.style.setProperty("--knot-hue", `${hue}`);
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const syncMode = () => {
      reducedMotionRef.current = reducedMotionQuery.matches;
      compactRef.current = compactQuery.matches;
      tinyRef.current = tinyQuery.matches;
      lastTimeRef.current = 0;

      drawFrame();

      if (reducedMotionRef.current || tinyRef.current) {
        stopAnimation();
        return;
      }

      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(tick);
      }
    };

    const cleanupReduced = addMediaListener(reducedMotionQuery, syncMode);
    const cleanupCompact = addMediaListener(compactQuery, syncMode);
    const cleanupTiny = addMediaListener(tinyQuery, syncMode);

    syncMode();

    return () => {
      stopAnimation();
      cleanupReduced();
      cleanupCompact();
      cleanupTiny();
    };
  }, [color, velocityA, velocityB]);

  return (
    <div className={`knot-animation${color ? " knot-animation--color" : ""}`}>
      <pre ref={preRef} aria-hidden="true" />
    </div>
  );
};

export default KnotAnimation;
