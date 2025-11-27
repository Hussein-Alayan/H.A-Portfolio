"use client";

import { motion } from "framer-motion";
import { useScrollColor } from "./scroll-color-provider";

export function ColorReactiveButton({
  children,
  href,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const { currentTheme } = useScrollColor();

  return (
    <motion.a
      href={href}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${className}`}
      style={{
        background:
          variant === "primary" ? currentTheme.gradient : "transparent",
        border:
          variant === "secondary"
            ? `2px solid ${currentTheme.primary}`
            : "none",
        color: variant === "primary" ? "white" : currentTheme.primary,
        boxShadow: `0 5px 15px ${currentTheme.primary}20`,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 25px ${currentTheme.primary}30`,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.a>
  );
}

export function ColorReactiveCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { currentTheme } = useScrollColor();

  return (
    <motion.div
      className={`rounded-xl backdrop-blur-md border transition-all duration-500 bg-background/90 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${currentTheme.primary}15, ${currentTheme.secondary}15), rgba(0, 0, 0, 0.6)`,
        borderColor: `${currentTheme.primary}40`,
        boxShadow: `0 10px 30px ${currentTheme.primary}20`,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 20px 40px ${currentTheme.primary}30`,
        borderColor: currentTheme.primary,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function ColorReactiveText({
  children,
  className = "",
  variant = "gradient",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "gradient" | "solid" | "accent";
}) {
  const { currentTheme } = useScrollColor();

  const getTextStyle = () => {
    switch (variant) {
      case "gradient":
        return {
          backgroundImage: currentTheme.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        };
      case "solid":
        return { color: currentTheme.primary };
      case "accent":
        return { color: currentTheme.accent };
      default:
        return {};
    }
  };

  return (
    <motion.span
      className={`transition-all duration-500 ${className}`}
      style={getTextStyle()}
      animate={getTextStyle()}
    >
      {children}
    </motion.span>
  );
}

export function PulsatingOrb({
  size = 100,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const { currentTheme } = useScrollColor();

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${currentTheme.primary}20, transparent)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function ScrollReactiveGrid() {
  const { scrollProgress, currentTheme } = useScrollColor();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-20">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full"
            style={{
              left: `${(i + 1) * 5}%`,
              background: `linear-gradient(to bottom, transparent, ${currentTheme.primary}, transparent)`,
            }}
            animate={{
              opacity: Math.sin(scrollProgress * Math.PI + i * 0.5) * 0.5 + 0.5,
              scaleY:
                Math.sin(scrollProgress * Math.PI * 2 + i * 0.3) * 0.5 + 0.5,
            }}
            transition={{ duration: 0.1 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px w-full"
            style={{
              top: `${(i + 1) * 5}%`,
              background: `linear-gradient(to right, transparent, ${currentTheme.secondary}, transparent)`,
            }}
            animate={{
              opacity: Math.cos(scrollProgress * Math.PI + i * 0.5) * 0.5 + 0.5,
              scaleX:
                Math.cos(scrollProgress * Math.PI * 2 + i * 0.3) * 0.5 + 0.5,
            }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}
