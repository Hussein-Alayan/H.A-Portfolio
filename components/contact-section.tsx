"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Heart,
  Code,
  Coffee,
} from "lucide-react";
import {
  ColorReactiveText,
  ColorReactiveCard,
} from "./color-reactive-components";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alayen.hussein@gmail.com",
    href: "mailto:alayen.hussein@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lebanon",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hussein-alayan",
    href: "https://linkedin.com/in/hussein-alayan-613072258",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "hussein-alayan",
    href: "https://github.com/hussein-alayan",
  },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Volunteer", href: "#volunteer" },
];

const techStack = ["Next.js", "React", "TypeScript", "Python", "AI/ML"];

import { SectionHeader } from "./section-progress";
import { VisualBreak, ContentBlock } from "./typography-system";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-32"
        >
          {/* Contact Header */}
          <SectionHeader
            number="07"
            title={
              <ColorReactiveText variant="gradient">
                Let's Connect
              </ColorReactiveText>
            }
            subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
          />

          <VisualBreak type="wave" />

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto overflow-hidden">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <ColorReactiveCard
                  className={`p-6 sm:p-8 h-full ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex flex-col items-center text-center gap-4 sm:gap-6 h-full group"
                    >
                      <motion.div
                        className="p-3 sm:p-4 rounded-xl bg-primary/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon
                          size={28}
                          className="text-primary sm:w-8 sm:h-8"
                        />
                      </motion.div>
                      <div className="space-y-1 sm:space-y-2 min-w-0 w-full">
                        <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="font-semibold text-base sm:text-lg group-hover:scale-105 transition-transform break-all">
                          <ColorReactiveText variant="solid">
                            {item.value}
                          </ColorReactiveText>
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center text-center gap-4 sm:gap-6 h-full">
                      <motion.div className="p-3 sm:p-4 rounded-xl bg-primary/20">
                        <item.icon
                          size={28}
                          className="text-primary sm:w-8 sm:h-8"
                        />
                      </motion.div>
                      <div className="space-y-1 sm:space-y-2 min-w-0 w-full">
                        <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="font-semibold text-base sm:text-lg break-all">
                          <ColorReactiveText variant="solid">
                            {item.value}
                          </ColorReactiveText>
                        </p>
                      </div>
                    </div>
                  )}
                </ColorReactiveCard>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 sm:mt-24 lg:mt-32"
          >
            <ColorReactiveCard className="p-6 sm:p-10 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 text-center md:text-left">
                {/* Brand Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="space-y-8"
                >
                  <ContentBlock>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                      <ColorReactiveText variant="gradient">
                        Hussein Alayan
                      </ColorReactiveText>
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:max-w-none md:mx-0">
                      Full-Stack Developer passionate about creating intelligent
                      solutions with modern web technologies and AI.
                    </p>
                  </ContentBlock>
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3 text-base sm:text-lg text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>Made with</span>
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                      <span>and</span>
                      <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                    </div>
                    <span className="hidden sm:inline">in Lebanon</span>
                    <span className="sm:hidden">in Lebanon</span>
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="space-y-8"
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
                    <ColorReactiveText variant="solid">
                      Quick Links
                    </ColorReactiveText>
                  </h4>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xs mx-auto md:max-w-none md:mx-0">
                    {quickLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors p-2 sm:p-3 rounded-lg hover:bg-background/50 text-center md:text-left"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="space-y-8"
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
                    <ColorReactiveText variant="solid">
                      Built With
                    </ColorReactiveText>
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start max-w-sm mx-auto md:max-w-none md:mx-0">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm rounded-full border border-border bg-background/50 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground mt-6 sm:mt-8">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-center md:text-left">
                      Open Source • Always Learning
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border/50 text-center"
              >
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4 leading-relaxed">
                  © {new Date().getFullYear()} Hussein Alayan.
                  <span className="block sm:inline sm:ml-1">
                    Crafted with Next.js, Framer Motion & Tailwind CSS.
                  </span>
                </p>
              </motion.div>
            </ColorReactiveCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
