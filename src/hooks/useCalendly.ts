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

      // Create script element if not already present
      const scriptId = 'calendly-widget-script';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }

      // Wait for Calendly to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initializeWidget();
        }
      }, 100);

      // Timeout after 10 seconds
      const timeout = setTimeout(() => {
        clearInterval(checkCalendly);
        console.warn('Calendly widget failed to load within 10 seconds');
      }, 10000);

      return () => {
        clearInterval(checkCalendly);
        clearTimeout(timeout);
      };
    };

    initializeCalendly();

    const currentContainer = containerRef.current;

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [url, prefill, utm]);

  return { containerRef };
};