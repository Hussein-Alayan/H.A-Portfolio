"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ProjectSection } from "@/components/project-section";
import { VolunteerSection } from "@/components/volunteer-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { DynamicBackground } from "@/components/dynamic-background";
import { CustomCursor } from "@/components/custom-cursor";
import { ParallaxBackground } from "@/components/parallax-background";
import { FloatingActionButton } from "@/components/floating-action-button";
import { AchievementsSection } from "@/components/achievements-section";
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section";
import { SectionProgressIndicator } from "@/components/section-progress";
import { MobileOptimizations } from "@/components/mobile-optimizations";
import { PerformanceMonitor, performanceUtils } from "@/components/performance-monitor";
import { ResponsiveDebugger } from "@/components/responsive-debugger";
import { useIsMobile } from "@/hooks/use-mobile";
import { Suspense, lazy, useEffect, useState } from "react";

// Lazy load heavy components for mobile performance
const LazyParallaxBackground = lazy(() => import("@/components/parallax-background").then(mod => ({ default: mod.ParallaxBackground })));
const LazyDynamicBackground = lazy(() => import("@/components/dynamic-background").then(mod => ({ default: mod.DynamicBackground })));
const LazyCustomCursor = lazy(() => import("@/components/custom-cursor").then(mod => ({ default: mod.CustomCursor })));

export default function Home() {
  const isMobile = useIsMobile();
  const [deviceTier, setDeviceTier] = useState<'low' | 'medium' | 'high'>('medium');

  useEffect(() => {
    setDeviceTier(performanceUtils.getDevicePerformanceTier());
  }, []);

  // Further reduce features for low-end devices
  const shouldUseMinimalMode = isMobile && deviceTier === 'low';

  return (
    <main className={`min-h-screen relative mobile-safe overflow-x-hidden w-full ${isMobile ? 'mobile-reduce-motion' : ''}`}>
      <MobileOptimizations />
      <PerformanceMonitor />
      <ResponsiveDebugger />
      
      {/* Conditional rendering for performance-heavy components */}
      <Suspense fallback={null}>
        {!shouldUseMinimalMode && !isMobile && <LazyParallaxBackground />}
        {!shouldUseMinimalMode && !isMobile && <LazyDynamicBackground />}
        {!isMobile && <LazyCustomCursor />}
      </Suspense>
      
      {/* Lightweight mobile background */}
      {isMobile && (
        <div className="fixed inset-0 -z-10 bg-linear-to-br from-background via-background/95 to-secondary/20" />
      )}
      
      <Navigation />
      {!shouldUseMinimalMode && <SectionProgressIndicator />}
      <HeroSection />
      <AboutSection />
      {!shouldUseMinimalMode && <AchievementsSection />}
      {shouldUseMinimalMode ? <SkillsSection /> : <EnhancedSkillsSection />}
      <EducationSection />
      <ProjectSection />
      <VolunteerSection />
      <ContactSection />
      <FloatingActionButton />
    </main>
  );
}
