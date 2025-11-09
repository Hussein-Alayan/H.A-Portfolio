"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Smartphone, 
  Brain,
  Globe,
  GitBranch 
} from "lucide-react";
import { ColorReactiveText, ColorReactiveCard } from "./color-reactive-components";
import { useIsMobile } from "@/hooks/use-mobile";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-blue-400",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-green-400",
    skills: [
      { name: "Python/FastAPI", level: 85 },
      { name: "Laravel/PHP", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-purple-400",
    skills: [
      { name: "OpenAI Integration", level: 85 },
      { name: "Gemini API", level: 80 },
      { name: "Prompt Engineering", level: 90 },
      { name: "AI Automation", level: 75 },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "text-orange-400",
    skills: [
      { name: "MySQL/PostgreSQL", level: 80 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS/Vercel", level: 75 },
    ],
  },
];

export function EnhancedSkillsSection() {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  
  // Reduce animation complexity on mobile
  const animationDuration = isMobile ? 0.3 : 0.6;
  const staggerDelay = isMobile ? 0.05 : 0.1;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animationDuration }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold"
            >
              <ColorReactiveText variant="gradient">Technical Skills</ColorReactiveText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * staggerDelay, duration: animationDuration }}
              >
                <ColorReactiveCard className="p-6 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/50">
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold">
                        <ColorReactiveText variant="solid">
                          {category.title}
                        </ColorReactiveText>
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                duration: 0.8,
                                ease: "easeOut"
                              }}
                              className="h-full bg-linear-to-r from-primary to-accent rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ColorReactiveCard>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6">
              <ColorReactiveText variant="accent">Also Working With</ColorReactiveText>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Firebase", "MongoDB", "Redis", "GraphQL", "Stripe API", 
                "JWT Auth", "WebSockets", "PWA", "Electron", "Vue.js"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}