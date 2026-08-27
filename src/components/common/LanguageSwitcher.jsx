import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { FiChevronDown } from 'react-icons/fi';

const LanguageSwitcher = () => {
  const { language, changeLanguage, languages } = useLanguage();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find(l => l.code === language);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
          isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
        }`}
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <span className={`text-sm font-medium hidden sm:inline ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {currentLanguage?.name}
        </span>
        <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`} />
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl border py-1 z-50 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors ${
                isDark
                  ? `hover:bg-gray-700 ${
                      language === lang.code ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
                    }`
                  : `hover:bg-gray-100 ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className={`ml-auto ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;