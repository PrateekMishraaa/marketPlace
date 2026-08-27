import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none flex items-center ${
        isDark ? 'bg-gray-700' : 'bg-gray-300'
      }`}
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center text-xs ${
          isDark ? 'translate-x-7 bg-gray-800' : 'translate-x-1 bg-white'
        }`}
      >
        {isDark ? (
          <FaMoon className="w-3 h-3 text-yellow-400" />
        ) : (
          <FaSun className="w-3 h-3 text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;