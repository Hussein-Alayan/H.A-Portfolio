"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Heart, GraduationCap } from "lucide-react";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

import {
  ColorReactiveText,
  ColorReactiveCard,
} from "./color-reactive-components";
import { SectionHeader } from "./section-progress";
import { VisualBreak, ContentBlock } from "./typography-system";

export function AboutSection() {
  const stats = [
    { icon: Code2, label: "Technologies", value: 15, suffix: "+" },
    { icon: Sparkles, label: "AI Projects", value: 5, suffix: "+" },
    { icon: Heart, label: "Red Cross", value: 2, suffix: " yrs" },
    { icon: GraduationCap, label: "Certifications", value: 3, suffix: "" },
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building modern web apps with React, Next.js, and TypeScript on the frontend, powered by Python, FastAPI, and Laravel backends.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description:
        "Creating intelligent solutions using OpenAI and Gemini APIs to automate workflows and enhance user experiences.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-400",
    },
    {
      icon: Heart,
      title: "Community Service",
      description:
        "Serving as a First Responder with Lebanese Red Cross, providing emergency medical services and making a real impact.",
      gradient: "from-red-500/10 to-orange-500/10",
      iconColor: "text-red-400",
    },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-20"
        >
          <SectionHeader
            number="02"
            title={
              <ColorReactiveText variant="gradient">About Me</ColorReactiveText>
            }
            subtitle="Passionate about creating intelligent solutions that make a difference"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 overflow-hidden"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-xl p-6 text-center space-y-2 hover:border-primary/50 transition-colors">
                  <stat.icon className="w-8 h-8 mx-auto text-primary" />
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div
                  className={`relative bg-linear-to-br ${highlight.gradient} border border-border rounded-xl p-6 space-y-4 h-full hover:border-primary/50 transition-all`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center ${highlight.iconColor} group-hover:scale-110 transition-transform`}
                  >
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                full-stack developer from Lebanon
              </span>{" "}
              passionate about building intelligent, user-centric web
              applications. I combine modern web technologies with AI
              capabilities to create solutions that make a real difference in
              people's workflows and lives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
