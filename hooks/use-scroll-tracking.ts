"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface ScrollTrackingData {
  scrollY: number;
  scrollProgress: number;
  activeSection: string;
  isVisible: boolean; // for floating action button
}

const SECTIONS = [
  "hero",
  "about",
  "skills",
  "education",
  "projects",
  "volunteer",
  "contact",
];

const SCROLL_VISIBILITY_THRESHOLD = 300;
const SECTION_DETECTION_OFFSET = 100;

/**
 * Consolidated scroll tracking hook to eliminate duplicate event listeners
 * Used by: navigation, scroll-color-provider, section-progress, floating-action-button
 */
export function useScrollTracking() {
  const [scrollData, setScrollData] = useState<ScrollTrackingData>({
    scrollY: 0,
    scrollProgress: 0,
    activeSection: "hero",
    isVisible: false,
  });
  
  // Cache section elements to avoid repeated DOM queries
  const sectionElementsRef = useRef<Map<string, HTMLElement>>(new Map());

  const handleScroll = useCallback(() => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate overall scroll progress (0 to 1)
    const totalScrollHeight = documentHeight - windowHeight;
    const progress = Math.min(scrollY / totalScrollHeight, 1);

    // Determine active section using cached elements
    let current = "hero";
    for (const section of SECTIONS) {
      let element = sectionElementsRef.current.get(section);
      if (!element) {
        const foundElement = document.getElementById(section);
        if (foundElement) {
          element = foundElement;
          sectionElementsRef.current.set(section, foundElement);
        }
      }
      
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= SECTION_DETECTION_OFFSET &&
          rect.bottom >= SECTION_DETECTION_OFFSET
        ) {
          current = section;
          break;
        }
      }
    }

    // Check visibility for floating action button
    const isVisible = scrollY > SCROLL_VISIBILITY_THRESHOLD;

    setScrollData({
      scrollY,
      scrollProgress: progress,
      activeSection: current,
      isVisible,
    });
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call
    handleScroll();

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  return scrollData;
}
