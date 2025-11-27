"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";

interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  gradient: string;
}

interface ScrollColorContextType {
  currentTheme: ColorTheme;
  scrollProgress: number;
  activeSection: string;
}

const colorThemes: Record<string, ColorTheme> = {
  hero: {
    primary: "rgb(59, 130, 246)", // Blue
    secondary: "rgb(99, 102, 241)", // Indigo
    accent: "rgb(147, 197, 253)", // Light Blue
    background: "from-blue-950/30 via-indigo-950/20 to-blue-900/10",
    gradient: "linear-gradient(135deg, rgb(59, 130, 246), rgb(99, 102, 241))",
  },
  about: {
    primary: "rgb(99, 102, 241)", // Indigo
    secondary: "rgb(139, 92, 246)", // Purple
    accent: "rgb(168, 85, 247)", // Violet
    background: "from-indigo-950/30 via-purple-950/20 to-violet-900/10",
    gradient: "linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246))",
  },
  skills: {
    primary: "rgb(139, 92, 246)", // Purple
    secondary: "rgb(168, 85, 247)", // Violet
    accent: "rgb(196, 181, 253)", // Light Purple
    background: "from-purple-950/30 via-violet-950/20 to-purple-900/10",
    gradient: "linear-gradient(135deg, rgb(139, 92, 246), rgb(168, 85, 247))",
  },
  projects: {
    primary: "rgb(168, 85, 247)", // Violet
    secondary: "rgb(147, 51, 234)", // Purple
    accent: "rgb(196, 181, 253)", // Light Purple
    background: "from-violet-950/30 via-purple-950/20 to-violet-900/10",
    gradient: "linear-gradient(135deg, rgb(168, 85, 247), rgb(147, 51, 234))",
  },
  volunteer: {
    primary: "rgb(147, 51, 234)", // Purple
    secondary: "rgb(126, 34, 206)", // Dark Purple
    accent: "rgb(168, 85, 247)", // Violet
    background: "from-purple-950/30 via-purple-900/20 to-indigo-900/10",
    gradient: "linear-gradient(135deg, rgb(147, 51, 234), rgb(126, 34, 206))",
  },
  contact: {
    primary: "rgb(126, 34, 206)", // Dark Purple
    secondary: "rgb(99, 102, 241)", // Indigo
    accent: "rgb(139, 92, 246)", // Purple
    background: "from-purple-950/30 via-indigo-950/20 to-blue-900/10",
    gradient: "linear-gradient(135deg, rgb(126, 34, 206), rgb(99, 102, 241))",
  },
};

const ScrollColorContext = createContext<ScrollColorContextType | undefined>(
  undefined
);

export function ScrollColorProvider({ children }: { children: ReactNode }) {
  const { activeSection, scrollProgress } = useScrollTracking();
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(
    colorThemes.hero
  );

  useEffect(() => {
    // Update theme when active section changes
    if (colorThemes[activeSection]) {
      setCurrentTheme(colorThemes[activeSection]);
    }
  }, [activeSection]);

  return (
    <ScrollColorContext.Provider
      value={{ currentTheme, scrollProgress, activeSection }}
    >
      {children}
    </ScrollColorContext.Provider>
  );
}

export function useScrollColor() {
  const context = useContext(ScrollColorContext);
  if (context === undefined) {
    throw new Error("useScrollColor must be used within a ScrollColorProvider");
  }
  return context;
}
