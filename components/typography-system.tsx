"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentBlockProps {
  children: ReactNode;
  className?: string;
  spacing?: "tight" | "normal" | "loose";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export function ContentBlock({ 
  children, 
  className = "",
  spacing = "normal",
  maxWidth = "lg"
}: ContentBlockProps) {
  const spacingClasses = {
    tight: "space-y-4",
    normal: "space-y-6",
    loose: "space-y-8"
  };

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${spacingClasses[spacing]} ${maxWidthClasses[maxWidth]} mx-auto ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface VisualBreakProps {
  type?: "line" | "dots" | "wave" | "minimal";
  className?: string;
}

export function VisualBreak({ type = "minimal", className = "" }: VisualBreakProps) {
  const variants = {
    line: (
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px bg-linear-to-r from-transparent via-border to-transparent w-full max-w-xs mx-auto"
      />
    ),
    dots: (
      <div className="flex items-center justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            className="w-2 h-2 rounded-full bg-primary/30"
          />
        ))}
      </div>
    ),
    wave: (
      <motion.svg
        width={60}
        height={20}
        viewBox="0 0 60 20"
        className="mx-auto text-primary/30"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <motion.path
          d="M5 10 Q 15 5, 30 10 T 55 10"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
        />
      </motion.svg>
    ),
    minimal: (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-8 h-8"
      />
    )
  };

  return (
    <div className={`py-12 flex items-center justify-center ${className}`}>
      {variants[type]}
    </div>
  );
}

interface TypographyScaleProps {
  variant: "hero" | "section" | "subsection" | "body" | "small" | "caption";
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function TypographyScale({ 
  variant, 
  children, 
  className = "",
  gradient = false 
}: TypographyScaleProps) {
  const variants = {
    hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight",
    section: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
    subsection: "text-2xl sm:text-3xl font-semibold tracking-tight",
    body: "text-base sm:text-lg leading-relaxed",
    small: "text-sm sm:text-base",
    caption: "text-xs sm:text-sm text-muted-foreground"
  };

  const Component = variant === "hero" ? "h1" : 
                   variant === "section" ? "h2" : 
                   variant === "subsection" ? "h3" : "p";

  const baseClasses = variants[variant];
  const gradientClasses = gradient ? "bg-linear-to-r from-primary to-accent bg-clip-text text-transparent" : "";

  return (
    <Component className={`${baseClasses} ${gradientClasses} ${className}`}>
      {children}
    </Component>
  );
}

export function ReadingFlow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`prose prose-lg dark:prose-invert max-w-none ${className}`}>
      <style jsx>{`
        .prose h2, .prose h3 {
          scroll-margin-top: 6rem;
        }
        .prose p {
          text-align: justify;
          hyphens: auto;
        }
        @media (max-width: 768px) {
          .prose p {
            text-align: left;
            hyphens: none;
          }
        }
      `}</style>
      {children}
    </div>
  );
}