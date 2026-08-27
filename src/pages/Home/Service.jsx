import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '📰',
      title: 'Digital PR & Media Coverage',
      description: 'Get featured in top publications like Forbes, TechCrunch, and more. Build your brand authority with expert media outreach.',
      features: [
        'Press release distribution',
        'Media pitch writing',
        'Journalist relationship management',
        'Coverage tracking & reporting',
      ],
      price: '$499/mo',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: '📧',
      title: 'Email Marketing Campaign Setup',
      description: 'Create targeted email campaigns that convert leads into customers. Automated workflows for maximum engagement.',
      features: [
        'Email template design',
        'Automation workflows',
        'A/B testing',
        'Analytics & reporting',
      ],
      price: '$299/mo',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: '🔍',
      title: 'SEO Optimization & Promotion',
      description: 'Rank higher on search engines and drive organic traffic. Data-driven SEO strategies for sustainable growth.',
      features: [
        'Keyword research',
        'On-page optimization',
        'Link building',
        'Performance tracking',
      ],
      price: '$599/mo',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      icon: '📊',
      title: 'Conversion Rate Optimization',
      description: 'Turn your website visitors into paying customers with data-driven strategies and UX improvements.',
      features: [
        'User behavior analysis',
        'A/B testing',
        'UX/UI improvements',
        'Conversion funnel optimization',
      ],
      price: '$399/mo',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital marketing solutions tailored to your business needs.
            Choose the perfect plan for your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="text-5xl mb-2">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl opacity-90 mb-6">
              We create tailored packages for your specific business needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all font-semibold"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;