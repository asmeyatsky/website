'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface CalendlyPopupProps {
  url: string;
  prefill?: any;
  utm?: any;
  onClose: () => void;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ 
  url, 
  prefill, 
  utm,
  onClose 
}) => {
  useEffect(() => {
    // Function to initialize and show the popup
    const showPopup = () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        try {
          // Show the popup widget
          window.Calendly.showPopupWidget(url, {}, {
            prefill,
            utm,
          });
        } catch (error) {
          console.error('Error showing Calendly popup:', error);
          // Fallback to opening in new tab
          window.open(url, '_blank');
          onClose();
        }
      } else {
        console.warn('Calendly not loaded, opening in new tab');
        window.open(url, '_blank');
        onClose();
      }
    };

    // Handle ESC key press
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener for ESC key
    document.addEventListener('keydown', handleEscKey);

    // Show the popup
    showPopup();

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      
      // Close the popup if it's open
      if (typeof window !== 'undefined' && window.Calendly?.closePopupWidget) {
        try {
          window.Calendly.closePopupWidget();
        } catch (error) {
          console.error('Error closing Calendly popup:', error);
        }
      }
    };
  }, [url, prefill, utm, onClose]);

  return null;
};

export default CalendlyPopup;