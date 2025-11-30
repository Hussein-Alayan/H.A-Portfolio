"use client";

import { motion } from "framer-motion";
import { useScrollColor } from "./scroll-color-provider";
import { useIsMobile } from "@/hooks/use-mobile";

export function DynamicBackground() {
  const { currentTheme, scrollProgress } = useScrollColor();
  const isMobile = useIsMobile();

  // Single subtle layered gradient – reduced saturation & motion-free
  return (
    <>
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(20,25,40,0.9) 0%, rgba(15,18,28,0.95) 60%), radial-gradient(circle at 30% 20%, ${currentTheme.primary}10, transparent 60%)`,
        }}
      />
      {/* Minimal scroll progress bar (low contrast) */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-40 origin-left"
        style={{
          background: `linear-gradient(90deg, ${currentTheme.primary}80, ${currentTheme.secondary}80)`,
          width: "100%",
          opacity: 0.4,
        }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
