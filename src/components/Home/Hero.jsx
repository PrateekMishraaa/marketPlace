import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              🚀 Digital Marketing Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Grow Your Business with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We help brands and agencies scale their digital presence through 
              innovative marketing strategies and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                Get Started Free
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                View Services →
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500 text-xl">✓</span> 500+ Happy Clients
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500 text-xl">✓</span> 98% Satisfaction Rate
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500 text-xl">✓</span> 24/7 Support
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Marketing Dashboard"
                className="relative rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg"
              />
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 animate-bounce-slow">
                <div className="text-2xl font-bold text-green-500">+156%</div>
                <div className="text-xs text-gray-500">Avg. Traffic Growth</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-bounce-slow-delay">
                <div className="text-2xl font-bold text-blue-500">4.9★</div>
                <div className="text-xs text-gray-500">Client Rating</div>
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