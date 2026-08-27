import React from 'react';
import { Link } from 'react-router-dom';

const SEO = () => {
  const services = [
    {
      icon: '🔍',
      title: 'Keyword Research',
      description: 'Find the right keywords to target for maximum visibility.',
    },
    {
      icon: '📝',
      title: 'On-Page Optimization',
      description: 'Optimize your website content for search engines.',
    },
    {
      icon: '🔗',
      title: 'Link Building',
      description: 'Build high-quality backlinks to improve domain authority.',
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Monitor rankings and traffic with detailed analytics.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">SEO Optimization & Promotion</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Rank higher on search engines and drive organic traffic with our
            comprehensive SEO strategies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our SEO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Get Found Online</h2>
          <p className="text-lg opacity-90 mb-6">
            Drive organic traffic and grow your business with our SEO services.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Improve Your Rankings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SEO;