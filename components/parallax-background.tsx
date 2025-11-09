"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Reduce parallax intensity on mobile for better performance
  const mobileMultiplier = isMobile ? 0.3 : 1;
  const motionMultiplier = shouldReduceMotion ? 0 : mobileMultiplier;

  // Different parallax speeds for layers (reduced on mobile)
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${50 * motionMultiplier}%`]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-30 * motionMultiplier}%`]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${80 * motionMultiplier}%`]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-60 * motionMultiplier}%`]
  );
  const y5 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${40 * motionMultiplier}%`]
  );
  const y6 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-20 * motionMultiplier}%`]
  );

  // Rotation and scale transforms (disabled on mobile)
  const rotate1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45 * motionMultiplier]
  );
  const rotate2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -30 * motionMultiplier]
  );
  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1 + 0.2 * motionMultiplier, 1 - 0.2 * motionMultiplier]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      1 - 0.2 * motionMultiplier,
      1 + 0.1 * motionMultiplier,
      1 + 0.3 * motionMultiplier,
    ]
  );

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
    >
      {/* Gradient Background Layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5"
      />

      {/* Large Blurred Shape 1 - Rotating */}
      <motion.div
        style={{
          y: y2,
          rotate: rotate1,
          scale: scale1,
        }}
        className="absolute top-1/4 -right-16 w-96 h-96 bg-linear-to-br from-primary/20 to-accent/15 rounded-full blur-3xl"
      />

      {/* Large Blurred Shape 2 - Counter-rotating */}
      <motion.div
        style={{
          y: y3,
          rotate: rotate2,
          scale: scale2,
        }}
        className="absolute bottom-1/4 -left-16 w-80 h-80 bg-linear-to-br from-accent/18 to-secondary/12 rounded-full blur-3xl"
      />

      {/* Additional Medium Shape 1 */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-linear-to-br from-primary/15 to-accent/8 rounded-full blur-2xl"
      />

      {/* Additional Medium Shape 2 */}
      <motion.div
        style={{ y: y5 }}
        className="absolute top-3/4 right-1/3 w-48 h-48 bg-linear-to-br from-accent/12 to-primary/6 rounded-full blur-2xl"
      />

      {/* Small Floating Elements */}
      <motion.div
        style={{
          y: y6,
          x: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
        }}
        className="absolute top-1/3 left-1/2 w-32 h-32 bg-linear-to-br from-primary/20 to-accent/12 rounded-full blur-xl"
      />

      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]),
          x: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
        }}
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-linear-to-br from-accent/15 to-primary/8 rounded-full blur-xl"
      />

      {/* Extra Visible Shapes */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.4, 0.9]),
        }}
        className="absolute top-10 right-10 w-40 h-40 bg-linear-to-br from-accent/25 to-primary/15 rounded-full blur-2xl"
      />

      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.9, 0.3]),
        }}
        className="absolute bottom-20 left-10 w-36 h-36 bg-linear-to-br from-primary/22 to-accent/10 rounded-full blur-2xl"
      />

      {/* Subtle Moving Gradient with Enhanced Animation */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
          opacity: useTransform(
            scrollYProgress,
            [0, 0.3, 0.7, 1],
            [0.3, 0.1, 0.2, 0.4]
          ),
        }}
        className="absolute inset-0 bg-linear-to-t from-background/20 via-transparent to-background/20"
      />

      {/* Dynamic Overlay Pattern */}
      <motion.div
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [0.1, 0.05, 0.15]
          ),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
        }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-primary/3 to-transparent"
      />
    </div>
  );
}
