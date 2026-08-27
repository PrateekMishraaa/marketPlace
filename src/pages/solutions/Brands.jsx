import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  const services = [
    {
      icon: '🏷️',
      title: 'Brand Identity Development',
      description: 'Create a unique brand identity that resonates with your audience.',
    },
    {
      icon: '📣',
      title: 'Brand Awareness Campaigns',
      description: 'Build brand recognition with strategic marketing campaigns.',
    },
    {
      icon: '💬',
      title: 'Social Media Management',
      description: 'Engage your audience with compelling social media content.',
    },
    {
      icon: '📰',
      title: 'PR & Media Relations',
      description: 'Get featured in top publications and build brand authority.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Solutions for Brands</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Build a powerful brand that stands out in the market. Our comprehensive solutions
            help you create, manage, and grow your brand presence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Brand Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Brand?</h2>
          <p className="text-lg opacity-90 mb-6">
            Join leading brands that trust MarketHub for their brand growth.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Start Building Your Brand
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;