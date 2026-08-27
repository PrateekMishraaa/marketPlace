import React from 'react';
import { Link } from 'react-router-dom';

const DigitalPR = () => {
  const benefits = [
    {
      icon: '📰',
      title: 'Media Coverage',
      description: 'Get featured in top publications like Forbes, TechCrunch, and more.',
    },
    {
      icon: '✍️',
      title: 'Press Release Distribution',
      description: 'Professional press release writing and distribution to major outlets.',
    },
    {
      icon: '🤝',
      title: 'Journalist Relationships',
      description: 'Access to our network of journalists and media contacts.',
    },
    {
      icon: '📈',
      title: 'Brand Authority',
      description: 'Build credibility and authority in your industry.',
    },
  ];

  const packages = [
    {
      name: 'Basic',
      price: '$499',
      features: ['1 Press Release', '5 Media Outlets', 'SEO Optimized', 'Basic Reporting'],
    },
    {
      name: 'Professional',
      price: '$999',
      features: ['3 Press Releases', '15 Media Outlets', 'SEO Optimized', 'Detailed Analytics', 'Media Monitoring'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited Releases', '50+ Media Outlets', 'Full Campaign Management', 'Dedicated PR Manager', '24/7 Support'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Digital PR & Media Coverage</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get your brand noticed with our comprehensive digital PR services.
            Build authority, generate media coverage, and grow your brand presence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/register"
                className="block text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-xl transition-all font-semibold"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Featured?</h2>
          <p className="text-lg opacity-90 mb-6">
            Start building your brand authority with our digital PR services.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalPR;