"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  ColorReactiveText,
  ColorReactiveButton,
} from "./color-reactive-components";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full"
    >
      {/* Decorative orbs removed for performance & cleaner look */}

      <div className="container mx-auto max-w-4xl relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance cursor-default leading-[1.08]"
          >
            <ColorReactiveText variant="solid">
              Hussein Alayan
            </ColorReactiveText>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-balance leading-[1.15]"
          >
            <ColorReactiveText variant="gradient">
              Full-Stack Software Engineer
            </ColorReactiveText>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-4 leading-[1.3]"
          >
            Building smart, AI-powered web apps
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4"
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
              delay: 2.0,
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
