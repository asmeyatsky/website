/**
 * Calendly Utility Functions
 * 
 * This module provides helper functions for working with Calendly widgets
 * and ensuring proper initialization and cleanup.
 */

declare global {
  interface Window {
    Calendly?: any;
  }
}

/**
 * Initializes a Calendly inline widget
 * @param containerId - The ID of the container element
 * @param url - The Calendly event URL
 * @param prefill - Optional prefill data
 * @param utm - Optional UTM parameters
 */
export const initCalendlyWidget = (
  containerId: string,
  url: string,
  prefill?: Record<string, string>,
  utm?: Record<string, string>
): void => {
  if (typeof window !== 'undefined' && window.Calendly) {
    const container = document.getElementById(containerId);
    if (container) {
      window.Calendly.initInlineWidget({
        url,
        parentElement: container,
        prefill,
        utm,
      });
    }
  }
};

/**
 * Shows a Calendly popup widget
 * @param url - The Calendly event URL
 * @param prefill - Optional prefill data
 * @param utm - Optional UTM parameters
 */
export const showCalendlyPopup = (
  url: string,
  prefill?: Record<string, string>,
  utm?: Record<string, string>
): void => {
  if (typeof window !== 'undefined' && window.Calendly) {
    try {
      window.Calendly.showPopupWidget(url, {}, {
        prefill,
        utm,
      });
    } catch (error) {
      console.error('Error showing Calendly popup:', error);
      // Fallback to opening in new tab
      window.open(url, '_blank');
    }
  } else {
    // Fallback to opening in new tab
    window.open(url, '_blank');
  }
};

/**
 * Closes any open Calendly popup
 */
export const closeCalendlyPopup = (): void => {
  if (typeof window !== 'undefined' && window.Calendly?.closePopupWidget) {
    try {
      window.Calendly.closePopupWidget();
    } catch (error) {
      console.error('Error closing Calendly popup:', error);
    }
  }
};

/**
 * Checks if Calendly is loaded and ready
 * @returns boolean indicating if Calendly is available
 */
export const isCalendlyLoaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.Calendly;
};

/**
 * Waits for Calendly to load with a timeout
 * @param timeoutMs - Maximum time to wait in milliseconds
 * @returns Promise that resolves when Calendly is loaded or times out
 */
export const waitForCalendly = (timeoutMs: number = 5000): Promise<boolean> => {
  return new Promise((resolve) => {
    if (isCalendlyLoaded()) {
      resolve(true);
      return;
    }

    let attempts = 0;
    const maxAttempts = timeoutMs / 100;
    const interval = setInterval(() => {
      attempts++;
      if (isCalendlyLoaded()) {
        clearInterval(interval);
        resolve(true);
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
        resolve(false);
      }
    }, 100);
  });
};