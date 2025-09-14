'use client';

import React from 'react';
import { useCalendlyPopup } from '@/context/calendly-context';

interface BookCallButtonProps {
  url?: string;
  className?: string;
  children?: React.ReactNode;
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

const BookCallButton: React.FC<BookCallButtonProps> = ({
  url = 'https://calendly.com/allan-smeyatsky/30min',
  className = 'ai-button px-8 py-4',
  children = 'Book a Call',
  prefill,
  utm
}) => {
  const { openPopupWidget } = useCalendlyPopup();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openPopupWidget(url, prefill, utm);
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default BookCallButton;