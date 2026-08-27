import React from 'react';
import { Link } from 'react-router-dom';

const Advertisers = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'Reach your ideal audience with advanced targeting capabilities.',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track campaign performance with detailed analytics and insights.',
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Maximize ROI with AI-powered budget optimization.',
    },
    {
      icon: '📈',
      title: 'Scalable Campaigns',
      description: 'Scale your campaigns from local to global with ease.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Solutions for Advertisers</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Maximize your advertising ROI with our comprehensive suite of tools and strategies.
            Reach your target audience effectively and efficiently.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        {/* Benefits */}
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MarketHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Advanced Targeting</h4>
                <p className="text-sm text-gray-600">Demographic, geographic, and behavioral targeting</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Budget Optimization</h4>
                <p className="text-sm text-gray-600">Automated budget allocation for maximum ROI</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Multi-channel Campaigns</h4>
                <p className="text-sm text-gray-600">Run campaigns across multiple platforms</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Performance Dashboard</h4>
                <p className="text-sm text-gray-600">Real-time performance tracking and reporting</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advertisers;