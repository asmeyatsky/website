'use client';

import React, { useEffect, useState } from 'react';

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
  const [hasError, setHasError] = useState(false);

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
          setHasError(true);
          // Fallback to opening in new tab
          window.open(url, '_blank');
          onClose();
        }
      } else {
        console.warn('Calendly not loaded, opening in new tab');
        setHasError(true);
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

  // Show error message if popup failed to load
  if (hasError) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
        <div className="bg-primary-dark border border-primary-secondary rounded-xl max-w-md w-full p-6">
          <div className="text-red-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-primary-text text-center mb-2">Popup Failed to Load</h3>
          <p className="text-primary-text/80 text-center mb-6">
            We're having trouble loading the scheduling popup. You've been redirected to book directly on Calendly.
          </p>
          <button
            onClick={onClose}
            className="professional-button w-full py-3"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default CalendlyPopup;