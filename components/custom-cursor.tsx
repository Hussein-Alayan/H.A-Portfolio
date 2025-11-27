"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // Use event delegation to avoid memory leaks
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches("a, button, [role='button']") ||
        target.closest("a, button, [role='button']")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches("a, button, [role='button']") ||
        target.closest("a, button, [role='button']")
      ) {
        setIsHovering(false);
      }
    };

    // Only add mouse tracking on non-mobile devices
    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible, isMobile]);

  // Don't render custom cursor on mobile devices
  if (!isVisible || isMobile) return null;

  return (
    <>
      {/* Outer cursor ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="h-10 w-10 rounded-full border-2 border-white" />
      </motion.div>

      {/* Inner cursor dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.3,
        }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </motion.div>
    </>
  );
}
