import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Pulse ring */}
        <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 rounded-full animate-pulse"></div>
      </div>
      
      {/* Loading text */}
      <p className="mt-4 text-sm text-gray-500 font-medium">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;