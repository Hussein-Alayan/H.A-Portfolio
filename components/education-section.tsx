"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Code2,
} from "lucide-react";
import {
  ColorReactiveText,
  ColorReactiveCard,
} from "./color-reactive-components";

const educationData = [
  {
    institution: "Al Afak Institute",
    location: "Lebanon",
    degree: "Technical Baccalaureate in Information Technology",
    period: "Oct 2019 – Jun 2022",
    type: "Technical Diploma",
    icon: BookOpen,
    status: "Completed",
    description:
      "Foundation in IT covering programming, networks, and digital systems.",
    highlights: [
      "Programming Fundamentals",
      "Computer Networks",
      "Digital Systems & Hardware",
      "IT Support & Maintenance",
      "Database Basics",
    ],
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-400",
  },
  {
    institution: "Lebanese International University",
    location: "Tyre, Lebanon",
    degree: "B.Sc. in Computer Science",
    period: "Oct 2022 – Jun 2025",
    type: "Bachelor's Degree",
    icon: GraduationCap,
    status: "Completed",
    description:
      "Focused on CS fundamentals, systems, and building real-world software.",
    highlights: [
      "Software Engineering & System Design",
      "Advanced Algorithms & Data Structures",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Web Development Technologies",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    institution: "Bint-Jbeil Technical Institute",
    location: "Bint-Jbeil, Lebanon",
    degree: "Technical Bachelor in Administrative Informatics",
    period: "Oct 2022 – Sep 2025",
    type: "Technical Bachelor",
    icon: Code2,
    status: "Completed",
    description:
      "Specialized in business information systems and enterprise tools.",
    highlights: [
      "Business Information Systems",
      "Enterprise Resource Planning",
      "Database Administration",
      "System Analysis & Design",
      "IT Project Management",
    ],
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400",
  },
  {
    institution: "SE Factory Bootcamp",
    location: "Lebanon",
    degree: "Software Engineering Bootcamp",
    period: "Jun 2025 – Sep 2025",
    type: "Intensive Bootcamp",
    icon: Code2,
    status: "Completed",
    description:
      "Intensive bootcamp in full-stack development and modern web technologies.",
    highlights: [
      "Full-Stack Web Development",
      "Modern JavaScript Frameworks",
      "API Development & Integration",
      "Agile Development Practices",
      "Industry Best Practices",
    ],
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
  },
];

export function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <ColorReactiveText variant="gradient">
                Education Journey
              </ColorReactiveText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              From foundational IT to advanced software engineering
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-linear-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block"></div>

            {/* Dynamic Progress Line */}
            <motion.div
              className="absolute left-6 top-8 w-0.5 bg-linear-to-b from-accent to-primary hidden md:block origin-top"
              style={{
                scaleY: useTransform(scrollYProgress, [0.1, 0.9], [0, 1]),
                height: "calc(100% - 4rem)",
              }}
            />

            {/* Date Timeline Line - Left Side */}
            <div className="absolute left-0 top-0 bottom-0 w-24 hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-xs font-medium text-accent/80 mb-4 px-2 py-1 rounded bg-accent/10"
                >
                  Timeline
                </motion.div>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-accent/30 via-accent/60 to-accent/30"></div>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-12 lg:ml-32">
              {educationData.map((education, index) => (
                <motion.div
                  key={education.institution}
                  initial={{ opacity: 0, x: -60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative transition-all"
                >
                  {/* Date Badge - Mobile/Tablet */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="flex items-center gap-4 mb-4 lg:hidden"
                  >
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-linear-to-r from-accent/20 to-primary/20 border border-accent/30">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm font-bold text-accent">
                        {education.period}
                      </span>
                    </div>
                  </motion.div>

                  {/* Date Display - Desktop Left Side */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="absolute -left-32 top-8 hidden lg:block"
                  >
                    <motion.div
                      className="text-right space-y-1 p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-accent/20"
                      whileHover={{ scale: 1.05, x: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-lg font-bold text-accent">
                        {education.period.split(" – ")[0]} {/* Start period */}
                      </div>
                      <div className="text-xs text-muted-foreground">to</div>
                      <div className="text-lg font-bold text-accent">
                        {education.period.split(" – ")[1]} {/* End period */}
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-2">
                        <div className="w-4 h-px bg-accent/50"></div>
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Timeline Dot */}
                  <motion.div
                    className="absolute left-0 top-8 w-12 h-12 rounded-full bg-linear-to-br from-accent/20 to-primary/20 border-2 border-accent/40 hidden md:flex items-center justify-center z-10"
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                      boxShadow: "0 0 20px rgba(var(--accent), 0.3)",
                      borderColor: "rgba(var(--accent), 0.6)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-accent/80"
                      whileHover={{ scale: 1.2 }}
                      whileInView={{
                        boxShadow: "0 0 10px rgba(var(--accent), 0.5)",
                      }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <div className="md:ml-20">
                    <ColorReactiveCard className="p-6 sm:p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <motion.div
                              className={`p-3 rounded-xl bg-linear-to-br ${education.gradient} shrink-0`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <education.icon
                                className={`w-6 h-6 ${education.iconColor}`}
                              />
                            </motion.div>

                            <div className="space-y-2 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <h3 className="text-xl sm:text-2xl font-bold">
                                  <ColorReactiveText variant="solid">
                                    {education.degree}
                                  </ColorReactiveText>
                                </h3>
                                <motion.span
                                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {education.status}
                                </motion.span>
                              </div>

                              <h4 className="text-lg font-semibold">
                                <ColorReactiveText variant="accent">
                                  {education.institution}
                                </ColorReactiveText>
                              </h4>

                              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>{education.location}</span>
                                </div>
                                <div className="flex items-center gap-2 lg:hidden">
                                  <Calendar className="w-4 h-4" />
                                  <span className="text-sm">
                                    {education.period}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <motion.div
                            className="flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary/50 lg:shrink-0"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Award className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">
                              {education.type}
                            </span>
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {education.description}
                        </p>

                        {/* Key Highlights */}
                        <div>
                          <h5 className="text-sm font-semibold mb-3">
                            <ColorReactiveText variant="solid">
                              Key Focus Areas
                            </ColorReactiveText>
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {education.highlights.map(
                              (highlight, highlightIndex) => (
                                <motion.span
                                  key={highlight}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.3,
                                    delay:
                                      0.5 +
                                      index * 0.15 +
                                      highlightIndex * 0.05,
                                  }}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-muted-foreground hover:bg-secondary transition-colors cursor-default"
                                >
                                  {highlight}
                                </motion.span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </ColorReactiveCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <ColorReactiveCard className="p-6 bg-secondary/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Academic Excellence Journey
                  </span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <span className="text-sm text-muted-foreground">
                  From foundational IT knowledge to advanced software
                  engineering expertise
                </span>
              </div>
            </ColorReactiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
