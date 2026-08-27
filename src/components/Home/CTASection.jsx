import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Adsy for their digital marketing needs.
            Start your journey today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              Schedule a Demo
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-75">
            🚀 No credit card required. Start growing today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;