"use client";

import { motion } from "framer-motion";
import { useScrollColor } from "./scroll-color-provider";

export function DynamicBackground() {
  const { currentTheme, scrollProgress } = useScrollColor();

  return (
    <>
      {/* Subtle Gradient Background */}
      <motion.div
        className="fixed inset-0 -z-20 pointer-events-none"
        animate={{
          background: `radial-gradient(ellipse at top, ${currentTheme.primary}08, transparent 50%), 
                      radial-gradient(ellipse at bottom right, ${currentTheme.secondary}06, transparent 50%),
                      radial-gradient(ellipse at bottom left, ${currentTheme.accent}04, transparent 50%)`
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Subtle Floating Elements */}
      <div className="fixed inset-0 -z-15 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: i === 0 ? currentTheme.primary : 
                          i === 1 ? currentTheme.secondary : currentTheme.accent,
            }}
            animate={{
              x: [
                `${10 + i * 30}%`, 
                `${20 + i * 25}%`, 
                `${10 + i * 30}%`
              ],
              y: [
                `${10 + i * 20}%`, 
                `${30 + i * 15}%`, 
                `${10 + i * 20}%`
              ],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 z-50 origin-left"
        style={{
          background: `linear-gradient(90deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
          width: "100%",
        }}
        animate={{
          scaleX: scrollProgress,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}