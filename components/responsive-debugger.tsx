"use client";

import { useEffect } from "react";

export function ResponsiveDebugger() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    function checkForOverflow() {
      const elements = document.querySelectorAll('*');
      const overflowElements: Element[] = [];

      elements.forEach((element) => {
        if (element.scrollWidth > element.clientWidth) {
          overflowElements.push(element);
        }
      });

      if (overflowElements.length > 0 && window.innerWidth < 768) {
        console.group('🚨 Elements causing horizontal overflow on mobile:');
        overflowElements.forEach((element, index) => {
          console.log(`${index + 1}.`, element);
          console.log('   ScrollWidth:', element.scrollWidth, 'ClientWidth:', element.clientWidth);
          console.log('   Classes:', element.className);
          console.log('   Computed styles:', {
            width: window.getComputedStyle(element).width,
            maxWidth: window.getComputedStyle(element).maxWidth,
            minWidth: window.getComputedStyle(element).minWidth,
            overflow: window.getComputedStyle(element).overflow,
            overflowX: window.getComputedStyle(element).overflowX,
          });
        });
        console.groupEnd();
      }
    }

    // Check on load and resize
    checkForOverflow();
    window.addEventListener('resize', checkForOverflow);
    
    // Also check after DOM changes
    const observer = new MutationObserver(() => {
      setTimeout(checkForOverflow, 100);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    return () => {
      window.removeEventListener('resize', checkForOverflow);
      observer.disconnect();
    };
  }, []);

  return null;
}

// Utility function to add visual overflow indicators (only in development)
export function addOverflowIndicators() {
  if (process.env.NODE_ENV !== 'development') return;

  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      * {
        outline: 1px solid rgba(255, 0, 0, 0.1) !important;
      }
      
      *:has(> *) {
        outline-color: rgba(0, 255, 0, 0.1) !important;
      }
      
      *[style*="width"] {
        outline-color: rgba(255, 255, 0, 0.3) !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Remove after 5 seconds
  setTimeout(() => {
    document.head.removeChild(style);
  }, 5000);
}