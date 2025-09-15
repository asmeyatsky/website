'use client';

import React, { useState, useEffect } from 'react';
import { useCalendly } from '@/hooks/useCalendly';

interface CalendlyWidgetProps {
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
  className?: string;
  height?: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url,
  prefill,
  utm,
  className = '',
  height = '700px',
}) => {
  const { containerRef } = useCalendly({ url, prefill, utm });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // If widget hasn't loaded after 5 seconds, show error
      if (containerRef.current && containerRef.current.children.length === 0) {
        setHasError(true);
      }
    }, 5000);

    // Check if widget loaded successfully
    const checkLoad = setInterval(() => {
      if (containerRef.current && containerRef.current.children.length > 0) {
        setIsLoading(false);
        clearInterval(checkLoad);
        clearTimeout(timer);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(checkLoad);
    };
  }, [containerRef]);

  // Handle manual reload
  const handleReload = () => {
    setHasError(false);
    setIsLoading(true);
    
    // Clear container
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }
    
    // Reinitialize after a short delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  if (hasError) {
    return (
      <div className="w-full">
        <div className="flex flex-col items-center justify-center py-12 bg-red-500/10 border border-red-500/30 rounded-xl p-8">
          <div className="text-red-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-primary-text mb-2">Unable to Load Scheduling Widget</h3>
          <p className="text-primary-text/80 mb-6 text-center">
            We're having trouble loading the scheduling widget. You can still book your consultation directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="professional-button px-6 py-3"
            >
              Book on Calendly
            </a>
            <button
              onClick={handleReload}
              className="glass-effect px-6 py-3 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin w-12 h-12 border-4 border-primary-accent/30 border-t-primary-accent rounded-full mb-4"></div>
          <p className="text-primary-text/80">Loading scheduling widget...</p>
          <p className="text-primary-text/60 text-sm mt-2">This may take a few moments</p>
        </div>
      )}
      <div
        ref={containerRef}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        style={{ 
          minHeight: '320px', 
          height: height,
          width: '100%'
        }}
      />
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 p-4 bg-primary-secondary/20 rounded-lg">
        <p className="text-primary-text/60 text-sm mb-2 sm:mb-0">
          Having trouble loading the scheduler?
        </p>
        <div className="flex gap-2">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-accent hover:text-primary-accent/80 transition-colors duration-200 underline text-sm"
          >
            Book directly on Calendly
          </a>
          <button
            onClick={handleReload}
            className="text-primary-accent hover:text-primary-accent/80 transition-colors duration-200 underline text-sm"
          >
            Reload widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendlyWidget;