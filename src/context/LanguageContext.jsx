import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    // Change i18n language
    i18n.changeLanguage(language);
    
    // Save to localStorage
    localStorage.setItem('language', language);
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Update direction for RTL languages (if needed)
    const isRTL = ['ar', 'he', 'fa'].includes(language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, i18n]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const value = {
    language,
    changeLanguage,
    languages,
    t: i18n.t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};