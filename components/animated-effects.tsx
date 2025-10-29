"use client";

import { motion } from "framer-motion";
import { useScrollColor } from "./scroll-color-provider";

export function AnimatedBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { currentTheme, scrollProgress } = useScrollColor();

  return (
    <div className={`relative ${className}`}>
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-sm opacity-75"
        style={{
          background: `conic-gradient(from ${scrollProgress * 360}deg, ${
            currentTheme.primary
          }, ${currentTheme.secondary}, ${currentTheme.accent}, ${
            currentTheme.primary
          })`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content container */}
      <div className="relative bg-background rounded-lg p-[2px]">
        <div className="bg-background rounded-lg p-6">{children}</div>
      </div>
    </div>
  );
}

export function ColorWave() {
  const { currentTheme, scrollProgress } = useScrollColor();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
        style={{
          background: `radial-gradient(circle at center, ${currentTheme.primary}20, transparent 50%)`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4"
        style={{
          background: `radial-gradient(circle at center, ${currentTheme.secondary}15, transparent 60%)`,
        }}
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function SectionTransition({ sectionId }: { sectionId: string }) {
  const { activeSection, currentTheme } = useScrollColor();
  const isActive = activeSection === sectionId;

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-px"
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: isActive ? 1 : 0,
        background: currentTheme.gradient,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ originX: 0 }}
    />
  );
}
