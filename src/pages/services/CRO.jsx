import React from 'react';
import { Link } from 'react-router-dom';

const CRO = () => {
  const features = [
    {
      icon: '👤',
      title: 'User Behavior Analysis',
      description: 'Understand how users interact with your website.',
    },
    {
      icon: '🧪',
      title: 'A/B Testing',
      description: 'Test different versions to find what converts best.',
    },
    {
      icon: '🎨',
      title: 'UX/UI Improvements',
      description: 'Enhance user experience and interface design.',
    },
    {
      icon: '📊',
      title: 'Conversion Funnel Optimization',
      description: 'Optimize each step of your conversion funnel.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Conversion Rate Optimization</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Turn your website visitors into paying customers with data-driven
            conversion strategies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How We Optimize</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Boost Your Conversions</h2>
          <p className="text-lg opacity-90 mb-6">
            Increase your revenue with data-driven optimization strategies.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-orange-600 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Start Optimizing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CRO;