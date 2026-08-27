import React from 'react';

const Spinner = ({ size = 'md', color = 'blue', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  };

  const colorClasses = {
    blue: 'border-blue-600',
    white: 'border-white',
    gray: 'border-gray-600',
    green: 'border-green-600',
    red: 'border-red-600',
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} ${colorClasses[color]} border-t-transparent rounded-full animate-spin ${className}`}></div>
  );
};

export default Spinner;