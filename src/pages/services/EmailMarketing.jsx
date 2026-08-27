import React from 'react';
import { Link } from 'react-router-dom';

const EmailMarketing = () => {
  const features = [
    {
      icon: '📧',
      title: 'Email Template Design',
      description: 'Professional, responsive email templates that convert.',
    },
    {
      icon: '⚡',
      title: 'Automation Workflows',
      description: 'Automated email sequences for lead nurturing and engagement.',
    },
    {
      icon: '📊',
      title: 'A/B Testing',
      description: 'Test different variants to optimize your campaign performance.',
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Track open rates, click-through rates, and conversions.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Email Marketing Campaign Setup</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Create targeted email campaigns that engage your audience and drive conversions.
            From setup to optimization, we handle it all.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Email Marketing Campaign</h2>
          <p className="text-lg opacity-90 mb-6">
            Reach your customers directly with targeted email campaigns.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Start Your Campaign
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;