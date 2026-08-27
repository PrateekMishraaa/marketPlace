// import React, { createContext, useState, useContext, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     // Check system preference if no saved theme
//     if (!savedTheme) {
//       return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     }
//     return savedTheme;
//   });

//   useEffect(() => {
//     // Apply theme to document root
//     const root = document.documentElement;
    
//     // Remove previous theme class
//     root.classList.remove('light', 'dark');
    
//     // Add current theme class
//     root.classList.add(theme);
    
//     // Set data-theme attribute for CSS variables
//     root.setAttribute('data-theme', theme);
    
//     // Save to localStorage
//     localStorage.setItem('theme', theme);
    
//     // Update meta theme-color for mobile browsers
//     const metaThemeColor = document.querySelector('meta[name="theme-color"]');
//     if (metaThemeColor) {
//       metaThemeColor.content = theme === 'dark' ? '#0f172a' : '#ffffff';
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   const value = {
//     theme,
//     toggleTheme,
//     isDark: theme === 'dark',
//     isLight: theme === 'light',
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };