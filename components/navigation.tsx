"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollColor } from "./scroll-color-provider";
import { ColorReactiveText } from "./color-reactive-components";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const { currentTheme } = useScrollColor();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "volunteer",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "volunteer", label: "Volunteer" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.background})`,
        borderColor: `${currentTheme.primary}30`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold"
          >
            <ColorReactiveText variant="gradient">HA</ColorReactiveText>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`text-sm transition-all duration-300 hover:scale-110 relative ${
                  activeSection === item.id
                    ? ""
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{
                  color:
                    activeSection === item.id
                      ? currentTheme.primary
                      : undefined,
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: currentTheme.gradient }}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
