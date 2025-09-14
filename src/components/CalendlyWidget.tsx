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

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin w-12 h-12 border-4 border-primary-accent/30 border-t-primary-accent rounded-full mb-4"></div>
          <p className="text-primary-text/80">Loading scheduling widget...</p>
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
      <p className="text-primary-text/60 text-sm mt-4 text-center">
        Having trouble loading the scheduler?{' '}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-accent hover:text-primary-accent/80 transition-colors duration-200 underline"
        >
          Click here to book directly
        </a>
      </p>
    </div>
  );
};

export default CalendlyWidget;