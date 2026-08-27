import React from 'react';
import { Link } from 'react-router-dom';

const Agencies = () => {
  const benefits = [
    {
      icon: '🏢',
      title: 'White-label Solutions',
      description: 'Offer MarketHub services under your own brand.',
    },
    {
      icon: '📊',
      title: 'Client Management',
      description: 'Manage multiple clients with a centralized dashboard.',
    },
    {
      icon: '💰',
      title: 'Revenue Growth',
      description: 'Increase your agency revenue with premium services.',
    },
    {
      icon: '🤝',
      title: 'Partner Support',
      description: 'Dedicated support and training for your team.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Solutions for Agencies</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Scale your agency with our white-label solutions. Deliver exceptional results
            to your clients while growing your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner Today</h2>
          <p className="text-lg opacity-90 mb-6">
            Join our agency partner program and take your business to the next level.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Contact Our Partnership Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Agencies;