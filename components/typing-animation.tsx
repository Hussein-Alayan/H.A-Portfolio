"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  children?: (displayText: string, isComplete: boolean) => React.ReactNode;
}

export function TypingAnimation({
  text,
  delay = 0,
  speed = 100,
  className = "",
  children,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      // Apply initial delay only once
      const initialTimeout = setTimeout(() => {
        setDisplayText(text[0]);
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(initialTimeout);
    }

    if (currentIndex > 0 && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length && currentIndex > 0) {
      setIsComplete(true);
    }
  }, [currentIndex, text, delay, speed]);

  if (children) {
    return <>{children(displayText, isComplete)}</>;
  }

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block w-0.5 h-6 bg-current ml-1"
        />
      )}
    </span>
  );
}
