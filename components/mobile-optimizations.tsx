// Mobile-specific performance optimizations
"use client";

import { useEffect } from "react";

export function MobileOptimizations() {
  useEffect(() => {
    // Disable hover effects on touch devices
    if ("ontouchstart" in window) {
      document.body.classList.add("touch-device");
    }

    // Optimize scroll performance
    let ticking = false;
    function updateScrollPosition() {
      ticking = false;
      // Custom scroll optimization logic can go here
    }

    function requestScrollUpdate() {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    }

    // Throttle scroll events for better performance
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });

    // Improve touch performance
    let touchStartY = 0;

    function handleTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e: TouchEvent) {
      const touchCurrentY = e.touches[0].clientY;
      const touchDelta = touchCurrentY - touchStartY;

      // Allow natural scrolling but prevent bouncing on boundaries
      if (
        (touchDelta > 0 && window.pageYOffset === 0) ||
        (touchDelta < 0 &&
          window.pageYOffset >=
            document.documentElement.scrollHeight - window.innerHeight)
      ) {
        e.preventDefault();
      }
    }

    // Add touch event listeners with proper passive options
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("scroll", requestScrollUpdate);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return null; // This component doesn't render anything
}

// CSS-in-JS styles for mobile optimizations
export const mobileOptimizationStyles = `
  @media (max-width: 768px) {
    /* Reduce animations on mobile */
    .touch-device * {
      transition-duration: 0.2s !important;
      animation-duration: 0.3s !important;
    }

    /* Disable hover effects on touch devices */
    .touch-device *:hover {
      transform: none !important;
    }

    /* Optimize text rendering */
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeSpeed;
    }

    /* Improve touch targets */
    button, a, [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }

    /* Reduce motion for users who prefer it */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    /* GPU acceleration for better performance */
    .parallax-element, .animated-element {
      transform: translateZ(0);
      will-change: transform;
    }
  }

  /* Optimize for low-power devices */
  @media (prefers-reduced-motion: reduce) {
    .parallax-element {
      transform: none !important;
    }
  }
`;
