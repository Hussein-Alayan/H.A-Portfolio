"use client";

import { motion } from "framer-motion";
import { useScrollColor } from "./scroll-color-provider";

export function AnimatedShapes() {
  const { currentTheme } = useScrollColor();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Floating Geometric Shapes - Reduced on mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-15 hidden sm:block"
          style={{
            left: `${(i * 15) % 100}%`,
            top: `${(i * 25) % 100}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        >
          {i % 4 === 0 && (
            <div
              className="w-16 h-16 rounded-full border-2"
              style={{ borderColor: currentTheme.primary }}
            />
          )}
          {i % 4 === 1 && (
            <div
              className="w-12 h-12 border-2 transform rotate-45"
              style={{ borderColor: currentTheme.secondary }}
            />
          )}
          {i % 4 === 2 && (
            <div
              className="w-8 h-20 border-2 rounded-full"
              style={{ borderColor: currentTheme.accent }}
            />
          )}
          {i % 4 === 3 && (
            <div className="relative">
              <div
                className="w-6 h-6 border-2"
                style={{ borderColor: currentTheme.primary }}
              />
              <div
                className="w-6 h-6 border-2 absolute top-3 left-3"
                style={{ borderColor: currentTheme.secondary }}
              />
            </div>
          )}
        </motion.div>
      ))}

      {/* Flowing Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${i * 300},400 Q${i * 300 + 150},${200 + i * 50} ${
              i * 300 + 300
            },400 T${i * 300 + 600},400`}
            stroke={i % 2 === 0 ? currentTheme.primary : currentTheme.secondary}
            strokeWidth="2"
            fill="none"
            opacity="0.08"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </svg>

      {/* Particle Dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-10"
          style={{
            backgroundColor:
              i % 3 === 0
                ? currentTheme.primary
                : i % 3 === 1
                ? currentTheme.secondary
                : currentTheme.accent,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [0.5, 1.2, 0.5],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-2">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute h-full w-px"
            style={{
              left: `${(i + 1) * 16.66}%`,
              background: `linear-gradient(to bottom, transparent, ${currentTheme.primary}, transparent)`,
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute w-full h-px"
            style={{
              top: `${(i + 1) * 25}%`,
              background: `linear-gradient(to right, transparent, ${currentTheme.secondary}, transparent)`,
            }}
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function AnimatedBackground() {
  const { currentTheme } = useScrollColor();

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      {/* Main animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, ${currentTheme.primary}05 0%, transparent 50%), 
             radial-gradient(circle at 80% 80%, ${currentTheme.secondary}03 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, ${currentTheme.secondary}05 0%, transparent 50%), 
             radial-gradient(circle at 20% 80%, ${currentTheme.accent}03 0%, transparent 50%)`,
            `radial-gradient(circle at 50% 50%, ${currentTheme.accent}05 0%, transparent 50%), 
             radial-gradient(circle at 20% 20%, ${currentTheme.primary}03 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 20%, ${currentTheme.primary}05 0%, transparent 50%), 
             radial-gradient(circle at 80% 80%, ${currentTheme.secondary}03 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle moving shapes */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              background: `radial-gradient(circle, ${
                i === 0
                  ? currentTheme.primary
                  : i === 1
                  ? currentTheme.secondary
                  : currentTheme.accent
              }03, transparent)`,
            }}
            animate={{
              x: [`${10 + i * 20}%`, `${60 + i * 10}%`, `${10 + i * 20}%`],
              y: [`${10 + i * 15}%`, `${50 + i * 10}%`, `${10 + i * 15}%`],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Mobile-only simplified animations */}
      <div className="sm:hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`mobile-${i}`}
            className="absolute w-8 h-8 rounded-full opacity-10"
            style={{
              backgroundColor:
                i % 2 === 0 ? currentTheme.primary : currentTheme.accent,
              left: `${i * 30 + 20}%`,
              top: `${i * 20 + 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
