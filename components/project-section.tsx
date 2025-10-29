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

export function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
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
            <ColorReactiveText variant="gradient">
              Featured Project
            </ColorReactiveText>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="transition-all"
          >
            <ColorReactiveCard className="p-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
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
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/Hussein-Alayan/Slotify"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  A comprehensive appointment management platform featuring an
                  intelligent AI assistant that helps users schedule, manage,
                  and optimize their appointments. The system includes real-time
                  availability tracking, automated reminders, and smart
                  scheduling suggestions.
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
                        Real-time availability management and conflict detection
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
                      <span>Analytics dashboard for appointment insights</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </ColorReactiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
