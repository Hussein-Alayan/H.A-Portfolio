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

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Only add mouse tracking on non-mobile devices
    if (!isMobile) {
      // Track mouse movement
      window.addEventListener("mousemove", updateMousePosition);

      // Track hoverable elements
      const hoverElements = document.querySelectorAll(
        "a, button, [role='button']"
      );
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (!isMobile) {
        window.removeEventListener("mousemove", updateMousePosition);
        const hoverElements = document.querySelectorAll(
          "a, button, [role='button']"
        );
        hoverElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      }
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
