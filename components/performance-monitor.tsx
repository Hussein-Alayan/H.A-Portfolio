"use client";

import { useEffect } from "react";

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const measurePerformance = () => {
      const metrics: Partial<PerformanceMetrics> = {};

      // Basic timing metrics
      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        metrics.domContentLoaded =
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart;
      }

      // Paint metrics
      const paintEntries = performance.getEntriesByType("paint");
      paintEntries.forEach((entry) => {
        if (entry.name === "first-paint") {
          metrics.firstPaint = entry.startTime;
        } else if (entry.name === "first-contentful-paint") {
          metrics.firstContentfulPaint = entry.startTime;
        }
      });

      // Web Vitals using PerformanceObserver
      if (typeof PerformanceObserver !== "undefined") {
        // Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.largestContentfulPaint = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        } catch (e) {
          // PerformanceObserver not supported
        }

        // Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            metrics.cumulativeLayoutShift = clsValue;
          });
          clsObserver.observe({ entryTypes: ["layout-shift"] });
        } catch (e) {
          // PerformanceObserver not supported
        }

        // First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              metrics.firstInputDelay =
                (entry as any).processingStart - entry.startTime;
            }
          });
          fidObserver.observe({ entryTypes: ["first-input"] });
        } catch (e) {
          // PerformanceObserver not supported
        }
      }

      // Monitor performance metrics (logging removed for production)
    };

    // Measure performance after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Memory usage monitoring for mobile
    const monitorMemory = () => {
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        const memoryInfo = {
          used: Math.round(memory.usedJSHeapSize / 1048576),
          total: Math.round(memory.totalJSHeapSize / 1048576),
          limit: Math.round(memory.jsHeapSizeLimit / 1048576),
        };

        // Monitor memory usage (logging removed for production)
      }
    };

    const memoryInterval = setInterval(monitorMemory, 30000); // Check every 30 seconds

    return () => {
      window.removeEventListener("load", measurePerformance);
      clearInterval(memoryInterval);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function for scroll events
  debounce: <T extends (...args: any[]) => void>(func: T, wait: number): T => {
    let timeout: NodeJS.Timeout;
    return ((...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    }) as T;
  },

  // Throttle function for scroll events
  throttle: <T extends (...args: any[]) => void>(func: T, limit: number): T => {
    let inThrottle: boolean;
    return ((...args: any[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    }) as T;
  },

  // Check if device supports hardware acceleration
  supportsHardwareAcceleration: (): boolean => {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  },

  // Estimate device performance tier
  getDevicePerformanceTier: (): "low" | "medium" | "high" => {
    const hardwareConcurrency = navigator.hardwareConcurrency || 2;
    const memory = (navigator as any).deviceMemory || 2;

    if (hardwareConcurrency <= 2 && memory <= 2) return "low";
    if (hardwareConcurrency <= 4 && memory <= 4) return "medium";
    return "high";
  },
};
