'use client';

import React from 'react';
import BookCallButton from '@/components/BookCallButton';
import CalendlyWidget from '@/components/CalendlyWidget';

interface CalendlySectionProps {
  title?: string;
  description?: string;
  showWidget?: boolean;
  widgetUrl?: string;
  widgetHeight?: string;
  showButton?: boolean;
  buttonUrl?: string;
  buttonText?: string;
  buttonClass?: string;
  showAlternativeLink?: boolean;
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

const CalendlySection: React.FC<CalendlySectionProps> = ({
  title = "Book a Consultation",
  description = "Ready to transform your business with intelligent AI solutions? Schedule a free 30-minute consultation to discuss your challenges and explore how we can achieve your goals together.",
  showWidget = true,
  widgetUrl = "https://calendly.com/allan-smeyatsky/30min?hide_event_type_details=1&hide_gdpr_banner=1",
  widgetHeight = "700px",
  showButton = true,
  buttonUrl = "https://calendly.com/allan-smeyatsky/30min",
  buttonText = "Schedule Your Free Consultation",
  buttonClass = "ai-button px-8 py-4",
  showAlternativeLink = true,
  prefill,
  utm
}) => {
  return (
    <section className="content-container section-padding">
      <div className="glass-effect p-8 md:p-12 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            {title}
          </h2>
          <p className="text-primary-text/80 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          {showButton && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <BookCallButton 
                url={buttonUrl}
                className={buttonClass}
                prefill={prefill}
                utm={utm}
              >
                {buttonText}
              </BookCallButton>
              
              {showAlternativeLink && (
                <a
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect px-8 py-4 text-lg font-semibold text-accent-blue border border-accent-blue/30 hover:border-accent-blue transition-all duration-200 rounded-xl inline-flex items-center justify-center"
                >
                  Book on Calendly
                </a>
              )}
            </div>
          )}
        </div>
        
        {showWidget && (
          <div className="mb-8">
            <CalendlyWidget 
              url={widgetUrl}
              height={widgetHeight}
              prefill={prefill}
              utm={utm}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendlySection;