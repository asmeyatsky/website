'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface UseCalendlyProps {
  url: string;
  prefill?: {
    name?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
  };
}

export const useCalendly = ({ url, prefill, utm }: UseCalendlyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeCalendly = async () => {
      // Define the widget initialization function first
      const initializeWidget = () => {
        if (containerRef.current && window.Calendly) {
          // Clear previous widget if exists
          containerRef.current.innerHTML = '';
          
          // Initialize the widget
          try {
            window.Calendly.initInlineWidget({
              url,
              parentElement: containerRef.current,
              prefill,
              utm,
            });
          } catch (error) {
            console.error('Error initializing Calendly widget:', error);
          }
        }
      };

      // Check if Calendly is already loaded
      if (window.Calendly) {
        initializeWidget();
        return;
      }

      // Wait for Calendly to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initializeWidget();
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkCalendly);
      }, 5000);
    };

    initializeCalendly();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [url, prefill, utm]);

  return { containerRef };
};