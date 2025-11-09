"use client"

import { motion } from "framer-motion"

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
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Skills & Technologies
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary transition-colors cursor-default"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
