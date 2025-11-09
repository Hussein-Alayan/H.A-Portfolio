"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, User, FileText, Home } from "lucide-react";

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const actions = [
    { id: "top", icon: ArrowUp, label: "Back to top", href: "#hero" },
    { id: "contact", icon: Mail, label: "Contact", href: "#contact" },
    { id: "about", icon: User, label: "About", href: "#about" },
    { id: "projects", icon: FileText, label: "Projects", href: "#projects" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleActionClick = (action: any) => {
    if (action.id === "top") {
      scrollToTop();
    } else {
      document.getElementById(action.id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveAction(null);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {activeAction && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2"
          >
            {actions.map((action) => (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: actions.indexOf(action) * 0.1 }}
                onClick={() => handleActionClick(action)}
                className="flex items-center gap-3 px-4 py-3 bg-card/90 backdrop-blur-sm border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
              >
                <action.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setActiveAction(activeAction ? null : "menu")}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
      >
        <motion.div
          animate={{ rotate: activeAction ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Home className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}