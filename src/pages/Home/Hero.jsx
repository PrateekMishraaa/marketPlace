import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <section className={`relative overflow-hidden ${
      isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    } pt-20 pb-32`}>
      {/* Background Decoration */}
      <div className={`absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full opacity-20 blur-3xl ${
        isDark ? 'bg-blue-400' : 'bg-blue-200'
      }`}></div>
      <div className={`absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full opacity-20 blur-3xl ${
        isDark ? 'bg-purple-400' : 'bg-purple-200'
      }`}></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              isDark 
                ? 'bg-blue-900/30 text-blue-400' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              🚀 Digital Marketing Solutions
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('home.hero_title')}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('home.hero_subtitle')}
              </span>
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto lg:mx-0 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('home.hero_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                {t('home.get_started')}
              </Link>
              <Link
                to="/services"
                className={`px-8 py-4 rounded-lg border-2 transition-all duration-300 font-semibold text-lg ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' 
                    : 'border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {t('home.view_services')}
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="text-green-500 text-xl">✓</span> {t('home.trust_badge_1')}
              </div>
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="text-green-500 text-xl">✓</span> {t('home.trust_badge_2')}
              </div>
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="text-green-500 text-xl">✓</span> {t('home.trust_badge_3')}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-20 ${
                isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-purple-600'
              }`}></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Marketing Dashboard"
                className="relative rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg"
              />
              {/* Floating Stats */}
              <div className={`absolute -top-6 -right-6 rounded-lg shadow-xl p-4 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="text-2xl font-bold text-green-500">+156%</div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Avg. Traffic Growth</div>
              </div>
              <div className={`absolute -bottom-6 -left-6 rounded-lg shadow-xl p-4 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="text-2xl font-bold text-blue-500">4.9★</div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-bounce-slow-delay {
          animation: bounce-slow-delay 3s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;  