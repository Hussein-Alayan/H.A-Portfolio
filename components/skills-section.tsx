"use client";

import { motion, useReducedMotion } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "PHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Figma", category: "Design" },
  { name: "n8n", category: "Automation" },
  { name: "OpenAI API", category: "AI" },
  { name: "Gemini", category: "AI" },
];

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();
  const groups: Record<string, string[]> = {};
  skills.forEach((s) => {
    if (!groups[s.category]) groups[s.category] = [];
    groups[s.category].push(s.name);
  });

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Skills & Technologies
          </motion.h2>

          <div className="space-y-8">
            {Object.entries(groups).map(([category, list], i) => {
              const primary = list.slice(0, 3);
              const rest = list.slice(3);
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {primary.map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/40 border border-secondary/50 text-foreground/90"
                      >
                        {name}
                      </span>
                    ))}
                    {rest.length > 0 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-secondary/20 border border-secondary/40 text-muted-foreground">
                        +{rest.length} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
