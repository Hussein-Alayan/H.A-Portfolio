"use client";

import { motion } from "framer-motion";
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
    institution: "Lebanese International University",
    location: "Tyre, Lebanon",
    degree: "B.Sc. in Computer Science",
    period: "Oct 2022 – Jun 2025",
    type: "Bachelor's Degree",
    icon: GraduationCap,
    status: "In Progress",
    description:
      "Comprehensive computer science program covering software engineering, algorithms, data structures, database systems, and modern programming paradigms.",
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
    status: "In Progress",
    description:
      "Specialized technical program focusing on administrative systems, business informatics, and enterprise software solutions.",
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
      "Intensive full-stack software engineering bootcamp focusing on modern web technologies, agile methodologies, and real-world project development.",
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
  {
    institution: "Al Afak Institute",
    location: "Lebanon",
    degree: "Technical Baccalaureate in Information Technology",
    period: "Oct 2019 – Jun 2022",
    type: "Technical Diploma",
    icon: BookOpen,
    status: "Completed",
    description:
      "Foundation program in information technology covering programming fundamentals, computer networks, and digital systems.",
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
];

export function EducationSection() {
  return (
    <section
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
                Education
              </ColorReactiveText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Building a strong foundation through continuous learning and
              academic excellence in computer science and software engineering.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="grid gap-8 md:gap-12">
            {educationData.map((education, index) => (
              <motion.div
                key={education.institution}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="transition-all"
              >
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
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                education.status === "Completed"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }`}
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
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{education.period}</span>
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
                                  0.5 + index * 0.15 + highlightIndex * 0.05,
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
              </motion.div>
            ))}
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
                    Continuous Learning Journey
                  </span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <span className="text-sm text-muted-foreground">
                  Combining academic excellence with practical industry
                  experience
                </span>
              </div>
            </ColorReactiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
