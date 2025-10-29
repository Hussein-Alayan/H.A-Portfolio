"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  ColorReactiveText,
  ColorReactiveButton,
  PulsatingOrb,
} from "./color-reactive-components";
import { TypingAnimation } from "./typing-animation";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Single subtle orb */}
      <PulsatingOrb size={300} className="top-1/4 right-1/4 opacity-20" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Main typing header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
          >
            <ColorReactiveText variant="gradient">
              <TypingAnimation
                text="Full-Stack Software Engineer"
                delay={500}
                speed={15}
              />
            </ColorReactiveText>
          </motion.h1>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 1.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance cursor-default"
          >
            <ColorReactiveText variant="solid">
              Hussein Alayan
            </ColorReactiveText>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
          >
            Building intelligent web applications with{" "}
            <ColorReactiveText variant="solid">
              AI-powered solutions
            </ColorReactiveText>{" "}
            and modern automation
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <ColorReactiveButton href="#contact" variant="primary">
              Get in touch
            </ColorReactiveButton>
            <ColorReactiveButton href="#projects" variant="secondary">
              View work
            </ColorReactiveButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.7,
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              repeatType: "reverse",
            }}
            className="pt-12"
          >
            <ColorReactiveText variant="accent">
              <ArrowDown className="mx-auto" size={24} />
            </ColorReactiveText>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
