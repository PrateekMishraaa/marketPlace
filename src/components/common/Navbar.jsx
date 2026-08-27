import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import Logo from '../../assets/market.jpg';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation items with dropdowns
  const navItems = [
    {
      label: 'Solutions',
      icon: '💡',
      dropdown: [
        { label: 'For Advertisers', path: '/solutions/advertisers', icon: '📢' },
        { label: 'For Brands', path: '/solutions/brands', icon: '🏷️' },
        { label: 'For Agencies', path: '/solutions/agencies', icon: '🏢' },
      ],
    },
    {
      label: 'Services',
      icon: '⚡',
      dropdown: [
        { label: 'Digital PR & Media Coverage', path: '/services/digital-pr', icon: '📰' },
        { label: 'Email Marketing Campaign', path: '/services/email-marketing', icon: '📧' },
        { label: 'SEO Optimization & Promotion', path: '/services/seo', icon: '🔍' },
        { label: 'Conversion Rate Optimization', path: '/services/cro', icon: '📊' },
      ],
    },
    { label: 'Blog', icon: '📝', path: '/blog' },
    { label: 'FAQ', icon: '❓', path: '/faq' },
    { label: 'Podcasts', icon: '🎙️', path: '/podcasts' },
    { label: 'Contact Us', icon: '📞', path: '/contact' },
  ];

  // Dashboard links based on user role
  const getDashboardLinks = () => {
    if (!user) return [];
    
    if (user.role === 'buyer') {
      return [
        { label: 'Browse Listings', path: '/listings', icon: '🛍️' },
        { label: 'My Orders', path: '/my-orders', icon: '📦' },
      ];
    } else if (user.role === 'seller') {
      return [
        { label: 'My Listings', path: '/seller/listings', icon: '📋' },
        { label: 'Create Listing', path: '/seller/listings/new', icon: '➕' },
        { label: 'Orders Received', path: '/seller/orders', icon: '📥' },
      ];
    } else if (user.role === 'admin') {
      return [
        { label: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
        { label: 'Manage Orders', path: '/admin/orders', icon: '⚙️' },
        { label: 'Manage Users', path: '/admin/users', icon: '👥' },
      ];
    }
    return [];
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0 group"
            onClick={closeAllDropdowns}
          >
            <div className="relative">
              <img 
                src={Logo} 
                alt="MarketHub" 
                className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500 group-hover:ring-blue-600 transition-all"
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            </div>
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MarketHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition duration-200 flex items-center gap-2 rounded-lg hover:bg-blue-50 ${
                        openDropdown === item.label ? 'bg-blue-50 text-blue-600' : ''
                      }`}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                      <svg 
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                        {item.dropdown.map((subItem, idx) => (
                          <Link
                            key={idx}
                            to={subItem.path}
                            className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                            onClick={closeAllDropdowns}
                          >
                            <span className="text-xl">{subItem.icon}</span>
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition duration-200 rounded-lg hover:bg-blue-50 flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Dashboard Dropdown for Logged-in Users */}
            {user && (
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('dashboard')}
                  className={`px-4 py-2.5 text-blue-600 font-medium flex items-center gap-2 rounded-lg ${
                    openDropdown === 'dashboard' ? 'bg-blue-100' : 'bg-blue-50 hover:bg-blue-100'
                  } transition-colors`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Dashboard
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      openDropdown === 'dashboard' ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openDropdown === 'dashboard' && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                    {getDashboardLinks().map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.path}
                        className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        onClick={closeAllDropdowns}
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-700 max-w-[100px] truncate">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                    closeAllDropdowns();
                  }}
                  className="ml-2 px-3 py-1.5 text-red-600 hover:text-red-700 font-medium hover:bg-red-50 rounded-lg transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
                  onClick={closeAllDropdowns}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                  onClick={closeAllDropdowns}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-slideDown">
            <div className="space-y-2">
              {/* Nav Items */}
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(`mobile-${item.label}`)}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span>{item.icon}</span>
                          {item.label}
                        </span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === `mobile-${item.label}` ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === `mobile-${item.label}` && (
                        <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-4">
                          {item.dropdown.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.path}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={closeAllDropdowns}
                            >
                              <span>{subItem.icon}</span>
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Dashboard Links for Mobile */}
              {user && getDashboardLinks().length > 0 && (
                <div className="pt-2 border-t border-gray-200">
                  <p className="px-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Dashboard
                  </p>
                  {getDashboardLinks().map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      <span>{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Auth for Mobile */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                {user ? (
                  <div className="px-4 py-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        navigate('/');
                        closeAllDropdowns();
                      }}
                      className="w-full text-center py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2.5 text-center text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2.5 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                      onClick={closeAllDropdowns}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;