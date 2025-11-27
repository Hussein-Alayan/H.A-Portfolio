"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ColorReactiveText,
  ColorReactiveCard,
} from "./color-reactive-components";
import { SectionHeader } from "./section-progress";
import { VisualBreak, ContentBlock } from "./typography-system";

export function ProjectSection() {
  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-24"
        >
          <SectionHeader
            number="05"
            title={
              <ColorReactiveText variant="gradient">
                Featured Projects
              </ColorReactiveText>
            }
            subtitle="A selection of projects that showcase my technical skills and problem-solving approach."
          />

          <VisualBreak type="dots" />
          <ContentBlock>
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="transition-all"
            >
              <ColorReactiveCard className="p-4 sm:p-6">
                <CardHeader className="px-0 pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl">
                        <ColorReactiveText variant="solid">
                          Slotify
                        </ColorReactiveText>
                      </CardTitle>
                      <CardDescription className="text-base">
                        <ColorReactiveText variant="accent">
                          AI-Powered Appointment Management System
                        </ColorReactiveText>
                      </CardDescription>
                    </div>
                    <div className="flex gap-2 sm:shrink-0">
                      <a
                        href="https://github.com/Hussein-Alayan/Slotify"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="#"
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 px-0">
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive appointment management platform featuring an
                    intelligent AI assistant that helps users schedule, manage,
                    and optimize their appointments. The system includes
                    real-time availability tracking, automated reminders, and
                    smart scheduling suggestions.
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold mb-3">
                      <ColorReactiveText variant="solid">
                        Tech Stack
                      </ColorReactiveText>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "TypeScript",
                        "FastAPI",
                        "PostgreSQL",
                        "OpenAI API",
                        "Tailwind CSS",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3">
                      <ColorReactiveText variant="solid">
                        Key Features
                      </ColorReactiveText>
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ColorReactiveText variant="accent" className="mt-1">
                          •
                        </ColorReactiveText>
                        <span>
                          AI-powered scheduling assistant with natural language
                          processing
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ColorReactiveText variant="accent" className="mt-1">
                          •
                        </ColorReactiveText>
                        <span>
                          Real-time availability management and conflict
                          detection
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ColorReactiveText variant="accent" className="mt-1">
                          •
                        </ColorReactiveText>
                        <span>Automated email and SMS reminders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ColorReactiveText variant="accent" className="mt-1">
                          •
                        </ColorReactiveText>
                        <span>
                          Analytics dashboard for appointment insights
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </ColorReactiveCard>
            </motion.div>
          </ContentBlock>
        </motion.div>
      </div>
    </section>
  );
}
