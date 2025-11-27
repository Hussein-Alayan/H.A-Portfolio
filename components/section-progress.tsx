"use client";

import { motion } from "framer-motion";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";

const sections = [
  { id: "hero", label: "01", name: "Hero" },
  { id: "about", label: "02", name: "About" },
  { id: "skills", label: "03", name: "Skills" },
  { id: "education", label: "04", name: "Education" },
  { id: "projects", label: "05", name: "Projects" },
  { id: "volunteer", label: "06", name: "Volunteer" },
  { id: "contact", label: "07", name: "Contact" },
];

export function SectionProgressIndicator() {
  const { activeSection, scrollProgress } = useScrollTracking();

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {/* Progress Line */}
        <div className="relative w-px h-64 bg-border">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary origin-top"
            style={{
              height: `${scrollProgress * 100}%`,
              scaleY: scrollProgress,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Section Indicators */}
        <div className="absolute inset-0 flex flex-col justify-between py-2">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              aria-label={`Go to ${section.name} section`}
              aria-current={activeSection === section.id ? "true" : "false"}
              className={`group relative flex items-center transition-all duration-300 ${
                activeSection === section.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Section Number Dot */}
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary border-primary shadow-lg shadow-primary/50"
                    : "border-muted-foreground group-hover:border-foreground"
                }`}
              />

              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-6 flex items-center gap-2 px-3 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <span className="text-xs font-mono font-bold">
                  {section.label}
                </span>
                <span className="text-sm font-medium">{section.name}</span>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionHeader({
  number,
  title,
  subtitle,
  className = "",
}: {
  number: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center space-y-4 mb-16 ${className}`}
    >
      {/* Section Number */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="flex justify-center"
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <span className="text-primary font-mono font-bold text-sm">
            {number}
          </span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="h-px bg-linear-to-r from-transparent via-primary to-transparent mx-auto"
      />
    </motion.div>
  );
}
