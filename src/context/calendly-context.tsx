'use client';

import React, { createContext, useContext, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the popup to avoid SSR issues
const CalendlyPopup = dynamic(() => import('../components/CalendlyPopup'), { ssr: false });

interface CalendlyContextType {
  openPopupWidget: (url: string, prefill?: any, utm?: any) => void;
  closePopupWidget: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const useCalendlyPopup = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendlyPopup must be used within a CalendlyProvider');
  }
  return context;
};

interface CalendlyProviderProps {
  children: React.ReactNode;
}

export const CalendlyProvider: React.FC<CalendlyProviderProps> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupConfig, setPopupConfig] = useState<{
    url: string;
    prefill?: any;
    utm?: any;
  } | null>(null);

  const openPopupWidget = (url: string, prefill?: any, utm?: any) => {
    setPopupConfig({ url, prefill, utm });
    setIsPopupOpen(true);
  };

  const closePopupWidget = () => {
    setIsPopupOpen(false);
    setPopupConfig(null);
  };

  return (
    <CalendlyContext.Provider value={{ openPopupWidget, closePopupWidget }}>
      {children}
      {isPopupOpen && popupConfig && (
        <CalendlyPopup
          url={popupConfig.url}
          prefill={popupConfig.prefill}
          utm={popupConfig.utm}
          onClose={closePopupWidget}
        />
      )}
    </CalendlyContext.Provider>
  );
};